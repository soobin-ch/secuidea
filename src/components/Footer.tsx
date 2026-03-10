import Link from 'next/link';

const footerLinks = [
    {
        title: '회사소개',
        links: [
            { name: '인사말', href: '/about' },
            { name: '걸어온 길', href: '/about/history' },
            { name: '오시는 길', href: '/about/location' },
        ],
    },
    {
        title: '솔루션',
        links: [
            { name: 'VisitOne', href: '/solutions/visitone' },
            { name: 'SchoolGuardPro', href: '/solutions/schoolguard-pro' },
            { name: 'CareGuardPro', href: '/solutions/careguard-pro' },
            { name: '메디패스', href: '/solutions/medipass' },
        ],
    },
    {
        title: '고객센터',
        links: [
            { name: 'FAQ', href: '/support' },
            { name: '뉴스/이벤트', href: '/support/news' },
            { name: '문의하기', href: '/support/contact' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold text-xs">S</span>
                            </div>
                            <span className="text-base font-bold">
                                SECU<span className="text-primary">iDEA</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted leading-relaxed mb-4">
                            미래형 출입통제시스템<br />
                            스마트 출입통제 솔루션 전문기업
                        </p>
                        <div className="space-y-1 text-xs text-muted">
                            <p>영업문의: 031-8039-5846</p>
                            <p>기술문의: 031-8039-5847</p>
                            <p>FAX: 031-624-5848</p>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-sm font-semibold mb-4">{group.title}</h4>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-muted text-center md:text-left">
                        <p>(주)시큐이데아 | 대표이사: 김희일</p>
                        <p>사업자번호: 142-81-26aborígenes | 경기도 성남시 중원구 사기막골로 124, 1301호</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted">
                        <Link href="/terms" className="hover:text-foreground transition-colors">이용약관</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors font-medium">개인정보처리방침</Link>
                    </div>
                </div>
                <p className="text-center text-xs text-muted/50 mt-6">
                    © {new Date().getFullYear()} SECUiDEA Corp. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
