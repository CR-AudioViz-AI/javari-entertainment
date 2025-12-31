'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, Play, Film, Music, Podcast, Radio, 
  Star, Calendar, TrendingUp, Search, Heart, 
  Monitor, Smartphone, Gamepad2, ArrowRight, Check
} from 'lucide-react';

const features = [
  { icon: Search, title: 'Universal Search', description: 'Find any show or movie across all streaming services' },
  { icon: Calendar, title: 'Release Calendar', description: 'Never miss a premiere with personalized alerts' },
  { icon: Heart, title: 'Watchlist Manager', description: 'Organize what you want to watch across all platforms' },
  { icon: TrendingUp, title: 'Trending Now', description: 'See what\'s popular on every streaming service' },
  { icon: Star, title: 'AI Recommendations', description: 'Get personalized picks based on your taste' },
  { icon: Monitor, title: 'Where to Watch', description: 'Instantly find which service has your content' },
];

const streamingServices = [
  'Netflix', 'Disney+', 'HBO Max', 'Amazon Prime', 'Hulu', 
  'Apple TV+', 'Peacock', 'Paramount+', 'YouTube TV', 'Spotify'
];

const categories = [
  { icon: Film, name: 'Movies', count: '500K+' },
  { icon: Tv, name: 'TV Shows', count: '100K+' },
  { icon: Music, name: 'Music', count: '100M+' },
  { icon: Podcast, name: 'Podcasts', count: '5M+' },
  { icon: Gamepad2, name: 'Gaming', count: '50K+' },
  { icon: Radio, name: 'Live TV', count: '500+' },
];

export default function JavariEntertainmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Tv className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold text-white">Javari Entertainment</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white">Features</a>
              <a href="#services" className="text-slate-300 hover:text-white">Services</a>
              <a href="#pricing" className="text-slate-300 hover:text-white">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="text-slate-300 hover:text-white">Sign In</a>
              <a href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Play className="w-4 h-4" /> Your AI Entertainment Guide
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              All Your Entertainment.<br />
              <span className="text-purple-500">One Smart Hub.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Javari Entertainment unifies streaming services, finds what to watch, 
              and helps you discover your next favorite show.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search movies, shows, music, podcasts..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-purple-500 outline-none"
                />
              </div>
            </div>

            {/* Streaming Services */}
            <p className="text-sm text-slate-500 mb-4">Works with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {streamingServices.map((service) => (
                <span key={service} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 cursor-pointer"
              >
                <cat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="text-white font-semibold">{cat.name}</h3>
                <p className="text-slate-500 text-sm">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Features for Smart Viewers
            </h2>
            <p className="text-xl text-slate-400">
              AI-powered tools to enhance your entertainment experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '$0', features: ['Basic search', '5 watchlist items', 'Limited recommendations'] },
              { name: 'Plus', price: '$4.99', features: ['Unlimited search', 'Unlimited watchlist', 'AI recommendations', 'Release alerts', 'Ad-free'], popular: true },
              { name: 'Family', price: '$9.99', features: ['Everything in Plus', '6 profiles', 'Parental controls', 'Shared watchlists', 'Priority support'] },
            ].map((tier) => (
              <div key={tier.name} className={`bg-slate-800 p-8 rounded-2xl border-2 ${tier.popular ? 'border-purple-500' : 'border-slate-700'}`}>
                {tier.popular && <span className="text-purple-500 text-sm font-medium">Most Popular</span>}
                <h3 className="text-xl font-semibold text-white mt-2">{tier.name}</h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-purple-500" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium ${tier.popular ? 'bg-purple-600 text-white' : 'bg-slate-700 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tv className="w-6 h-6 text-purple-500" />
            <span className="text-white font-semibold">Javari Entertainment</span>
          </div>
          <p className="text-slate-500">© 2025 CR AudioViz AI, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
