<div align="center">

# RoMEoTOTO Portfolio

**Public portfolio hub for IT support tools, automation workflows, web products, and selected interactive experiments.**

<p>
  <a href="https://romeototo.github.io/portfolio-website/"><img src="https://img.shields.io/badge/Live-GitHub_Pages-6366f1?style=for-the-badge" alt="Live site" /></a>
  <a href="https://github.com/romeototo/portfolio-website/actions"><img src="https://img.shields.io/github/actions/workflow/status/romeototo/portfolio-website/code-quality.yml?style=for-the-badge&label=Code_Quality" alt="Code quality" /></a>
  <img src="https://img.shields.io/badge/Stack-HTML_CSS_JavaScript-3776ab?style=for-the-badge&logo=javascript&logoColor=white" alt="Tech stack" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="License" /></a>
</p>

[View Portfolio](https://romeototo.github.io/portfolio-website/) | [Thai README](README-th.md)

</div>

---

## Purpose

This repository is the public portfolio entry point for RoMEoTOTO. It is designed to show a small, curated set of work instead of every local experiment.

The site prioritizes:

- practical IT automation and support projects
- live demos and source links
- real screenshots instead of generic placeholders
- case studies that explain problem, build approach, and result
- responsive static deployment through GitHub Pages

---

## Featured Work

| Project                                                                              | Type                 | What to inspect                                                      |
| ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------------------------- |
| [IT Support AI Chatbot](https://github.com/romeototo/it-support-chatbot)             | Support assistant    | FAQ routing, ticket capture, admin workflow, Thai support UI         |
| [Telegram AI IT Agent](https://github.com/romeototo/telegram-ai-it-automation-agent) | IT automation agent  | Safety model, dry-run behavior, audit-log concept, operator controls |
| [BKK Pattaya Taxi](https://github.com/romeototo/bkk-pattaya-taxi)                    | Product landing page | React/TypeScript stack, booking UX, multilingual copy, lead capture  |
| [AI Kanban Board](https://github.com/romeototo/ai-kanban-board)                      | Productivity tool    | AI task breakdown, drag and drop, realtime task planning             |
| [Monster Tapper](https://github.com/romeototo/monster-tapper)                        | Browser game         | Game loop, UI polish, boss progression, static deployment            |

---

## Case Studies

- `case-studies/it-support-chatbot/`
- `case-studies/ai-kanban-board/`
- `case-studies/bkk-pattaya-taxi/`
- `case-studies/cctv-playback-workspace/`

Each case study explains the problem, implementation approach, result, and the strongest parts to review.

---

## Stack

- HTML5
- CSS3 with custom properties, responsive layout, and visual effects
- Vanilla JavaScript for navigation, language toggle, typewriter text, particles, scroll reveal, and interactions
- GitHub Pages for hosting
- GitHub Actions for formatting checks

---

## Run Locally

```bash
python -m http.server 8010 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8010/
```

---

## Validation

```bash
npx prettier --check .
node --check script.js
git diff --check
```

---

## License

MIT
