// app/api/audio/search/route.ts — Javari Entertainment
// CR AudioViz AI · EIN 39-3646201 · June 2026

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";
    const type  = searchParams.get("type") || "";
    const limit = parseInt(searchParams.get("limit") || "20");

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    let q = supabase.from("audio_assets").select("*").limit(limit);
    if (query) q = q.or(`title.ilike.%${query}%,tags.ilike.%${query}%`);
    if (type)  q = q.eq("type", type);
    const { data, error } = await q;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ results: data || [], total: data?.length || 0 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
