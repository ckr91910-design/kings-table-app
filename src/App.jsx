import React, { useState } from 'react';

// 1. 월별 주제 (PDF 원본 근거)
const MONTHLY_THEMES = {
  1: "새로운 시작과 갈릴리의 부름", 2: "광야에서 만나는 하나님의 음성", 3: "성막의 뜰에서 지성소까지",
  4: "십자가와 부활의 영성", 5: "가정 속에 흐르는 생명의 강", 6: "본질을 꿰뚫는 영적 패러다임",
  7: "성육신 묵상의 깊은 품", 8: "A.D.의 삶으로 나가는 파송", 9: "진설병의 말씀과 영적 배부름",
  10: "성령의 조명과 인생의 결단", 11: "감사와 축제의 왕의 식탁", 12: "다시 오실 왕을 기다리는 삶"
};

// 2. 365일 개별화 데이터 (오류 방지를 위해 정적 객체로 관리)
const getMeditationData = (m, d) => {
  // 기본 데이터 구조
  const base = {
    title: `${m}월 ${d}일 왕의 식탁`,
    verse: "출애굽기 24:11",
    verseText: "그들은 하나님을 뵙고 먹고 마셨더라",
    lishma: "내 안의 헬라식 사고를 물두멍에 씻어내고 나를 비웁니다.",
    tota: "주님의 인격이 내 영혼의 창자에 채워짐을 경험합니다.",
    christo: "오늘 나는 주님의 통치를 대행하는 파송된 왕입니다."
  };

  // PDF 실제 데이터 적용 (1월 1일)
  if (m === 1 && d === 1) {
    return {
      ...base,
      title: "갈릴리 조반의 초대",
      verse: "요한복음 21:12",
      verseText: "와서 조반을 먹으라 하시니 제자들이 주님이신 줄 아는 고로 당신이 누구냐 감히 묻는 자가 없더라",
      lishma: "실패한 밤의 그물을 씻으십시오. 결과 중심의 헬라식 사고를 물두멍에 던지고 나를 비웁니다.",
      tota: "주님이 구워주신 생선의 따뜻함이 내 영혼의 창자에 채워집니다. 나는 사랑받는 자입니다.",
      christo: "배부른 베드로가 사명을 받았듯, 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다."
    };
  }
  // PDF 실제 데이터 적용 (5월 16일)
  if (m === 5 && d === 16) {
    return {
      ...base,
      title: "내가 곧 주님의 성전",
      verse: "에베소서 2:22",
      verseText: "너희도 성령 안에서 하나님이 거하실 처소가 되기 위하여 그리스도 예수 안에서 함께 지어져 가느니라",
      lishma: "인생을 내 취향대로 지으려던 욕심의 도면을 씻어내십시오.",
      tota: "나는 움직이는 지성소라는 정체성을 뼈와 근육에 새기십시오.",
      christo: "오늘 하루를 거룩한 지성소로 살아내며 세상으로 나갑니다."
    };
  }

  return base;
};

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleShare = (data) => {
    const text = `[왕의 식탁]\n\n"${data.verseText}"\n\n오늘의 한 줄: ${data.tota}\n\n© 2026 THE KING'S BANQUET`;
    if (navigator.share) {
      navigator.share({ title: '오늘의 만나 공유', text });
    } else {
      navigator.clipboard.writeText(text);
      alert("묵상 내용이 복사되었습니다.");
    }
  };

  // 1. 홈 화면 (4색 로고 포함)
  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '40px 20px', textAlign: 'center', fontFamily: 'serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#0000FF', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#8B00FF', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FF0000', borderRadius: '3px' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FFFFFF', border: '1px solid #ddd', borderRadius: '3px' }}></div>
        </div>
        <h1 style={{ color: '#4b2c20', fontSize: '28px', fontWeight: 'bold', margin: '0' }}>미리토크 365</h1>
        <p style={{ color: '#78350f', fontSize: '20px', fontWeight: 'bold' }}>[ 왕의 식탁 ]</p>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', marginTop: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '15px', color: '#444' }}>"그들은 하나님을 뵙고 먹고 마셨더라" (출 24:11)</p>
          <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a365d', marginTop: '10px' }}>새로운 A.D.의 인생이 열립니다!</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '30px' }}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '20px 0', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '12px', fontWeight: 'bold', fontSize: '18px' }}>{m}월</button>
          ))}
        </div>
      </div>
    );
  }

  // 2. 달력 화면
  if (view === 'calendar') {
    const daysInMonth = new Date(2026, selectedMonth, 0).getDate();
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ border: 'none', background: 'none', fontWeight: 'bold', color: '#78350f' }}>🏠 홈으로</button>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h2 style={{ fontSize: '24px', color: '#4b2c20' }}>{selectedMonth}월 주제</h2>
          <p style={{ color: '#92400e', fontWeight: 'bold', fontSize: '16px' }}>{MONTHLY_THEMES[selectedMonth]}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => (
            <button key={d} onClick={() => { setSelectedDay(d); setView('detail'); }}
              style={{ padding: '15px 0', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', fontWeight: 'bold' }}>{d}</button>
          ))}
        </div>
      </div>
    );
  }

  // 3. 상세 묵상 카드 (가독성 최적화)
  const data = getMeditationData(selectedMonth, selectedDay);
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f2ee', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '420px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <button onClick={() => setView('calendar')} style={{ background: 'none', border: 'none', color: '#78350f', fontWeight: 'bold' }}>◀ 목록</button>
          <span style={{ color: '#4b2c20', fontWeight: 'bold' }}>{selectedMonth}월 {selectedDay}일</span>
          <button onClick={() => setView('menu')} style={{ background: 'none', border: 'none', color: '#78350f', fontWeight: 'bold' }}>🏠 홈</button>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '22px', marginBottom: '30px', color: '#1a1a1a' }}>{data.title}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {/* 1단계 Miqra */}
            <section style={{ borderLeft: '4px solid #ddd', paddingLeft: '15px' }}>
              <span style={{ fontSize: '11px', color: '#999', fontWeight: 'bold' }}>01 MIQRA (왕의 음성)</span>
              <p style={{ fontSize: '16px', margin: '8px 0', lineHeight: '1.7', color: '#111' }}>"{data.verseText}"</p>
              <p style={{ fontSize: '13px', color: '#92400e', textAlign: 'right', margin: 0 }}>— {data.verse}</p>
            </section>

            {/* 2&3단계 Lishma & Tota */}
            <section style={{ borderLeft: '4px solid #8B00FF', paddingLeft: '15px' }}>
              <span style={{ fontSize: '11px', color: '#8B00FF', fontWeight: 'bold' }}>02 LISHMA & 03 TOTA (비움과 채움)</span>
              <p style={{ fontSize: '15px', color: '#444', margin: '8px 0', lineHeight: '1.6' }}>{data.lishma}</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#2d1b14', lineHeight: '1.6' }}>{data.tota}</p>
            </section>

            {/* 4단계 Christo */}
            <section style={{ borderLeft: '4px solid #FF0000', paddingLeft: '15px' }}>
              <span style={{ fontSize: '11px', color: '#FF0000', fontWeight: 'bold' }}>04 CHRISTO (성육신과 파송)</span>
              <p style={{ fontSize: '15px', color: '#444', margin: '8px 0', lineHeight: '1.6' }}>{data.christo}</p>
            </section>
          </div>

          <div style={{ marginTop: '35px' }}>
            <button onClick={() => handleShare(data)} style={{ width: '100%', padding: '14px', backgroundColor: '#fff', border: '1px solid #78350f', borderRadius: '12px', color: '#78350f', marginBottom: '10px', fontWeight: 'bold' }}>📤 은혜 나누기</button>
            <button onClick={() => setView('menu')} style={{ width: '100%', padding: '18px', backgroundColor: '#4b2c20', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px' }}>만찬 완료</button>
          </div>
          
          <p style={{ textAlign: 'center', fontSize: '11px', color: '#ccc', marginTop: '25px' }}>© 2026 THE KING'S BANQUET</p>
        </div>
      </div>
    </div>
  );
}
