'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FadeIn } from '@/components/Animations';

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Pages', href: '/admin/dashboard/content', icon: '📄' },
    { name: 'Users', href: '/admin/dashboard/users', icon: '👥' },
    { name: 'Settings', href: '/admin/dashboard/settings', icon: '⚙️' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 border-r border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 h-screen flex flex-col`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <span className="font-bold text-sm">S</span>
                    </div>
                    {isSidebarOpen && <span className="font-bold tracking-tight text-lg">ADMIN</span>}
                </div>

                <nav className="flex-1 px-3 space-y-1 mt-4">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-muted hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
                                {isActive && isSidebarOpen && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full py-2 flex items-center justify-center gap-2 text-muted hover:text-white text-sm"
                    >
                        {isSidebarOpen ? '접기 ←' : '→'}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-medium text-muted">
                            {navigation.find(item => item.href === pathname)?.name || 'Admin'}
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs font-bold">최고 관리자</p>
                            <p className="text-[10px] text-muted-foreground">admin@secuidea.co.kr</p>
                        </div>
                        <Link
                            href="/admin"
                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            👋
                        </Link>
                    </div>
                </header>

                <div className="p-8">
                    <FadeIn>
                        {children}
                    </FadeIn>
                </div>
            </main>
        </div>
    );
}
