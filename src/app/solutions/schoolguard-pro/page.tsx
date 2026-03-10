import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: 'SchoolGuardPro - 학교 전자출입관리 | (주)시큐이데아',
    description: '학교를 출입하는 외부인의 신원확인, 방문 목적 등록, 출입 통제를 통합 지원하는 스마트 방문관리 솔루션',
};

const features = [
    { title: '외부인 신원확인', desc: '신분증 확인 및 본인인증을 통한 철저한 외부 방문자 신원 검증 시스템' },
    { title: '방문목적 등록', desc: '방문 사유를 사전 등록하여 학교 관리자가 사전에 방문을 승인할 수 있습니다.' },
    { title: '실시간 출입통제', desc: '허가된 방문자만 출입 가능하도록 키오스크 기반의 실시간 출입 관리' },
    { title: '방문이력 관리', desc: '모든 외부 방문자의 출입 기록을 체계적으로 관리하고 리포트 생성' },
    { title: '학교장터 공인', desc: '학교장터 공인등록제품으로 신뢰성과 안전성이 검증된 솔루션' },
    { title: '긴급상황 대응', desc: '비상 시 방문자 현황을 즉시 파악하여 신속한 대응이 가능합니다.' },
];

export default function SchoolGuardProPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-sm text-emerald-400 mb-6">
                            🏫 학교장터 공인등록제품
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            School<span className="text-gradient">Guard</span>Pro
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-4">
                            학교 외부인 전자출입관리 솔루션
                        </p>
                        <p className="text-sm text-muted mb-8">물품번호: 202508184040711</p>
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
                                스쿨가드프로는 학교를 출입하는 외부인의 신원확인, 방문 목적 등록, 출입 통제,
                                방문 이력 관리를 통합적으로 지원하는 스마트 방문관리 솔루션입니다.
                                학생들의 안전한 교육환경을 보장하고, 학교 관리자의 업무 효율을 극대화합니다.
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
                        <h2 className="text-2xl font-bold mb-6">SchoolGuardPro 도입을 시작하세요</h2>
                        <Link href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            무료 상담 신청
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
