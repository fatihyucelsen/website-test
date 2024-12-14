import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { translations } from './i18n/translations';
import type { Language } from './types';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('tr');
  const t = translations[currentLang];

  return (
    <div className={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar
        t={t}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <Hero t={t} />
      <Features t={t} />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;