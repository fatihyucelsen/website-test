import React from 'react';
import { Globe } from 'lucide-react';

type Language = 'tr' | 'en' | 'az' | 'ar';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSelector({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="uppercase">{currentLang}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <button
            onClick={() => onLanguageChange('tr')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Türkçe
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => onLanguageChange('az')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Azərbaycan
          </button>
          <button
            onClick={() => onLanguageChange('ar')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            dir="rtl"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}