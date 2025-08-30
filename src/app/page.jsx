'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
    }}>
      <header className="bg-white/20 backdrop-blur-sm border-b border-white/30">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Monster Gallery
          </h1>
          <p className="text-white/80 text-center mt-2">
            Aqui você encontra um mundo de criaturas fantásticas.
          </p>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[80vh] p-4">
        <div className="bg-white p-6 rounded-lg shadow-2xl transform rotate-0 hover:rotate-2 transition-transform duration-300 max-w-sm">
          <div className="bg-gray-200 aspect-square relative mb-4 overflow-hidden rounded">
            <Image
              src="/image/flavia.jpg"
              alt="Flavia"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-gray-800">
              Flavia R. A. Mendes
            </h2>
            <p className="text-gray-600 text-sm">
              2TDS1 - SENAI Valinhos
            </p>
            <p className="text-gray-600 text-sm">
              A tecnologia é a ponte entre o que sonhamos e o que podemos transformar em realidade.'' 
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a 
                href="https://github.com/flaviamendes17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src="/image/github.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/flaviamendes17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src="/image/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a 
                href="https://www.instagram.com/flaviaramendes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src="/image/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
            </div>
            <div className="pt-6">
              <Link href="/intro">
                <button 
                  className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(122, 75, 212, 0.3), rgba(101, 57, 193, 0.3), rgba(81, 39, 175, 0.3), rgba(60, 21, 156, 0.3), rgba(39, 3, 137, 0.3))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  Conheça mais a API
                </button>
              </Link>
            </div>
            <div className="pt-2">
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center text-white/60 py-4">
        <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

