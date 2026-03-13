'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FadeIn } from '@/components/Animations';
import Link from 'next/link';

export default function AdminLoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                router.push('/admin/dashboard');
            } else {
                setError(data.error || '로그인에 실패했습니다.');
                setIsLoading(false);
            }
        } catch (error) {
            setError('서버와의 통신에 실패했습니다.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-radial-gradient p-6">
            <FadeIn className="w-full max-w-md">
                <div className="glass border border-white/10 p-8 rounded-3xl shadow-2xl space-y-8">
                    <div className="text-center space-y-2">
                        <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                SECU<span className="text-primary">iDEA</span>
                            </span>
                        </Link>
                        <h1 className="text-2xl font-bold">관리자 로그인</h1>
                        <p className="text-muted text-sm">시스템 관리를 위해 로그인 해주세요.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted ml-1">아이디</label>
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="관리자 아이디"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted ml-1">비밀번호</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center font-medium animate-shake">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    로그인
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="text-center">
                        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">
                            ← 메인페이지로 돌아가기
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
