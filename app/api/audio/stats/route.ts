// CRAV Movie Audio - Library Stats API
// Timestamp: Tuesday, December 24, 2024

import { NextResponse } from 'next/server';
import { getLibraryStats } from '@/lib/audio-api';

export async function GET() {
  try {
    const stats = await getLibraryStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { error: 'Failed to get library stats' },
      { status: 500 }
    );
  }
}
