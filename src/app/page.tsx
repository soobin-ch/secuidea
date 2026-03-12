import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/Animations';

const solutions = [
  {
    title: 'VisitOne',
    subtitle: '내방객 방문관리 솔루션',
    description: 'QR코드 인증과 관리자 승인 기반의 간편하고 안전한 내방객 출입관리 시스템',
    href: '/solutions/visitone',
    icon: '🏢',
    color: 'from-blue-500/20 to-blue-600/5',
    span: 'md:col-span-2',
  },
  {
    title: 'SchoolGuardPro',
    subtitle: '학교 전자출입관리',
    description: '학교를 출입하는 외부인의 신원확인, 방문 목적 등록, 출입 통제를 통합 지원',
    href: '/solutions/schoolguard-pro',
    icon: '🏫',
    color: 'from-emerald-500/20 to-emerald-600/5',
    span: 'md:col-span-1',
  },
  {
    title: 'CareGuardPro',
    subtitle: '요양병원 AI 방문관리',
    description: '요양병원에 최적화된 AI 방문관리 키오스크 솔루션',
    href: '/solutions/careguard-pro',
    icon: '🏥',
    color: 'from-purple-500/20 to-purple-600/5',
    span: 'md:col-span-1',
  },
  {
    title: '메디패스',
    subtitle: 'MEDIPASS',
    description: '병원 출입자용 환자, 보호자, 내방객 바코드/QR코드 출력시스템',
    href: '/solutions/medipass',
    icon: '🔬',
    color: 'from-cyan-500/20 to-cyan-600/5',
    span: 'md:col-span-1',
  },
  {
    title: '출입통제 시스템',
    subtitle: '건물·시설·군부대',
    description: '건물, 시설, 군부대 등 다양한 환경에 최적화된 출입통제 시스템 구축',
    href: '/solutions',
    icon: '🔒',
    color: 'from-orange-500/20 to-orange-600/5',
    span: 'md:col-span-1',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: '보안성',
    description: '에스원 연동 및 다양한 출입통제 장비와의 호환으로 최고 수준의 보안 환경을 구축합니다.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '간편한 도입',
    description: '사전방문신청부터 출입기록까지 간편한 3단계 절차로 빠르게 도입할 수 있습니다.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '커스터마이징',
    description: '보안환경에 맞춰 선택적으로 연동되는 고급 통합기능과 맞춤형 솔루션을 제공합니다.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: '전문 상담',
    description: '15년 이상의 출입통제 시스템 전문 경험을 바탕으로 성실한 고객상담을 제공합니다.',
  },
];

const clients = [
  '서울대학교', '용인세브란스병원', 'GS칼텍스', '신세계면세점',
  'KB증권', 'KIST', '전북대학교병원', 'KBS',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Security Application Innovation Leader
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              보안 솔루션의<br />
              <span className="text-gradient">새로운 기준</span>을 만듭니다
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              출입통제시스템 솔루션 구축 전문기업 (주)시큐이데아는<br className="hidden md:block" />
              AI 기반 스마트 출입관리로 안전한 환경을 설계합니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
              >
                솔루션 살펴보기
              </Link>
              <Link
                href="/support/contact"
                className="px-8 py-3.5 border border-border hover:border-border-light text-foreground font-medium rounded-xl transition-all duration-200 hover:bg-card"
              >
                도입 문의하기
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Solutions</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">통합 출입관리 솔루션</h2>
              <p className="text-muted max-w-xl mx-auto">
                학교, 병원, 기업, 군부대 등 다양한 환경에 최적화된 스마트 출입통제 솔루션을 제공합니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutions.map((solution, i) => (
              <ScaleIn key={solution.title} delay={i * 0.05} className={solution.span}>
                <Link
                  href={solution.href}
                  className={`group block h-full p-6 md:p-8 rounded-2xl border border-border hover:border-border-light bg-gradient-to-br ${solution.color} bg-card transition-all duration-300 card-glow`}
                >
                  <div className="text-3xl mb-4">{solution.icon}</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <span className="text-xs text-muted">{solution.subtitle}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{solution.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Why SECUiDEA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 시큐이데아인가</h2>
              <p className="text-muted max-w-xl mx-auto">
                2010년 설립 이래 보안 솔루션 분야에서 쌓아온 전문성과 기술력
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-center text-sm text-muted mb-8">국내 주요 기관·기업이 신뢰하는 파트너</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clients.map((client) => (
                <span key={client} className="text-sm md:text-base text-muted/60 font-medium hover:text-muted transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              지금 바로 도입 상담을 시작하세요
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              시큐이데아의 전문 컨설턴트가 귀사에 최적화된 출입통제 솔루션을 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/support/contact"
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all shadow-lg shadow-primary/20"
              >
                무료 상담 신청
              </Link>
              <Link
                href="tel:070-4007-1619"
                className="px-8 py-3.5 border border-border hover:border-border-light font-medium rounded-xl transition-all hover:bg-card"
              >
                📞 070-4007-1619
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
