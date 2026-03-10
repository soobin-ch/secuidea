import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: '걸어온 길 | (주)시큐이데아',
    description: '(주)시큐이데아의 2010년부터 현재까지의 발자취를 소개합니다.',
};

const timeline = [
    {
        year: '2024~',
        items: [
            '요양병원 AI 방문관리 키오스크 CareGuardPro 출시',
            '학교 전자출입관리 SchoolGuardPro v1.0 출시',
            '학교장터 공인등록제품 (물품번호: 202508184040711)',
        ],
    },
    {
        year: '2020',
        items: [
            '일산차병원 인사, 식수 관리',
            '용인세브란스병원 출입증발급시스템, 바코드 출입시스템 개발',
            '서울대학교 학사시스템 연동, QR코드 출입시스템, 방범스케줄 시스템 개발',
            '전북대학교 병원 메디패스 방문관리 시스템 개발',
            'GS칼텍스 엑세스 주차관제 인터페이스 개발',
        ],
    },
    {
        year: '2019',
        items: [
            '수원성심병원 액세스인사연동 및 바코드출력시스템',
            '신세계 면세점 카드 자동생성 시스템',
            'GS홈쇼핑 군포물류센터 – SMS연동 액세스 내방객 시스템',
            'KB증권 엑세스 커스터마이징',
            '건강보험심사평가원 인사정보연동',
            '국방기술 품질원 출입통제 커스터마이징',
        ],
    },
    {
        year: '2018',
        items: [
            '경북대병원 ARIA 암호화 모듈 및 시험 프로그램 개발',
            'IBK 기업은행 SBMS 액세스 시스템 연동',
            'KIST 통합시스템 인사, 식수, 차량관리 연동',
            '병원용 바코드 출력시스템 (MEDI-PASS) 출시',
            '원자력병원, 을지병원 액세스인사연동 및 바코드출력시스템',
        ],
    },
    {
        year: '2017',
        items: [
            '에스원 스타벅스 액세스 리테일 버전 개발',
            '순천향병원 / 아주대학교병원 / 고신대학교병원 액세스 인사연동',
            'SBS 뉴스영상 클리핑 시스템',
            '무대장치 제어 시뮬레이션 시스템',
        ],
    },
    {
        year: '2016',
        items: [
            'IOT 조명 및 센서 제어시스템 개발',
            '디지털 사이니지 서버, 클라이언트 개발',
            '라이선스 관리 서버 개발',
        ],
    },
    {
        year: '2015',
        items: [
            '빌딩용 LED전등 제어 시스템 개발',
            '수술영상용 태블릿뷰어 개발',
            '인폼 – 치과용 의료영상 캡쳐보드 드라이버 개발',
        ],
    },
    {
        year: '2013~14',
        items: [
            'SBS 동영상 엔코딩 시스템 개발',
            '국방용 동시재생 플레이어 개발',
            '유비쿼터스 센서 네트워크 시스템 개발',
            '문화재청 전통사찰 문화재관리 시스템 개발',
        ],
    },
    {
        year: '2010~12',
        items: [
            '(주)시큐이데아 설립',
            'CUDA H.264 멀티코덱 HD DVR 개발',
            'KBS Take out 영상 시스템 개발',
            'KBS News Ingester 개발',
        ],
    },
];

export default function HistoryPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">History</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">걸어온 길</h1>
                        <p className="text-lg text-muted">2010년 설립부터 현재까지, 시큐이데아의 혁신 여정</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[28px] md:left-[60px] top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-12">
                        {timeline.map((period, i) => (
                            <FadeIn key={period.year} delay={i * 0.05}>
                                <div className="relative flex gap-6 md:gap-10">
                                    {/* Year Badge */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-14 md:w-28 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                            <span className="text-sm font-bold text-primary">{period.year}</span>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 pb-2">
                                        <ul className="space-y-2">
                                            {period.items.map((item, j) => (
                                                <li key={j} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                                                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
