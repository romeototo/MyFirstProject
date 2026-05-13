# RoMEoTOTO Portfolio

Personal portfolio for practical AI tools, automation projects, and browser games.

Live site: https://romeototo.github.io/portfolio-website/

## What This Portfolio Shows

- Featured AI and automation demos with source links
- Real project screenshots instead of generic placeholders
- Case-study pages for the strongest projects
- GitHub Pages deployment with format checks
- Responsive static site built with HTML, CSS, and JavaScript

## Featured Projects

- IT Support AI Chatbot: Gemini-powered helpdesk assistant with FAQ routing and ticket capture.
- AI-Powered Kanban Board: AI task breakdown with drag-and-drop planning and cloud sync.
- Rialo Network Tycoon: playable Web3-themed idle game.
- Monster Tapper: playable clicker game with upgrades and boss stages.
- Developer Dashboard: personal command center with API-backed stats.
- Telegram AI IT Agent: safety-first automation agent with dry-run and audit-log concepts.

## Case Studies

- `case-studies/it-support-chatbot/`
- `case-studies/ai-kanban-board/`

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
