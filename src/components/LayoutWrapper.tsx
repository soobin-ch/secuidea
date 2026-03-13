'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');
    const [settings, setSettings] = useState<any>(null);

    useEffect(() => {
        if (!isAdminPage) {
            fetch('/api/admin/settings')
                .then(res => res.json())
                .then(data => setSettings(data))
                .catch(err => console.error('Failed to fetch settings:', err));
        }
    }, [isAdminPage]);

    if (isAdminPage) {
        return <main className="min-h-screen">{children}</main>;
    }

    return (
        <>
            <Header settings={settings} />
            <main className="min-h-screen">{children}</main>
            <Footer settings={settings} />
        </>
    );
}
