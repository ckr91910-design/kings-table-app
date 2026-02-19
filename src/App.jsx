import React, { useState } from 'react';

// 1월 & 2월 통합 데이터
const meditationData = [
  { 
    id: 1, month: 1, day: 1, 
    title: "갈릴리 조반", 
    verse: "요한복음 21:12", 
    verseText: "예수께서 이르시되 와서 조반을 먹으라 하시니 제자들이 주님이신 줄 아는 고로 당신이 누구냐 감히 묻는 자가 없더라", 
    lishma_content: "실패한 밤의 그물을 씻으십시오. 결과 중심의 사고를 물두멍에 던지고 나를 비웁니다.", 
    tota_content: "주님이 구워주신 생선의 따뜻함이 내 영혼의 창자에 채워집니다. 나는 사랑받는 자입니다.", 
    christo_content: "말씀이 생명이 되어 수가성 여인처럼 달려나갑니다. B.C.의 나를 버리고 A.D.의 새 삶으로 나아갑니다." 
  }
];

// 365일 데이터 자동 생성
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= 31; d++) {
    const id = (m - 1) * 31 + d;
    if (!meditationData.find(item => item.id === id)) {
      meditationData.push({
        id: id, month: m, day: d, title: `${m}월 ${d}일 왕의 식탁`, 
        verse: "출애굽기 24:11", 
        verseText: "그들은 하나님을 뵙고 먹고 마셨더라",
        lishma_content: "말씀의 의도를 살피며 내면의 뜰로 깊이 들어갑니다.", 
        tota_content: "성경 전체의 맥락 속에서 오늘의 영적 통찰을 얻습니다.", 
        christo_content: "성육신된 말씀으로 세상 속에서 본질을 보는 능력을 발휘합니다."
      });
    }
  }
}

export default function App() {
  const [view, setView] = useState('menu');
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedData, setSelectedData] = useState(null);

  if (view === 'menu') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '40px 20px', fontFamily: 'serif', textAlign: 'center' }}>
        <h1 style={{ color: '#4b2c20', fontSize: '32px', margin: '0', letterSpacing: '2px', fontWeight: 'bold' }}>미리토크 365</h1>
        <h2 style={{ color: '#78350f', fontSize: '24px', margin: '5px 0 30px 0', fontWeight: 'bold' }}>[ 왕의 식탁 ]</h2>
        
        {/* 목마른 자를 향한 생수의 초청 */}
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', borderLeft: '8px solid #0000FF', marginBottom: '25px', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: '18px', color: '#1a365d', lineHeight: '1.6', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            "누구든지 목마르거든, 배고프거든 오세요!"
          </p>
          <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.7', margin: 0 }}>
            생수의 강이 넘치고 영원히 배부를 것입니다. <br/>
            주님과 얼굴을 대면하여 먹고 마시는 <br/>
            <b>지성소의 하루</b>가 시작됩니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '420px', margin: '0 auto 30px auto' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
            <button key={m} onClick={() => { setSelectedMonth(m); setView('calendar'); }}
              style={{ padding: '22px 0', backgroundColor: 'white', border: '1px solid #d6d3d1', borderRadius: '12px', color: '#4b2c20', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>{m}월</button>
          ))}
        </div>
        
        <div style={{ padding: '15px', fontSize: '14px', color: '#78350f', fontStyle: 'italic', lineHeight: '1.6' }}>
          "B.C.의 나와 A.D.의 나는 달라진다" <br/>
          본질을 보는 능력이 생기는 영적 패러다임의 전환
        </div>
      </div>
    );
  }

  if (view === 'calendar') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '30px 20px', fontFamily: 'serif' }}>
        <button onClick={() => setView('menu')} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#4b2c20', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>🏠 홈으로 돌아가기</button>
        <h2 style={{ textAlign: 'center', color: '#4b2c20', marginBottom: '30px', fontSize: '26px' }}>{selectedMonth}월 왕의 식탁</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', maxWidth: '420px', margin: '0 auto' }}>
          {meditationData.filter(d => d.month === selectedMonth).sort((a,b) => a.day - b.day).map(d => (
            <button key={d.id} onClick={() => { setSelectedData(d); setView('detail'); }}
              style={{ padding: '18px 5px', backgroundColor: 'white', border: '1px solid #e7e5e4', borderRadius: '10px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>{d.day}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', backgroundColor: 'white', borderRadius: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
        {/* 성막 4색 휘장 */}
        <div style={{ height: '8px', display: 'flex' }}>
          <div style={{ flex: 1, backgroundColor: '#0000FF' }}></div>
          <div style={{ flex: 1, backgroundColor: '#8B00FF' }}></div>
          <div style={{ flex: 1, backgroundColor: '#FF0000' }}></div>
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderBottom: '1px solid #eee' }}></div>
        </div>
        
        <div style={{ backgroundColor: '#4b2c20', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('calendar')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>◀ 목록</button>
          <span style={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '18px' }}>KING'S TABLE</span>
          <button onClick={() => setView('menu')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>🏠 홈</button>
        </div>

        <div style={{ padding: '35px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#92400e', fontSize: '15px', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>{selectedData.month}월 {selectedData.day}일 거룩한 만찬</span>
            <h2 style={{ fontSize: '28px', color: '#1a1a1a', margin: '0', lineHeight: '1.2' }}>{selectedData.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            {/* 1. Miqra - 진설병의 말씀 */}
            <section>
              <h3 style={{ color: '#555', fontSize: '17px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ backgroundColor: '#555', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px' }}>1</span> 1. Miqra : 말씀 경청
              </h3>
              <div style={{ backgroundColor: '#fafaf9', padding: '25px', borderRadius: '18px', border: '1px solid #e7e5e4' }}>
                <p style={{ fontSize: '19px', color: '#000', lineHeight: '1.8', fontWeight: '500', margin: 0, textAlign: 'center' }}>"{selectedData.verseText}"</p>
                <p style={{ fontSize: '15px', color: '#92400e', marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>— {selectedData.verse} —</p>
              </div>
            </section>

            {/* 2. Lishma - 번제단과 물두멍 */}
            <section>
              <h3 style={{ color: '#0000FF', fontSize: '17px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ backgroundColor: '#0000FF', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px' }}>2</span> 2. Lishma : 나를 비움
              </h3>
              <p style={{ fontSize: '17px', color: '#333', lineHeight: '1.8', margin: 0, paddingLeft: '34px' }}>{selectedData.lishma_content}</p>
            </section>

            {/* 3. Tota - 성령의 조명과 체화 */}
            <section>
              <h3 style={{ color: '#8B00FF', fontSize: '17px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ backgroundColor: '#8B00FF', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px' }}>3</span> 3. Tota : 하나님 체화
              </h3>
              <p style={{ fontSize: '17px', color: '#1a1a1a', lineHeight: '1.8', margin: 0, paddingLeft: '34px', fontWeight: 'bold' }}>{selectedData.tota_content}</p>
            </section>

            {/* 4. Christo - 향단의 결단과 지성소 파송 */}
            <section style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '20px', border: '1px solid #fed7d7' }}>
              <h3 style={{ color: '#FF0000', fontSize: '17px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ backgroundColor: '#FF0000', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px' }}>4</span> 4. Christo : 성육신과 파송
              </h3>
              <p style={{ fontSize: '17px', color: '#333', lineHeight: '1.8', margin: 0, paddingLeft: '10px' }}>{selectedData.christo_content}</p>
              <div style={{ marginTop: '20px', fontSize: '14px', color: '#c53030', fontStyle: 'italic', borderLeft: '4px solid #FF0000', paddingLeft: '15px', fontWeight: 'bold' }}>
                "지성소의 주님을 만난 당신, 이제 세상 속의 살아있는 말씀으로 살아내십시오." (롬 12:1)
              </div>
            </section>
          </div>

          <button onClick={() => { alert('지성소의 만찬을 마쳤습니다. 주님과 함께 세상을 향해 나갑니다.'); setView('menu'); }} 
            style={{ width: '100%', marginTop: '50px', padding: '22px', backgroundColor: '#4b2c20', color: 'white', border: 'none', borderRadius: '18px', fontWeight: 'bold', fontSize: '20px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(75, 44, 32, 0.4)' }}>만찬 완료</button>
        </div>
      </div>
    </div>
  );
}
