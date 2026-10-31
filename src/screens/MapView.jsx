import React, { useState } from 'react';
import { ArrowRight, Compass, Footprints, LocateFixed, MapPin, Navigation, Star } from 'lucide-react';
import { places, student } from '../mockData.js';
import { SectionTitle } from '../components/UI.jsx';

const filters = [{ id: 'all', label: 'Όλα' }, { id: 'study', label: '📚 Study' }, { id: 'coffee', label: '☕ Καφέ' }, { id: 'relax', label: '🌿 Πάρκα' }, { id: 'food', label: '🥪 Food' }];

export default function MapView({ maxWalking }) {
  const [category, setCategory] = useState('all');
  const [selectedId, setSelectedId] = useState('library');
  const visible = places.filter((place) => (category === 'all' || place.category === category) && place.walking <= maxWalking);
  const selected = visible.find((p) => p.id === selectedId) ?? visible[0];

  return <div className="space-y-5 pb-7">
    <div className="flex items-center justify-between"><div><p className="text-[11px] font-semibold text-[#8fa697] dark:text-[#94b19e]">Πού θα πας σήμερα;</p><h1 className="mt-1 text-[23px] font-black tracking-[-.06em] text-[#193426] dark:text-[#e9fff1]">Γύρω από τη σχολή <span aria-hidden="true">📍</span></h1></div><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e6f5ec] text-[#128462] dark:bg-[#254734] dark:text-[#9ae2b6]"><Compass size={21}/></div></div>
    <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
      {filters.map((item) => <button type="button" key={item.id} onClick={() => setCategory(item.id)} aria-pressed={category === item.id} className={`shrink-0 rounded-full px-3.5 py-2.5 text-[11px] font-extrabold transition ${category === item.id ? 'bg-[#0b8964] text-white' : 'border border-[#dfebdf] bg-white text-[#72907a] hover:bg-[#f0f8f1] dark:border-[#304d3c] dark:bg-[#20362a] dark:text-[#b8d0bd]'}`}>{item.label}</button>)}
    </div>
    <section className="relative h-[340px] overflow-hidden rounded-[26px] border border-[#dae8dd] bg-[#e9f2e7] dark:border-[#354c3b] dark:bg-[#243c30]" aria-label="Σχηματικός, μη πραγματικός χάρτης περιοχής">
      <svg viewBox="0 0 380 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <rect width="380" height="340" fill="currentColor" className="text-[#eaf2e7] dark:text-[#263f33]" />
        <path d="M0 20 95 0 165 44 290 0 380 60V140L275 100 215 180 90 145 0 170Z" fill="#d8e9d6" className="dark:fill-[#335541]" />
        <path d="M0 285 90 235 170 265 235 225 380 270V340H0Z" fill="#d5e9d4" className="dark:fill-[#315340]" />
        <path d="M0 116C90 105 150 120 215 95S345 103 400 75M0 235C95 230 170 210 245 216S340 225 410 205" stroke="#fff" strokeWidth="20" fill="none" className="dark:stroke-[#4e6857]" />
        <path d="M95 -20 113 360M280 -20 250 360M-20 310 395 16" stroke="#fff" strokeWidth="17" fill="none" className="dark:stroke-[#4e6857]" />
        <path d="M0 116C90 105 150 120 215 95S345 103 400 75M0 235C95 230 170 210 245 216S340 225 410 205M95 -20 113 360M280 -20 250 360M-20 310 395 16" stroke="#d0d9cb" strokeDasharray="4 7" strokeWidth="1" fill="none" className="dark:stroke-[#6b8671]"/>
        <g fill="#c8debe" className="dark:fill-[#3d6248]"><rect x="5" y="18" width="65" height="54" rx="9"/><rect x="142" y="9" width="44" height="39" rx="7"/><rect x="309" y="133" width="45" height="52" rx="7"/><rect x="120" y="280" width="63" height="43" rx="8"/></g>
        <g fontSize="9" fontWeight="700" fill="#92a98e" className="dark:fill-[#92b19a]"><text x="13" y="87">CAMPUS AREA</text><text x="287" y="323">GREEN ZONE</text><text x="145" y="175">MAIN STREET</text></g>
      </svg>
      <div className="absolute left-[46%] top-[47%] z-10 -translate-x-1/2 -translate-y-1/2"><div className="relative flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#127aef] text-white shadow-[0_3px_12px_rgba(0,0,0,.2)]"><div className="absolute inset-[-13px] -z-10 rounded-full bg-blue-400/20"/><LocateFixed size={16}/></div><span className="absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[9px] font-extrabold text-[#285d3a] shadow-sm dark:bg-[#1a3025] dark:text-white">Campus</span></div>
      {visible.map((place) => <button key={place.id} type="button" onClick={() => setSelectedId(place.id)} title={place.name} aria-label={`Επιλογή ${place.name}`}
        style={{ left: `${place.x}%`, top: `${place.y}%` }} className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] px-2 py-1.5 text-base shadow-[0_5px_15px_rgba(0,0,0,.13)] transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b8964] ${selected?.id === place.id ? 'scale-125 border-[#0a9066] bg-white dark:bg-[#2c4c37]' : 'border-white bg-[#f9fff8] dark:border-[#2e493b] dark:bg-[#284737]'}`}>{place.emoji}</button>)}
      <div className="absolute bottom-3 left-3 rounded-xl border border-white/70 bg-white/90 px-2.5 py-2 text-[9px] font-bold text-[#66846e] backdrop-blur dark:border-[#53725b] dark:bg-[#1e3228]/90 dark:text-[#c3dac7]">Σχηματικός χάρτης · όχι GPS</div>
      <div className="absolute right-3 top-3 rounded-xl bg-white/90 px-2.5 py-2 text-[9px] font-extrabold text-[#6e9376] shadow-sm dark:bg-[#213b2d] dark:text-[#c1ddc6]">📍 {visible.length} σημεία</div>
    </section>
    {selected && <section aria-live="polite" className="rounded-[23px] border border-[#cde6d4] bg-[#ecf8ed] p-4 dark:border-[#39674b] dark:bg-[#234333]">
      <div className="flex gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-white text-2xl shadow-sm dark:bg-[#355a43]">{selected.emoji}</div><div className="min-w-0 flex-1"><h3 className="text-[14px] font-extrabold text-[#245137] dark:text-[#e3f8e6]">{selected.name}</h3><p className="text-[11px] text-[#789b82] dark:text-[#b5d4bc]">{selected.categoryLabel} · {selected.subtitle}</p><div className="mt-2 flex flex-wrap gap-3 text-[10px] font-bold text-[#228363] dark:text-[#8ce0af]"><span className="flex items-center gap-1"><Footprints size={13}/>{selected.walking}′ με τα πόδια</span><span className="flex items-center gap-1"><Star size={12} fill="currentColor"/> {selected.rating} (demo)</span><span>{selected.price === 0 ? 'Δωρεάν' : `~${selected.price}€`}</span></div></div></div>
    </section>}
    <section>
      <SectionTitle eyebrow="ΕΞΕΡΕΥΝΗΣΕ" title="Σημεία κοντά σου" />
      {visible.length === 0 ? <div className="rounded-2xl bg-white p-5 text-xs text-[#708678] dark:bg-[#233a2c] dark:text-[#c0d4c4]">Δεν υπάρχουν σημεία με αυτά τα φίλτρα. Αύξησε τη μέγιστη απόσταση στο Προφίλ.</div> : <div className="place-grid space-y-2.5">{visible.map((place) => <button type="button" key={place.id} onClick={() => setSelectedId(place.id)} aria-pressed={selected?.id === place.id} className={`flex w-full items-center gap-3 rounded-[20px] border p-3 text-left transition ${selected?.id === place.id ? 'border-[#a9dbc0] bg-[#f2fbf4] dark:border-[#56896a] dark:bg-[#294a36]' : 'border-[#e5ede6] bg-white hover:bg-[#f7faf7] dark:border-[#30483a] dark:bg-[#1b3026] dark:hover:bg-[#284234]'}`}><div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#edf7ed] text-[24px] dark:bg-[#345440]">{place.emoji}</div><div className="min-w-0 flex-1"><h4 className="truncate text-[12px] font-extrabold text-[#284737] dark:text-[#ecfaef]">{place.name}</h4><p className="mt-0.5 truncate text-[10px] text-[#9aaa9d] dark:text-[#8eaa97]">{place.subtitle}</p><div className="mt-1 flex items-center gap-2.5 text-[10px] font-semibold text-[#66947a] dark:text-[#a5d3b0]"><span>{place.walking}′ περπάτημα</span><span>★ {place.rating}</span><span>{place.price === 0 ? 'Free' : `~${place.price}€`}</span></div></div><ArrowRight size={15} className="shrink-0 text-[#a5baa9]"/></button>)}</div>}
    </section>
    <p className="flex items-start gap-2 rounded-[17px] bg-[#f0f4f0] p-3 text-[10px] leading-4 text-[#8a9c8e] dark:bg-[#23392b] dark:text-[#96ac9a]"><Navigation size={17} className="shrink-0"/> Οι τοποθεσίες, οι αξιολογήσεις και οι θέσεις των pins είναι αποκλειστικά ενδεικτικές. Δεν χρησιμοποιούνται Google Maps ή πραγματικά δεδομένα GPS.</p>
  </div>;
}
