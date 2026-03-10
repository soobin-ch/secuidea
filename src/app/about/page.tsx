import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '회사소개 | (주)시큐이데아',
    description: '출입통제시스템 솔루션 구축 전문기업 (주)시큐이데아를 소개합니다.',
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">About Us</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            보안의 가치를 혁신하는<br /><span className="text-gradient">기술 파트너</span>
                        </h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                            (주)시큐이데아는 2010년 설립 이래, 출입통제 및 방문관리 시스템 분야에서
                            끊임없는 기술 혁신을 이끌어 왔습니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* CEO Message */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="p-8 md:p-12 rounded-2xl border border-border bg-card">
                            <h2 className="text-2xl font-bold mb-6">대표이사 인사말</h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    안녕하십니까, (주)시큐이데아 대표이사 김희일입니다.
                                </p>
                                <p>
                                    저희 시큐이데아는 &ldquo;Security Application Innovation Leader&rdquo;라는 비전 아래,
                                    보안 솔루션의 새로운 패러다임을 열어가고 있습니다. 단순한 출입통제를 넘어
                                    AI 기반의 스마트 방문관리, QR코드 인증 시스템, 그리고 다양한 기관과의
                                    시스템 연동을 통해 차세대 보안 환경을 구축하고 있습니다.
                                </p>
                                <p>
                                    학교, 병원, 기업, 군부대 등 각 현장의 특수한 요구사항을 세심하게 반영하여
                                    최적화된 솔루션을 제공하며, 에스원과의 전략적 파트너십을 통해 국내 최고 수준의
                                    보안 서비스를 실현하고 있습니다.
                                </p>
                                <p>
                                    앞으로도 고객의 안전과 편의를 최우선으로 생각하며, 기술 혁신을 통해
                                    더 안전하고 스마트한 세상을 만들어 가겠습니다.
                                </p>
                                <p className="text-foreground font-medium pt-4">
                                    (주)시큐이데아 대표이사 김희일
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Company Info Cards */}
            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FadeIn delay={0}>
                        <div className="p-6 rounded-2xl border border-border bg-card text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">2010</div>
                            <p className="text-muted text-sm">설립연도</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="p-6 rounded-2xl border border-border bg-card text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                            <p className="text-muted text-sm">보안 솔루션 경험 (년)</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="p-6 rounded-2xl border border-border bg-card text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">200+</div>
                            <p className="text-muted text-sm">구축 프로젝트</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sub pages links */}
            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FadeIn>
                        <Link href="/about/history" className="group block p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">걸어온 길 →</h3>
                            <p className="text-sm text-muted">2010년부터 현재까지 시큐이데아의 성장 발자취</p>
                        </Link>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <Link href="/about/location" className="group block p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">오시는 길 →</h3>
                            <p className="text-sm text-muted">경기도 성남시 중원구 사기막골로 124, 1301호</p>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
