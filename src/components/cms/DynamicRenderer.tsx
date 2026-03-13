'use client';

import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/Animations';
import LogoSlider from '@/components/LogoSlider';

export default function DynamicRenderer({ sections, isEditing = false, onSelectSection }: {
    sections: any[],
    isEditing?: boolean,
    onSelectSection?: (idx: number) => void
}) {
    if (!sections || sections.length === 0) {
        return (
            <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl m-10">
                <p className="text-muted">표시할 섹션이 없습니다. 컴포넌트를 추가해주세요.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {sections.map((section, idx) => (
                <div
                    key={section.id || idx}
                    className={`relative group ${isEditing ? 'cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all' : ''}`}
                    onClick={() => isEditing && onSelectSection?.(idx)}
                >
                    {isEditing && (
                        <div className="absolute top-4 left-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest pointer-events-none">
                            {section.type} Section
                        </div>
                    )}
                    <SectionItem section={section} />
                </div>
            ))}
        </div>
    );
}

function SectionItem({ section }: { section: any }) {
    const { type, content, design } = section;

    switch (type) {
        case 'Hero':
            return <HeroSection content={content} design={design} />;
        case 'Solutions':
            return <SolutionsSection content={content} design={design} />;
        case 'Features':
            return <FeaturesSection content={content} design={design} />;
        case 'CEOSection':
            return <CEOSection content={content} design={design} />;
        case 'Stats':
            return <StatsSection content={content} design={design} />;
        case 'LogoSlider':
            return <section className={design.padding || 'py-10'}><LogoSlider /></section>;
        default:
            return <div className="p-10 text-center border border-dashed text-muted">Unknown Section Type: {type}</div>;
    }
}

function HeroSection({ content, design }: any) {
    return (
        <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${design.padding || 'py-20'}`}>
            <div className={`absolute inset-0 bg-cover bg-center ${design.background || 'bg-background'}`}
                style={design.bgImage ? { backgroundImage: `url(${design.bgImage})` } : {}} />
            {design.overlay && <div className="absolute inset-0 bg-background/75" />}

            <div className={`relative max-w-5xl mx-auto px-6 ${design.textAlign === 'center' ? 'text-center' : ''}`}>
                <FadeIn>
                    {content.badge && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            {content.badge}
                        </div>
                    )}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 whitespace-pre-line">
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed whitespace-pre-line">
                        {content.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {content.ctaPrimary && <Link href="/solutions" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-primary/20">{content.ctaPrimary}</Link>}
                        {content.ctaSecondary && <Link href="/support/contact" className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all">{content.ctaSecondary}</Link>}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function SolutionsSection({ content, design }: any) {
    return (
        <section className={`${design.padding || 'py-24'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {(content.title || content.subtitle) && (
                    <div className={`mb-16 ${design.titleAlign === 'center' ? 'text-center' : ''}`}>
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h2>
                            <p className="text-muted text-lg">{content.subtitle}</p>
                        </FadeIn>
                    </div>
                )}
                <div className={`grid gap-6 ${design.gridCols || 'md:grid-cols-3'}`}>
                    {content.items?.map((item: any, i: number) => (
                        <ScaleIn key={item.id || i} delay={i * 0.1}>
                            <div className={`group relative p-8 rounded-[2.5rem] border border-border bg-card overflow-hidden hover:border-primary/50 transition-all ${item.span || ''}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted leading-relaxed mb-8">{item.description}</p>
                                    <Link href={item.href || '#'} className="text-primary font-bold text-sm">더 알아보기 →</Link>
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturesSection({ content, design }: any) {
    return (
        <section className={`border-y border-border ${design.padding || 'py-20'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid gap-12 ${design.gridCols || 'md:grid-cols-4'}`}>
                    {content.items?.map((item: any, i: number) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CEOSection({ content, design }: any) {
    return (
        <section className={`${design.padding || 'py-24'}`}>
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn>
                    <div className="p-10 md:p-16 rounded-[3rem] bg-card border border-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />
                        <h2 className="text-3xl font-bold mb-10">{content.title}</h2>
                        <div className="space-y-6 text-muted leading-relaxed whitespace-pre-line">
                            {content.body}
                        </div>
                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="font-bold text-foreground text-lg">{content.signature}</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function StatsSection({ content, design }: any) {
    return (
        <section className={`border-y border-border ${design.padding || 'py-20'} ${design.background || 'bg-card/30'}`}>
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {content.items?.map((stat: any, i: number) => (
                    <FadeIn key={stat.id} delay={i * 0.1}>
                        <p className="text-sm font-medium text-muted mb-2 uppercase tracking-widest">{stat.label}</p>
                        <h3 className="text-5xl font-bold text-primary">{stat.value}</h3>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
