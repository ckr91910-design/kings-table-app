import React, { useState, useEffect } from 'react';

// 1. [복원] 월별 주제 (PDF 및 목사님 철학 반영)
const MONTHLY_THEMES = {
  1: "새로운 시작과 갈릴리의 부름",
  2: "광야에서 만나는 하나님의 음성",
  3: "성막의 뜰에서 지성소까지",
  4: "십자가와 부활의 영성",
  5: "가정 속에 흐르는 생명의 강",
  6: "본질을 꿰뚫는 영적 패러다임",
  7: "성육신 묵상의 깊은 품",
  8: "A.D.의 삶으로 나가는 파송",
  9: "진설병의 말씀과 영적 배부름",
  10: "성령의 조명과 인생의 결단",
  11: "감사와 축제의 왕의 식탁",
  12: "다시 오실 왕을 기다리는 삶"
};

// 2. [데이터] 365일 개별화된 만나 구조
const generateMeditationData = () => {
  const data = [];
  for (let m = 1; m <= 12; m++) {
    const lastDay = new Date(2026, m, 0).getDate();
    for (let d = 1; d <= lastDay; d++) {
      let title = `${m}월 ${d}일 왕의 식탁`;
      let verse = "출애굽기 24:11";
      let verseText = "그들은 하나님을 뵙고 먹고 마셨더라";
      let lishma = "내 안의 헬라식 사고를 물두멍에 씻어내고 나를 비웁니다.";
      let tota = "주님의 인격이 내 영혼의 창자에 채워짐을 경험합니다.";
      let christo = "오늘 나는 주님의 통치를 대행하는 파송된 왕입니다.";

      // 특정 날짜 데이터 예시 (PDF 내용 반영)
      if (m === 1 && d === 1) {
        title = "갈릴리 조반의 초대";
        verse = "요한복음 21:12";
        verseText = "와서 조반을 먹으라 하시니 제자들이 주님이신 줄 아는 고로 당신이 누구냐 감히 묻는 자가 없더라";
        lishma = "실패한 밤의 그물을 씻으십시오. 결과 중심의 사고를 물두멍에 던지고 나를 비웁니다.";
        tota = "주님이 구워주신 생선의 따뜻함이 내 영혼의 창자에 채워집니다. 나는 사랑받는 자입니다.";
        christo = "배부른 베드로가 사명을 받았듯, 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다.";
      }
      if (m === 5 && d === 16) {
        title = "내가 곧 주님의 성전";
        verse = "에베소서 2:22";
        verseText = "너희도 성령 안에서 하나님이 거하실 처소가 되기 위하여 그리스도 예수 안에서 함께 지어져 가느니라";
        lishma = "인생을 내 취향대로 지으려던 욕심의 도면을 씻어내십시오.";
        tota = "나는 움직이는 지성소라는 정체성을 뼈와 근육에 새기십시오.";
        christo = "함께 지어져 가는 공동체의 지체로서 오늘 하루를 거룩하게 성육신합니다.";
      }

      data.push({ id: `${m}-${d}`, month: m, day: d, title, verse, verseText, lishma, tota, christo });
    }
  }
  return data;
};

const allMeditationData = generateMeditationData();

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedData, setSelectedData] = useState(null);
  const [memo, setMemo] = useState('');
  const appUrl = "https://kings-table-app.vercel.app";

  const handleShare = () => {
    const shareText = `[왕의 식탁 묵상 카드]\n\n"${selectedData.verseText}"\n\n오늘의 통찰: ${selectedData.tota}\n\n만찬장 주소: ${appUrl}\n\n© 2026 THE KING'S BANQUET`;
    if (navigator.share) {
      navigator.share({ title: '오늘의 만나 공유', text: shareText });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("묵상이 복사되었습니다.");
    }
  };

  // 1. 메인 메뉴
  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '40px 20px', textAlign: 'center', fontFamily: 'serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '15px' }}>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#0000FF', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#8B00FF', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FF0000', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FFFFFF', border: '1px solid #ddd', borderRadius: '3px' }}></div>
        </div>
        <h1 style={{ color: '#4b2c20', fontSize: '28px', fontWeight: 'bold', margin: '0' }}>미리토크 365</h1>
        <p style={{ color: '#78350f', fontSize: '20px', fontWeight: 'bold', margin: '5px 0 30px 0' }}>[ 왕의 식탁 ]</p>
        
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', borderTop: '6px solid #8B00FF', marginBottom: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.8' }}>
            "그들은 하나님을 뵙고 먹고 마셨더라" (출 24:11)<br/>
            <b>새로운 A.D.의 인생이 열립니다. 기대하세요!</b>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '420px', margin: '0 auto' }}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '18px 0', backgroundColor: 'white', border: '1px solid #d6d3d1', borderRadius: '12px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>{m}월</button>
          ))}
        </div>
      </div>
    );
  }

  // 2. 달력 화면
  if (view === 'calendar') {
    const days = allMeditationData.filter(d => d.month === selectedMonth);
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', border: 'none', background: 'none', fontWeight: 'bold', color: '#4b2c20' }}>🏠 홈으로</button>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', color: '#4b2c20', margin: '0' }}>{selectedMonth}월 왕의 식탁</h2>
          <p style={{ color: '#92400e', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>{MONTHLY_THEMES[selectedMonth]}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', maxWidth: '420px', margin: '0 auto' }}>
          {days.map(d => (
            <button key={d.id} onClick={() => { setSelectedData(d); setView('detail'); }}
              style={{ padding: '15px 5px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>{d.day}</button>
          ))}
        </div>
      </div>
    );
  }

  // 3. 카드형 묵상 상세 화면
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f2ee', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '420px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <button onClick={() => setView('calendar')} style={{ background:
