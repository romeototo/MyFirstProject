# RoMEoTOTO Portfolio

Portfolio หลักสำหรับผลงาน AI tools, automation, web products และ browser games

เว็บจริง: https://romeototo.github.io/portfolio-website/

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
