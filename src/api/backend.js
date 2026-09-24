// .env
//REACT_APP_API_URL=http://localhost:8080      // ตอนพัฒนา ชี้ไป Go ที่รันในเครื่องเพื่อน
// บน Vercel ตั้ง REACT_APP_API_URL=https://api.team.xyz

// src/api/backend.js
const BASE = process.env.REACT_APP_API_URL;

export async function getMovies(q = '') {
  const url = new URL(BASE + '/api/movies');
  if (q) url.searchParams.set('q', q);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API ตอบกลับ ${res.status}`);
  const data = await res.json();
  return data.items;                          // ถ้าตกลงรูปร่างตรงกัน ไม่ต้องแปลงเลย
}