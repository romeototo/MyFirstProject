<div align="center">

# RoMEoTOTO Portfolio

<p>
  <a href="https://github.com/romeototo/portfolio-website/releases"><img src="https://img.shields.io/github/v/release/romeototo/portfolio-website?style=for-the-badge" alt="Release" /></a>
  <a href="https://github.com/romeototo/portfolio-website/actions"><img src="https://img.shields.io/github/actions/workflow/status/romeototo/portfolio-website/code-quality.yml?style=for-the-badge&label=Code_Quality" alt="Code Quality" /></a>
  <a href="https://romeototo.github.io/portfolio-website/"><img src="https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-6366f1?style=for-the-badge" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Tech-HTML5_|_CSS3_|_VanillaJS-3776ab?style=for-the-badge&logo=javascript&logoColor=white" alt="Tech Stack" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="License" /></a>
</p>

<i>👉 <a href="README.md">🇬🇧 Read in English</a></i><br><br>

Portfolio หลักสำหรับผลงาน AI tools, automation, web products และ browser games

👉 **[เยี่ยมชมพอร์ตโฟลิโอได้ที่นี่](https://romeototo.github.io/portfolio-website/)**

</div>

## เว็บนี้นำเสนออะไร

- โปรเจกต์ที่ยัง active พร้อมลิงก์ demo/source
- ภาพจริงของโปรเจกต์ แทน placeholder ทั่วไป
- หน้า case study สำหรับโปรเจกต์เด่น
- ชุดโปรเจกต์ที่คัดแล้ว ไม่ปน repo ที่ archive หรือ template ส่วนตัว
- Deploy ผ่าน GitHub Pages
- ตรวจ format ด้วย GitHub Actions
- สร้างด้วย HTML, CSS และ JavaScript แบบ static site

## โปรเจกต์เด่น

- IT Support AI Chatbot: helpdesk assistant ที่ใช้ Gemini พร้อม FAQ routing และ ticket capture
- AI-Powered Kanban Board: board วางแผนงานพร้อม AI task breakdown และ cloud sync
- BKK Pattaya Private Taxi: landing page และ booking flow สำหรับบริการรถในไทย
- Monster Tapper: clicker game พร้อม upgrades และ boss stages
- Telegram AI IT Agent: automation agent แนว safety-first พร้อม dry-run และ audit-log concept
- CCTV Playback Workspace: private case study แบบ sanitized สำหรับ review กล้องหลายตัวและ export clip

## Case Studies

- `case-studies/it-support-chatbot/`
- `case-studies/ai-kanban-board/`
- `case-studies/bkk-pattaya-taxi/`
- `case-studies/cctv-playback-workspace/`

แต่ละหน้าอธิบาย problem, build approach, result และสิ่งที่คนดูควร inspect ใน demo/source code

## เทคโนโลยี

- HTML5
- CSS3 พร้อม custom properties, grid, responsive layout และ visual effects
- Vanilla JavaScript สำหรับ navigation, typewriter, particles, scroll reveal และ terminal easter egg
- GitHub Pages สำหรับ hosting
- GitHub Actions สำหรับ formatting checks

## รันในเครื่อง

```bash
python -m http.server 8010 --bind 127.0.0.1
```

เปิด:

```text
http://127.0.0.1:8010/
```

## โครงสร้างโปรเจกต์

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

## การตรวจสอบ

```bash
npx prettier --check .
node --check script.js
git diff --check
```

## License

MIT
