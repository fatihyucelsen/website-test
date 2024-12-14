import React from 'react';
import { Menu } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import type { Language } from '../types';

interface Props {
  t: any;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ t, currentLang, onLanguageChange }: Props) {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://www.robotpos.com/wp-content/uploads/2019/05/robotpos-logo.svg"
                alt="RobotPOS Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t.nav.home}
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              {t.nav.features}
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              {t.nav.contact}
            </a>
            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
          </div>

          <div className="md:hidden">
            <button className="p-2 text-gray-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}