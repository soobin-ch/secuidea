import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: 'VisitOne - 내방객 방문관리 솔루션 | (주)시큐이데아',
    description: 'QR코드 인증과 관리자 승인 기반의 간편하고 안전한 내방객 출입관리 시스템',
};

const features = [
    { title: '사전 방문 신청', desc: '웹/모바일을 통한 편리한 사전 방문 신청 시스템으로 방문 전 미리 정보를 등록할 수 있습니다.' },
    { title: 'QR코드 인증', desc: 'QR코드 기반의 빠르고 안전한 본인 인증으로 대기 시간을 최소화합니다.' },
    { title: '관리자 승인', desc: '관리자의 실시간 승인 프로세스로 보안 수준을 유지하면서 효율적인 방문 관리가 가능합니다.' },
    { title: '출입 기록 관리', desc: '모든 방문 이력을 자동으로 기록하고 관리하여 보안 감사에 대비할 수 있습니다.' },
    { title: '에스원 연동', desc: '에스원의 다양한 출입통제 장비 및 시스템과의 연동 커스터마이징을 지원합니다.' },
    { title: '커스터마이징', desc: '보안환경에 맞춰 선택적으로 연동되는 고급 통합기능을 지원합니다.' },
];

export default function VisitOnePage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-6">
                            🏢 내방객 방문관리
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Visit<span className="text-gradient">One</span>
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
                            QR코드 인증과 관리자 승인 기반의 간편하고 안전한<br className="hidden md:block" />
                            내방객 출입관리 시스템
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
                        {['사전 방문 신청', 'QR코드 인증', '출입 승인·기록'].map((step, i) => (
                            <FadeIn key={step} delay={i * 0.1}>
                                <div className="relative p-6 rounded-2xl border border-border bg-card text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-semibold mb-2">{step}</h3>
                                    <p className="text-sm text-muted">
                                        {i === 0 && '웹/모바일로 방문 일시, 목적, 방문 대상을 사전 등록'}
                                        {i === 1 && '발급된 QR코드로 키오스크에서 빠른 본인 인증'}
                                        {i === 2 && '관리자 승인 후 자동 출입기록 저장 및 관리'}
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
                        {features.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.05}>
                                <div className="p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors">
                                    <h3 className="font-semibold mb-2">{f.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
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
                        <h2 className="text-2xl font-bold mb-6">VisitOne 도입을 시작하세요</h2>
                        <Link href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            무료 상담 신청
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
