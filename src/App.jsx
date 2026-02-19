import React, { useState, useEffect } from 'react';

// 1월 데이터: 미크라(성경구절)를 최우선으로 배치
const meditationData = [
  { 
    id: 1, 
    title: "갈릴리 조반", 
    miqra: "예수께서 이르시되 와서 조반을 먹으라 하시니 제자들이 주님이신 줄 아는 고로 당신이 누구냐 감히 묻는 자가 없더라 (요한복음 21:12)", 
    lishma: "결과 중심의 헬라식 사고를 물두멍에 던지십시오. 실패한 밤의 그물을 씻어내고 나를 비웁니다.", 
    tota: "주님이 구워주신 생선의 따뜻함이 창자에 채워집니다. 나는 사랑받는 자라는 정체성을 채웁니다.", 
    christo: "사명을 받은 베드로처럼 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다." 
  },
  { 
    id: 2, 
    title: "비둘기 눈", 
    miqra: "내 사랑아 너는 어여쁘고 어여쁘다 네 눈이 비둘기 같구나 (아가 1:15)", 
    lishma: "복잡한 계산과 염려로 혼탁해진 눈을 씻어내십시오. 오직 주님만 바라보도록 내 욕심을 비웁니다.", 
    tota: "주님이 보시는 나의 아름다움을 창자에 채우십시오. 나는 주님의 보석입니다.", 
    christo: "오늘 만나는 사람들에게 주님의 따뜻한 시선을 전달하는 통로가 되십시오." 
  }
];

export default function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [memo, setMemo] = useState("");

  useEffect(() => {
    const savedMemo = localStorage.getItem(`memo-${currentDay}`);
    setMemo(savedMemo || "");
  }, [currentDay]);

  const data = meditationData.find(d => d.id === currentDay) || meditationData[0];

  const handleNextDay = () => {
    localStorage.setItem(`memo-${currentDay}`, memo);
    if (currentDay < meditationData.length) {
      setCurrentDay(prev => prev + 1);
      setMemo("");
      window.scrollTo(0, 0);
    } else {
      alert("오늘의 만찬을 마쳤습니다. 왕의 통치가 시작됩니다!");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f4', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        
        {/* 헤더: 자색(왕권) 테마 */}
        <div style={{ backgroundColor: '#4a148c', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', margin: 0, letterSpacing: '2px', fontWeight: 'bold' }}>KING'S TABLE</h1>
          <p style={{ fontSize: '13px', opacity: 0.9, marginTop: '8px' }}>“그들은 하나님을 뵙고 먹고 마셨더라”</p>
        </div>

        <div style={{ padding: '25px' }}>
          {/* 1단계: 미크라 (가장 크게 강조) */}
          <div style={{ marginBottom: '35px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: '#e1f5fe', color: '#01579b', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
              STAGE 01: MIQRA (소환)
            </div>
            <h2 style={{ fontSize: '20px', color: '#212121', marginBottom: '20px' }}>1월 {currentDay}일 : {data.title}</h2>
            <div style={{ padding: '25px', backgroundColor: '#fff8e1', borderRadius: '15px', border: '1px solid #ffd54f', position: 'relative' }}>
               <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3e2723', fontWeight: '600', margin: 0, wordBreak: 'keep-all' }}>
                 "{data.miqra}"
               </p>
            </div>
            <p style={{ fontSize: '13px', color: '#795548', marginTop: '12px', fontStyle: 'italic' }}>왕의 음성을 영혼에 소환하여 경청하십시오.</p>
          </div>

          {/* 나머지 단계: 리쉬마, 토타, 크리스토 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', borderLeft: '4px solid #78909c', backgroundColor: '#f8f9fa' }}>
              <h3 style={{ fontSize: '15px', color: '#455a64', marginBottom: '5px', fontWeight: 'bold' }}>02 LISHMA (정결)</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.lishma}</p>
            </div>

            <div style={{ padding: '15px', borderLeft: '4px solid #fb8c00', backgroundColor: '#fff3e0' }}>
              <h3 style={{ fontSize: '15px', color: '#e65100', marginBottom: '5px', fontWeight: 'bold' }}>03 TOTA (체화)</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.tota}</p>
            </div>

            <div style={{ padding: '15px', borderLeft: '4px solid #c62828', backgroundColor: '#ffebee' }}>
              <h3 style={{ fontSize: '15px', color: '#b71c1c', marginBottom: '5px', fontWeight: 'bold' }}>04 CHRISTO (파송)</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.christo}</p>
            </div>
          </div>

          {/* 실천 메모 */}
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', color: '#212121' }}>📝 나의 실천 메모</h3>
            <textarea
              style={{ width: '100%', height: '100px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '14px', outline: 'none', backgroundColor: '#fafafa' }}
              placeholder="오늘 입힌 왕의 인격을 어떻게 나타내겠습니까?"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </div>

          <button onClick={handleNextDay} style={{ width: '100%', marginTop: '20px', padding: '18px', backgroundColor: '#4a148c', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(74, 20, 140, 0.3)' }}>
            만찬 완료 : 파송
          </button>
        </div>

        <div style={{ padding: '20px', textAlign: 'center', fontSize: '11px', color: '#9e9e9e', backgroundColor: '#f5f5f5' }}>
          <p style={{ margin: 0 }}>섬김이: 이대희 목사 | ckr9191@hanmail.net</p>
          <p style={{ marginTop: '4px' }}>© 2026 THE KING'S BANQUET. DESIGNED FOR THE ROYAL PRIESTHOOD.</p>
        </div>
      </div>
    </div>
  );
}
