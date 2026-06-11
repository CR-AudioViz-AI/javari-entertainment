// CRAV Movie Audio - Search API Route
// Timestamp: Tuesday, December 24, 2024

import { NextRequest, NextResponse } from 'next/server';
import { searchClips } from '@/lib/audio-api';
import type { AudioSearchOptions } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const options: AudioSearchOptions = {
      query: searchParams.get('query') || undefined,
      movie_id: searchParams.get('movie_id') || undefined,
      stem_types: searchParams.get('stem_types')?.split(',') as AudioSearchOptions['stem_types'],
      moods: searchParams.get('moods')?.split(',') as AudioSearchOptions['moods'],
      usage_contexts: searchParams.get('usage_contexts')?.split(',') as AudioSearchOptions['usage_contexts'],
      min_duration: searchParams.get('min_duration') ? Number(searchParams.get('min_duration')) : undefined,
      max_duration: searchParams.get('max_duration') ? Number(searchParams.get('max_duration')) : undefined,
      favorites_only: searchParams.get('favorites_only') === 'true',
      page: Number(searchParams.get('page')) || 1,
      per_page: Number(searchParams.get('per_page')) || 20,
      sort_by: (searchParams.get('sort_by') as AudioSearchOptions['sort_by']) || 'created_at',
      sort_order: (searchParams.get('sort_order') as AudioSearchOptions['sort_order']) || 'desc',
    };

    const result = await searchClips(options);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search clips' },
      { status: 500 }
    );
  }
}
