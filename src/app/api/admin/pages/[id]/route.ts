import { NextResponse } from 'next/server';
import { getCMSData, saveCMSData } from '@/lib/cms';

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const data = await getCMSData();

        const pageIndex = data.pages.findIndex((p: any) => p.id === id);

        if (pageIndex === -1) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }

        // Update data
        data.pages[pageIndex] = {
            ...data.pages[pageIndex],
            ...body,
            lastMod: new Date().toISOString().split('T')[0] // Auto update date
        };

        const success = await saveCMSData(data);

        if (success) {
            return NextResponse.json(data.pages[pageIndex]);
        } else {
            return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
