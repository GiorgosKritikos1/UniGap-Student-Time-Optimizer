import ChatbotDemo from './components/ChatbotDemo.jsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, BadgeCheck, Clock3, Globe2, GraduationCap, Layers3, MapPin, MousePointerClick, Sparkles } from 'lucide-react';
import { defaultPreferences, recommendPlans, student } from './mockData.js';
import { AppHeader, BottomNav, Brand } from './components/UI.jsx';
import Dashboard from './screens/Dashboard.jsx';
import Recommendations from './screens/Recommendations.jsx';
import MapView from './screens/MapView.jsx';
import Profile from './screens/Profile.jsx';

const THEME_KEY = 'unigap-theme';
const PREF_KEY = 'unigap-preferences';

function readPreference(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function readTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored === 'dark';
  } catch { /* Private mode may deny storage */ }
  return false;
}

const titles = {
  recommendations: ['Τα πλάνα σου', 'Μικρές ιδέες, μεγάλη διαφορά'],
  map: ['Χάρτης περιοχής', 'Βρες το επόμενο αγαπημένο σου spot'],
  profile: ['Το προφίλ μου', 'Φτιάξε την εμπειρία στα μέτρα σου'],
};

export default function App() {
  const [tab, setTab] = useState('dashboard');
  const [dark, setDark] = useState(readTheme);
  const [mood, setMood] = useState('study');
  const [budget, setBudget] = useState(2);
  const [preferences, setPreferences] = useState(() => ({ ...defaultPreferences, ...readPreference(PREF_KEY, {}) }));
  const [skippedIds, setSkippedIds] = useState([]);
  const [acceptedPlan, setAcceptedPlan] = useState(null);
  const [toast, setToast] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch { /* Optional persistence */ }
  }, [dark]);

  useEffect(() => {
    try { localStorage.setItem(PREF_KEY, JSON.stringify(preferences)); } catch { /* Optional persistence */ }
  }, [preferences]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2700);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const recommendations = useMemo(
    () => recommendPlans({ mood, budget, preferences, skippedIds }),
    [mood, budget, preferences, skippedIds]
  );

  const navigate = (nextTab) => {
    setTab(nextTab);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const chooseMood = (value) => {
    setMood(value);
    setSkippedIds([]);
  };
  const chooseBudget = (value) => {
    setBudget(value);
    setSkippedIds([]);
  };

  const acceptPlan = (plan) => {
    setAcceptedPlan(plan);
    setToast(`Επέλεξες το ${plan.title}!`);
  };

  const skipPlan = (id) => {
    setSkippedIds((current) => current.includes(id) ? current : [...current, id]);
    setToast('Ανανεώσαμε τις προτάσεις σου (demo).');
  };

  const resetPreferences = () => {
    setPreferences({ ...defaultPreferences });
    setSkippedIds([]);
    setToast('Οι προτιμήσεις επανήλθαν.');
  };

  const screen = tab === 'dashboard'
    ? <Dashboard mood={mood} onMood={chooseMood} budget={budget} onBudget={chooseBudget} onGenerate={() => navigate('recommendations')} onSeePlans={() => navigate('recommendations')}/>
    : tab === 'recommendations'
      ? <Recommendations recommendations={recommendations} mood={mood} budget={budget} acceptedPlan={acceptedPlan} onAccept={acceptPlan} onSkip={skipPlan} onReset={() => setSkippedIds([])} onMap={() => navigate('map')}/>
      : tab === 'map'
        ? <MapView maxWalking={preferences.maxWalking}/>
        : <Profile dark={dark} onTheme={() => setDark((value) => !value)} preferences={preferences} onPreferences={setPreferences} onReset={resetPreferences}/>;

  return (
    <div className="app-stage flex min-h-[100dvh] items-center justify-center overflow-hidden px-0 py-0 sm:px-6 sm:py-5">
      <div className="stage-glow pointer-events-none absolute -left-40 top-1/4 hidden h-96 w-96 rounded-full lg:block" aria-hidden="true"/>
      <div className="stage-glow2 pointer-events-none absolute -right-52 -top-28 hidden h-[560px] w-[560px] rounded-full lg:block" aria-hidden="true"/>
      <div className="app-layout relative z-10 flex w-full max-w-[1090px] items-center justify-center gap-14 lg:justify-between">
        <aside className="preview-intro hidden max-w-[510px] flex-1 lg:block">
          <div className="mb-14"><Brand /></div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#b6dbc6] bg-white/70 px-4 py-2 text-xs font-extrabold tracking-wide text-[#087956] dark:border-[#315b42] dark:bg-[#203e2c] dark:text-[#a3e7b8]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#15996d]"/> INTERACTIVE PRODUCT PREVIEW</span>
          <h1 className="mt-7 text-[clamp(45px,4.3vw,67px)] leading-[1.09] font-black tracking-[-.075em] text-[#17392a] dark:text-[#e6fae9]">Make the most<br/>of <span className="relative text-[#0d9569]">your gaps.<svg aria-hidden="true" viewBox="0 0 205 20" fill="none" className="absolute -bottom-3 left-0 h-5 w-full"><path d="M4 14C61 0 146 0 200 10" stroke="#afd456" strokeWidth="7" strokeLinecap="round"/></svg></span></h1>
          <p className="mt-8 max-w-[430px] text-[15px] leading-[1.9] text-[#6e8a76] dark:text-[#a5c0ad]">Το έξυπνο κενό ανάμεσα στα μαθήματα. Ανακάλυψε δραστηριότητες που ταιριάζουν στον χρόνο, τη διάθεση και το budget σου.</p>
          <div className="mt-10 grid max-w-[460px] grid-cols-2 gap-3">
            <div className="rounded-[23px] border border-white/90 bg-white/55 p-5 backdrop-blur dark:border-[#3c5643] dark:bg-[#203b2d]/70"><Sparkles size={24} className="text-[#0b9569]"/><p className="mt-3 text-[19px] font-black text-[#264b34] dark:text-[#d9f9e2]">Smart plans</p><p className="mt-1 text-xs leading-5 text-[#809787] dark:text-[#a3baa8]">Προσομοιωμένες προσωποποιημένες προτάσεις</p></div>
            <div className="rounded-[23px] border border-white/90 bg-white/55 p-5 backdrop-blur dark:border-[#3c5643] dark:bg-[#203b2d]/70"><MapPin size={24} className="text-[#0b9569]"/><p className="mt-3 text-[19px] font-black text-[#264b34] dark:text-[#d9f9e2]">Near campus</p><p className="mt-1 text-xs leading-5 text-[#809787] dark:text-[#a3baa8]">Χάρτης και κοντινά σημεία σε demo μορφή</p></div>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5 text-xs font-bold text-[#779280] dark:text-[#aac1ad]"><span className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-[#0d9d6e]"/> React + Vite</span><span className="flex items-center gap-1.5"><Globe2 size={16} className="text-[#0d9d6e]"/> Browser-first</span><span className="flex items-center gap-1.5"><MousePointerClick size={16} className="text-[#0d9d6e]"/> Fully clickable</span></div>
        </aside>
        <div className="phone-frame relative flex h-[100dvh] w-full shrink-0 flex-col overflow-hidden bg-[#f9fbf8] shadow-[0_32px_100px_rgba(20,57,34,.22)] sm:h-[min(870px,calc(100dvh-44px))] sm:w-[430px] sm:rounded-[39px] sm:border-[7px] sm:border-[#1d3528] dark:bg-[#101e19] sm:dark:border-[#2c3d34]">
          <div className="phone-notch hidden h-[24px] shrink-0 items-center justify-center bg-[#f9fbf8] sm:flex dark:bg-[#101e19]" aria-hidden="true"><div className="h-3 w-28 rounded-b-[14px] bg-[#1d3528] dark:bg-[#2c3d34]"/></div>
          <AppHeader title={titles[tab]?.[0]} subtitle={titles[tab]?.[1]} dark={dark} onToggle={() => setDark((value) => !value)}/>
          <main ref={scrollRef} id="main-content" className="scrollbar-thin min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[90px] pt-5" tabIndex={-1}>
            {screen}
          </main>
          {toast && <div role="status" aria-live="polite" className="pointer-events-none absolute bottom-[89px] left-1/2 z-50 w-[calc(100%-40px)] -translate-x-1/2 rounded-2xl bg-[#163b2b] px-4 py-3 text-center text-[12px] font-bold text-white shadow-xl dark:bg-[#e2fbe9] dark:text-[#173d2b]">{toast}</div>}
          <ChatbotDemo />
          <BottomNav active={tab} onChange={navigate}/>
        </div>
      </div>
    </div>
  );
}
