'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { FadeIn } from '@/components/Animations';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: '시큐이데아의 솔루션은 어떤 환경에 적용 가능한가요?',
        a: '학교, 병원, 기업, 관공서, 군부대 등 다양한 시설에 적용 가능합니다. 각 환경에 최적화된 맞춤형 솔루션을 제공합니다.',
    },
    {
        q: '솔루션 도입 시 기존 출입통제 시스템과 연동이 가능한가요?',
        a: '네, 에스원을 포함한 다양한 출입통제 장비 및 시스템과의 연동을 지원합니다. 기관의 보안환경에 맞춰 선택적으로 통합 연동이 가능합니다.',
    },
    {
        q: '학교에 도입하려면 어떤 절차가 필요한가요?',
        a: 'SchoolGuardPro는 학교장터 공인등록제품(물품번호: 202508184040711)으로, 학교장터를 통해 간편하게 구매하실 수 있습니다. 도입 상담을 원하시면 영업팀으로 연락해 주세요.',
    },
    {
        q: '요양병원에 특화된 솔루션이 있나요?',
        a: 'CareGuardPro는 요양병원에 최적화된 AI 방문관리 키오스크 솔루션입니다. 외부 방문자 응대, 출입기록 관리, 감염 예방 스크리닝 등 요양병원 특화 기능을 제공합니다.',
    },
    {
        q: '설치 후 유지보수 서비스를 제공하나요?',
        a: '네, 전문 기술팀이 정기 점검 및 신속한 A/S를 제공합니다. 원격 지원 및 현장 방문 서비스 모두 가능합니다.',
    },
    {
        q: '데모 또는 시연을 받아볼 수 있나요?',
        a: '네, 무료 데모 및 현장 시연을 제공합니다. 문의하기 페이지를 통해 신청해 주시면 전문 컨설턴트가 방문하여 시연해 드립니다.',
    },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FadeIn delay={index * 0.05}>
            <div className="border border-border rounded-xl overflow-hidden bg-card hover:bg-card-hover transition-colors">
                <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-medium text-sm">{q}</span>
                    <svg
                        className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="px-6 pb-5 text-sm text-muted leading-relaxed">{a}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </FadeIn>
    );
}

export default function SupportPage() {
    return (
        <div className="pt-24 pb-20">
            <section className="py-20 px-6 bg-radial-gradient">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Support</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">자주 묻는 질문</h1>
                        <p className="text-lg text-muted">시큐이데아 솔루션에 대해 궁금한 점을 확인하세요</p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                    ))}
                </div>
            </section>

            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-muted mb-4">원하시는 답변을 찾지 못하셨나요?</p>
                        <a href="/support/contact" className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all shadow-lg shadow-primary/20">
                            직접 문의하기
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
