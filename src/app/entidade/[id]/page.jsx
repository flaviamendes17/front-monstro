'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function MonsterDetails() {
    const params = useParams();
    const [monster, setMonster] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (params.id) {
            fetchMonster(params.id);
        }
    }, [params.id]);

    const fetchMonster = async (id) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.sampleapis.com/monstersanctuary/monsters/${id}`);
            
            setMonster(response.data);
        } catch (err) {
            if (err.response?.status === 404) {
                setError('Monstro não encontrado');
            } else {
                setError(err.response?.data?.message || err.message || 'Erro ao buscar dados do monstro');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={{
                background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
            }}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-xl">Carregando detalhes...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={{
                background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
            }}>
                <div className="text-center">
                    <p className="text-red-300 text-xl mb-4">Erro: {error}</p>
                    <Link href="/entidade">
                        <button className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                            Voltar à Lista
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!monster) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={{
                background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
            }}>
                <div className="text-center">
                    <p className="text-white text-xl mb-4">Monstro não encontrado</p>
                    <Link href="/entidade">
                        <button className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                            Voltar à Lista
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen' style={{
            background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
        }}>
            <header className="bg-white/20 backdrop-blur-sm border-b border-white/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/entidade" className="text-white/80 hover:text-white transition-colors">
                            ← Voltar à Lista
                        </Link>
                        <div className="text-center">
                            <h1 className='text-white text-3xl font-bold'>Detalhes do Monstro</h1>
                        </div>
                        <div className="w-24"></div>
                    </div>
                </div>
            </header>

            <main className='container mx-auto px-4 py-8'>
                <div className='max-w-4xl mx-auto'>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Imagem */}
                            <div className="md:w-1/2">
                                <div className="relative h-64 md:h-full bg-gradient-to-br from-purple-100 to-purple-200">
                                    {monster.image && !monster.image.includes('data:image/gif;base64') ? (
                                        <img
                                            src={monster.image}
                                            alt={monster.name || 'Monstro'}
                                            className="w-full h-full object-contain p-4"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div 
                                        className="w-full h-full flex flex-col items-center justify-center"
                                        style={{ display: (monster.image && !monster.image.includes('data:image/gif;base64')) ? 'none' : 'flex' }}
                                    >
                                        <span className="text-9xl mb-4">👾</span>
                                        <span className="text-sm text-gray-600 text-center px-4">Imagem não disponível</span>
                                    </div>
                                    
                                    {monster.elements && monster.elements.length > 0 && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-2 bg-purple-600 text-white rounded-full font-semibold">
                                                {monster.elements[0].type?.replace(' (Element)', '') || 'Elemento'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    {monster.name || 'Nome não disponível'}
                                </h2>
                                
                                <div className="space-y-4">
                                    {monster.id && (
                                        <div>
                                            <span className="font-semibold text-gray-700">ID:</span>
                                            <span className="ml-2 text-gray-600">#{monster.id}</span>
                                        </div>
                                    )}

                                    {monster.elements && monster.elements.length > 0 && (
                                        <div>
                                            <span className="font-semibold text-gray-700 block mb-2">Elementos:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.elements.map((element, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                                                    >
                                                        {element.type?.replace(' (Element)', '') || `Elemento ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.weakness && monster.weakness.length > 0 && (
                                        <div>
                                            <span className="font-semibold text-gray-700 block mb-2">Fraquezas:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.weakness.map((weakness, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                                                    >
                                                        {weakness.type?.replace(' Weakness', '') || `Fraqueza ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.resistance && monster.resistance.length > 0 && (
                                        <div>
                                            <span className="font-semibold text-gray-700 block mb-2">Resistências:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.resistance.map((resistance, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                                    >
                                                        {resistance.type?.replace(' Resistance', '') || `Resistência ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.stats && (
                                        <div>
                                            <span className="font-semibold text-gray-700 block mb-2">Estatísticas:</span>
                                            <div className="space-y-2">
                                                {Object.entries(monster.stats).map(([stat, value]) => (
                                                    <div key={stat} className="flex items-center">
                                                        <span className="w-16 text-sm font-medium text-gray-600 capitalize">
                                                            {stat}:
                                                        </span>
                                                        <div className="flex-1 ml-3">
                                                            <div className="bg-gray-200 rounded-full h-2">
                                                                <div 
                                                                    className="bg-purple-600 h-2 rounded-full"
                                                                    style={{ width: `${Math.min((value / 100) * 100, 100)}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <span className="ml-2 text-sm font-semibold text-gray-700">
                                                            {value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.description && (
                                        <div>
                                            <span className="font-semibold text-gray-700 block mb-2">Descrição:</span>
                                            <p className="text-gray-600 leading-relaxed">{monster.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <Link href="/entidade" className="flex-1">
                                        <button className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-semibold">
                                            Voltar à Lista
                                        </button>
                                    </Link>
                                    <Link href="/intro" className="flex-1">
                                        <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
                                            Sobre a API
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className='text-center text-white/60 py-6 mt-8'>
                <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
