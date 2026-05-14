<div align="center">

# RoMEoTOTO Portfolio

<p>
  <a href="https://github.com/romeototo/portfolio-website/releases"><img src="https://img.shields.io/github/v/release/romeototo/portfolio-website?style=for-the-badge" alt="Release" /></a>
  <a href="https://github.com/romeototo/portfolio-website/actions"><img src="https://img.shields.io/github/actions/workflow/status/romeototo/portfolio-website/code-quality.yml?style=for-the-badge&label=Code_Quality" alt="Code Quality" /></a>
  <a href="https://romeototo.github.io/portfolio-website/"><img src="https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-6366f1?style=for-the-badge" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Tech-HTML5_|_CSS3_|_VanillaJS-3776ab?style=for-the-badge&logo=javascript&logoColor=white" alt="Tech Stack" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="License" /></a>
</p>

<i>👉 <a href="README-th.md">🇹🇭 อ่านรายละเอียดภาษาไทย</a></i><br><br>

Main public portfolio hub for practical AI tools, automation projects, web products, and browser games.

👉 **[VIEW PORTFOLIO HERE](https://romeototo.github.io/portfolio-website/)**

</div>

## What This Portfolio Shows

- Featured active projects with demo and source links
- Real project screenshots instead of generic placeholders
- Case-study pages for the strongest projects
- A cleaner project set that excludes archived experiments and private templates
- GitHub Pages deployment with format checks
- Responsive static site built with HTML, CSS, and JavaScript

## Featured Projects

- IT Support AI Chatbot: Gemini-powered helpdesk assistant with FAQ routing and ticket capture.
- AI-Powered Kanban Board: AI task breakdown with drag-and-drop planning and cloud sync.
- BKK Pattaya Private Taxi: SEO landing page and booking flow for a Thailand taxi service.
- Monster Tapper: playable clicker game with upgrades and boss stages.
- Telegram AI IT Agent: safety-first automation agent with dry-run and audit-log concepts.
- CCTV Playback Workspace: sanitized private case study for multi-camera review and clip export.

## Case Studies

- `case-studies/it-support-chatbot/`
- `case-studies/ai-kanban-board/`
- `case-studies/bkk-pattaya-taxi/`
- `case-studies/cctv-playback-workspace/`

Each case study explains the problem, build approach, result, and what a visitor should inspect in the demo or source code.

## Tech Stack

- HTML5
- CSS3 with custom properties, grid, responsive layout, and visual effects
- Vanilla JavaScript for navigation, typewriter text, particles, scroll reveal, and terminal easter egg
- GitHub Pages for hosting
- GitHub Actions for formatting checks

## Run Locally

```bash
python -m http.server 8010 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8010/
```

## Project Structure

```text
portfolio-website/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── banner.webp
│   ├── projects/
│   └── screenshots/
├── case-studies/
│   ├── ai-kanban-board/
│   ├── bkk-pattaya-taxi/
│   ├── cctv-playback-workspace/
│   └── it-support-chatbot/
└── .github/workflows/code-quality.yml
```

## Validation

```bash
npx prettier --check .
node --check script.js
git diff --check
```

## License

MIT
