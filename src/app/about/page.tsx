import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';
import { getCMSData } from '@/lib/cms';

export const metadata: Metadata = {
    title: '회사소개 | (주)시큐이데아',
    description: '(주)시큐이데아는 보안 솔루션의 새로운 패러다임을 열어갑니다.',
};

export default async function AboutPage() {
    const data = await getCMSData();
    const page = data.pages.find((p: any) => p.id === 'about');
    const content = page?.content || {};

    const hero = content.hero || {
        badge: 'About Us',
        title: '보안의 가치를 혁신하는\n기술 파트너',
        description: '(주)시큐이데아는 2010년 설립 이래, 출입통제 및 방문관리 시스템 분야에서 끊임없는 기술 혁신을 이끌어 왔습니다.'
    };

    const ceoMessage = content.ceoMessage || {
        title: '대표이사 인사말',
        content: '안녕하십니까, (주)시큐이데아 대표이사 유동삼, 신승철입니다...'
    };

    const stats = content.stats || [];

    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{hero.badge}</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">
                            {hero.title}
                        </h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            {hero.description}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* CEO Message */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="p-10 md:p-16 rounded-[3rem] bg-card border border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />
                            <h2 className="text-3xl font-bold mb-10">{ceoMessage.title}</h2>
                            <div className="space-y-6 text-muted leading-relaxed whitespace-pre-line">
                                {ceoMessage.content}
                            </div>
                            <div className="mt-12 pt-8 border-t border-border">
                                <p className="font-bold text-foreground text-lg">(주)시큐이데아 대표이사 유동삼, 신승철</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-6 border-y border-border bg-card/30">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat: any) => (
                        <FadeIn key={stat.id}>
                            <p className="text-sm font-medium text-muted mb-2 uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-5xl font-bold text-primary">{stat.value}</h3>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
