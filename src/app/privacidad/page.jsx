import '../../styles/global.css';
import I18nProvider from '../../i18n/I18nProvider';
import PrivacyContent from './PrivacyContent';

// Server-rendered default is English; the body copy follows the active
// language inside <PrivacyContent /> (see below).
export const metadata = {
  title: 'Privacy and cookie policy | Daniel Adeleye',
  description:
    'Privacy policy and cookie notice for leye.me. No advertising or tracking cookies.',
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <I18nProvider>
      <PrivacyContent />
    </I18nProvider>
  );
}