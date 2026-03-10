import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: '뉴스/이벤트 | (주)시큐이데아',
    description: '(주)시큐이데아의 최신 뉴스와 이벤트를 확인하세요.',
};

const news = [
    {
        date: '2025.02',
        title: 'CareGuardPro v1.0 출시',
        desc: '요양병원 AI 방문관리 키오스크 솔루션 CareGuardPro가 새롭게 출시되었습니다.',
        tag: '제품출시',
    },
    {
        date: '2025.01',
        title: 'SchoolGuardPro 학교장터 공인등록',
        desc: '학교 전자출입관리 솔루션 SchoolGuardPro가 학교장터 공인등록제품으로 선정되었습니다.',
        tag: '인증',
    },
    {
        date: '2024.12',
        title: '2024 보안 솔루션 파트너 간담회 개최',
        desc: '에스원 및 주요 파트너사와 함께하는 2024 보안 솔루션 파트너 간담회가 성료하였습니다.',
        tag: '이벤트',
    },
    {
        date: '2024.10',
        title: 'VisitOne 솔루션 업데이트',
        desc: '내방객 방문관리 솔루션 VisitOne의 신규 기능 업데이트가 진행되었습니다.',
        tag: '업데이트',
    },
    {
        date: '2024.08',
        title: '서울대학교 QR코드 출입시스템 구축 완료',
        desc: '서울대학교에 QR코드 기반 출입시스템 및 방범스케줄 시스템 구축을 완료하였습니다.',
        tag: '구축사례',
    },
];

export default function NewsPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">News & Events</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">뉴스 / 이벤트</h1>
                        <p className="text-lg text-muted">시큐이데아의 최신 소식을 확인하세요</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-4">
                    {news.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <div className="group p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors cursor-pointer">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{item.tag}</span>
                                            <span className="text-xs text-muted">{item.date}</span>
                                        </div>
                                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted">{item.desc}</p>
                                    </div>
                                    <svg className="w-5 h-5 text-muted flex-shrink-0 mt-1 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
