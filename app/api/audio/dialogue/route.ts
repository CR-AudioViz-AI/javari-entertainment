// app/api/audio/dialogue/route.ts — Javari Entertainment
// CR AudioViz AI · EIN 39-3646201 · June 2026

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { publishableKey, supabaseUrl } from "@craudioviz/platform-sdk";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { query, movie, limit = 10 } = await req.json();
    const supabase = createClient(
      supabaseUrl(),
      publishableKey()
    );
    let q = supabase.from("audio_assets").select("*").eq("type", "dialogue").limit(limit);
    if (query) q = q.ilike("title", `%${query}%`);
    if (movie) q = q.ilike("source_movie", `%${movie}%`);
    const { data, error } = await q;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ results: data || [], total: data?.length || 0 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
