import React from 'react';
import {
  ArrowLeft, Bell, CalendarDays, Compass, MapPinned, Moon, Sparkles,
  Sun, UserRound, ChevronRight, Check, Clock3, MapPin, Wallet,
} from 'lucide-react';

export function Brand({ small = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${small ? 'h-9 w-9 rounded-xl' : 'h-11 w-11 rounded-[15px]'} grid place-items-center bg-[#087759] shadow-[0_6px_14px_rgba(8,119,89,.17)]`}>
        <span className={`${small ? 'text-lg' : 'text-[23px]'} font-black tracking-tight text-white`}>u<span className="text-[#e5f88b]">.</span></span>
      </div>
      <div>
        <div className={`${small ? 'text-lg' : 'text-[21px]'} leading-none font-black tracking-[-0.08em] text-[#102921] dark:text-white`}>unigap<span className="text-[#10a379]">.</span></div>
        {!small && <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#7f968b] dark:text-slate-400">MAKE YOUR TIME COUNT</p>}
      </div>
    </div>
  );
}

export function ThemeButton({ dark, onToggle }) {
  return (
    <button type="button" onClick={onToggle} aria-label={dark ? 'Ενεργοποίηση φωτεινού θέματος' : 'Ενεργοποίηση σκοτεινού θέματος'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[#e5ede8] bg-white text-[#2b473d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f1f7f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-[#293c35] dark:bg-[#182c25] dark:text-[#e3f4e8] dark:hover:bg-[#254238]">
      {dark ? <Sun size={19} strokeWidth={2.1} /> : <Moon size={19} strokeWidth={2.1} />}
    </button>
  );
}

export function AppHeader({ title, subtitle, dark, onToggle, back, onBack }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#edf0eb]/80 bg-[#f9fbf8]/95 px-5 pb-3 pt-4 backdrop-blur-xl dark:border-[#273a32] dark:bg-[#101e19]/95">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {back && <button type="button" onClick={onBack} aria-label="Πίσω" className="-ml-1 rounded-xl p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ArrowLeft size={20}/></button>}
          {title ? (
            <div className="min-w-0">
              <h1 className="truncate text-[19px] font-extrabold tracking-[-.05em] text-[#162d25] dark:text-[#f4fff6]">{title}</h1>
              <p className="mt-0.5 truncate text-[11px] font-semibold text-[#91a197] dark:text-slate-400">{subtitle}</p>
            </div>
          ) : <Brand small />}
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-[#d5eee0] bg-[#e8f8ed] px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-[#137653] dark:border-[#295840] dark:bg-[#1f4432] dark:text-[#9bdfb7]">DEMO</span>
          <ThemeButton dark={dark} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
}

const tabs = [
  { id: 'dashboard', label: 'Αρχική', icon: CalendarDays },
  { id: 'recommendations', label: 'Πλάνα', icon: Sparkles },
  { id: 'map', label: 'Χάρτης', icon: MapPinned },
  { id: 'profile', label: 'Προφίλ', icon: UserRound },
];

export function BottomNav({ active, onChange }) {
  return (
    <nav aria-label="Κύρια πλοήγηση" className="absolute inset-x-0 bottom-0 z-40 border-t border-[#e3eae3] bg-white/97 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 shadow-[0_-9px_35px_rgba(10,40,30,.055)] backdrop-blur-xl dark:border-[#293e35] dark:bg-[#13241d]/97">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" onClick={() => onChange(id)} aria-current={active === id ? 'page' : undefined}
            className={`flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-2xl px-1 transition focus-visible:outline-2 focus-visible:outline-emerald-500 ${active === id ? 'text-[#08795a] dark:text-[#8be0b0]' : 'text-[#96a59b] hover:text-[#446456] dark:text-[#718e7e] dark:hover:text-[#cce9d5]'}`}>
            <div className={`grid h-7 w-12 place-items-center rounded-full transition ${active === id ? 'bg-[#dbf4e5] dark:bg-[#214c39]' : ''}`}><Icon size={19} strokeWidth={active === id ? 2.5 : 1.9}/></div>
            <span className="text-[10px] font-bold">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export function SectionTitle({ eyebrow, title, action, onAction }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-2">
      <div>
        {eyebrow && <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[.17em] text-[#12946e] dark:text-[#6bc9a0]">{eyebrow}</p>}
        <h2 className="text-[18px] font-extrabold tracking-[-.05em] text-[#1a3428] dark:text-[#edfff2]">{title}</h2>
      </div>
      {action && <button type="button" onClick={onAction} className="flex items-center gap-0.5 text-[11px] font-extrabold text-[#088466] hover:underline dark:text-[#84dbad]">{action}<ChevronRight size={15}/></button>}
    </div>
  );
}

export function IconStat({ icon: Icon, text, className = '' }) {
  return <span className={`inline-flex items-center gap-1 text-[11px] font-semibold text-[#8b9d93] dark:text-[#a9bcb0] ${className}`}><Icon size={13}/>{text}</span>;
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)}
      className={`relative h-[27px] w-[47px] shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${checked ? 'bg-[#088961]' : 'bg-[#d6e2da] dark:bg-[#44584b]'}`}>
      <span className={`absolute top-[3px] left-[3px] h-[21px] w-[21px] rounded-full bg-white shadow-sm transition-transform ${checked ? 'translate-x-[20px]' : ''}`}/>
    </button>
  );
}

export function EmptyState({ title, description, action, onAction }) {
  return <div className="rounded-[26px] border border-dashed border-[#c8dfd0] bg-white/60 px-5 py-10 text-center dark:border-[#3b5545] dark:bg-[#1a2e24]">
    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-[#e5f7ec] text-[#178664] dark:bg-[#244735] dark:text-[#8fe0b5]"><Compass size={22}/></div>
    <h3 className="text-base font-extrabold text-[#234034] dark:text-[#f0fff3]">{title}</h3>
    <p className="mt-2 text-xs leading-5 text-[#91a298] dark:text-slate-400">{description}</p>
    {action && <button className="mt-5 rounded-xl bg-[#08795a] px-4 py-2.5 text-xs font-bold text-white" onClick={onAction}>{action}</button>}
  </div>;
}

export const metaIcons = { Clock3, MapPin, Wallet, Bell, Check };
