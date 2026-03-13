import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/Animations';
import LogoSlider from '@/components/LogoSlider';
import { getCMSData } from '@/lib/cms';

export default async function HomePage() {
  const data = await getCMSData();
  const home = data.pages.find((p: any) => p.id === 'home');
  const content = home?.content || {};

  const hero = content.hero || {
    badge: 'Security Application Innovation Leader',
    title: '보안 솔루션의\n새로운 기준을 만듭니다',
    description: 'AI 기반 스마트 출입관리로 안전한 환경을 설계합니다.',
    ctaPrimary: '솔루션 살펴보기',
    ctaSecondary: '도입 문의하기'
  };

  const solutions = content.solutions || [];
  const features = content.features || [];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] opacity-20" />
        <div className="absolute inset-0 bg-background/75" />

        <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {hero.badge}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8 whitespace-pre-line">
              {hero.title.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient">{line}</span> : line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              {hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/solutions"
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href="/support/contact"
                className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                통합 출입관리 <span className="text-gradient">솔루션</span>
              </h2>
              <p className="text-muted text-lg mt-4">
                비즈니스 환경에 최적화된 시큐이데아의 솔루션을 만나보세요
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/solutions" className="group flex items-center gap-2 text-primary font-bold">
                전체 솔루션 보기
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((item: any, i: number) => (
              <ScaleIn key={item.id} delay={i * 0.1} className={item.span || 'md:col-span-1'}>
                <Link
                  href={item.href}
                  className={`group relative h-full flex flex-col p-8 rounded-[2.5rem] border border-border bg-card overflow-hidden hover:border-primary/50 transition-all`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary/60 mb-2 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted leading-relaxed mb-8">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                      더 알아보기
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {features.map((feature: any, i: number) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LogoSlider />
    </>
  );
}
