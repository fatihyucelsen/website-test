import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "İnanıyorum ki sektörümüzde yer alan işletmeler için sorunsuz ve kolay bir otomasyon sistemiyle çalışmak büyük önem taşır. Robotpos bu açıdan son derece başarılı çözümler sunuyor. Sistemlerine kolayca adapte olduk ve personelimiz Robotpos'un uygulamalarını öğrenmekte hiç sorun yaşamadı. Ayrıca sektörel çözümler sunması ve entegrasyon desteği bizim için belirleyici oldu.",
    name: "Mustafa Öztürk",
    position: "Bilgi İşlem Sorumlusu / Malatya Pazarı Kuruyemişçilik",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  {
    id: 2,
    text: "8 Yılı aşkın süredir Türkiye, Avrupa ve Arabistan operasyonlarımızda, Robotpos ürünlerini büyük bir güvenle kullanmaya devam ediyoruz.",
    name: "Ahmet Yılmaz",
    position: "Operasyon Müdürü / Mega Restaurant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gradient text-center mb-16">
          Müşterilerimiz Ne Diyor?
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative flex items-center justify-center">
              <button 
                onClick={prev}
                className="absolute left-4 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-xl text-gray-300 mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentIndex].position}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={next}
                className="absolute right-4 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}