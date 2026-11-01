import { FatigueCard } from '../components/Predictions.jsx';
import React from 'react';
import { ArrowRight, CalendarDays, Clock3, MapPin, Navigation2, Sparkles, WandSparkles, Wallet } from 'lucide-react';
import { moods, nextGap, student, todaySchedule } from '../mockData.js';
import { SectionTitle } from '../components/UI.jsx';

export default function Dashboard({ mood, onMood, budget, onBudget, onGenerate, onSeePlans }) {
  return (
    <div className="dashboard-layout space-y-6 pb-6">
      <section className="pt-1">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold text-[#829a8c] dark:text-[#9cb7a6]">Καλημέρα, {student.firstName} <span aria-hidden="true">👋</span></p>
            <h1 className="mt-1 text-[25px] font-black tracking-[-.06em] text-[#152f24] dark:text-[#e9fff1]">Η μέρα είναι δική σου.</h1>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-[16px] border-2 border-white bg-[#daf2df] font-extrabold text-[#117955] shadow-sm dark:border-[#223d30] dark:bg-[#284c36] dark:text-[#a8ecc2]">{student.initials}</div>
        </div>
        <div className="hero-card relative overflow-hidden rounded-[28px] p-5 text-white shadow-[0_20px_35px_rgba(8,113,84,.15)]">
          <div className="hero-orb absolute -right-12 -top-12 h-48 w-48 rounded-full" />
          <div className="hero-orb2 absolute -bottom-20 right-10 h-40 w-40 rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-wide"><span className="h-1.5 w-1.5 rounded-full bg-[#c8f57a]"/> ΕΠΟΜΕΝΟ ΚΕΝΟ</span>
              <span className="rounded-full bg-white/13 px-2.5 py-1.5 text-[10px] font-semibold">DEMO ΠΡΟΓΡΑΜΜΑ</span>
            </div>
            <p className="mt-5 text-[15px] font-semibold text-white/80">Έχεις ελεύθερο χρόνο!</p>
            <div className="mt-1 flex items-baseline gap-2"><span className="text-[55px] leading-none font-black tracking-[-.08em]">{nextGap.minutes}</span><span className="text-[19px] font-bold text-[#d3f9e4]">λεπτά</span></div>
            <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-white/85"><Clock3 size={15} /> {nextGap.start} – {nextGap.end}<span className="mx-1 h-1 w-1 rounded-full bg-white/60"/><MapPin size={15}/> Campus</div>
            <div className="mt-5 border-t border-white/20 pt-4 text-[12px] leading-[1.65] text-[#e1fbee]">Ένα μικρό κενό μπορεί να γίνει το καλύτερο κομμάτι της μέρας σου.</div>
          </div>
        </div>
      </section>

      <FatigueCard />

      <section>
        <SectionTitle eyebrow="ΒΡΕΣ ΤΟ VIBE ΣΟΥ" title="Τι έχεις όρεξη να κάνεις;" />
        <div className="grid grid-cols-4 gap-2">
          {moods.map((item) => <button key={item.id} type="button" onClick={() => onMood(item.id)} aria-pressed={mood === item.id}
            className={`mood-card flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[18px] border px-1.5 py-3 transition active:scale-[.97] ${mood === item.id ? 'border-[#11966b] bg-[#e6f9ed] shadow-[0_4px_14px_rgba(14,133,92,.09)] ring-1 ring-[#11966b] dark:border-[#6bbd91] dark:bg-[#204a36] dark:ring-[#6bbd91]' : 'border-[#e4ede5] bg-white hover:border-[#a9d3b6] dark:border-[#2e4839] dark:bg-[#1b3026] dark:hover:border-[#628d72]'}`}>
            <span className="text-[25px]" aria-hidden="true">{item.emoji}</span>
            <span className={`text-[10px] font-extrabold ${mood === item.id ? 'text-[#087d5b] dark:text-[#b9f7d0]' : 'text-[#667e70] dark:text-[#aac2b3]'}`}>{item.label}</span>
          </button>)}
        </div>
      </section>

      <section className="rounded-[24px] border border-[#e7eee8] bg-white p-4 shadow-[0_3px_20px_rgba(21,65,41,.025)] dark:border-[#2e4538] dark:bg-[#1b2e25]">
        <div className="flex items-center gap-2.5"><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#e9f7ee] text-[#138565] dark:bg-[#254937] dark:text-[#8fdaad]"><Wallet size={17}/></div><div><h3 className="text-[13px] font-extrabold text-[#243d2f] dark:text-[#e6f9ea]">Πόσα θέλεις να ξοδέψεις;</h3><p className="text-[10px] text-[#91a299] dark:text-[#8fa597]">Επίλεξε το budget σου</p></div></div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((level) => <button type="button" key={level} onClick={() => onBudget(level)} aria-pressed={budget === level}
            className={`rounded-[13px] border py-2.5 text-[13px] font-black transition ${budget === level ? 'border-[#0e8966] bg-[#0a855f] text-white shadow-sm' : 'border-[#e5ece6] bg-[#f7faf7] text-[#779083] hover:border-[#b8d6c5] dark:border-[#375043] dark:bg-[#22372c] dark:text-[#b7cabc]'}`}>
            {'€'.repeat(level)}<span className="ml-1 text-[10px] font-medium opacity-80">{level === 1 ? '0–4€' : level === 2 ? 'έως 8€' : 'έως 15€'}</span>
          </button>)}
        </div>
        <button type="button" onClick={onGenerate} className="mt-4 flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#0a815e] px-4 py-[15px] text-[13px] font-extrabold text-white shadow-[0_10px_18px_rgba(7,115,82,.14)] transition hover:bg-[#046e50] active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
          <WandSparkles size={17}/> Δημιουργία πλάνου <ArrowRight size={17}/>
        </button>
      </section>

      <section>
        <SectionTitle eyebrow="ΣΗΜΕΡΙΝΗ ΕΙΚΟΝΑ" title="Το πρόγραμμά σου" action="Δες πλάνα" onAction={onSeePlans}/>
        <div className="rounded-[24px] border border-[#e6ede6] bg-white p-4 dark:border-[#2d4436] dark:bg-[#1a2d24]">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-bold text-[#829589] dark:text-[#a3b9a7]"><CalendarDays size={14}/> Ενδεικτική ημέρα · Σχολή</div>
          <div className="space-y-0">
            {todaySchedule.map((entry, index) => {
              const gap = entry.type === 'gap';
              return <div className="flex gap-3" key={entry.id}>
                <div className="flex w-14 shrink-0 flex-col items-end pt-2"><span className={`text-[11px] font-extrabold ${gap ? 'text-[#0d9569]' : 'text-[#7d9585] dark:text-[#aac0b0]'}`}>{entry.start}</span><span className="mt-1 text-[10px] text-[#b3c0b5] dark:text-[#839989]">{entry.end}</span></div>
                <div className="relative flex w-3 shrink-0 justify-center"><div className={`z-10 mt-3 h-2.5 w-2.5 rounded-full border-[2.5px] ${gap ? 'border-[#0b8c63] bg-[#d8fae4]' : 'border-[#c0d0c4] bg-white dark:border-[#637b69] dark:bg-[#1a2d24]'}`}/>{index < todaySchedule.length - 1 && <div className="absolute left-[5px] top-4 h-full w-px bg-[#e3ebe4] dark:bg-[#365242]"/>}</div>
                <div className={`mb-3 flex-1 rounded-2xl p-3 ${gap ? 'border border-[#b7e7c8] bg-[#effaf1] dark:border-[#356c4b] dark:bg-[#224433]' : 'bg-[#f6f8f5] dark:bg-[#25392d]'}`}>
                  <div className={`text-xs font-extrabold ${gap ? 'text-[#0c7e5b] dark:text-[#9ae3b5]' : 'text-[#354b3a] dark:text-[#d4e9d8]'}`}>{gap && '✨ '}{entry.title}</div>
                  <p className={`mt-0.5 text-[10px] ${gap ? 'text-[#51a481] dark:text-[#81c8a3]' : 'text-[#a0aea0] dark:text-[#8ca391]'}`}>{entry.detail}</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>
      <p className="flex items-center justify-center gap-1 text-center text-[10px] text-[#a0b2a6] dark:text-[#7e9e89]"><Navigation2 size={12}/> Τοποθεσία και πρόγραμμα: προσομοιωμένα δεδομένα</p>
    </div>
  );
}
