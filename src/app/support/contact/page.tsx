import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';
import { getCMSData } from '@/lib/cms';

export const metadata: Metadata = {
    title: '문의하기 | (주)시큐이데아',
    description: '시큐이데아 솔루션 도입 및 기술 문의를 남겨주세요.',
};

export default async function ContactPage() {
    const data = await getCMSData();
    const settings = data.settings || {
        phone: '070-4007-1619',
        address: '서울특별시 영등포구 문래북로8, 에이스엔에스타워 802호'
    };

    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
                        <p className="text-lg text-muted">솔루션 도입 및 기술 문의를 남겨주시면 전문 상담사가 연락드립니다.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <FadeIn>
                            <div className="p-6 rounded-2xl border border-border bg-card">
                                <h3 className="font-semibold mb-3">📞 영업문의</h3>
                                <a href={`tel:${settings.phone}`} className="text-primary hover:underline text-sm">{settings.phone}</a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="p-6 rounded-2xl border border-border bg-card">
                                <h3 className="font-semibold mb-3">📍 위치</h3>
                                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{settings.address}</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={0.1} className="md:col-span-2">
                        <form className="p-8 rounded-2xl border border-border bg-card space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2">이름 *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">연락처 *</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="010-0000-0000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">이메일</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="example@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">기관/회사명</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="(주)시큐이데아"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">관심 솔루션</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors text-muted">
                                    <option value="">솔루션을 선택해주세요</option>
                                    <option value="visitone">VisitOne (내방객 관리)</option>
                                    <option value="schoolguard">SchoolGuardPro (학교)</option>
                                    <option value="careguard">CareGuardPro (요양병원)</option>
                                    <option value="medipass">메디패스 (병원)</option>
                                    <option value="access">출입통제 시스템</option>
                                    <option value="other">기타</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">문의 내용 *</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="문의하실 내용을 입력해주세요."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all shadow-lg shadow-primary/20"
                            >
                                문의 보내기
                            </button>
                            <p className="text-xs text-muted text-center">
                                문의 접수 후 1영업일 이내에 답변드립니다.
                            </p>
                        </form>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
