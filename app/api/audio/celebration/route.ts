// app/api/audio/celebration/route.ts — Javari Entertainment
// CR AudioViz AI · EIN 39-3646201 · June 2026
// Celebration audio trigger — returns a random celebration sound for milestone events

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { publishableKey, supabaseUrl } from "@craudioviz/platform-sdk";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { context } = await req.json();
    const supabase = createClient(
      supabaseUrl(),
      publishableKey()
    );
    const { data } = await supabase
      .from("audio_assets")
      .select("id, title, url, duration")
      .eq("type", "sfx")
      .ilike("tags", "%celebration%")
      .limit(10);
    
    const assets = data || [];
    const asset = assets[Math.floor(Math.random() * assets.length)] || null;
    return NextResponse.json({ 
      success: true, context, asset,
      message: asset ? "Celebration audio ready" : "No celebration audio found"
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
