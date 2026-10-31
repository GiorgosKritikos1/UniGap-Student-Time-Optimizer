/**
 * UniGap ACADEMIC MOCK DATA.
 * All coordinates, places, schedules and scores are illustrative.
 * They are NOT retrieved from a live service or trained ML model.
 */

export const student = {
  firstName: 'Αλέξη',
  initials: 'Α',
  department: 'Τμήμα Πληροφορικής',
  campus: 'Campus · Αθήνα (demo)',
};

export const todaySchedule = [
  { id: 'c1', start: '09:00', end: '10:30', title: 'Αλγόριθμοι', detail: 'Αίθουσα Α2', type: 'class' },
  { id: 'c2', start: '10:45', end: '12:00', title: 'Βάσεις Δεδομένων', detail: 'Αμφιθέατρο 3', type: 'class' },
  { id: 'gap', start: '12:00', end: '13:30', title: 'Ελεύθερος χρόνος', detail: '90 λεπτά για σένα', type: 'gap' },
  { id: 'c3', start: '13:30', end: '15:00', title: 'Τεχνητή Νοημοσύνη', detail: 'Αίθουσα Β1', type: 'class' },
];

export const nextGap = {
  start: '12:00',
  end: '13:30',
  minutes: 90,
  label: 'Μεταξύ 2 μαθημάτων',
};

export const moods = [
  { id: 'study', label: 'Διάβασμα', emoji: '📚', color: 'mint' },
  { id: 'coffee', label: 'Καφές', emoji: '☕', color: 'peach' },
  { id: 'relax', label: 'Χαλάρωση', emoji: '🧘', color: 'lavender' },
  { id: 'food', label: 'Φαγητό', emoji: '🥪', color: 'yellow' },
];

export const places = [
  {
    id: 'library', name: 'Study Nest', category: 'study', categoryLabel: 'Αναγνωστήριο',
    subtitle: 'Ήσυχο περιβάλλον · Wi-Fi', walking: 5, price: 0, rating: 4.8,
    quiet: true, x: 24, y: 26, emoji: '📚', address: 'Κοντά στο campus · demo',
  },
  {
    id: 'coffee', name: 'Corner Cup', category: 'coffee', categoryLabel: 'Καφέ',
    subtitle: 'Καφές & μικρά snacks', walking: 7, price: 3, rating: 4.7,
    quiet: false, x: 66, y: 35, emoji: '☕', address: 'Βόρεια πλατεία · demo',
  },
  {
    id: 'park', name: 'Green Yard', category: 'relax', categoryLabel: 'Πάρκο',
    subtitle: 'Πράσινο & καθαρός αέρας', walking: 8, price: 0, rating: 4.9,
    quiet: true, x: 80, y: 68, emoji: '🌳', address: 'Πεζόδρομος · demo',
  },
  {
    id: 'food', name: 'Campus Bites', category: 'food', categoryLabel: 'Γρήγορο φαγητό',
    subtitle: 'Ελαφρύ μεσημεριανό', walking: 4, price: 7, rating: 4.6,
    quiet: false, x: 36, y: 69, emoji: '🥪', address: 'Δίπλα στο campus · demo',
  },
  {
    id: 'quiet', name: 'Quiet Corner', category: 'study', categoryLabel: 'Ήσυχο καφέ',
    subtitle: 'Πρίζες · χώροι για διάβασμα', walking: 9, price: 4, rating: 4.9,
    quiet: true, x: 77, y: 15, emoji: '🍵', address: 'Δυτικό στενό · demo',
  },
  {
    id: 'snack', name: 'Little Break', category: 'food', categoryLabel: 'Snack bar',
    subtitle: 'Σάντουιτς & χυμοί', walking: 6, price: 5, rating: 4.5,
    quiet: false, x: 18, y: 54, emoji: '🥙', address: 'Κοντινή αγορά · demo',
  },
];

export const plans = [
  {
    id: 'p1', title: 'Focus & Coffee', tagline: 'Λίγο διάβασμα, λίγο διάλειμμα.',
    mood: 'study', duration: 80, price: 3, tier: 1, walking: 7, quiet: true,
    match: 95, accent: 'mint', icon: '📚',
    activities: [
      { label: 'Διάβασμα στο Study Nest', minutes: 45, placeId: 'library', icon: '📚' },
      { label: 'Καφές στο Corner Cup', minutes: 25, placeId: 'coffee', icon: '☕' },
    ],
    travelMinutes: 10,
    why: 'Χωράει στο κενό σου και συνδυάζει συγκέντρωση με ένα μικρό διάλειμμα.',
  },
  {
    id: 'p2', title: 'Deep Focus', tagline: 'Ώρα να προχωρήσεις την ύλη.',
    mood: 'study', duration: 70, price: 0, tier: 1, walking: 5, quiet: true,
    match: 92, accent: 'blue', icon: '🎧',
    activities: [{ label: 'Συγκεντρωμένο διάβασμα στο Study Nest', minutes: 60, placeId: 'library', icon: '✍️' }],
    travelMinutes: 10,
    why: 'Χωρίς κόστος, χωρίς περισπασμούς και με χρόνο για να επιστρέψεις στο μάθημα.',
  },
  {
    id: 'p3', title: 'Slow Morning', tagline: 'Ανάσα πριν το επόμενο μάθημα.',
    mood: 'relax', duration: 65, price: 0, tier: 1, walking: 8, quiet: true,
    match: 91, accent: 'lavender', icon: '🌿',
    activities: [
      { label: 'Μικρή βόλτα στο Green Yard', minutes: 30, placeId: 'park', icon: '🌳' },
      { label: 'Χαλάρωση σε παγκάκι', minutes: 20, placeId: 'park', icon: '🧘' },
    ],
    travelMinutes: 15,
    why: 'Ένα ήρεμο διάλειμμα χωρίς έξοδα και μακριά από την οθόνη.',
  },
  {
    id: 'p4', title: 'Coffee Catch-up', tagline: 'Χρόνος για φίλους και κουβέντα.',
    mood: 'coffee', duration: 65, price: 5, tier: 2, walking: 7, quiet: false,
    match: 93, accent: 'peach', icon: '☕',
    activities: [{ label: 'Καφές με παρέα στο Corner Cup', minutes: 50, placeId: 'coffee', icon: '☕' }],
    travelMinutes: 15,
    why: 'Κοντινή επιλογή για κοινωνικό διάλειμμα, χωρίς άγχος χρόνου.',
  },
  {
    id: 'p5', title: 'Lunch Recharge', tagline: 'Φαγητό και νέα ενέργεια.',
    mood: 'food', duration: 70, price: 7, tier: 2, walking: 4, quiet: false,
    match: 94, accent: 'yellow', icon: '🥪',
    activities: [
      { label: 'Lunch στο Campus Bites', minutes: 40, placeId: 'food', icon: '🥗' },
      { label: 'Χαλαρή βόλτα', minutes: 20, placeId: 'park', icon: '🚶' },
    ],
    travelMinutes: 10,
    why: 'Προλαβαίνεις φαγητό και μικρή βόλτα πριν επιστρέψεις.',
  },
  {
    id: 'p6', title: 'Quiet Cup', tagline: 'Ένας καφές με ησυχία.',
    mood: 'coffee', duration: 80, price: 4, tier: 2, walking: 9, quiet: true,
    match: 89, accent: 'mint', icon: '🍵',
    activities: [
      { label: 'Ρόφημα στο Quiet Corner', minutes: 30, placeId: 'quiet', icon: '🍵' },
      { label: 'Σημειώσεις ή journaling', minutes: 30, placeId: 'quiet', icon: '📝' },
    ],
    travelMinutes: 20,
    why: 'Εναλλακτική με ήσυχο περιβάλλον για να γεμίσεις μπαταρίες.',
  },
  {
    id: 'p7', title: 'Snack & Stroll', tagline: 'Κάτι μικρό και μετά κίνηση.',
    mood: 'food', duration: 65, price: 5, tier: 2, walking: 6, quiet: false,
    match: 88, accent: 'peach', icon: '🥙',
    activities: [
      { label: 'Snack στο Little Break', minutes: 25, placeId: 'snack', icon: '🥙' },
      { label: 'Περίπατος στη γειτονιά', minutes: 25, placeId: 'park', icon: '🚶' },
    ],
    travelMinutes: 15,
    why: 'Οικονομικό σνακ και ένα ευχάριστο διάλειμμα κίνησης.',
  },
  {
    id: 'p8', title: 'Recharge & Read', tagline: 'Χαλαρό ξεκίνημα, καθαρό μυαλό.',
    mood: 'relax', duration: 80, price: 4, tier: 2, walking: 9, quiet: true,
    match: 90, accent: 'blue', icon: '🌤️',
    activities: [
      { label: 'Σύντομη βόλτα στο Green Yard', minutes: 25, placeId: 'park', icon: '🌿' },
      { label: 'Ήσυχο ρόφημα στο Quiet Corner', minutes: 35, placeId: 'quiet', icon: '🍵' },
    ],
    travelMinutes: 20,
    why: 'Συνδυάζει κίνηση, πράσινο και χαλαρή επιστροφή στην ημέρα.',
  },
  {
    id: 'p9', title: 'Coffee Reset', tagline: 'Μικρή απόδραση, μεγάλο boost.',
    mood: 'coffee', duration: 60, price: 3, tier: 1, walking: 7, quiet: false,
    match: 87, accent: 'peach', icon: '🧋',
    activities: [{ label: 'Καφές στο Corner Cup', minutes: 45, placeId: 'coffee', icon: '☕' }],
    travelMinutes: 15,
    why: 'Οικονομικό διάλειμμα με χρόνο για επιστροφή στη σχολή.',
  },
  {
    id: 'p10', title: 'Lunch from Home', tagline: 'Το πιο απλό budget-friendly lunch.',
    mood: 'food', duration: 65, price: 0, tier: 1, walking: 8, quiet: true,
    match: 88, accent: 'yellow', icon: '🍱',
    activities: [
      { label: 'Κολατσιό από το σπίτι στο Green Yard', minutes: 40, placeId: 'park', icon: '🍱' },
      { label: 'Λίγος καθαρός αέρας', minutes: 10, placeId: 'park', icon: '🌿' },
    ],
    travelMinutes: 15,
    why: 'Έχεις μαζί σου το φαγητό σου; Γλιτώνεις χρήματα και απολαμβάνεις ένα διάλειμμα.',
  },
  {
    id: 'p11', title: 'Treat Yourself', tagline: 'Καφές και ένα ωραίο lunch.',
    mood: 'coffee', duration: 85, price: 10, tier: 3, walking: 7, quiet: false,
    match: 90, accent: 'peach', icon: '✨',
    activities: [
      { label: 'Καφές στο Corner Cup', minutes: 30, placeId: 'coffee', icon: '☕' },
      { label: 'Lunch στο Campus Bites', minutes: 40, placeId: 'food', icon: '🥪' },
    ],
    travelMinutes: 15,
    why: 'Για τις φορές που έχεις χρόνο και θέλεις ένα πιο ολοκληρωμένο διάλειμμα.',
  },
];

export const defaultPreferences = {
  quietPlaces: true,
  maxWalking: 10,
  notifications: true,
};

/** Deterministic MOCK ranking. No trained model or live API is involved. */
export function recommendPlans({ mood, budget, preferences, skippedIds = [] }) {
  return plans
    .filter((plan) => plan.tier <= budget && plan.duration <= nextGap.minutes)
    .filter((plan) => plan.walking <= preferences.maxWalking)
    .filter((plan) => !skippedIds.includes(plan.id))
    .map((plan) => {
      const score = Math.max(60, Math.min(99,
        plan.match +
        (plan.mood === mood ? 3 : -13) +
        (preferences.quietPlaces && plan.quiet ? 2 : 0) +
        (preferences.quietPlaces && !plan.quiet ? -5 : 0) +
        (plan.price === 0 ? 1 : 0)
      ));
      return { ...plan, score };
    })
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}
