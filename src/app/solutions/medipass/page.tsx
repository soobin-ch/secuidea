import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: '메디패스 (MEDIPASS) | (주)시큐이데아',
    description: '병원 출입자용 환자, 보호자, 내방객 바코드/QR코드 출력시스템',
};

const features = [
    { title: '바코드/QR 자동발급', desc: '환자, 보호자, 내방객에게 바코드 또는 QR코드를 자동으로 발급합니다.' },
    { title: '방문자 구분 관리', desc: '환자·보호자·내방객을 구분하여 각각 적합한 출입 권한을 부여합니다.' },
    { title: '인사시스템 연동', desc: '병원 인사정보시스템과 연동하여 직원 출입을 자동으로 관리합니다.' },
    { title: '실시간 현황', desc: '현재 병원 내 방문자 현황을 실시간으로 파악할 수 있습니다.' },
    { title: '리포트 생성', desc: '일별·주별·월별 방문 통계 리포트를 자동으로 생성합니다.' },
    { title: '다중 프린터 지원', desc: 'USB, 이더넷을 통한 빠르고 정확한 데이터 전달 및 인쇄를 지원합니다.' },
];

export default function MedipassPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-sm text-cyan-400 mb-6">
                            🔬 병원 출입관리
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            MEDI<span className="text-gradient">PASS</span>
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
                            병원 출입자용 바코드/QR코드 출력시스템
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
                                메디패스(MEDIPASS)는 병원 출입자용 환자, 보호자, 내방객 바코드/QR코드 출력시스템입니다.
                                병원 환경에 최적화된 출입관리 솔루션으로, 인사시스템 연동을 통해
                                효율적인 방문자 관리가 가능합니다.
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
                        <h2 className="text-2xl font-bold mb-6">메디패스 도입을 시작하세요</h2>
                        <Link href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            무료 상담 신청
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
