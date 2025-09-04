import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

export default function I18nProvider({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </I18nextProvider>
  );
}
