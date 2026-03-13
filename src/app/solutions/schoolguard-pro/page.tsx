import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { getCMSData } from '@/lib/cms';

export const metadata: Metadata = {
    title: 'SchoolGuardPro - 학교 전자출입관리 | (주)시큐이데아',
    description: '학교를 출입하는 외부인의 신원확인, 방문 목적 등록, 출입 통제를 통합 지원하는 스마트 방문관리 솔루션',
};

export default async function SchoolGuardProPage() {
    const data = await getCMSData();
    const page = data.pages.find((p: any) => p.id === 'schoolguard-pro');
    const content = page?.content || {};

    const hero = content.hero || {
        badge: '🏫 학교 전자출입관리',
        title: 'SchoolGuardPro',
        description: '학교를 출입하는 외부인의 신원확인, 방문 목적 등록,\n출입 통제를 통합 지원하는 전자출입관리 시스템'
    };

    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-6">
                            {hero.badge}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            School<span className="text-gradient">GuardPro</span>
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-8 whitespace-pre-line">
                            {hero.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/support/contact" className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all shadow-lg shadow-primary/20">
                                도입 문의
                            </Link>
                            <div className="text-sm text-muted-foreground border border-white/10 px-4 py-3 rounded-xl bg-white/5">
                                학교장터 공인등록제품 (물품번호: 202508184040711)
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-2xl font-bold mb-4">안전한 학교 환경의 시작</h2>
                        <p className="text-muted leading-relaxed">
                            시큐이데아의 SchoolGuardPro는 학생들의 안전을 최우선으로 생각합니다.<br />
                            검증된 기술력으로 외부인의 무분별한 학교 출입을 효과적으로 통제하고 관리할 수 있습니다.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
