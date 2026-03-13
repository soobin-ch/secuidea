'use client';

import { useState, useEffect } from 'react';

interface PageData {
    id: string;
    name: string;
    path: string;
    lastMod: string;
    status: string;
    content: any;
}

export default function ContentManagementPage() {
    const [pages, setPages] = useState<PageData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewingPageId, setViewingPageId] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editContent, setEditContent] = useState<any>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        fetchPages();
    }, []);

    const fetchPages = async () => {
        const res = await fetch('/api/admin/pages');
        const data = await res.json();
        setPages(data);
        setIsLoading(false);
    };

    const handlePageClick = (page: PageData) => {
        setViewingPageId(page.id);
        setEditContent(JSON.parse(JSON.stringify(page.content || {})));
        setIsEditMode(false);
    };

    const handleSave = async () => {
        if (!viewingPageId) return;
        setIsSaving(true);
        try {
            await fetch(`/api/admin/pages/${viewingPageId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: editContent }),
            });
            await fetchPages();
            setIsEditMode(false);
            alert('콘텐츠가 성공적으로 저장되었습니다.');
        } catch (error) {
            alert('저장 중 오류가 발생했습니다.');
        } finally {
            setIsSaving(false);
        }
    };

    const updateNestedField = (path: string, value: any) => {
        const newContent = { ...editContent };
        const keys = path.split('.');
        let current = newContent;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setEditContent(newContent);
    };

    if (isLoading) return <div className="p-10 text-center">로딩 중...</div>;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">콘텐츠 관리</h1>
                    <p className="text-muted text-lg">웹사이트의 각 페이지 콘텐츠를 관리하고 업데이트하세요.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Page List */}
                <div className="lg:col-span-1 space-y-4">
                    <h2 className="text-xs font-black uppercase tracking-widest text-muted/60 mb-4 ml-1">페이지 목록</h2>
                    {pages.map((page) => (
                        <div
                            key={page.id}
                            onClick={() => handlePageClick(page)}
                            className={`p-6 rounded-[2rem] border transition-all cursor-pointer group ${viewingPageId === page.id ? 'bg-primary/5 border-primary shadow-xl shadow-primary/5' : 'bg-card border-border hover:border-primary/50'}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold">{page.name}</h3>
                                <div className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-muted uppercase tracking-tighter">
                                    {page.status}
                                </div>
                            </div>
                            <p className="text-sm text-muted mb-6">{page.path}</p>
                            <div className="flex items-center justify-between text-[11px] font-medium text-muted/60">
                                <span>최근 수정: {page.lastMod}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold">자세히 보기 →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Editor Area */}
                <div className="lg:col-span-2">
                    {!viewingPageId ? (
                        <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-border rounded-[3rem] text-muted space-y-4">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl">📄</div>
                            <p className="font-medium text-lg">관리할 페이지를 선택하세요</p>
                        </div>
                    ) : (
                        <div className="bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10">
                            <div className="p-8 border-b border-border bg-card/50 backdrop-blur flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">{pages.find(p => p.id === viewingPageId)?.name}</h2>
                                    <p className="text-sm text-muted">콘텐츠 데이터 편집</p>
                                </div>
                                <div className="flex gap-4">
                                    {!isEditMode ? (
                                        <button onClick={() => setIsEditMode(true)} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                            수정 시작
                                        </button>
                                    ) : (
                                        <>
                                            <button onClick={() => setIsEditMode(false)} className="px-6 py-2.5 bg-white/5 border border-white/10 font-bold rounded-xl text-sm hover:bg-white/10 transition-all">
                                                취소
                                            </button>
                                            <button onClick={handleSave} disabled={isSaving} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all disabled:opacity-50">
                                                {isSaving ? '저장 중...' : '변경사항 저장'}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 space-y-12">
                                {editContent.hero && (
                                    <div className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-2">Hero Section</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputGroup label="Badge" value={editContent.hero.badge} disabled={!isEditMode} onChange={(v) => updateNestedField('hero.badge', v)} />
                                            <TextAreaGroup label="Title" value={editContent.hero.title} disabled={!isEditMode} onChange={(v) => updateNestedField('hero.title', v)} />
                                            <TextAreaGroup label="Description" value={editContent.hero.description} disabled={!isEditMode} onChange={(v) => updateNestedField('hero.description', v)} className="md:col-span-2" />
                                        </div>
                                    </div>
                                )}

                                {viewingPageId === 'home' && editContent.solutions && (
                                    <div className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-2">Solutions Grid</h3>
                                        <div className="space-y-6">
                                            {editContent.solutions.map((item: any, i: number) => (
                                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Solution {i + 1}</span>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <InputGroup label="Title" value={item.title} disabled={!isEditMode} onChange={(v) => {
                                                            const newSols = [...editContent.solutions];
                                                            newSols[i].title = v;
                                                            updateNestedField('solutions', newSols);
                                                        }} />
                                                        <InputGroup label="Subtitle" value={item.subtitle} disabled={!isEditMode} onChange={(v) => {
                                                            const newSols = [...editContent.solutions];
                                                            newSols[i].subtitle = v;
                                                            updateNestedField('solutions', newSols);
                                                        }} />
                                                        <TextAreaGroup label="Description" value={item.description} disabled={!isEditMode} onChange={(v) => {
                                                            const newSols = [...editContent.solutions];
                                                            newSols[i].description = v;
                                                            updateNestedField('solutions', newSols);
                                                        }} className="md:col-span-2" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {viewingPageId === 'about' && editContent.ceoMessage && (
                                    <div className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-2">CEO Message</h3>
                                        <div className="space-y-6">
                                            <InputGroup label="Title" value={editContent.ceoMessage.title} disabled={!isEditMode} onChange={(v) => updateNestedField('ceoMessage.title', v)} />
                                            <TextAreaGroup label="Content" value={editContent.ceoMessage.content} disabled={!isEditMode} onChange={(v) => updateNestedField('ceoMessage.content', v)} rows={10} />
                                        </div>
                                    </div>
                                )}

                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex items-start gap-4">
                                    <div className="text-xl">💡</div>
                                    <div className="text-sm leading-relaxed">
                                        <p className="font-bold text-primary mb-1">도움말</p>
                                        <p className="text-muted/80">이 화면은 데이터 중심의 폼 에디터입니다. 텍스트를 수정하고 저장하면 사이트에 즉시 반영됩니다. 디자인 변경은 개발팀에 문의하거나 스타일 가이드를 참조하세요.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function InputGroup({ label, value, onChange, disabled, placeholder = "", className = "" }: any) {
    return (
        <div className={`space-y-1.5 ${className}`}>
            <label className="text-[10px] font-bold text-muted ml-1 uppercase tracking-widest">{label}</label>
            <input
                value={value || ''}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-all disabled:opacity-50"
            />
        </div>
    );
}

function TextAreaGroup({ label, value, onChange, disabled, rows = 3, className = "" }: any) {
    return (
        <div className={`space-y-1.5 ${className}`}>
            <label className="text-[10px] font-bold text-muted ml-1 uppercase tracking-widest">{label}</label>
            <textarea
                value={value || ''}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                rows={rows}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-all resize-none disabled:opacity-50"
            />
        </div>
    );
}
