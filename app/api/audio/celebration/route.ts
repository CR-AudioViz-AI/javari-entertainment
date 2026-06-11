// CRAV Movie Audio - Celebration Sound API
// Timestamp: Tuesday, December 24, 2024
// Purpose: Quick endpoint for getting celebration sounds (deal closed, achievement, etc.)

import { NextRequest, NextResponse } from 'next/server';
import { getCelebrationSound, recordPlay } from '@/lib/audio-api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const appId = searchParams.get('app_id');

    const clip = await getCelebrationSound();

    if (!clip) {
      return NextResponse.json(
        { error: 'No celebration sounds available' },
        { status: 404 }
      );
    }

    // Record the play if app_id provided
    if (appId) {
      await recordPlay(clip.id, appId);
    }

    return NextResponse.json({
      audio: {
        id: clip.id,
        url: clip.file_url,
        name: clip.custom_name || clip.auto_generated_name,
        duration: clip.duration,
        movie_title: (clip as unknown as { source_movie?: { title: string } }).source_movie?.title,
      },
    });
  } catch (error) {
    console.error('Celebration sound error:', error);
    return NextResponse.json(
      { error: 'Failed to get celebration sound' },
      { status: 500 }
    );
  }
}
