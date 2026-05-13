# RoMEoTOTO Portfolio

Portfolio ส่วนตัวสำหรับผลงาน AI tools, automation และ browser games

เว็บจริง: https://romeototo.github.io/portfolio-website/

## เว็บนี้นำเสนออะไร

- โปรเจกต์ AI และ automation พร้อมลิงก์ demo/source
- ภาพจริงของโปรเจกต์ แทน placeholder ทั่วไป
- หน้า case study สำหรับโปรเจกต์เด่น
- Deploy ผ่าน GitHub Pages
- ตรวจ format ด้วย GitHub Actions
- สร้างด้วย HTML, CSS และ JavaScript แบบ static site

## โปรเจกต์เด่น

- IT Support AI Chatbot: helpdesk assistant ที่ใช้ Gemini พร้อม FAQ routing และ ticket capture
- AI-Powered Kanban Board: board วางแผนงานพร้อม AI task breakdown และ cloud sync
- Rialo Network Tycoon: browser game แนว idle tycoon ธีม Web3
- Monster Tapper: clicker game พร้อม upgrades และ boss stages
- Developer Dashboard: dashboard ส่วนตัวพร้อม API-backed stats
- Telegram AI IT Agent: automation agent แนว safety-first พร้อม dry-run และ audit-log concept

## Case Studies

- `case-studies/it-support-chatbot/`
- `case-studies/ai-kanban-board/`

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
