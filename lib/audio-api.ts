// lib/audio-api.ts — Javari Entertainment Audio API utilities
// CR AudioViz AI · EIN 39-3646201 · June 2026

export interface AudioAsset {
  id: string; title: string; type: 'music' | 'dialogue' | 'sfx';
  url: string; duration: number; tags: string[]; source_movie?: string;
}

export async function searchAudio(query: string, type?: string): Promise<AudioAsset[]> {
  const params = new URLSearchParams({ query });
  if (type) params.set('type', type);
  const r = await fetch(`/api/audio/search?${params}`);
  if (!r.ok) return [];
  const d = await r.json();
  return d.results || [];
}

export async function getAudioStats() {
  const r = await fetch('/api/audio/stats');
  return r.ok ? r.json() : { total: 0, types: {} };
}

export async function triggerCelebration(context: string) {
  const r = await fetch('/api/audio/celebration', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ context })
  });
  return r.ok ? r.json() : null;
}
