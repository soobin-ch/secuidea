import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { getCMSData } from '@/lib/cms';

export const metadata: Metadata = {
    title: 'VisitOne - 내방객 방문관리 솔루션 | (주)시큐이데아',
    description: 'QR코드 인증과 관리자 승인 기반의 간편하고 안전한 내방객 출입관리 시스템',
};

export default async function VisitOnePage() {
    const data = await getCMSData();
    const page = data.pages.find((p: any) => p.id === 'visitone');
    const content = page?.content || {};

    const hero = content.hero || {
        badge: '🏢 내방객 방문관리',
        title: 'VisitOne',
        description: 'QR코드 인증과 관리자 승인 기반의 간편하고 안전한\n내방객 출입관리 시스템'
    };

    const steps = content.steps || [];
    const features = content.features || [];

    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-6">
                            {hero.badge}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {hero.title.includes('VisitOne') ? (
                                <>
                                    Visit<span className="text-gradient">One</span>
                                </>
                            ) : hero.title}
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-8 whitespace-pre-line">
                            {hero.description}
                        </p>
                        <Link href="/support/contact" className="inline-flex px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all shadow-lg shadow-primary/20">
                            도입 문의
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-center mb-4">간편한 3단계 방문 절차</h2>
                        <p className="text-center text-muted mb-12">사전방문신청부터 출입기록까지, 직관적인 3단계 절차</p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((step: any, i: number) => (
                            <FadeIn key={step.id || i} delay={i * 0.1}>
                                <div className="relative p-6 rounded-2xl border border-border bg-card text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted">
                                        {step.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f: any, i: number) => (
                            <FadeIn key={f.title} delay={i * 0.05}>
                                <div className="p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors h-full">
                                    <h3 className="font-semibold mb-2">{f.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{f.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-muted text-sm mb-2">민간기업 · 관공서 · 학교 · 병원 등 다양한 현장에 최적화</p>
                        <h2 className="text-2xl font-bold mb-6">{hero.title} 도입을 시작하세요</h2>
                        <Link href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            무료 상담 신청
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
