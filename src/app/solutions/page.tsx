import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/Animations';
import { getCMSData } from '@/lib/cms';

export const metadata: Metadata = {
    title: '솔루션 | (주)시큐이데아',
    description: 'VisitOne, SchoolGuardPro, CareGuardPro, 메디패스 등 시큐이데아의 출입통제 솔루션을 소개합니다.',
};

export default async function SolutionsPage() {
    const data = await getCMSData();
    const page = data.pages.find((p: any) => p.id === 'solutions');
    const content = page?.content || {};

    const header = content.header || {
        title: '모든 환경에 최적화된\n출입통제 솔루션',
        description: '학교, 병원, 기업, 군부대 등 각 현장의 보안 요구를 정확히 충족하는 맞춤형 솔루션'
    };

    // Use solutions from Home content or define a base list
    const homePage = data.pages.find((p: any) => p.id === 'home');
    const solutions = homePage?.content?.solutions || [];

    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Solutions</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">
                            {header.title.split('\n').map((line: string, i: number) => (
                                <span key={i}>
                                    {i > 0 && <br />}
                                    {line.includes('출입통제 솔루션') ? (
                                        <>
                                            {line.split('출입통제 솔루션')[0]}
                                            <span className="text-gradient">출입통제 솔루션</span>
                                            {line.split('출입통제 솔루션')[1]}
                                        </>
                                    ) : line}
                                </span>
                            ))}
                        </h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            {header.description}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Solutions Detail */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-8">
                    {solutions.map((solution: any, i: number) => (
                        <ScaleIn key={solution.title} delay={i * 0.05}>
                            <Link
                                href={solution.href}
                                className={`group block p-8 md:p-10 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 bg-card hover:border-border-light transition-all card-glow`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="text-5xl">{solution.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{solution.title}</h2>
                                            <span className="text-sm text-muted">{solution.subtitle}</span>
                                        </div>
                                        <p className="text-muted mb-4 leading-relaxed">{solution.description}</p>
                                        <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary font-medium">
                                            자세히 보기
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScaleIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
