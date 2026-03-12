import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Left: Logo/Title */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-foreground">(주)시큐이데아</span>
                        </Link>
                    </div>

                    {/* Center: Info */}
                    <div className="flex-grow max-w-3xl">
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold mb-6 text-foreground/80">
                            <Link href="/privacy" className="hover:text-primary transition-colors underline-offset-4 hover:underline">개인정보취급방침</Link>
                            <span className="text-border">|</span>
                            <Link href="/terms" className="hover:text-primary transition-colors underline-offset-4 hover:underline">이용약관</Link>
                            <span className="text-border">|</span>
                            <button className="hover:text-primary transition-colors underline-offset-4 hover:underline">이메일무단수집거부</button>
                        </div>

                        <div className="space-y-2 text-[13px] text-muted-foreground leading-relaxed">
                            <p>주식회사 시큐이데아 | 대표이사 유동삼, 신승철 | 사업자등록번호 122-86-22929</p>
                            <p>서울특별시 영등포구 문래북로8, 에이스엔에스타워 802호 | 대표전화 : 070-4007-1619 | 팩스 : 02-6267-1625</p>
                            <p className="pt-2 font-medium">Copyright ⓒ 시큐이데아. ALL RIGHTS RESERVED.</p>
                            <p className="text-muted-foreground/50 mt-4 text-xs font-light">
                                본 사이트의 콘텐츠는 저작권법의 보호를 받는바, 무단 전재, 복사, 배포 등을 금합니다.
                            </p>
                        </div>
                    </div>

                    {/* Right: Contact */}
                    <div className="flex-shrink-0 space-y-4 min-w-[280px] bg-muted/30 p-6 rounded-2xl border border-border/50">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground/70">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>영업문의</span>
                            </div>
                            <span className="text-xl font-bold text-primary tracking-tighter">070-4007-1619</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground/70">
                                <svg className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>기술문의</span>
                            </div>
                            <span className="text-xl font-bold tracking-tighter">02-6267-1622</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground/70">
                                <svg className="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                <span>팩스</span>
                            </div>
                            <span className="text-xl font-bold text-muted-foreground/70 tracking-tighter">02-6267-1625</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
