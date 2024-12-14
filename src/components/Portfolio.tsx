import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: "Faruk Güllüoğlu",
    logo: "https://www.robotpos.com/wp-content/uploads/2019/05/robotpos-logo.svg",
    branches: "110+ Şube"
  },
  {
    id: 2,
    name: "Alaçatı Muhallebicisi",
    logo: "https://www.robotpos.com/wp-content/uploads/2019/05/robotpos-logo.svg",
    branches: "100+ Şube"
  },
  {
    id: 3,
    name: "Gönül Kahvesi",
    logo: "https://www.robotpos.com/wp-content/uploads/2019/05/robotpos-logo.svg",
    branches: "60+ Şube"
  },
  {
    id: 4,
    name: "Dönerci Ali Usta",
    logo: "https://www.robotpos.com/wp-content/uploads/2019/05/robotpos-logo.svg",
    branches: "4+ Şube"
  }
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (clients.length - itemsPerPage + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? clients.length - itemsPerPage : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gradient text-center mb-16">
          Müşteri Portföyümüz
        </h2>

        <div className="relative">
          <button 
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {clients.map((client) => (
                <div 
                  key={client.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-gray-900 rounded-xl p-6 text-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-24 w-auto mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {client.name}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {client.branches}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}