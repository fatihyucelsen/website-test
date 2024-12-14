import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Counter } from './Counter';

interface Props {
  t: any;
}

export function Hero({ t }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Grid Background */}
      <div className="absolute inset-0 bg-gradient-grid" />
      
      {/* Gradient Blob */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center space-y-8">
          <div className="inline-block animate-float">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              Yeni Nesil POS Çözümü
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-gradient animate-gradient max-w-4xl mx-auto leading-tight tracking-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#6c5ce7] text-white font-semibold text-lg hover:opacity-90 transition-all">
              {t.hero.cta}
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              Özellikleri Keşfet
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Counter end={1000} suffix="+" />
            <div className="text-gray-500">Aktif Restoran</div>
          </div>
          <div className="space-y-2">
            <Counter end={5000000} suffix="+" />
            <div className="text-gray-500">İşlem/Ay</div>
          </div>
          <div className="space-y-2">
            <Counter end={99.9} duration={1500} suffix="%" />
            <div className="text-gray-500">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">24/7</div>
            <div className="text-gray-500">Destek</div>
          </div>
        </div>
      </div>
    </div>
  );
}