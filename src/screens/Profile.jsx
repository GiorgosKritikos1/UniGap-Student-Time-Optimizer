import React from 'react';
import { Bell, Check, ChevronRight, Footprints, GraduationCap, HeartHandshake, Info, MapPinned, Moon, RotateCcw, ShieldCheck, SlidersHorizontal, Sparkles, Sun, Trees } from 'lucide-react';
import { student } from '../mockData.js';
import { SectionTitle, Toggle } from '../components/UI.jsx';

function SettingRow({ icon: Icon, colorClass, title, subtitle, children }) {
  return <div className="flex items-center gap-3 py-3.5"><div className={`grid h-10 w-10 shrink-0 place-items-center rounded-[14px] ${colorClass}`}><Icon size={19}/></div><div className="min-w-0 flex-1"><h3 className="text-[12px] font-extrabold text-[#2c4838] dark:text-[#e7f7eb]">{title}</h3><p className="mt-0.5 text-[10px] leading-4 text-[#9aab9d] dark:text-[#8ba697]">{subtitle}</p></div>{children}</div>;
}

export default function Profile({ dark, onTheme, preferences, onPreferences, onReset }) {
  const setPref = (key, val) => onPreferences({ ...preferences, [key]: val });
  return <div className="profile-layout space-y-5 pb-8">
    <div className="overflow-hidden rounded-[26px] border border-[#e3ede3] bg-white dark:border-[#36513b] dark:bg-[#1d3327]">
      <div className="h-16 bg-[linear-gradient(110deg,#096e55,#33ad7b,#b5d779)] dark:bg-[linear-gradient(110deg,#154e3b,#267657,#617e48)]"/>
      <div className="relative px-5 pb-5"><div className="-mt-7 grid h-14 w-14 place-items-center rounded-[19px] border-4 border-white bg-[#dcf2df] text-[21px] font-black text-[#117e5c] dark:border-[#1d3327] dark:bg-[#386345] dark:text-[#baf3ce]">Α</div><div className="mt-2 flex items-center justify-between"><div><h1 className="text-[19px] font-black tracking-[-.05em] text-[#213e2e] dark:text-[#ebfff0]">Αλέξης · Demo χρήστης</h1><p className="mt-0.5 text-[11px] text-[#91a69a] dark:text-[#a8c0ad]">{student.department}</p></div><span className="rounded-full bg-[#e8f9e9] px-2.5 py-1.5 text-[10px] font-bold text-[#0c855b] dark:bg-[#30553d] dark:text-[#b5e6bd]">🌱 Explorer</span></div></div>
    </div>

    <section>
      <SectionTitle eyebrow="ΣΤΑ ΜΕΤΡΑ ΣΟΥ" title="Οι προτιμήσεις σου" />
      <div className="divide-y divide-[#edf1ec] rounded-[24px] border border-[#e5eee6] bg-white px-4 dark:divide-[#345140] dark:border-[#304b3a] dark:bg-[#1c3126]">
        <SettingRow icon={Trees} colorClass="bg-[#e7f5e7] text-[#28885c] dark:bg-[#2d5339] dark:text-[#a9e2b5]" title="Προτιμώ ήσυχους χώρους" subtitle="Αναγνωστήρια, ήρεμα καφέ και πάρκα"><Toggle checked={preferences.quietPlaces} onChange={(val) => setPref('quietPlaces', val)} label="Προτιμώ ήσυχους χώρους"/></SettingRow>
        <div className="py-3.5"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#f1edfc] text-[#7760a1] dark:bg-[#43365b] dark:text-[#d3baeb]"><Footprints size={19}/></div><div className="min-w-0 flex-1"><h3 className="text-[12px] font-extrabold text-[#2c4838] dark:text-[#e7f7eb]">Μέγιστο περπάτημα</h3><p className="text-[10px] text-[#9aab9d] dark:text-[#94b09e]">Πόσο μακριά θέλεις να πας;</p></div><span className="rounded-full bg-[#e6f5eb] px-2.5 py-1 text-[11px] font-black text-[#158361] dark:bg-[#31543f] dark:text-[#a1e8b8]">{preferences.maxWalking} λεπτά</span></div><input type="range" min="5" max="20" step="1" value={preferences.maxWalking} onChange={(e) => setPref('maxWalking', Number(e.target.value))} aria-label="Μέγιστος χρόνος περπατήματος" className="mt-4 w-full accent-[#0e8d63]"/><div className="flex justify-between text-[9px] font-semibold text-[#a7b8ac] dark:text-[#86a28f]"><span>5 λεπτά</span><span>20 λεπτά</span></div></div>
        <SettingRow icon={Bell} colorClass="bg-[#fff1dc] text-[#bc843d] dark:bg-[#58452d] dark:text-[#e6c18a]" title="Ειδοποιήσεις" subtitle="Προσομοιωμένη προτίμηση, χωρίς push notifications"><Toggle checked={preferences.notifications} onChange={(val) => setPref('notifications', val)} label="Ειδοποιήσεις"/></SettingRow>
      </div>
    </section>
    <section>
      <SectionTitle eyebrow="ΕΜΦΑΝΙΣΗ" title="Προσαρμογή θέματος" />
      <div className="rounded-[24px] border border-[#e5eee6] bg-white p-4 dark:border-[#304b3a] dark:bg-[#1c3126]">
        <div className="mb-3 flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#eaf0ff] text-[#5076ba] dark:bg-[#364463] dark:text-[#c1d4ff]"><Moon size={19}/></div><div><h3 className="text-[12px] font-extrabold text-[#2c4838] dark:text-[#e7f7eb]">Dark Mode</h3><p className="text-[10px] text-[#9aab9d] dark:text-[#92aa99]">Αλλάζει όλη την εφαρμογή</p></div></div>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => dark && onTheme()} aria-pressed={!dark} className={`flex items-center justify-center gap-2 rounded-[15px] border p-3 text-[12px] font-extrabold transition ${!dark ? 'border-[#0e946a] bg-[#eaf8ef] text-[#0b7958] dark:border-[#69bd8f]' : 'border-[#e4eee7] bg-[#f9fbf9] text-[#819587] dark:border-[#3b5541] dark:bg-[#294334] dark:text-[#b5d2bb]'}`}><Sun size={16}/> Light {!dark && <Check size={14}/>}</button>
          <button type="button" onClick={() => !dark && onTheme()} aria-pressed={dark} className={`flex items-center justify-center gap-2 rounded-[15px] border p-3 text-[12px] font-extrabold transition ${dark ? 'border-[#72c597] bg-[#315e42] text-[#c9f9d6]' : 'border-[#e4eee7] bg-[#f9fbf9] text-[#819587]'}`}><Moon size={16}/> Dark {dark && <Check size={14}/>}</button>
        </div>
      </div>
    </section>
    <section className="rounded-[23px] border border-[#e6eee6] bg-white px-4 py-3 dark:border-[#304b3a] dark:bg-[#1c3126]"><div className="flex items-start gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-[14px] bg-[#e9f8ee] text-[#0b9168] dark:bg-[#31553e] dark:text-[#9be4b3]"><ShieldCheck size={19}/></div><div><h3 className="mt-1 text-[12px] font-extrabold text-[#2c4838] dark:text-[#e7f7eb]">Τα δεδομένα σου</h3><p className="mt-1 text-[10px] leading-[1.7] text-[#92a598] dark:text-[#a3bda8]">Δεν υπάρχει σύνδεση σε λογαριασμό, GPS ή υπηρεσίες τρίτων. Μόνο οι ρυθμίσεις σου και η επιλογή θέματος αποθηκεύονται τοπικά στον browser.</p></div></div><button type="button" onClick={onReset} className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-[13px] border border-[#d8e9dd] px-3 py-2.5 text-[11px] font-extrabold text-[#3a7757] transition hover:bg-[#f1f8f1] dark:border-[#45664c] dark:text-[#b0e1bd] dark:hover:bg-[#294332]"><RotateCcw size={14}/> Επαναφορά προτιμήσεων</button></section>
    <div className="pb-3 text-center"><p className="text-[12px] font-black text-[#5a8170] dark:text-[#b4d8bf]">unigap<span className="text-[#0b9870]">.</span></p><p className="mt-1 text-[10px] text-[#a2b4a7] dark:text-[#779782]">Interactive Mockup · v1.0 · Made for students</p></div>
  </div>;
}
