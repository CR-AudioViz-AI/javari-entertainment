# Consolidation tasks: javari-tv → javari-entertainment
## Source archived: June 2026

### IPTV system to implement in javari-entertainment:

#### Core feature
- [ ] Netflix-style IPTV interface
- [ ] 10,000+ live channels from 130+ countries (IPTV-org data source)
- [ ] HLS video player (React Player) with full-screen support
- [ ] Collapsible country/state/city navigation

#### User features
- [ ] Favorites system (star channels)
- [ ] Recently watched tracking

#### Data migration
- [ ] channels.m3u source file (import to Supabase)
- [ ] 200-channel seed SQL (load-200-channels.sql)
- [ ] Full channel SQL migrations (complete-channel-setup.sql)

#### Database schema
- [ ] countries table (with flags)
- [ ] regions table (states/provinces)
- [ ] cities table
- [ ] channels table
- [ ] user_favorites table
- [ ] recently_watched table

#### API endpoints
- [ ] GET /api/channels
- [ ] POST /api/load-channels
- [ ] GET /api/test-db

#### Source reference: https://github.com/CR-AudioViz-AI/javari-tv (archived)
