'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
    { name: 'KBS', icon: '📺' },
    { name: 'GS', icon: '⚡' },
    { name: 'KB Bank', icon: '🏦' },
    { name: 'KIST', icon: '🔬' },
    { name: 'University Hospital', icon: '🏥' },
    { name: 'Luxury Duty Free', icon: '🛍️' },
    { name: 'Seoul University', icon: '🎓' },
    { name: 'Government Office', icon: '🏛️' },
];

export default function LogoSlider() {
    // Duplicate the list for seamless looping
    const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <div className="w-full overflow-hidden bg-black/20 py-12 border-y border-white/5 relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex items-center gap-12 whitespace-nowrap px-4"
                animate={{
                    x: [0, -100 * PARTNERS.length],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedPartners.map((partner, index) => (
                    <div
                        key={`${partner.name}-${index}`}
                        className="flex items-center gap-4 shrink-0 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                            {partner.icon}
                        </div>
                        <span className="text-muted group-hover:text-white font-medium transition-colors tracking-tight">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
