import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { id, password } = await request.json();

        // Simple auth matching the previous mock logic
        const isValidAdmin = (id === 'admin' && password === 'admin123');
        const isValidTest = (id === 'secu_test' && password === 'test1234!');

        if (isValidAdmin || isValidTest) {
            // In a real app, we would set a session cookie/JWT here
            return NextResponse.json({ success: true, user: { id, role: 'admin' } });
        } else {
            return NextResponse.json({ success: false, error: '아이디 또는 비밀번호가 일치하지 않습니다.' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
