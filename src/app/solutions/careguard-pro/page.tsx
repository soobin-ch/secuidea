import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: 'CareGuardPro - 요양병원 AI 방문관리 | (주)시큐이데아',
    description: '요양병원에 최적화된 AI 방문관리 키오스크 솔루션',
};

const features = [
    { title: 'AI 방문자 인식', desc: 'AI 기반의 방문자 인식 기술로 빠르고 정확한 출입 관리가 가능합니다.' },
    { title: '환자 보호', desc: '감염병 예방 등 요양병원 특수 상황에 맞는 방문자 스크리닝 기능을 제공합니다.' },
    { title: '간편한 방문 등록', desc: '보호자, 내방객의 간편한 방문 등록으로 대기 시간을 최소화합니다.' },
    { title: '정확한 출입기록', desc: '모든 방문자의 출입 시간, 방문 대상, 체류 시간 등을 정확하게 기록합니다.' },
    { title: '키오스크 일체형', desc: '단순 방문관리 기기를 넘어선 완성도 높은 출입통제용 키오스크 제품입니다.' },
    { title: '관리자 대시보드', desc: '실시간 방문 현황 모니터링 및 통계 분석 대시보드를 제공합니다.' },
];

export default function CareGuardProPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-sm text-purple-400 mb-6">
                            🏥 요양병원 특화
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Care<span className="text-gradient">Guard</span>Pro
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
                            요양병원 AI 방문관리 키오스크 솔루션
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
                        <div className="p-8 rounded-2xl border border-border bg-card mb-12">
                            <p className="text-muted leading-relaxed">
                                캐어가드프로 키오스크는 단순한 방문관리 기기를 넘어서 귀하의 요양병원에 꼭 맞는
                                완성도 높은 출입통제용 제품입니다. 설치 이후 외부 방문자 응대가 훨씬 간편해지며,
                                출입기록도 정확하게 관리할 수 있는 요양병원에 최적화된 시스템입니다.
                            </p>
                        </div>
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
                        <h2 className="text-2xl font-bold mb-6">CareGuardPro 도입을 시작하세요</h2>
                        <Link href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            무료 상담 신청
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
