import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: '솔루션 | (주)시큐이데아',
    description: 'VisitOne, SchoolGuardPro, CareGuardPro, 메디패스 등 시큐이데아의 출입통제 솔루션을 소개합니다.',
};

const solutions = [
    {
        title: 'VisitOne',
        subtitle: '내방객 방문관리 솔루션의 표준',
        description: 'QR코드 인증과 관리자 승인 기반의 간편하고 안전한 내방객 출입관리 시스템으로, 민간기업·관공서·학교·병원 등 다양한 현장에 최적화된 방문관리 플랫폼입니다.',
        features: ['사전방문신청 → QR코드 인증 → 출입기록의 3단계 간편 절차', '에스원 연동 및 다양한 출입장비 통합', '보안환경에 맞춘 선택적 고급 통합기능 지원'],
        href: '/solutions/visitone',
        icon: '🏢',
        gradient: 'from-blue-500/10 to-indigo-500/5',
    },
    {
        title: 'SchoolGuardPro',
        subtitle: '학교 외부인 전자출입관리 솔루션',
        description: '학교를 출입하는 외부인의 신원확인, 방문 목적 등록, 출입 통제, 방문 이력 관리를 통합적으로 지원하는 스마트 방문관리 솔루션입니다.',
        features: ['학교장터 공인등록제품 (물품번호: 202508184040711)', '외부인 신원확인 및 방문목적 등록', '실시간 출입 모니터링 및 이력 관리'],
        href: '/solutions/schoolguard-pro',
        icon: '🏫',
        gradient: 'from-emerald-500/10 to-green-500/5',
    },
    {
        title: 'CareGuardPro',
        subtitle: '요양병원 AI 방문관리 키오스크 솔루션',
        description: '요양병원에 꼭 맞는 완성도 높은 출입통제용 키오스크. 외부 방문자 응대가 훨씬 간편해지며, 출입기록도 정확하게 관리할 수 있습니다.',
        features: ['AI 기반 방문자 인식 및 관리', '요양병원 특화 출입통제 시스템', '간편한 방문자 응대 및 정확한 출입기록'],
        href: '/solutions/careguard-pro',
        icon: '🏥',
        gradient: 'from-purple-500/10 to-violet-500/5',
    },
    {
        title: '메디패스 (MEDIPASS)',
        subtitle: '병원 출입자용 바코드/QR코드 출력시스템',
        description: '병원 출입자용 환자, 보호자, 내방객 바코드/QR코드 출력시스템으로 병원 환경에 최적화된 출입관리 솔루션입니다.',
        features: ['환자·보호자·내방객 구분 관리', '바코드/QR코드 자동 발급', '병원 인사시스템 연동 지원'],
        href: '/solutions/medipass',
        icon: '🔬',
        gradient: 'from-cyan-500/10 to-teal-500/5',
    },
];

export default function SolutionsPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Solutions</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            모든 환경에 최적화된<br /><span className="text-gradient">출입통제 솔루션</span>
                        </h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            학교, 병원, 기업, 군부대 등 각 현장의 보안 요구를 정확히 충족하는 맞춤형 솔루션
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Solutions Detail */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-8">
                    {solutions.map((solution, i) => (
                        <ScaleIn key={solution.title} delay={i * 0.05}>
                            <Link
                                href={solution.href}
                                className={`group block p-8 md:p-10 rounded-2xl border border-border bg-gradient-to-br ${solution.gradient} bg-card hover:border-border-light transition-all card-glow`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="text-5xl">{solution.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{solution.title}</h2>
                                            <span className="text-sm text-muted">{solution.subtitle}</span>
                                        </div>
                                        <p className="text-muted mb-4 leading-relaxed">{solution.description}</p>
                                        <ul className="space-y-1.5">
                                            {solution.features.map((feature, j) => (
                                                <li key={j} className="text-sm text-muted flex items-start gap-2">
                                                    <span className="text-primary mt-0.5">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
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
