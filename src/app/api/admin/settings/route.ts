import { NextResponse } from 'next/server';
import { getCMSData, saveCMSData } from '@/lib/cms';

export async function GET() {
    const data = await getCMSData();
    return NextResponse.json(data.settings || {});
}

export async function POST(request: Request) {
    const body = await request.json();
    const data = await getCMSData();

    data.settings = {
        ...data.settings,
        ...body
    };

    const success = await saveCMSData(data);

    if (success) {
        return NextResponse.json({ success: true, settings: data.settings });
    } else {
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}
