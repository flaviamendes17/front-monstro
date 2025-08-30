'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
    return (
        <div className='min-h-screen' style={{
            background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
        }}>
            <header className="bg-white/20 backdrop-blur-sm border-b border-white/30">
                <div className="container mx-auto px-4 py-6">
                    <h2 className='text-white/80 text-center mt-5 text-4xl font-bold'>CONHEÇA A API</h2>
                    <p className='text-white/60 text-center mt-2'>Aqui você pode aprender mais sobre como usar a API para explorar o mundo dos monstros.</p>
                </div>
            </header>
            <main className='container mx-auto px-4 py-8'>
                <div className='max-w-4xl mx-auto'>
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-shrink-0">
                            <Image
                                src="/image/monster.png"
                                alt="Monster Icon"
                                width={120}
                                height={120}
                                className="rounded-full shadow-lg"
                            />
                        </div>
                        <div className='text-center md:text-left'>
                            <h2 className='text-3xl font-bold text-white mb-2'>Monster Sanctuary - Explore a API</h2>
                            <p className='text-white/80 text-lg leading-relaxed'> Uma API completa que disponibiliza informações detalhadas sobre criaturas fantásticas 
                                do universo Monster Sanctuary. Explore dados sobre diferentes espécies de monstros, 
                                suas características, habilidades e muito mais para criar experiências incríveis.</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6 mb-8'>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="mr-3 text-2xl">📚</span>
                                Documentação Oficial
                            </h3>
                            <a href="https://sampleapis.com/api-list/monstersanctuary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                            >
                                Ver Documentação
                            </a>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="mr-3 text-2xl">🌐</span>
                                URL Base
                            </h3>
                            <code className="bg-gray-100 px-3 py-2 rounded text-sm block break-all">
                                https://api.sampleapis.com/monstersanctuary
                            </code>
                        </div>
                    </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3 text-2xl">🔗</span>
            Endpoints Disponíveis
            </h3>
<div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
                <code className="text-purple-600 font-mono text-lg">/monsters</code>
                <p className="text-gray-600 mt-1">Busca todos os monstros disponíveis na sanctuary</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
                <code className="text-blue-600 font-mono text-lg">/monsters/{"{id}"}</code>
                <p className="text-gray-600 mt-1">Busca um monstro específico por ID</p>
            </div>
            </div>
        </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3 text-2xl">⚙️</span>
            Atributos da Resposta da API
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">id</span>
                <span className="text-gray-600">Identificador único do monstro</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">name</span>
                <span className="text-gray-600">Nome do monstro</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">species</span>
                <span className="text-gray-600">Espécie da criatura</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">type</span>
                <span className="text-gray-600">Tipo elemental (Fire, Water, Earth, etc.)</span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">image</span>
                <span className="text-gray-600">URL da imagem do monstro</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">abilities</span>
                <span className="text-gray-600">Lista de habilidades especiais</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">stats</span>
                <span className="text-gray-600">Estatísticas de combate (HP, ATK, DEF)</span>
                </div>
                <div className="flex items-start">
                <span className="font-mono text-purple-600 font-semibold mr-3 min-w-0 flex-shrink-0">habitat</span>
                <span className="text-gray-600">Habitat natural do monstro</span>
                </div>
            </div>
            </div>
        </div>
        <div className='text-center flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href="/">
            <button className='px-8 py-3 rounded-b-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-1g' style={{
                background: 'linear-gradient(135deg, rgba(122, 75, 212, 0.9), rgba(101, 57, 193, 0.9), rgba(81, 40, 174, 0.9))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            >Voltar para página inicial.
            </button>
            </Link>
            <Link href="/entidade">
            <button className='px-8 py-3 rounded-b-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-1g' style={{
                background: 'linear-gradient(135deg, rgba(122, 75, 212, 0.9), rgba(101, 57, 193, 0.9), rgba(81, 40, 174, 0.9))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            >Explorar Monstros
            </button>
            </Link>
        </div>
        </div>
        </main>

        <footer className='text-center text-white/60 py-6 mt-8'>
        <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
        </footer>
        </div>
    );
}