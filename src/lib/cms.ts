import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/lib/cms-data.json');

export async function getCMSData() {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading CMS data:', error);
        return { pages: [] };
    }
}

export async function saveCMSData(data: any) {
    try {
        await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
        return true;
    } catch (error) {
        console.error('Error saving CMS data:', error);
        return false;
    }
}
