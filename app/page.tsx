"use client";
// app/page.tsx — Javari Entertainment Hub
// Turbopack-safe: inline styles only, no framer-motion, no Tailwind
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState } from "react";

const FEATURES = [
  { icon:"🔍", title:"Universal Search",     desc:"Find any show or movie across all streaming services instantly" },
  { icon:"📅", title:"Release Calendar",      desc:"Never miss a premiere — track upcoming releases from every network" },
  { icon:"🎭", title:"AI Recommendations",    desc:"Javari AI learns your taste and suggests what you'll love next" },
  { icon:"📱", title:"All Your Platforms",    desc:"Netflix, Hulu, Disney+, HBO Max, Prime Video and more in one place" },
  { icon:"⭐", title:"Ratings & Reviews",     desc:"Aggregated critic and audience scores so you always pick a winner" },
  { icon:"🎮", title:"Gaming Content",        desc:"Game trailers, reviews, and streaming content all in one hub" },
];

const CATEGORIES = ["Movies","TV Shows","Anime","Documentaries","Sports","Music","Podcasts","Gaming"];

export default function EntertainmentPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Movies");

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(180deg,#0d1117 0%,#161b22 100%)",
      color:"#e2e8f0",fontFamily:"system-ui,sans-serif"}}>

      {/* Nav */}
      <nav style={{position:"sticky",top:0,zIndex:100,
        background:"rgba(13,17,23,0.95)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 24px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",height:60,
          display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:22}}>🎬</span>
            <span style={{fontSize:16,fontWeight:800,color:"#fff"}}>Javari Entertainment</span>
          </div>
          <div style={{display:"flex",gap:8}}>
            <a href="https://craudiovizai.com/auth/signin" style={{
              background:"rgba(255,255,255,0.06)",color:"#e2e8f0",textDecoration:"none",
              padding:"7px 16px",borderRadius:8,fontSize:13,fontWeight:600,
              border:"1px solid rgba(255,255,255,0.1)"}}>Sign In</a>
            <a href="https://craudiovizai.com/auth/signup" style={{
              background:"linear-gradient(135deg,#8B5CF6,#00B4D8)",color:"#fff",
              textDecoration:"none",padding:"7px 16px",borderRadius:8,
              fontSize:13,fontWeight:700}}>Start Free</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"80px 24px 60px",textAlign:"center"}}>
        <div style={{fontSize:"clamp(32px,6vw,60px)",fontWeight:900,lineHeight:1.15,
          margin:"0 0 20px",background:"linear-gradient(135deg,#fff,#8B5CF6,#00B4D8)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
          All Your Entertainment.<br/>One Intelligent Hub.
        </div>
        <p style={{fontSize:18,color:"#9CA3AF",maxWidth:560,margin:"0 auto 36px",lineHeight:1.7}}>
          Javari AI tracks every streaming service, suggests what you'll love,
          and keeps you ahead of every release.
        </p>
        {/* Search */}
        <div style={{display:"flex",gap:10,maxWidth:560,margin:"0 auto 16px",flexWrap:"wrap"}}>
          <input value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Search movies, shows, actors..."
            style={{flex:1,minWidth:200,background:"rgba(255,255,255,0.06)",
              border:"1px solid rgba(255,255,255,0.1)",borderRadius:12,
              padding:"14px 18px",color:"#e2e8f0",fontSize:15,
              fontFamily:"system-ui",outline:"none"}}/>
          <button style={{background:"linear-gradient(135deg,#8B5CF6,#00B4D8)",
            color:"#fff",border:"none",borderRadius:12,padding:"14px 24px",
            fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"system-ui"}}>
            Search 🔍
          </button>
        </div>
        <p style={{fontSize:13,color:"#4B5563"}}>
          Powered by Javari AI · CR AudioViz AI · EIN 39-3646201
        </p>
      </section>

      {/* Category tabs */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 40px"}}>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:24}}>
          {CATEGORIES.map(c=>(
            <button key={c} onClick={()=>setActiveTab(c)}
              style={{background:activeTab===c?"rgba(139,92,246,0.2)":"rgba(255,255,255,0.04)",
                border:`1px solid ${activeTab===c?"#8B5CF6":"rgba(255,255,255,0.08)"}`,
                color:activeTab===c?"#A78BFA":"#9CA3AF",borderRadius:20,
                padding:"8px 18px",cursor:"pointer",fontSize:14,
                fontWeight:activeTab===c?700:400,fontFamily:"system-ui"}}>
              {c}
            </button>
          ))}
        </div>
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",
          borderRadius:16,padding:32,textAlign:"center"}}>
          <div style={{fontSize:32,marginBottom:12}}>🎬</div>
          <div style={{fontSize:16,fontWeight:700,color:"#fff",marginBottom:8}}>{activeTab}</div>
          <div style={{fontSize:14,color:"#6B7280",marginBottom:20}}>
            Sign in to browse {activeTab.toLowerCase()} from all your streaming services.
          </div>
          <a href="https://craudiovizai.com/auth/signup" style={{
            display:"inline-block",background:"linear-gradient(135deg,#8B5CF6,#00B4D8)",
            color:"#fff",textDecoration:"none",padding:"12px 28px",borderRadius:10,
            fontSize:14,fontWeight:700}}>
            Start Free →
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 80px"}}>
        <h2 style={{fontSize:"clamp(22px,4vw,36px)",fontWeight:900,color:"#fff",
          textAlign:"center",marginBottom:32}}>Everything in one place</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          {FEATURES.map(f=>(
            <div key={f.title} style={{background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:24}}>
              <div style={{fontSize:32,marginBottom:12}}>{f.icon}</div>
              <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:13,color:"#6B7280",lineHeight:1.7}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"32px 24px",
        textAlign:"center",fontSize:12,color:"#374151"}}>
        CR AudioViz AI · EIN 39-3646201 · SAM.gov UEI H5T3QG19ND91 · Fort Myers, FL<br/>
        <a href="https://craudiovizai.com" style={{color:"#6B7280",textDecoration:"none"}}>
          Powered by CR AudioViz AI Platform
        </a>
      </footer>
    </div>
  );
}
