// app/api/audio/stats/route.ts — Javari Entertainment
// CR AudioViz AI · EIN 39-3646201 · June 2026

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { count: total } = await supabase
      .from("audio_assets").select("*", { count: "exact", head: true });
    const { data: byType } = await supabase
      .from("audio_assets").select("type").limit(1000);
    const types = (byType || []).reduce((acc: Record<string, number>, r: any) => {
      acc[r.type] = (acc[r.type] || 0) + 1; return acc;
    }, {});
    return NextResponse.json({ total: total || 0, types });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
