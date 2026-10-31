import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Clock3, Heart, Info, MapPin, RefreshCcw, Route, Sparkles, Wallet, X } from 'lucide-react';
import { moods } from '../mockData.js';
import { EmptyState, SectionTitle } from '../components/UI.jsx';

const accentClass = {
  mint: 'from-[#d9f4e2] to-[#f3f9df] dark:from-[#265b42] dark:to-[#314a31]',
  blue: 'from-[#dceffc] to-[#ecf2fd] dark:from-[#244755] dark:to-[#2a3c50]',
  peach: 'from-[#ffeddc] to-[#fff5e9] dark:from-[#62432e] dark:to-[#483a30]',
  yellow: 'from-[#f9efce] to-[#fffae9] dark:from-[#60512c] dark:to-[#4b462c]',
  lavender: 'from-[#ece8fb] to-[#f9effa] dark:from-[#493e66] dark:to-[#443650]',
};

function PlanCard({ plan, rank, onAccept, onSkip }) {
  const [expanded, setExpanded] = useState(false);
  return <article className="overflow-hidden rounded-[26px] border border-[#e5eee7] bg-white shadow-[0_9px_35px_rgba(23,57,37,.035)] dark:border-[#2f4838] dark:bg-[#1a2e24]">
    <div className={`relative h-[105px] overflow-hidden bg-gradient-to-br ${accentClass[plan.accent]}`}>
      <div className="absolute -right-5 -top-8 h-36 w-36 rounded-full border-[18px] border-white/20"/>
      <div className="absolute bottom-0 right-5 h-20 w-20 rounded-full bg-white/15"/>
      <div className="absolute left-5 top-4 inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-extrabold text-[#336044] dark:bg-black/25 dark:text-[#e5f8e8]">{rank === 0 ? '✨ TOP PICK' : `ΠΛΑΝΟ ${rank + 1}`}</div>
      <span aria-hidden="true" className="absolute bottom-[-15px] right-8 text-[87px] drop-shadow-[0_9px_12px_rgba(0,0,0,.08)]">{plan.icon}</span>
      <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1.5 text-[12px] font-black text-[#0d8d64] shadow-sm dark:bg-[#193a2b] dark:text-[#9ce9b8]">{plan.score}% match</span>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div><h3 className="text-[18px] font-black tracking-[-.05em] text-[#1d342a] dark:text-[#f1fff4]">{plan.title}</h3><p className="mt-0.5 text-[11px] text-[#91a197] dark:text-[#96b09f]">{plan.tagline}</p></div>
        <span className="shrink-0 rounded-full bg-[#eef8f0] px-2 py-1.5 text-[10px] font-extrabold text-[#14855e] dark:bg-[#254637] dark:text-[#a3e8bd]">{plan.mood === 'study' ? '📚 Focus' : plan.mood === 'coffee' ? '☕ Social' : plan.mood === 'relax' ? '🌿 Relax' : '🥪 Food'}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 border-b border-[#edf1ec] pb-3 dark:border-[#304438]">
        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#7e9184] dark:text-[#9cb3a2]"><Clock3 size={13}/>{plan.duration} λεπτά</span>
        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#7e9184] dark:text-[#9cb3a2]"><MapPin size={13}/>{plan.walking}′ περπάτημα</span>
        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#7e9184] dark:text-[#9cb3a2]"><Wallet size={13}/>{plan.price === 0 ? 'Δωρεάν' : `~${plan.price}€`}</span>
      </div>
      <div className="mt-3 space-y-2">
        {plan.activities.map((activity, i) => <div key={`${plan.id}-${i}`} className="flex items-start gap-2.5"><div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#f2f8f2] text-lg dark:bg-[#294134]">{activity.icon}</div><div className="min-w-0 flex-1 pt-0.5"><p className="text-[12px] font-bold text-[#365343] dark:text-[#d5eadd]">{activity.label}</p><p className="text-[10px] text-[#a0b0a2] dark:text-[#8aa995]">{activity.minutes} λεπτά</p></div></div>)}
      </div>
      {expanded && <div className="mt-3 rounded-2xl bg-[#f1f8f2] p-3 text-[11px] leading-relaxed text-[#52715d] dark:bg-[#263e30] dark:text-[#c1dac8]"><div className="mb-1 flex items-center gap-1 font-extrabold"><Info size={13}/> Γιατί σου ταιριάζει;</div>{plan.why}<p className="mt-1.5 font-semibold opacity-80">Περιλαμβάνονται ~{plan.travelMinutes}′ μετακίνησης.</p></div>}
      <button type="button" onClick={() => setExpanded((x) => !x)} className="mt-3 text-[11px] font-bold text-[#0b8c66] hover:underline dark:text-[#83dca9]">{expanded ? 'Λιγότερα' : 'Γιατί αυτό το πλάνο;'} <span aria-hidden="true">{expanded ? '↑' : '↓'}</span></button>
      <div className="mt-4 grid grid-cols-[1fr_1.3fr] gap-2.5">
        <button type="button" onClick={() => onSkip(plan.id)} aria-label={`Παράβλεψη ${plan.title}`} className="flex items-center justify-center gap-1.5 rounded-[14px] border border-[#dfece3] bg-[#f6faf6] px-3 py-3 text-[12px] font-extrabold text-[#607d6b] transition hover:bg-[#eef5ef] dark:border-[#395344] dark:bg-[#233a2e] dark:text-[#c8e1cd]"><X size={15}/> Παράβλεψη</button>
        <button type="button" onClick={() => onAccept(plan)} aria-label={`Αποδοχή ${plan.title}`} className="flex items-center justify-center gap-1.5 rounded-[14px] bg-[#0c8762] px-3 py-3 text-[12px] font-extrabold text-white shadow-sm transition hover:bg-[#086e51]"><Check size={16}/> Αποδοχή</button>
      </div>
    </div>
  </article>;
}

export default function Recommendations({ recommendations, mood, budget, acceptedPlan, onAccept, onSkip, onReset, onMap }) {
  const moodLabel = moods.find((m) => m.id === mood)?.label ?? 'Δραστηριότητες';
  return <div className="space-y-5 pb-7">
    <section className="rounded-[25px] bg-[#e5f5eb] p-4 dark:bg-[#223d2e]">
      <div className="flex items-center gap-2"><div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-[#0d8b68] dark:bg-[#2c5840] dark:text-[#a7e7bf]"><Sparkles size={18}/></div><div><div className="text-[13px] font-extrabold text-[#18583c] dark:text-[#ccf9d6]">Smart recommendations</div><p className="text-[10px] text-[#699d7c] dark:text-[#a2d3ae]">Εξατομίκευση σε λειτουργία demo</p></div></div>
      <p className="mt-3 text-[11px] leading-[1.7] text-[#50745b] dark:text-[#b3d1ba]">Με βάση: <strong>{moodLabel}</strong> · budget <strong>{'€'.repeat(budget)}</strong> · κενό <strong>90′</strong>. Τα match scores είναι ενδεικτικά, όχι πραγματικές προβλέψεις ML.</p>
    </section>
    {acceptedPlan && <section aria-live="polite" className="rounded-[22px] border border-[#aee4c1] bg-[#effaef] p-4 dark:border-[#3b7651] dark:bg-[#22442f]">
      <div className="flex items-start gap-2.5"><CheckCircle2 size={21} className="mt-0.5 shrink-0 text-[#159166] dark:text-[#92e4b2]"/><div><h3 className="text-[13px] font-extrabold text-[#175f3e] dark:text-[#c0f5d2]">Το πλάνο σου επιλέχθηκε!</h3><p className="mt-1 text-[11px] leading-5 text-[#588067] dark:text-[#a6cfb3]">{acceptedPlan.title} · {acceptedPlan.duration}′ · {acceptedPlan.price === 0 ? 'Δωρεάν' : `~${acceptedPlan.price}€`}. Η επιλογή αποθηκεύεται μόνο για αυτή τη συνεδρία.</p><button type="button" onClick={onMap} className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0b8864] dark:text-[#89e2ac]">Προβολή σημείων στον χάρτη <ArrowRight size={13}/></button></div></div>
    </section>}
    <SectionTitle eyebrow="ΔΙΑΛΕΞΕ ΤΟ ΕΠΟΜΕΝΟ ΣΟΥ ΒΗΜΑ" title="Πλάνα για σένα" action="Αρχική λίστα" onAction={onReset}/>
    {recommendations.length > 0 ? <div className="plan-grid space-y-4">{recommendations.slice(0, 4).map((plan, index) => <PlanCard key={plan.id} plan={plan} rank={index} onAccept={onAccept} onSkip={onSkip}/>)}</div> : <EmptyState title="Δεν υπάρχουν άλλα πλάνα" description="Έχεις παραβλέψει τις διαθέσιμες προτάσεις ή τα φίλτρα σου είναι πολύ περιοριστικά. Δοκίμασε μεγαλύτερη απόσταση, άλλο budget ή επαναφορά." action="Επαναφορά προτάσεων" onAction={onReset}/>}
    {recommendations.length > 4 && <p className="text-center text-[11px] text-[#99a99b] dark:text-[#90aa99]">Εμφανίζονται οι 4 πιο σχετικές από {recommendations.length} προτάσεις.</p>}
    <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] text-[#9aafa1] dark:text-[#7f9e8a]"><RefreshCcw size={12}/> Το «Παράβλεψη» ενημερώνει τις προτάσεις σε αυτό το demo.</div>
  </div>;
}
