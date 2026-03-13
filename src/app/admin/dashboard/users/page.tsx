'use client';

import { useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
}

export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/admin/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch users:', err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">사용자 관리</h1>
                    <p className="text-muted">관리자 시스템에 접근 가능한 계정을 관리합니다.</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                    <span>+</span> 신규 관리자 초대
                </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                        <tr>
                            <th className="px-8 py-4">사용자</th>
                            <th className="px-8 py-4">권한</th>
                            <th className="px-8 py-4">상태</th>
                            <th className="px-8 py-4 text-right">작업</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-8 py-5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {user.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">{user.name}</p>
                                        <p className="text-xs text-muted-foreground">{user.email}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-5 text-sm font-medium">{user.role}</td>
                                <td className="px-8 py-5">
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${user.status === 'active' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-right">
                                    <button className="text-xs font-bold hover:text-primary mr-4 transition-colors">수정</button>
                                    <button className="text-xs font-bold hover:text-red-500 transition-colors">삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <span>ℹ️</span> 알림
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    사용자 등록은 보안을 위해 기존 관리자가 승인한 경우에만 가능합니다.<br />
                    삭제된 계정은 즉시 시스템 접근이 차단되며, 활동 로그는 365일간 보관됩니다.
                </p>
            </div>
        </div>
    );
}
