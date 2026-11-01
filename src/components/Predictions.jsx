import React from 'react';
import { BatteryMedium, Users, Sparkles } from 'lucide-react';
import { crowdDemo, fatigueDemo, forecastWindow, planEnergyNotes } from '../predictionDemo.js';
import { places } from '../mockData.js';

const tones = {
  low: 'bg-[#e5f5eb] text-[#176b49] dark:bg-[#244735] dark:text-[#a2e5ba]',
  medium: 'bg-[#fff1d7] text-[#855714] dark:bg-[#493b24] dark:text-[#f3d394]',
  high: 'bg-[#fbe9e3] text-[#954c37] dark:bg-[#4c302a] dark:text-[#ffc2ad]',
};

export function CrowdBadge({ placeId }) {
  const forecast = crowdDemo[placeId];
  if (!forecast) return null;
  return <span className={`mt-2 inline-flex max-w-full items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-bold ${tones[forecast.level]}`}>
    <Users size={13} className="shrink-0" aria-hidden="true"/>
    <span>Συνωστισμός: {forecast.label} · {forecastWindow} · Demo</span>
  </span>;
}

export function FatigueCard() {
  return <section className="prediction-overview rounded-[24px] border border-[#dce9df] bg-white p-5 dark:border-[#36513e] dark:bg-[#1c3126]" aria-labelledby="fatigue-heading">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#16815e] dark:text-[#9be0b4]"><Sparkles size={14}/> ΠΡΟΣΟΜΟΙΩΣΗ ΠΡΟΒΛΕΨΗΣ · DEMO</span>
      <span className="text-[11px] text-[#687e70] dark:text-[#b0c6b7]">Για το κενό {forecastWindow}</span>
    </div>
    <div className="mt-4 flex items-center gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#fff1d7] text-[#855714] dark:bg-[#493b24] dark:text-[#f3d394]"><BatteryMedium size={23}/></div>
      <div><h2 id="fatigue-heading" className="text-[15px] font-extrabold text-[#233d2e] dark:text-[#e6f8eb]">Εκτιμώμενη κούραση: {fatigueDemo.label}</h2>
      <p className="mt-1 text-[12px] text-[#637e6d] dark:text-[#b4cdbd]">{fatigueDemo.suggestion}</p></div>
    </div>
    <div className="mt-4 flex gap-1.5" aria-hidden="true">{[0,1,2].map(i => <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 2 ? 'bg-[#c49a45] dark:bg-[#d6b567]' : 'bg-[#e9eee8] dark:bg-[#3a4e40]'}`}/>)}</div>
    <details className="mt-3 text-[11px] leading-5 text-[#607766] dark:text-[#b2caba]">
      <summary className="cursor-pointer font-bold text-[#08795a] dark:text-[#9ae0b6]">Γιατί εμφανίζεται αυτή η εκτίμηση;</summary>
      <p className="mt-2">{fatigueDemo.reason}</p>
      <p className="mt-1">Σταθερό παράδειγμα παρουσίασης, όχι πραγματική μέτρηση ή αποτέλεσμα μοντέλου.</p>
    </details>
  </section>;
}

export function PlanForecast({ plan }) {
  const ids = [...new Set(plan.activities.map(activity => activity.placeId))];
  return <div className="mt-4 rounded-2xl bg-[#f2f7f2] p-3 dark:bg-[#263e30]">
    <p className="text-[10px] font-extrabold text-[#217653] dark:text-[#a0dfb6]">Προσομοίωση πρόβλεψης · Demo</p>
    <p className="mt-2 text-[11px] leading-5 text-[#526f5c] dark:text-[#c0d9c8]">{planEnergyNotes[plan.mood]}</p>
    {ids.map(id => <div key={id} className="mt-2"><p className="text-[11px] font-bold text-[#355e45] dark:text-[#c0e3cb]">{places.find(place => place.id === id)?.name}</p><CrowdBadge placeId={id}/></div>)}
  </div>;
}

export function CrowdDetails({ placeId }) {
  const forecast = crowdDemo[placeId];
  if (!forecast) return null;
  return <div className="mt-3 border-t border-[#cde6d4] pt-2 dark:border-[#39674b]">
    <CrowdBadge placeId={placeId}/>
    <p className="mt-2 text-[11px] leading-5 text-[#557660] dark:text-[#bad8c3]">{forecast.reason} Οι τιμές είναι ενδεικτικές, χωρίς ζωντανά δεδομένα ή μοντέλο.</p>
  </div>;
}
