// UI fixtures only: no inference, live occupancy or personal fatigue measurement.
import { nextGap } from './mockData.js';
export const forecastWindow = nextGap.start + '–' + nextGap.end;
export const fatigueDemo = {
  label: 'Μέτρια',
  reason: 'Στο ενδεικτικό σενάριο έχουν προηγηθεί δύο μαθήματα πριν από το μεσημεριανό κενό.',
  suggestion: 'Ένα ήρεμο διάλειμμα πριν από το επόμενο μάθημα.',
};
export const crowdDemo = {
  library: { level: 'low', label: 'Χαμηλός', reason: 'Σενάριο demo: περισσότερες διαθέσιμες θέσεις στο αναγνωστήριο.' },
  coffee: { level: 'high', label: 'Υψηλός', reason: 'Σενάριο demo: αυξημένη κίνηση για καφέ μετά τα μαθήματα.' },
  park: { level: 'low', label: 'Χαμηλός', reason: 'Σενάριο demo: αραιή κίνηση στον εξωτερικό χώρο.' },
  food: { level: 'high', label: 'Υψηλός', reason: 'Σενάριο demo: αυξημένη κίνηση την ώρα του μεσημεριανού.' },
  quiet: { level: 'low', label: 'Χαμηλός', reason: 'Σενάριο demo: ήρεμη κίνηση στο μικρό καφέ.' },
  snack: { level: 'medium', label: 'Μέτριος', reason: 'Σενάριο demo: σταθερή κίνηση για ένα γρήγορο σνακ.' },
};
export const planEnergyNotes = {
  study: 'Με μέτρια εκτιμώμενη κούραση, ένα μικρό διάλειμμα πριν από το διάβασμα θα μπορούσε να ταιριάζει.',
  relax: 'Ένα ήρεμο διάλειμμα ταιριάζει στο σενάριο μέτριας κούρασης.',
  coffee: 'Χρόνος για διάλειμμα· έλεγξε και τον ενδεικτικό συνωστισμό του χώρου.',
  food: 'Ένα διάλειμμα για φαγητό πριν από το επόμενο μάθημα, με προσοχή στην ενδεικτική κίνηση.',
};
