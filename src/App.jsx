import React, { useState, useEffect } from 'react';

// 1월 & 2월 통합 데이터
const meditationData = [
  { id: 1, month: 1, day: 1, title: "갈릴리 조반", verse: "와서 조반을 먹으라 (요 21:12)", lishma: "실패한 밤의 그물을 씻으십시오. 결과 중심의 사고를 물두멍에 던지고 나를 비웁니다.", tota: "주님이 구워주신 생선의 따뜻함이 창자에 채워집니다. 나는 사랑받는 자입니다.", christo: "사명을 받은 베드로처럼 오늘 나는 주님의 사랑으로 세상을 향해 나갑니다." },
  // ... (여기에 365일 데이터가 순차적으로 들어갑니다)
];

// 데이터 자동 생성 (테스트용 60일치)
for (let d = 2; d <= 60; d++) {
  if(!meditationData.find(item => item.id === d)) {
    const m = d <= 31 ? 1 : 2;
    const day = d <= 31 ? d : d - 31;
    meditationData.push({
      id: d, month: m, day: day, title: `${m}월 ${day}일 만찬`, verse: "왕의 식탁으로의 초대",
      lishma: "내 안의 사심을 씻어내고 나를 비웁니다.", tota: "주님의 성품을 창자에 채웁니다.", christo: "예수로 사는 삶을 위해 나갑니다."
    });
  }
}

export default function App() {
  const [view, setView] = useState('home'); // 'home', 'calendar', 'detail'
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [memo, setMemo] = useState("");

  // 홈 화면 (Entrance)
  if (view === 'home') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'serif' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#78350f', fontSize: '32px', marginBottom: '10px' }}>King's Table</h1>
          <p style={{ color: '#92400e' }}>휘장을 지나 왕의 식탁으로</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '400px' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '20px', backgroundColor: 'white', border: '1px solid #78350f', borderRadius: '12px', color: '#78350f', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
              {m}월
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 달력 화면 (Banquet)
  if (view === 'calendar') {
    const days = meditationData.filter(d => d.month === selectedMonth);
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('home')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#78350f', cursor: 'pointer' }}>◀ 메뉴로 돌아가기</button>
        <h2 style={{ textAlign: 'center', color: '#78350f', marginBottom: '20px' }}>{selectedMonth}월의 성막 만찬</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
          {days.map(d => (
            <button key={d.id} onClick={() => { 
              const idx = meditationData.findIndex(item => item.id === d.id);
              setCurrentIndex(idx);
              setView('detail');
            }} style={{ padding: '10px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}>
              {d.day}일
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 묵상 화면 (Table)
  const data = meditationData[currentIndex];
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#78350f', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('calendar')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>닫기</button>
          <span style={{ fontWeight: 'bold' }}>{data.month}월 {data.day}일</span>
          <div style={{ width: '30px' }}></div>
        </div>
        <div style={{ padding: '25px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '22px', color: '#78350f', margin: '0 0 10px 0' }}>{data.title}</h2>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#6b7280' }}>"{data.verse}"</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '12px', backgroundColor: '#fffbeb', borderRadius: '8px' }}>
              <h3 style={{ color: '#92400e', fontSize: '16px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Lishma: 정결</h3>
              <p style={{ fontSize: '15px', color: '#374151', margin: 0 }}>{data.lishma}</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#fffbeb', borderRadius: '8px' }}>
              <h3 style={{ color: '#92400e', fontSize: '16px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Tota: 체화</h3>
              <p style={{ fontSize: '15px', color: '#374151', margin: 0 }}>{data.tota}</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#fffbeb', borderRadius: '8px' }}>
              <h3 style={{ color: '#92400e', fontSize: '16px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Christo: 파송</h3>
              <p style={{ fontSize: '15px', color: '#374151', margin: 0 }}>{data.christo}</p>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>나의 실천 메모</h4>
            <textarea style={{ width: '100%', height: '80px', padding: '10px', borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box' }} placeholder="오늘의 다짐을 적으세요..." />
          </div>
          <button onClick={() => { alert('메모가 저장되었습니다!'); setView('calendar'); }} 
            style={{ width: '100%', marginTop: '15px', padding: '15px', backgroundColor: '#78350f', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            만찬 완료
          </button>
        </div>
      </div>
    </div>
  );
}
