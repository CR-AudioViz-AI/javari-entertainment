# Consolidation tasks: javari-movie → javari-entertainment
## Source archived: June 2026
## Note: This is a MOVIE AUDIO EXTRACTOR — high value cross-app feature

### Movie audio extraction system to implement:

#### Core feature
- [ ] Movie audio extractor: pull music, dialogue, sound effects from personal library
- [ ] Audio asset library (reusable across all platform apps)
- [ ] Cross-app audio integration framework

#### Audio APIs (6 endpoints from src/)
- [ ] GET/POST /api/audio/celebration — celebration sound triggers
- [ ] POST /api/audio/dialogue — dialogue extraction and search
- [ ] GET /api/audio/random — random audio clip
- [ ] GET /api/audio/search — semantic audio search
- [ ] GET /api/audio/stats — library statistics
- [ ] POST /api/audio/trigger — event-based audio trigger

#### Database schema
- [ ] audio_assets table (title, source_movie, type, url, duration)
- [ ] audio_tags table
- [ ] user_libraries table

#### Cross-app integration hooks (HIGH VALUE)
- [ ] javari-realty: celebration audio on deal close
- [ ] javari-collections: reveal audio for rare finds
- [ ] javari-games-hub: background music and SFX
- [ ] javariverse: ambient audio for virtual spaces

#### Extract page
- [ ] /extract route — upload movie, extract audio tracks
- [ ] Stem separation (bass, drums, vocals — optional)

#### Source reference: https://github.com/CR-AudioViz-AI/javari-movie (archived)
