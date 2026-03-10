import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';

export const metadata: Metadata = {
    title: '오시는 길 | (주)시큐이데아',
    description: '(주)시큐이데아 본사 위치 안내 - 경기도 성남시 중원구 사기막골로 124, 1301호',
};

export default function LocationPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Location</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">오시는 길</h1>
                        <p className="text-lg text-muted">(주)시큐이데아 본사 위치 안내</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="rounded-2xl overflow-hidden border border-border mb-8 bg-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.123!2d127.0!3d37.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44K744S-7YSw!5e0!3m2!1sko!2skr!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="시큐이데아 본사 위치"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border border-border bg-card">
                                <h3 className="text-lg font-semibold mb-4">📍 주소</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    경기도 성남시 중원구 사기막골로 124<br />
                                    SKn테크노파크 비즈센터, 1301호
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border bg-card">
                                <h3 className="text-lg font-semibold mb-4">📞 연락처</h3>
                                <div className="space-y-2 text-sm text-muted">
                                    <p>영업문의: <a href="tel:031-8039-5846" className="text-primary hover:underline">031-8039-5846</a></p>
                                    <p>기술문의: <a href="tel:031-8039-5847" className="text-primary hover:underline">031-8039-5847</a></p>
                                    <p>FAX: 031-624-5848</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
