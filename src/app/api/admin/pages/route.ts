import { NextResponse } from 'next/server';
import { getCMSData } from '@/lib/cms';

export async function GET() {
    const data = await getCMSData();
    return NextResponse.json(data.pages);
}
