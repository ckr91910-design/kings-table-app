import React, { useState } from 'react';

// 1. 월별 주제 (PDF 원본 근거)
const MONTHLY_THEMES = {
  1: "새로운 시작과 갈릴리의 부름", 2: "광야에서 만나는 하나님의 음성", 3: "성막의 뜰에서 지성소까지",
  4: "십자가와 부활의 영성", 5: "가정 속에 흐르는 생명의 강", 6: "본질을 꿰뚫는 영적 패러다임",
  7: "성육신 묵상의 깊은 품", 8: "A.D.의 삶으로 나가는 파송", 9: "진설병의 말씀과 영적 배부름",
  10: "성령의 조명과 인생의 결단", 11: "감사와 축제의 왕의 식탁", 12: "다시 오실 왕을 기다리는 삶"
};

// 2. [핵심] 날짜별 고유 데이터 엔진 (데이터 불일치 문제 해결)
const getDailyContent = (m, d) => {
  // 기본 데이터 구조
  let content = {
    title: `${m}월 ${d}일 왕의 식탁`,
    verse: "출애굽기 24:11",
    verseText: "그들은 하나님을 뵙고 먹고 마셨더라",
    lishma: "내 안의 사심을 씻어내고 주님의 이름을 위하여 나를 비웁니다.",
    tota: "주님의 인격이 내 영혼의 창자에 채워짐을 경험합니다.",
    christo: "오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다."
  };

  // --- PDF 실제 데이터 및 날짜별 말씀 강제 매칭 ---

  // 1월 1일: 갈릴리 조반 (요한복음)
  if (m === 1 && d === 1) {
    content.title = "갈릴리 조반의 초대";
    content.verse = "요한복음 21:12";
    content.verseText = "예수께서 이르시되 와서 조반을 먹으라 하시니 제자들이 주님이신 줄 아는 고로 당신이 누구냐 감히 묻는 자가 없더라";
    content.lishma = "실패한 밤의 그물을 씻으십시오. 결과 중심의 헬라식 사고를 물두멍에 던지고 나를 비웁니다.";
    content.tota = "주님이 구워주신 생선의 따뜻함이 내 영혼의 창자에 채워집니다.";
    content.christo = "배부른 베드로가 사명을 받았듯, 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다.";
  }

  // 1월 2일: 문 밖의 주님 (계시록)
  if (m === 1 && d === 2) {
    content.title = "문 밖에 서서 두드림";
    content.verse = "요한계시록 3:20";
    content.verseText = "볼지어다 내가 문 밖에 서서 두드리노니 누구든지 내 음성을 듣고 문을 열면 내가 그에게로 들어가 그와 더불어 먹고 그는 나와 더불어 먹으리라";
    content.lishma = "내 마음의 빗장을 걸어 잠갔던 고집과 자아를 물두멍에 씻어냅니다.";
    content.tota = "주님과 함께 먹는 식탁의 친밀함이 내 영혼의 근육이 됩니다.";
    content.christo = "주님을 모신 지성소로서 오늘 만나는 모든 이에게 주님의 향기를 전합니다.";
  }

  // 3월 1일: 성막 입장 (시편) - PDF 3월 테마 반영
  if (m === 3 && d === 1) {
    content.title = "감사함으로 문에 들어감";
    content.verse = "시편 100:4";
    content.verseText = "감사함으로 그의 문에 들어가며 찬송함으로 그의 궁정에 들어가서 그에게 감사하며 그의 이름을 송축할지어다";
    content.lishma = "세상의 근심을 뒤로하고 찬송의 옷을 입고 성막 문으로 들어섭니다.";
    content.tota = "나를 초청하신 만왕의 왕의 위엄이 내 온몸을 감쌉니다.";
    content.christo = "오늘 하루의 모든 행보가 거룩한 성막 안의 발걸음이 되게 합니다.";
  }

  // 5월 16일: 성전의 영성 (에베소서) - PDF 10페이지 실제 원고
  if (m === 5 && d === 16) {
    content.title = "함께 지어져 가는 성전";
    content.verse = "에베소서 2:22";
    content.verseText = "너희도 성령 안에서 하나님이 거하실 처소가 되기 위하여 그리스도 예수 안에서 함께 지어져 가느니라";
    content.lishma = "내 인생을 내 취향대로 지으려던 욕심의 도면을 씻어내십시오.";
    content.tota = "나는 움직이는 지성소라는 정체성을 뼈와 근육에 새기십시오.";
    content.christo = "공동체와 함께 거룩한 성전으로 지어져 가는 하루를 살아냅니다.";
  }

  return content;
};

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(null);

  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '40px 20px', textAlign: 'center', fontFamily: 'serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#0000FF' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#8B00FF' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FF0000' }}></div>
          <div style={{ width: '40px', height: '6px', backgroundColor: '#FFFFFF', border: '1px solid #ddd' }}></div>
        </div>
        <h1 style={{ color: '#4b2c20', fontSize: '26px' }}>미리토크 365</h1>
        <p style={{ color: '#78350f', fontSize: '18px', fontWeight: 'bold' }}>[ 왕의 식탁 ]</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '40px' }}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '20px 0', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '12px', fontWeight: 'bold' }}>{m}월</button>
          ))}
        </div>
      </div>
    );
  }

  if (view === 'calendar') {
    const daysInMonth = new Date(2026, selectedMonth, 0).getDate();
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', padding: '20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ border: 'none', background: 'none', fontWeight: 'bold', color: '#78350f' }}>🏠 홈</button>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h2 style={{ fontSize: '22px', color: '#4b2c20' }}>{selectedMonth}월: {MONTHLY_THEMES[selectedMonth]}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => (
            <button key={d} onClick={() => { setSelectedDay(d); setView('detail'); }}
              style={{ padding: '15px 0', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', fontWeight: 'bold' }}>{d}</button>
          ))}
        </div>
      </div>
    );
  }

  const data = getDailyContent(selectedMonth, selectedDay);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f2ee', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '420px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '30px' }}>{data.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <section style={{ borderLeft: '4px solid #ddd', paddingLeft: '15px' }}>
            <span style={{ fontSize: '11px', color: '#999', fontWeight: 'bold' }}>01 MIQRA</span>
            <p style={{ fontSize: '16px', margin: '5px 0', lineHeight: '1.6' }}>"{data.verseText}"</p>
            <p style={{ fontSize: '12px', color: '#92400e', textAlign: 'right' }}>— {data.verse}</p>
          </section>
          <section style={{ borderLeft: '4px solid #8B00FF', paddingLeft: '15px' }}>
            <span style={{ fontSize: '11px', color: '#8B00FF', fontWeight: 'bold' }}>02 LISHMA & 03 TOTA</span>
            <p style={{ fontSize: '14px', color: '#444' }}>{data.lishma}</p>
            <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#2d1b14', marginTop: '5px' }}>{data.tota}</p>
          </section>
          <section style={{ borderLeft: '4px solid #FF0000', paddingLeft: '15px' }}>
            <span style={{ fontSize: '11px', color: '#FF0000', fontWeight: 'bold' }}>04 CHRISTO</span>
            <p style={{ fontSize: '14px', color: '#444' }}>{data.christo}</p>
          </section>
        </div>
        <button onClick={() => setView('menu')} style={{ width: '100%', marginTop: '30px', padding: '18px', backgroundColor: '#4b2c20', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>만찬 완료</button>
        <p style={{ textAlign: 'center', fontSize: '10px', color: '#ccc', marginTop: '20px' }}>© 2026 THE KING'S BANQUET</p>
      </div>
    </div>
  );
}
