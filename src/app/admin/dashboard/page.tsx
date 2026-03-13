export default function AdminDashboardPage() {
    const stats = [
        { label: '오늘의 방문자', value: '1,284', change: '+12.5%', icon: '📈' },
        { label: '대기 중인 문의', value: '12', change: '-2', icon: '✉️' },
        { label: '활성 제품 수', value: '8', change: '0', icon: '📦' },
        { label: '보안 경고', value: '0', change: '정상', icon: '🛡️' },
    ];

    const activities = [
        { user: '최고관리자', action: '메인 페이지 텍스트 수정', time: '10분 전' },
        { user: '기술팀장', action: '신규 문의 답변 완료', time: '1시간 전' },
        { user: '영업담당', action: 'CareGuardPro 가격 정보 업데이트', time: '3시간 전' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">대쉬보드 개요</h1>
                    <p className="text-muted">실시간 사이트 현황 및 최근 활동 내역입니다.</p>
                </div>
                <div className="text-sm text-muted">최종 업데이트: 2026-03-13 14:45</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${stat.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-500' :
                                    stat.change.includes('-') ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activities */}
                <div className="lg:col-span-2 p-8 rounded-3xl border border-white/5 bg-white/5">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span>🕒</span> 최근 활동 내역
                    </h3>
                    <div className="space-y-6">
                        {activities.map((activity, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold">
                                        {activity.user[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{activity.action}</p>
                                        <p className="text-xs text-muted-foreground">{activity.user}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-muted-foreground">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/10 to-accent/5">
                    <h3 className="text-lg font-bold mb-6">🚀 빠른 시작</h3>
                    <div className="grid gap-4">
                        <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all">
                            <p className="font-bold text-sm">메인 팝업 설정</p>
                            <p className="text-xs text-muted-foreground">사이트 접속 시 공지 설정</p>
                        </button>
                        <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all">
                            <p className="font-bold text-sm">신규 게시글 작성</p>
                            <p className="text-xs text-muted-foreground">공지사항 및 블로그 등록</p>
                        </button>
                        <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all text-primary">
                            <p className="font-bold text-sm">고객 문의 확인 (12건)</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
