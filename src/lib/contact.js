// Contact details and tracking helpers.
// The WhatsApp number and email below are the real ones already used on the
// site — replace them here only (one place) if they change.

export const EMAIL = 'danieladeleye321@gmail.com';
export const WHATSAPP_NUMBER = '2349063626099';
export const PHONE_DISPLAY = '+234 906 362 6099';

// UTM parameters are read once from the landing URL and stored, so cold-email
// visits can be told apart later inside the analytics tool.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export function captureUtm() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const found = UTM_KEYS.filter((key) => params.get(key));
  if (!found.length) return;
  try {
    window.localStorage.setItem('leye-utm', JSON.stringify(found.map((k) => [k, params.get(k)])));
  } catch {
    /* ignore */
  }
}

function utmSuffix() {
  if (typeof window === 'undefined') return '';
  try {
    const stored = window.localStorage.getItem('leye-utm');
    if (!stored) return '';
    return new URLSearchParams(JSON.parse(stored)).toString();
  } catch {
    return '';
  }
}

// Privacy-friendly, cookieless analytics (Plausible). No banner needed.
export function trackEvent(name, props) {
  if (typeof window === 'undefined') return;
  if (typeof window.plausible === 'function') window.plausible(name, props ? { props } : undefined);
}

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const utm = utmSuffix();
  return utm ? `${base}&${utm}` : base;
}

export function mailtoLink(subject, body) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function telLink() {
  return `tel:+${WHATSAPP_NUMBER}`;
}