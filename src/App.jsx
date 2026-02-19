import React, { useState, useEffect } from 'react';

// 2월 19일부터 3월 31일까지의 만찬 데이터
const meditationData = [
  // --- 2월: 사랑과 연결 ---
  { id: 19, month: 2, title: "겸손의 허리띠", miqra: "다 서로 겸손으로 허리를 동이라 하나님은 교만한 자를 대적하시되 겸손한 자들에게는 은혜를 주시느니라 (벧전 5:5)", lishma: "인정받으려 했던 사심을 씻어내십시오. 은혜만을 갈망하며 나를 낮추어 비웁니다.", tota: "겸손한 자에게 부어주시는 하늘의 충만함을 창자에 채우십시오. 비울수록 부요해집니다.", christo: "모든 공로를 주님께 돌리십시오. 당신의 겸손함이 주님의 영광을 드러낼 것입니다." },
  { id: 20, month: 2, title: "평화의 사도", miqra: "할 수 있거든 너희로서는 모든 사람과 더불어 화목하라 (로 12:18)", lishma: "타인을 꺾으려던 공격성과 분노를 씻으십시오. 평강의 왕을 모시기 위해 분노를 비웁니다.", tota: "폭풍 속에서도 잠잠한 주님의 평안을 창자에 채우십시오. 평화는 성도의 능력입니다.", christo: "갈등이 있는 곳에서 화평의 다리가 되십시오. 당신은 하나님의 아들이라 일컬음을 받을 것입니다." },
  { id: 28, month: 2, title: "축복의 통로", miqra: "땅의 모든 족속이 너로 말미암아 복을 얻을 것이니라 (창 12:3)", lishma: "나만 복되려 움켜쥐려 했던 탐욕을 씻으십시오. 축복의 전달자가 되기 위해 소유권을 비웁니다.", tota: "내가 주님의 은혜가 흘러가는 거룩한 관이 되었음을 창자에 새기십시오.", christo: "오늘 모든 이에게 축복의 말을 서빙하십시오. 당신을 통해 주님 나라가 확장됩니다. [cite: 165]" },

  // --- 3월: 생명의 깨어남 ---
  { id: 1, month: 3, title: "눈을 열어서", miqra: "이에 그들의 눈이 밝아져 그인 줄 알아보더니... 우리 속에서 마음이 뜨겁지 아니하더냐 (눅 24:31-32)", lishma: "영적으로 둔해진 눈을 물두멍에 씻으십시오. 보이는 것만 신뢰하던 불신앙을 비웁니다. [cite: 178]", tota: "주님께서 내 영안을 여시는 순간을 창자로 느끼십시오. 말씀으로 마음이 뜨거워집니다. [cite: 179-180]", christo: "오늘 당신의 영안이 열려 있습니다. 일상 속에서 주님의 임재와 손길을 발견하십시오. [cite: 181]" },
  { id: 15, month: 3, title: "경이로움", miqra: "하늘이 하나님의 영광을 선포하고 궁창이 그의 손으로 하신 일을 나타내는도다 (시 19:1)", lishma: "일상을 당연하게 여기던 무감각함을 씻으십시오. 창조 세계를 배경으로만 보던 둔함을 비웁니다. [cite: 187]", tota: "하늘과 땅이 선포하는 영광이 내 창자를 감동시키게 하십시오. 영적 감수성이 회복됩니다. [cite: 188-189]", christo: "오늘 모든 것 속에서 창조주의 영광을 발견하십시오. 그 신선한 감동을 이웃과 나누십시오. [cite: 190-191]" },
  { id: 31, month: 3, title: "신묘막측한 창조", miqra: "나를 지으심이 심히 기묘하심이라 주께서 하시는 일이 기이함을 내 영혼이 잘 아나이다 (시 139:14)", lishma: "무뎌진 감각으로 일상을 지루하게 여겼던 사실을 씻으십시오. 기적을 당연시하던 오만을 비웁니다. [cite: 196]", tota: "내 존재 자체가 주님의 위대한 작품임을 창자에 새기십시오. 경이로움이 영혼의 배부름이 됩니다. [cite: 197]", christo: "당신은 살아있는 조각품입니다. 당신의 인격을 통해 주님의 놀라운 솜씨를 세상에 맛보게 하십시오. [cite: 199]" }
];

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0); // 2월 19일부터 시작
  const [memo, setMemo] = useState("");

  const data = meditationData[currentIdx] || meditationData[0];

  useEffect(() => {
    const savedMemo = localStorage.getItem(`memo-${data.month}-${data.id}`);
    setMemo(savedMemo || "");
  }, [currentIdx]);

  const handleNext = () => {
    localStorage.setItem(`memo-${data.month}-${data.id}`, memo);
    if (currentIdx < meditationData.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setMemo("");
      window.scrollTo(0, 0);
    } else {
      alert("3월의 모든 만찬을 마쳤습니다. 4월의 성장을 준비하십시오!");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfaf6', padding: '15px', fontFamily: 'serif' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        
        {/* 헤더: 월별 테마 색상 적용 */}
        <div style={{ backgroundColor: data.month === 2 ? '#4a148c' : '#2e7d32', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', margin: 0, letterSpacing: '2px', fontWeight: 'bold' }}>KING'S TABLE</h1>
          <p style={{ fontSize: '13px', opacity: 0.9, marginTop: '8px' }}>
            {data.month}월: {data.month === 2 ? "사랑과 연결" : "생명의 깨어남"} 
          </p>
        </div>

        <div style={{ padding: '25px' }}>
          <div style={{ marginBottom: '35px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: '#e1f5fe', color: '#01579b', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
              STAGE 01: MIQRA (소환) [cite: 20]
            </div>
            <h2 style={{ fontSize: '20px', color: '#212121', marginBottom: '20px' }}>{data.month}월 {data.id}일 : {data.title}</h2>
            <div style={{ padding: '25px', backgroundColor: '#fff8e1', borderRadius: '15px', border: '1px solid #ffd54f' }}>
               <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#3e2723', fontWeight: '600', margin: 0, wordBreak: 'keep-all' }}>
                 "{data.miqra}"
               </p>
            </div>
            <p style={{ fontSize: '13px', color: '#795548', marginTop: '12px', fontStyle: 'italic' }}>왕의 음성을 영혼에 소환하십시오. [cite: 22]</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', borderLeft: '4px solid #78909c', backgroundColor: '#f8f9fa' }}>
              <h3 style={{ fontSize: '15px', color: '#455a64', marginBottom: '5px', fontWeight: 'bold' }}>02 LISHMA (정결) [cite: 28]</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.lishma}</p>
            </div>

            <div style={{ padding: '15px', borderLeft: '4px solid #fb8c00', backgroundColor: '#fff3e0' }}>
              <h3 style={{ fontSize: '15px', color: '#e65100', marginBottom: '5px', fontWeight: 'bold' }}>03 TOTA (체화) [cite: 36]</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.tota}</p>
            </div>

            <div style={{ padding: '15px', borderLeft: '4px solid #c62828', backgroundColor: '#ffebee' }}>
              <h3 style={{ fontSize: '15px', color: '#b71c1c', marginBottom: '5px', fontWeight: 'bold' }}>04 CHRISTO (파송) [cite: 45]</h3>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>{data.christo}</p>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', color: '#212121' }}>📝 오늘의 실천 메모</h3>
            <textarea
              style={{ width: '100%', height: '100px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '14px', outline: 'none', backgroundColor: '#fafafa', boxSizing: 'border-box' }}
              [cite_start]placeholder="오늘 받은 깨달음을 기록하십시오... [cite: 1398]"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </div>

          <button onClick={handleNext} style={{ width: '100%', marginTop: '20px', padding: '18px', backgroundColor: data.month === 2 ? '#4a148c' : '#2e7d32', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            만찬 완료 및 다음 날 이동
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
