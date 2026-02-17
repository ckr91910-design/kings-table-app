import React, { useState, useEffect } from 'react';
import { 
  Crown, BookOpen, User, Home, ArrowLeft, Droplets, Flame, Sparkles, ChevronDown 
} from 'lucide-react';

/**
 * 왕의 식탁 365 미리토크 (The King's Banquet)
 * 모든 기능과 디자인이 통합된 최종 메인 파일입니다.
 */

// --- 12개월 테마 데이터 ---
const MONTHS_DATA = [
  { id: 1, title: "1월: 새로운 시작", theme: "결단의 절제", desc: "갈릴리 조반에서 시작되는 초대", icon: "🌅" },
  { id: 2, title: "2월: 사랑과 연결", theme: "사랑의 절제", desc: "신랑 되신 주님의 인격적 사귐", icon: "💖" },
  { id: 3, title: "3월: 생명의 깨어남", theme: "경청의 절제", desc: "영적 감각을 깨우는 말씀 씹기", icon: "🌱" },
  { id: 4, title: "4월: 성장과 고난", theme: "십자가의 절제", desc: "자기 부인과 부활의 실재", icon: "✝️" },
  { id: 5, title: "5월: 감사와 축복", theme: "욕심의 절제", desc: "우리가 곧 주님의 거룩한 성전", icon: "🎁" },
  { id: 6, title: "6월: 성령의 임재", theme: "순종의 절제", desc: "성령의 바람을 타는 동행의 삶", icon: "🔥" },
  { id: 7, title: "7월: 열정과 비전", theme: "집중의 절제", desc: "푯대를 향해 질주하는 사명자", icon: "⚡" },
  { id: 8, title: "8월: 자유와 해방", theme: "멍에의 절제", desc: "진리가 주는 완전한 자유의 노래", icon: "🕊️" },
  { id: 9, title: "9월: 은혜의 예비", theme: "인내의 절제", desc: "결실을 위해 마음의 밭을 기경함", icon: "🏹" },
  { id: 10, title: "10월: 결실과 감사", theme: "공로의 절제", desc: "하나님을 뵙고 먹고 마시는 잔치", icon: "🍇" },
  { id: 11, title: "11월: 화해와 평화", theme: "관용의 절제", desc: "치유와 용납으로 하나 되는 사귐", icon: "🤝" },
  { id: 12, title: "12월: 강림과 탄생", theme: "기다림의 절제", desc: "만물을 새롭게 하시는 왕의 오심", icon: "🌟" },
];

// --- 묵상 데이터 (여기에 365일 데이터를 추가합니다) ---
const SAMPLE_MEDITATIONS = {
  "1-1": {
    title: "갈릴리 조반",
    verse: "와서 조반을 먹으라 (요 21:12)",
    lishma: "실패한 밤의 그물을 씻으십시오. 결과 중심의 헬라식 사고를 물두멍에 던지고 오직 나를 위해 숯불을 피우신 주님의 이름을 위하여 나를 비웁니다.",
    tota: "주님이 구워주신 생선의 따뜻함이 내 영혼의 창자에 채워집니다. 나는 사랑받는 자입니다.",
    christo: "배부른 베드로가 사명을 받았듯, 오늘 나는 주님의 사랑으로 배불러 세상을 향해 나갑니다."
  },
  "5-16": {
    title: "내가 곧 주님의 성전",
    verse: "함께 지어져 가느니라 (엡 2:22)",
    lishma: "인생을 내 취향대로 지으려던 욕심의 도면을 씻어내십시오. 하나님이 거하시기에 편안한 깨끗한 처소가 되기 위해 나를 비웁니다.",
    tota: "나는 움직이는 지성소라는 정체성을 뼈와 근육에 새기십시오. 나는 주님을 모시고 다닙니다.",
    christo: "오늘 당신이 걷는 모든 길이 성전의 지경입니다. 만나는 사람들에게 주님의 임재를 서빙하십시오."
  }
};

// --- 성막 배경 컴포넌트 ---
const TabernacleBackground = ({ children, className = "" }) => (
  <div className={`relative min-h-screen overflow-hidden ${className}`}>
    <div className="absolute inset-0 z-0 bg-[#0A0514]">
      {/* 몽환적인 조명 효과 */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#0A192F] blur-[120px] opacity-40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#1A0B2E] blur-[120px] opacity-40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#2B0505] blur-[150px] opacity-30 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/linen-design.png')` }}></div>
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); 
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToDetail = (month, day) => {
    setSelectedMonth(month);
    setSelectedDay(day);
    setActiveTab('detail');
    window.scrollTo(0, 0);
  };

  // 1. 홈 화면
  const renderHome = () => (
    <TabernacleBackground className="animate-in fade-in duration-1000">
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-12 max-w-6xl relative z-10">
          <div className="flex justify-center">
            <Crown size={110} className="text-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.7)] animate-bounce" />
          </div>
          
          <div className="space-y-6">
            <p className="font-serif italic text-[#F3E5AB]/70 text-2xl md:text-3xl tracking-wide">
              "그들은 하나님을 뵙고 먹고 마셨더라"
            </p>
            <h1 className="text-6xl md:text-[8rem] font-black text-white font-serif leading-none tracking-tighter drop-shadow-2xl">
              왕의 식탁<br />
              <span className="text-[#D4AF37]">365 미리토크</span>
            </h1>
            <p className="text-white/40 font-serif text-xl md:text-2xl leading-relaxed italic px-10 py-4">
              "볼지어다 내가 문 밖에 서서 두드리노니 <br className="hidden md:block"/> 누구든지 내 음성을 듣고 문을 열면..."
            </p>
          </div>

          <div className="pt-12">
            <button 
              onClick={() => setActiveTab('menu')}
              className="bg-[#D4AF37] text-[#1A0B2E] px-16 py-6 rounded-full font-black text-lg tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] uppercase"
            >
              만찬에 참여하기
            </button>
          </div>
        </div>
      </section>
    </TabernacleBackground>
  );

  // 2. 메뉴 화면
  const renderMenu = () => (
    <TabernacleBackground className="animate-in fade-in duration-700 pt-32 pb-48 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <Crown size={48} className="text-[#D4AF37] mx-auto" />
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">365 성막 만찬</h2>
          <p className="text-[#F3E5AB]/50 text-xl font-light italic">"휘장을 지나 왕이 예비하신 식탁으로 나오십시오."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MONTHS_DATA.map(m => (
            <div key={m.id} className="bg-white/[0.03] rounded-[3rem] p-10 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <span className="text-5xl">{m.icon}</span>
                <span className="bg-[#D4AF37] text-[#0A0514] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">{m.theme}</span>
              </div>
              <h3 className="text-3xl font-serif font-black text-white mb-2">{m.title}</h3>
              <p className="text-white/30 text-xs mb-8 font-light italic">{m.desc}</p>
              
              <div className="grid grid-cols-6 gap-2">
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const meditationKey = `${m.id}-${day}`;
                  const isAvailable = SAMPLE_MEDITATIONS[meditationKey];
                  return (
                    <button 
                      key={day}
                      onClick={() => isAvailable ? navigateToDetail(m.id, day) : null}
                      className={`h-10 rounded-xl text-xs font-bold transition-all border
                        ${isAvailable 
                          ? 'bg-[#D4AF37] text-[#0A0514] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer hover:scale-110' 
                          : 'bg-transparent text-white/10 border-white/5 cursor-default'}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TabernacleBackground>
  );

  // 3. 상세 화면
  const renderDetail = () => {
    const data = SAMPLE_MEDITATIONS[`${selectedMonth}-${selectedDay}`] || SAMPLE_MEDITATIONS["1-1"];
    return (
      <TabernacleBackground className="pt-32 pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setActiveTab('menu')}
            className="flex items-center gap-2 text-white/30 hover:text-[#D4AF37] mb-16 font-bold uppercase text-xs tracking-[0.3em] transition-colors"
          >
            <ArrowLeft size={16} /> 메뉴로 돌아가기
          </button>

          <article className="space-y-32">
            <header className="text-center space-y-8">
              <div className="inline-block px-8 py-2 bg-white/5 text-[#D4AF37] text-xs font-black rounded-full tracking-[0.3em] uppercase border border-[#D4AF37]/20">
                {selectedMonth}월 {selectedDay}일 거룩한 만찬
              </div>
              <h2 className="text-6xl md:text-8xl font-serif font-black text-white leading-none tracking-tighter">{data.title}</h2>
            </header>

            <section className="text-center space-y-8">
              <blockquote className="text-3xl md:text-5xl font-serif font-bold text-[#F3E5AB] leading-relaxed italic px-8 py-12 border-y border-white/10">
                "{data.verse}"
              </blockquote>
            </section>

            <div className="text-left space-y-16">
              <section className="bg-[#1A0B2E]/60 rounded-[3rem] p-12 border border-white/10 shadow-2xl">
                <h4 className="text-xl font-black text-[#D4AF37] mb-6 uppercase tracking-[0.3em]">Lishma: 정결</h4>
                <p className="text-2xl text-white/80 leading-relaxed font-light">
                  {data.lishma}
                </p>
              </section>

              <section className="bg-gradient-to-br from-[#2B0505]/80 to-[#0A0514] rounded-[3rem] p-12 border border-white/10 shadow-2xl">
                <h4 className="text-xl font-black text-[#D4AF37] mb-6 uppercase tracking-[0.3em]">Tota: 체화</h4>
                <p className="text-3xl md:text-4xl font-serif font-medium leading-relaxed text-white">
                  {data.tota}
                </p>
              </section>

              <section className="text-center space-y-12">
                 <div className="flex justify-center"><Flame size={64} className="text-white animate-pulse" /></div>
                 <div className="space-y-6">
                   <h4 className="text-xl font-black text-white/30 uppercase tracking-[0.5em]">Christo: 파송</h4>
                   <p className="text-3xl md:text-5xl font-black text-white leading-relaxed italic drop-shadow-lg">"{data.christo}"</p>
                 </div>
              </section>
            </div>
          </article>
        </div>
      </TabernacleBackground>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0514] font-sans text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all px-8 py-6 flex justify-between items-center ${isScrolled ? 'bg-[#0A0514]/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div onClick={() => setActiveTab('home')} className="flex items-center gap-4 cursor-pointer">
          <Crown size={32} className="text-[#D4AF37]" />
          <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase italic">King's Table</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-[#D4AF37]' : ''}>Entrance</button>
          <button onClick={() => setActiveTab('menu')} className={activeTab === 'menu' ? 'text-[#D4AF37]' : ''}>Banquet</button>
        </div>
      </nav>

      <main>
        {activeTab === 'home' && renderHome()}
        {activeTab === 'menu' && renderMenu()}
        {activeTab === 'detail' && renderDetail()}
      </main>

      <footer className="bg-black py-24 px-8 border-t border-white/5 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Crown size={40} className="text-[#D4AF37]" />
              <h5 className="font-serif text-3xl font-black tracking-tighter uppercase">왕의 식탁</h5>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
              하나님을 대면하고 그분의 인격으로 채워지는 365일 성막형 묵상 공동체입니다.
            </p>
          </div>
          <div className="space-y-4 text-white/20 text-[11px] font-medium tracking-widest uppercase">
            <p>섬김이: 이대희 목사 | Email: ckr9191@hanmail.net</p>
            <p>© 2026 THE KING'S BANQUET. ALL ROYALTY RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
