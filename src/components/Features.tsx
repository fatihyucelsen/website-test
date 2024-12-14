import React from 'react';
import { Terminal, BarChart3, ShoppingCart, Zap } from 'lucide-react';

interface Props {
  t: any;
}

export function Features({ t }: Props) {
  return (
    <section id="features" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Modern POS Sisteminin Geleceği
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Gelişmiş özellikler ve kullanıcı dostu arayüz ile işletmenizi bir üst seviyeye taşıyın.
            </p>
            <div className="space-y-6">
              {[
                { icon: Terminal, title: t.features.pos, desc: 'Sezgisel arayüz, hızlı işlem' },
                { icon: BarChart3, title: t.features.analytics, desc: 'Detaylı raporlar ve analizler' },
                { icon: ShoppingCart, title: t.features.online, desc: 'Entegre online sipariş' },
                { icon: Zap, title: t.features.inventory, desc: 'Gerçek zamanlı stok takibi' }
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gray-900">
                    <feature.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 glow">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="POS Interface"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}