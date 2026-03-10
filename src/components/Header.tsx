'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  {
    name: '회사소개',
    href: '/about',
    children: [
      { name: '인사말', href: '/about' },
      { name: '걸어온 길', href: '/about/history' },
      { name: '오시는 길', href: '/about/location' },
    ],
  },
  {
    name: '솔루션',
    href: '/solutions',
    children: [
      { name: 'VisitOne (내방객 관리)', href: '/solutions/visitone' },
      { name: 'SchoolGuardPro', href: '/solutions/schoolguard-pro' },
      { name: 'CareGuardPro', href: '/solutions/careguard-pro' },
      { name: '메디패스', href: '/solutions/medipass' },
    ],
  },
  {
    name: '고객센터',
    href: '/support',
    children: [
      { name: 'FAQ', href: '/support' },
      { name: '뉴스/이벤트', href: '/support/news' },
      { name: '문의하기', href: '/support/contact' },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            SECU<span className="text-primary">iDEA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
              <AnimatePresence>
                {activeDropdown === item.name && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl glass border border-border p-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/support/contact"
            className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
          >
            문의하기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-6 py-1.5 text-sm text-muted hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/support/contact"
                className="block w-full text-center px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg mt-4"
                onClick={() => setMobileOpen(false)}
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
