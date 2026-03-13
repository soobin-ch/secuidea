'use client';

import { useState } from 'react';

const pages = [
    { id: 'home', name: '메인 페이지', path: '/', lastMod: '2026-03-12', status: 'published' },
    { id: 'about', name: '회사 소개', path: '/about', lastMod: '2026-03-11', status: 'published' },
    { id: 'solutions', name: '솔루션 페이지', path: '/solutions', lastMod: '2026-03-10', status: 'published' },
    { id: 'contact', name: '문의하기', path: '/support/contact', lastMod: '2026-03-12', status: 'draft' },
];

export default function ContentManagementPage() {
    const [editingPage, setEditingPage] = useState<string | null>(null);

    if (editingPage) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <button
                            onClick={() => setEditingPage(null)}
                            className="text-sm text-primary mb-2 hover:underline"
                        >
                            ← 목록으로 돌아가기
                        </button>
                        <h1 className="text-3xl font-bold">{pages.find(p => p.id === editingPage)?.name} 편집</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 transition-colors">
                            미리보기
                        </button>
                        <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all">
                            변경사항 저장
                        </button>
                    </div>
                </div>

                {/* WordPress-like Editor UI Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                        <div className="p-8 rounded-3xl border border-white/5 bg-white/5 space-y-8">
                            <div className="space-y-4 text-center pb-8 border-b border-white/5">
                                <p className="text-xs text-primary font-bold tracking-widest uppercase">Header Section</p>
                                <input
                                    className="w-full bg-transparent text-4xl font-bold text-center outline-none focus:text-primary transition-colors"
                                    defaultValue="보안 솔루션의 새로운 기준을 만듭니다"
                                />
                                <textarea
                                    className="w-full bg-transparent text-lg text-muted text-center outline-none focus:text-white transition-colors resize-none h-24"
                                    defaultValue="AI 기반 스마트 출입관리로 안전한 환경을 설계합니다."
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-sm text-muted">Solutions Highlights</h4>
                                    <button className="text-xs text-primary">+ 컴포넌트 추가</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="p-6 rounded-2xl border border-white/10 bg-black/40 relative group">
                                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1 hover:text-primary">✏️</button>
                                                <button className="p-1 hover:text-red-500">🗑️</button>
                                            </div>
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 mb-4" />
                                            <input className="block w-full bg-transparent font-bold mb-1 outline-none" defaultValue={`솔루션 제목 ${i}`} />
                                            <input className="block w-full bg-transparent text-xs text-muted outline-none" defaultValue="설명 텍스트입니다..." />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-3xl border border-white/5 bg-white/5 space-y-4">
                            <h4 className="font-bold text-sm">페이지 설정</h4>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-[10px] text-muted-foreground uppercase font-bold">슬러그 URL</label>
                                    <input className="w-full mt-1 px-3 py-2 rounded-lg bg-black/50 border border-white/5 text-xs outline-none" defaultValue="/" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-muted-foreground uppercase font-bold">메타 설명 (SEO)</label>
                                    <textarea className="w-full mt-1 px-3 py-2 rounded-lg bg-black/50 border border-white/5 text-xs outline-none h-20 resize-none" defaultValue="보안 솔루션 전문 기업 시큐이데아 메인 페이지" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-3xl border border-white/5 bg-white/5 space-y-4">
                            <h4 className="font-bold text-sm text-red-500">위험 구역</h4>
                            <button className="w-full py-2 rounded-xl border border-red-500/30 text-red-500 text-xs hover:bg-red-500/10 transition-colors">
                                페이지 비공개로 전환
                            </button>
                            <button className="w-full py-2 rounded-xl bg-red-500/10 text-red-500 text-xs hover:bg-red-500/20 transition-colors">
                                이 페이지 삭제
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Pages</h1>
                    <p className="text-muted">웹사이트의 각 페이지 내용을 직접 수정하고 관리합니다.</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                    <span>+</span> Add New Page
                </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                        <tr>
                            <th className="px-8 py-4">Title</th>
                            <th className="px-8 py-4">URL Path</th>
                            <th className="px-8 py-4">Last Modified</th>
                            <th className="px-8 py-4">Status</th>
                            <th className="px-8 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {pages.map((page) => (
                            <tr
                                key={page.id}
                                className="group hover:bg-white/5 transition-colors cursor-pointer"
                                onClick={() => setEditingPage(page.id)}
                            >
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                            📄
                                        </div>
                                        <p className="font-bold text-sm group-hover:text-primary transition-colors">{page.name}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <code className="text-xs text-muted-foreground bg-black/30 px-2 py-1 rounded-md">{page.path}</code>
                                </td>
                                <td className="px-8 py-5 text-sm text-muted-foreground">{page.lastMod}</td>
                                <td className="px-8 py-5">
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${page.status === 'published' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-orange-500/20 text-orange-500'
                                        }`}>
                                        {page.status}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <button
                                        className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all hover:underline"
                                    >
                                        Edit Page →
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
