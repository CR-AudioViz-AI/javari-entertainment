// CRAV Movie Audio - Dialogue Search API
// Timestamp: Tuesday, December 24, 2024
// Purpose: Search dialogue/quotes by transcript text

import { NextRequest, NextResponse } from 'next/server';
import { searchDialogue } from '@/lib/audio-api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q') || searchParams.get('query') || '';

    if (!query) {
      return NextResponse.json(
        { error: 'Missing required query parameter: q or query' },
        { status: 400 }
      );
    }

    const options = {
      movie_id: searchParams.get('movie_id') || undefined,
      famous_only: searchParams.get('famous_only') === 'true',
      character: searchParams.get('character') || undefined,
      page: Number(searchParams.get('page')) || 1,
      perPage: Number(searchParams.get('per_page')) || 20,
    };

    const result = await searchDialogue(query, options);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Dialogue search error:', error);
    return NextResponse.json(
      { error: 'Failed to search dialogue' },
      { status: 500 }
    );
  }
}
