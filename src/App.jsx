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

export default function App() {
  const [view, setView] = useState('menu'); // 'menu', 'intro', 'guide', 'calendar', 'detail'
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedData, setSelectedData] = useState(null);

  // 1. 메인 메뉴 화면 (The Entrance - 핵심 성구 배치)
  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif', textAlign: 'center' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#78350f', fontSize: '36px', margin: '0 0 5px 0', letterSpacing: '2px' }}>KING'S TABLE</h1>
          <p style={{ color: '#92400e', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px' }}>휘장을 지나 왕의 식탁으로</p>
          
          {/* 요청하신 핵심 성구 박스 */}
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e7e5e4', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 15px 0' }}>
              "하나님이 이스라엘 자손들의 존귀한 자들에게 손을 대지 아니하셨고 <b>그들은 하나님을 뵙고 먹고 마셨더라</b>" <br/>
              <span style={{ fontSize: '13px', color: '#92400e' }}>(출애굽기 24:11)</span>
            </p>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#d6d3d1', margin: '0 auto 15px auto' }}></div>
            <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.6', margin: 0 }}>
              "볼지어다 내가 문 밖에 서서 두드리노니... 내가 그에게로 들어가 <b>그와 더불어 먹고 그는 나와 더불어 먹으리라</b>" <br/>
              <span style={{ fontSize: '13px', color: '#92400e' }}>(요한계시록 3:20)</span>
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto 30px auto' }}>
          <button onClick={() => setView('intro')} style={{ padding: '15px', backgroundColor: '#78350f', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>👑 미리토크 365 소개</button>
          <button onClick={() => setView('guide')} style={{ padding: '15px', backgroundColor: '#fff', color: '#78350f', border: '1px solid #78350f', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>📖 사용 설명서</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '18px 0', backgroundColor: 'white', border: '1px solid #d6d3d1', borderRadius: '8px', color: '#78350f', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              {m}월
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. 미리토크 소개 (Intro)
  if (view === 'intro') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif', lineHeight: '1.8' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#78350f', fontWeight: 'bold', cursor: 'pointer' }}>◀ 메뉴로 돌아가기</button>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px' }}>
          <h2 style={{ color: '#78350f', borderBottom: '2px solid #78350f', paddingBottom: '10px' }}>미리토크(Miri-Talk) 365</h2>
          <p>미리토크는 성막의 원리를 기반으로 한 <b>'하나님 대면 묵상법'</b>입니다.</p>
          <p>출애굽기 24장의 언약 식탁이 요한계시록 3장의 연합 식탁으로 이어지듯, 우리 삶의 현장에서 매일 주님과 인격적인 만찬을 나누는 영적 훈련입니다.</p>
          <div style={{ backgroundColor: '#fffbeb', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>"주님과 마주 앉아 그분의 성품으로 배부른 시간입니다."</p>
          </div>
        </div>
      </div>
    );
  }

  // 3. 사용 설명서 (Guide)
  if (view === 'guide') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif', lineHeight: '1.7' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#78350f', fontWeight: 'bold', cursor: 'pointer' }}>◀ 메뉴로 돌아가기</button>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px' }}>
          <h2 style={{ color: '#78350f' }}>성막 4단계 묵상법</h2>
          <div style={{ marginTop: '20px' }}>
            <p><b>1. Miqra (경청):</b> 말씀의 음성을 듣습니다.</p>
            <p><b>2. Lishma (정결):</b> 내 사심을 씻어냅니다.</p>
            <p><b>3. Tota (체화):</b> 주님의 인격을 창자에 채웁니다.</p>
            <p><b>4. Christo (파송):</b> 사랑의 힘으로 세상에 나갑니다.</p>
          </div>
        </div>
      </div>
    );
  }

  // 4. 월별 날짜 선택 (Banquet)
  if (view === 'calendar') {
    const monthDays = meditationData.filter(d => d.month === selectedMonth).sort((a,b) => a.day - b.day);
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#78350f', fontWeight: 'bold', cursor: 'pointer' }}>◀ 메뉴로 돌아가기</button>
        <h2 style={{ textAlign: 'center', color: '#78350f', marginBottom: '30px' }}>{selectedMonth}월의 만찬</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
          {monthDays.map(d => (
            <button key={d.id} onClick={() => { setSelectedData(d); setView('detail'); }}
              style={{ padding: '15px 5px', backgroundColor: 'white', border: '1px solid #e7e5e4', borderRadius: '8px', cursor: 'pointer' }}>{d.day}</button>
          ))}
        </div>
      </div>
    );
  }

  // 5. 묵상 상세 (Table)
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#78350f', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('calendar')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>◀ 목록</button>
          <span style={{ fontWeight: 'bold' }}>KING'S TABLE</span>
          <div style={{ width: '30px' }}></div>
        </div>
        <div style={{ padding: '25px' }}>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <span style={{ color: '#92400e', fontSize: '13px', fontWeight: 'bold' }}>{selectedData.month}월 {selectedData.day}일</span>
            <h2 style={{ fontSize: '22px', color: '#444', margin: '8px 0' }}>{selectedData.title}</h2>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#78716c' }}>"{selectedData.verse}"</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section><h3 style={{ color: '#92400e', fontSize: '16px', borderLeft: '3px solid #92400e', paddingLeft: '10px', marginBottom: '5px' }}>Lishma: 정결</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.lishma}</p></section>
            <section><h3 style={{ color: '#92400e', fontSize: '16px', borderLeft: '3px solid #92400e', paddingLeft: '10px', marginBottom: '5px' }}>Tota: 체화</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.tota}</p></section>
            <section><h3 style={{ color: '#92400e', fontSize: '16px', borderLeft: '3px solid #92400e', paddingLeft: '10px', marginBottom: '5px' }}>Christo: 파송</h3><p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{selectedData.christo}</p></section>
          </div>
          <button onClick={() => { alert('만찬 완료!'); setView('calendar'); }} style={{ width: '100%', marginTop: '30px', padding: '18px', backgroundColor: '#78350f', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>만찬 완료</button>
        </div>
      </div>
    </div>
  );
}
