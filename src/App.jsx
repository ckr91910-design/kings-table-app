import React, { useState, useEffect } from 'react';

// 1월 & 2월 핵심 데이터
const meditationData = [
  { id: 1, month: 1, day: 1, title: "갈릴리 조반", verse: "와서 조반을 먹으라 (요 21:12)", lishma: "실패한 밤의 그물을 씻으십시오. 결과 중심의 사고를 물두멍에 던지고 나를 비웁니다.", tota: "주님이 구워주신 생선의 따뜻함이 창자에 채워집니다. 나는 사랑받는 자입니다.", christo: "사명을 받은 베드로처럼 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다." },
  { id: 32, month: 2, day: 1, title: "사랑의 부르심", verse: "나의 사랑, 내 어여쁜 자야 함께 가자 (아 2:10)", lishma: "영적 게으름과 분주함을 물두멍에 씻어냅니다. 주님을 맞이하기 위해 나를 비웁니다.", tota: "나를 향한 주님의 뜨거운 열망을 창자에 채우십시오. 나는 사랑받는 존재입니다.", christo: "오늘 당신을 초청하시는 주님의 손을 잡고 세상 속으로 나아가십시오." }
];

// 365일 데이터 구조 자동 생성
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= 31; d++) {
    const id = (m - 1) * 31 + d;
    if (!meditationData.find(item => item.id === id)) {
      meditationData.push({
        id: id, month: m, day: d, title: `${m}월 ${d}일 거룩한 만찬`, verse: "왕의 식탁으로의 초대",
        lishma: "내 안의 사심을 씻어내고 나를 비웁니다.", tota: "주님의 성품을 창자에 채웁니다.", christo: "예수로 사는 삶을 위해 나갑니다."
      });
    }
  }
}

// 성막 4색 로고 컴포넌트
const TabernacleLogo = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '15px' }}>
    <div style={{ width: '40px', height: '6px', backgroundColor: '#0000FF', borderRadius: '2px' }}></div> {/* 청색: 생명 */}
    <div style={{ width: '40px', height: '6px', backgroundColor: '#8B00FF', borderRadius: '2px' }}></div> {/* 자홍색: 왕권 */}
    <div style={{ width: '40px', height: '6px', backgroundColor: '#FF0000', borderRadius: '2px' }}></div> {/* 홍색: 고난 */}
    <div style={{ width: '40px', height: '6px', backgroundColor: '#FFFFFF', border: '1px solid #ddd', borderRadius: '2px' }}></div> {/* 흰색: 성결 */}
  </div>
);

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedData, setSelectedData] = useState(null);

  // 1. 메인 메뉴 화면 (로고에 4색 적용)
  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '40px 20px', fontFamily: 'serif', textAlign: 'center' }}>
        <TabernacleLogo />
        <h1 style={{ color: '#4b2c20', fontSize: '32px', margin: '0 0 5px 0', letterSpacing: '3px', fontWeight: 'bold' }}>KING'S TABLE</h1>
        <p style={{ color: '#78350f', fontSize: '16px', fontWeight: 'bold', marginBottom: '30px' }}>휘장을 지나 왕의 식탁으로</p>
        
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', borderBottom: '4px solid #8B00FF', marginBottom: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8', margin: 0 }}>
            "그들은 하나님을 뵙고 먹고 마셨더라" <br/>
            <span style={{ fontSize: '14px', color: '#92400e' }}>(출애굽기 24:11)</span>
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto 30px auto' }}>
          <button onClick={() => setView('intro')} style={{ padding: '15px', backgroundColor: '#4b2c20', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>👑 미리토크 365 특징</button>
          <button onClick={() => setView('guide')} style={{ padding: '15px', backgroundColor: '#fff', color: '#4b2c20', border: '1px solid #4b2c20', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>📖 사용 설명서</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '18px 0', backgroundColor: 'white', border: '1px solid #d6d3d1', borderRadius: '8px', color: '#4b2c20', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              {m}월
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. 특징 및 설명서 (Intro/Guide 공통 홈 버튼 적용)
  if (view === 'intro' || view === 'guide') {
    const isIntro = view === 'intro';
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#4b2c20', fontWeight: 'bold', cursor: 'pointer' }}>🏠 홈으로 돌아가기</button>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', borderTop: `8px solid ${isIntro ? '#0000FF' : '#FF0000'}` }}>
          <h2 style={{ color: '#4b2c20' }}>{isIntro ? "미리토크 365 특징" : "어떻게 묵상할까요?"}</h2>
          <p style={{ lineHeight: '1.8' }}>
            {isIntro ? "성막 휘장의 4가지 색(청, 자홍, 홍, 가늘게 꼰 베실)은 그리스도의 생명, 왕권, 고난, 성결을 의미합니다. 미리토크는 이 휘장을 지나 하나님을 대면하는 묵상입니다." : "1.Miqra(경청), 2.Lishma(정결), 3.Tota(체화), 4.Christo(파송)의 단계를 통해 왕의 식탁에 참여하십시오."}
          </p>
        </div>
      </div>
    );
  }

  // 3. 월별 날짜 선택 (Calendar)
  if (view === 'calendar') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#4b2c20', fontWeight: 'bold', cursor: 'pointer' }}>🏠 홈으로 돌아가기</button>
        <h2 style={{ textAlign: 'center', color: '#4b2c20', marginBottom: '30px' }}>{selectedMonth}월의 만찬</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
          {meditationData.filter(d => d.month === selectedMonth).sort((a,b) => a.day - b.day).map(d => (
            <button key={d.id} onClick={() => { setSelectedData(d); setView('detail'); }}
              style={{ padding: '15px 5px', backgroundColor: 'white', border: '1px solid #e7e5e4', borderRadius: '8px', cursor: 'pointer' }}>{d.day}</button>
          ))}
        </div>
      </div>
    );
  }

  // 4. 묵상 상세 (Table - 헤더에 4색 포인트 적용)
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ height: '5px', display: 'flex' }}>
          <div style={{ flex: 1, backgroundColor: '#0000FF' }}></div>
          <div style={{ flex: 1, backgroundColor: '#8B00FF' }}></div>
          <div style={{ flex: 1, backgroundColor: '#FF0000' }}></div>
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderBottom: '1px solid #eee' }}></div>
        </div>
        <div style={{ backgroundColor: '#4b2c20', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('calendar')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>◀ 목록</button>
          <span style={{ fontWeight: 'bold', letterSpacing: '1px' }}>KING'S TABLE</span>
          <button onClick={() => setView('menu')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>🏠 홈</button>
        </div>
        <div style={{ padding: '25px' }}>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <span style={{ color: '#92400e', fontSize: '13px', fontWeight: 'bold' }}>{selectedData.month}월 {selectedData.day}일</span>
            <h2 style={{ fontSize: '22px', color: '#444', margin: '8px 0' }}>{selectedData.title}</h2>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#78716c' }}>"{selectedData.verse}"</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section><h3 style={{ color: '#0000FF', fontSize: '16px', borderLeft: '3px solid #0000FF', paddingLeft: '10px', marginBottom: '5px' }}>Lishma: 정결</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.lishma}</p></section>
            <section><h3 style={{ color: '#8B00FF', fontSize: '16px', borderLeft: '3px solid #8B00FF', paddingLeft: '10px', marginBottom: '5px' }}>Tota: 체화</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.tota}</p></section>
            <section><h3 style={{ color: '#FF0000', fontSize: '16px', borderLeft: '3px solid #FF0000', paddingLeft: '10px', marginBottom: '5px' }}>Christo: 파송</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.christo}</p></section>
          </div>
          <button onClick={() => setView('menu')} style={{ width: '100%', marginTop: '30px', padding: '18px', backgroundColor: '#4b2c20', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>만찬 완료 후 홈으로</button>
        </div>
      </div>
    </div>
  );
}
