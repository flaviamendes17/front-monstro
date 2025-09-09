'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTema } from '../contexts/Tema';
import BotaoTema from '../components/BotaoTema';

export default function Home() {
  const { tema, estiloTema, estiloCard, estiloBotao } = useTema();

  return (
    <div className="min-h-screen" style={estiloTema}>
      <BotaoTema />

      <header className="backdrop-blur-sm border-b" style={{
        background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(255, 255, 255, 0.3)'
      }}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center" style={{
            color: tema === 'dark' ? '#f9fafb' : '#ffffff'
          }}>
            Monster Gallery
          </h1>
          <p className="text-center mt-2" style={{
            color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          }}>
            Aqui você encontra um mundo de criaturas fantásticas.
          </p>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[80vh] p-4">
        <div 
          className="p-6 rounded-lg shadow-2xl transform rotate-0 hover:rotate-2 transition-transform duration-300 max-w-sm"
          style={estiloCard}
        >
          <div className="aspect-square relative mb-4 overflow-hidden rounded" style={{
            background: tema === 'dark' ? '#4b5563' : '#e5e7eb'
          }}>
            <Image
              src="/image/flavia.jpg"
              alt="Flavia"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold" style={{
              color: tema === 'dark' ? '#f9fafb' : '#1f2937'
            }}>
              Flavia R. A. Mendes
            </h2>
            <p className="text-sm" style={{
              color: tema === 'dark' ? '#d1d5db' : '#6b7280'
            }}>
              2TDS1 - SENAI Valinhos
            </p>
            <p className="text-sm" style={{
              color: tema === 'dark' ? '#d1d5db' : '#6b7280'
            }}>
              A tecnologia é a ponte entre o que sonhamos e o que podemos transformar em realidade.'' 
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/flaviamendes17" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Image src="/image/github.png" alt="GitHub" width={32} height={32} className="hover:opacity-80" />
              </a>
              <a href="https://www.linkedin.com/in/flaviamendes17" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Image src="/image/linkedin.png" alt="LinkedIn" width={32} height={32} className="hover:opacity-80" />
              </a>
              <a href="https://www.instagram.com/flaviaramendes" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Image src="/image/instagram.png" alt="Instagram" width={32} height={32} className="hover:opacity-80" />
              </a>
            </div>
            <div className="pt-6">
              <Link href="/intro">
                <button 
                  className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={estiloBotao}
                >
                  Conheça mais a API
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-4" style={{
        color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(255, 255, 255, 0.6)'
      }}>
        <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

