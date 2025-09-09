'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useTema } from '../../../contexts/Tema'; 
import BotaoTema from '../../../components/botaotema'; 

export default function MonsterDetails() {
    const params = useParams();
    const { tema, estiloTema, estiloCard } = useTema(); 
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
            <div className='min-h-screen flex items-center justify-center' style={estiloTema}> {/* ✅ Usar estiloTema */}
                <BotaoTema />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 mx-auto mb-4" style={{
                        borderColor: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}></div>
                    <p className="text-xl" style={{
                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}>Carregando detalhes...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={estiloTema}>
                <BotaoTema />
                <div className="text-center">
                    <p className="text-xl mb-4" style={{
                        color: tema === 'dark' ? '#f87171' : '#fca5a5'
                    }}>Erro: {error}</p>
                    <Link href="/entidade">
                        <button 
                            className="px-6 py-3 rounded-lg transition-colors"
                            style={{
                                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}
                        >
                            Voltar à Lista
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!monster) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={estiloTema}>
                <BotaoTema />
                <div className="text-center">
                    <p className="text-xl mb-4" style={{
                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}>Monstro não encontrado</p>
                    <Link href="/entidade">
                        <button 
                            className="px-6 py-3 rounded-lg transition-colors"
                            style={{
                                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}
                        >
                            Voltar à Lista
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen' style={estiloTema}>
            <BotaoTema />
            
            <header className="backdrop-blur-sm border-b" style={{
                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(255, 255, 255, 0.3)'
            }}>
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/entidade" style={{
                            color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                        }} className="hover:opacity-100 transition-colors">
                            ← Voltar à Lista
                        </Link>
                        <div className="text-center">
                            <h1 className='text-3xl font-bold' style={{
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}>Detalhes do Monstro</h1>
                        </div>
                        <div className="w-24"></div>
                    </div>
                </div>
            </header>

            <main className='container mx-auto px-4 py-8'>
                <div className='max-w-4xl mx-auto'>
                    <div className="rounded-xl shadow-lg overflow-hidden" style={estiloCard}>
                        <div className="md:flex">
                            {/* Imagem */}
                            <div className="md:w-1/2">
                                <div className="relative h-64 md:h-full" style={{
                                    background: tema === 'dark' ? 'linear-gradient(135deg, #4b5563, #6b7280)' : 'linear-gradient(135deg, #e5e7eb, #f3f4f6)'
                                }}>
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
                                        <span className="text-sm text-center px-4" style={{
                                            color: tema === 'dark' ? '#9ca3af' : '#6b7280'
                                        }}>Imagem não disponível</span>
                                    </div>
                                    
                                    {monster.elements && monster.elements.length > 0 && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-2 rounded-full font-semibold" style={{
                                                background: tema === 'dark' ? '#4b5563' : '#7c3aed',
                                                color: '#ffffff'
                                            }}>
                                                {monster.elements[0].type?.replace(' (Element)', '') || 'Elemento'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8">
                                <h2 className="text-3xl font-bold mb-4" style={{
                                    color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                                }}>
                                    {monster.name || 'Nome não disponível'}
                                </h2>
                                
                                <div className="space-y-4">
                                    {monster.id && (
                                        <div>
                                            <span className="font-semibold" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>ID:</span>
                                            <span className="ml-2" style={{
                                                color: tema === 'dark' ? '#9ca3af' : '#6b7280'
                                            }}>#{monster.id}</span>
                                        </div>
                                    )}

                                    {monster.elements && monster.elements.length > 0 && (
                                        <div>
                                            <span className="font-semibold block mb-2" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>Elementos:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.elements.map((element, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 rounded-full text-sm"
                                                        style={{
                                                            background: tema === 'dark' ? '#4b5563' : '#e0e7ff',
                                                            color: tema === 'dark' ? '#f9fafb' : '#3730a3'
                                                        }}
                                                    >
                                                        {element.type?.replace(' (Element)', '') || `Elemento ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.weakness && monster.weakness.length > 0 && (
                                        <div>
                                            <span className="font-semibold block mb-2" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>Fraquezas:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.weakness.map((weakness, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 rounded-full text-sm"
                                                        style={{
                                                            background: tema === 'dark' ? '#7f1d1d' : '#fee2e2',
                                                            color: tema === 'dark' ? '#f9fafb' : '#991b1b'
                                                        }}
                                                    >
                                                        {weakness.type?.replace(' Weakness', '') || `Fraqueza ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.resistance && monster.resistance.length > 0 && (
                                        <div>
                                            <span className="font-semibold block mb-2" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>Resistências:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {monster.resistance.map((resistance, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 rounded-full text-sm"
                                                        style={{
                                                            background: tema === 'dark' ? '#14532d' : '#d1fae5',
                                                            color: tema === 'dark' ? '#f9fafb' : '#064e3b'
                                                        }}
                                                    >
                                                        {resistance.type?.replace(' Resistance', '') || `Resistência ${index + 1}`}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.stats && (
                                        <div>
                                            <span className="font-semibold block mb-2" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>Estatísticas:</span>
                                            <div className="space-y-2">
                                                {Object.entries(monster.stats).map(([stat, value]) => (
                                                    <div key={stat} className="flex items-center">
                                                        <span className="w-16 text-sm font-medium capitalize" style={{
                                                            color: tema === 'dark' ? '#9ca3af' : '#6b7280'
                                                        }}>
                                                            {stat}:
                                                        </span>
                                                        <div className="flex-1 ml-3">
                                                            <div className="rounded-full h-2" style={{
                                                                background: tema === 'dark' ? '#374151' : '#e5e7eb'
                                                            }}>
                                                                <div 
                                                                    className="h-2 rounded-full"
                                                                    style={{
                                                                        width: `${Math.min((value / 100) * 100, 100)}%`,
                                                                        background: tema === 'dark' ? '#7c3aed' : '#4c1d95'
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <span className="ml-2 text-sm font-semibold" style={{
                                                            color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                                        }}>
                                                            {value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {monster.description && (
                                        <div>
                                            <span className="font-semibold block mb-2" style={{
                                                color: tema === 'dark' ? '#d1d5db' : '#4b5563'
                                            }}>Descrição:</span>
                                            <p className="leading-relaxed" style={{
                                                color: tema === 'dark' ? '#9ca3af' : '#6b7280'
                                            }}>{monster.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <Link href="/entidade" className="flex-1">
                                        <button className="w-full px-4 py-3 rounded-lg transition-colors duration-200 font-semibold" style={{
                                            background: tema === 'dark' ? '#374151' : '#4b5563',
                                            color: '#ffffff'
                                        }}>
                                            Voltar à Lista
                                        </button>
                                    </Link>
                                    <Link href="/intro" className="flex-1">
                                        <button className="w-full px-4 py-3 rounded-lg transition-colors duration-200 font-semibold" style={{
                                            background: tema === 'dark' ? '#7c3aed' : '#4c1d95',
                                            color: '#ffffff'
                                        }}>
                                            Sobre a API
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className='text-center py-6 mt-8' style={{
                color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(255, 255, 255, 0.6)'
            }}>
                <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
