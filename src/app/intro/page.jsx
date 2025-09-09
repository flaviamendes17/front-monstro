'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTema } from '../../contexts/Tema'; 
import BotaoTema from '../../components/botaotema'; 

export default function Intro() {
    const { tema, estiloTema, estiloCard } = useTema(); 

    return (
        <div className='min-h-screen' style={estiloTema}> 
            <BotaoTema />

            <header className="backdrop-blur-sm border-b" style={{
                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(255, 255, 255, 0.3)'
            }}>
                <div className="container mx-auto px-4 py-6">
                    <h2 className='text-center mt-5 text-4xl font-bold' style={{
                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}>CONHEÇA A API</h2>
                    <p className='text-center mt-2' style={{
                        color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(255, 255, 255, 0.6)'
                    }}>Aqui você pode aprender mais sobre como usar a API para explorar o mundo dos monstros.</p>
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
                            <h2 className='text-3xl font-bold mb-2' style={{
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}>Monster Sanctuary - Explore a API</h2>
                            <p className='text-lg leading-relaxed' style={{
                                color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                            }}>Uma API completa que disponibiliza informações detalhadas sobre criaturas fantásticas 
                                do universo Monster Sanctuary. Explore dados sobre diferentes espécies de monstros, 
                                suas características, habilidades e muito mais para criar experiências incríveis.</p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6 mb-8'>
                        <div className="rounded-xl shadow-lg p-6" style={estiloCard}>
                            <h3 className="text-xl font-bold mb-4 flex items-center" style={{
                                color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                            }}>
                                <span className="mr-3 text-2xl">📚</span>
                                Documentação Oficial
                            </h3>
                            <a 
                                href="https://sampleapis.com/api-list/monstersanctuary" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 rounded-lg transition-colors duration-200"
                                style={{
                                    background: tema === 'dark' ? '#6b7280' : '#7c3aed',
                                    color: '#ffffff'
                                }}
                            >
                                Ver Documentação
                            </a>
                        </div>

                        <div className="rounded-xl shadow-lg p-6" style={estiloCard}>
                            <h3 className="text-xl font-bold mb-4 flex items-center" style={{
                                color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                            }}>
                                <span className="mr-3 text-2xl">🌐</span>
                                URL Base
                            </h3>
                            <code className="px-3 py-2 rounded text-sm block break-all" style={{
                                background: tema === 'dark' ? '#4b5563' : '#f3f4f6',
                                color: tema === 'dark' ? '#f9fafb' : '#374151'
                            }}>
                                https://api.sampleapis.com/monstersanctuary
                            </code>
                        </div>
                    </div>

                    <div className="rounded-xl shadow-lg p-6 mb-8" style={estiloCard}>
                        <h3 className="text-xl font-bold mb-6 flex items-center" style={{
                            color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                        }}>
                            <span className="mr-3 text-2xl">🔗</span>
                            Endpoints Disponíveis
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 pl-4" style={{
                                borderColor: tema === 'dark' ? '#6b7280' : '#7c3aed'
                            }}>
                                <code className="font-mono text-lg" style={{
                                    color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                }}>/monsters</code>
                                <p className="mt-1" style={{
                                    color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                }}>Busca todos os monstros disponíveis na sanctuary</p>
                            </div>
                            <div className="border-l-4 pl-4" style={{
                                borderColor: tema === 'dark' ? '#60a5fa' : '#3b82f6'
                            }}>
                                <code className="font-mono text-lg" style={{
                                    color: tema === 'dark' ? '#60a5fa' : '#3b82f6'
                                }}>/monsters/{"{id}"}</code>
                                <p className="mt-1" style={{
                                    color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                }}>Busca um monstro específico por ID</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl shadow-lg p-6 mb-8" style={estiloCard}>
                        <h3 className="text-xl font-bold mb-6 flex items-center" style={{
                            color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                        }}>
                            <span className="mr-3 text-2xl">⚙️</span>
                            Atributos da Resposta da API
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>id</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Identificador único do monstro</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>name</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Nome do monstro</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>species</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Espécie da criatura</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>type</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Tipo elemental (Fire, Water, Earth, etc.)</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>image</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>URL da imagem do monstro</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>abilities</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Lista de habilidades especiais</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>stats</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Estatísticas de combate (HP, ATK, DEF)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-mono font-semibold mr-3 min-w-0 flex-shrink-0" style={{
                                        color: tema === 'dark' ? '#a78bfa' : '#7c3aed'
                                    }}>habitat</span>
                                    <span style={{
                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                    }}>Habitat natural do monstro</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link href="/">
                            <button 
                                className='px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                                style={{
                                    background: tema === 'dark' 
                                        ? 'linear-gradient(135deg, rgba(75, 85, 99, 0.9), rgba(107, 114, 128, 0.9))'
                                        : 'linear-gradient(135deg, rgba(122, 75, 212, 0.9), rgba(101, 57, 193, 0.9), rgba(81, 40, 174, 0.9))',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#ffffff'
                                }}
                            >
                                Voltar para página inicial
                            </button>
                        </Link>
                        <Link href="/entidade">
                            <button 
                                className='px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                                style={{
                                    background: tema === 'dark' 
                                        ? 'linear-gradient(135deg, rgba(75, 85, 99, 0.9), rgba(107, 114, 128, 0.9))'
                                        : 'linear-gradient(135deg, rgba(122, 75, 212, 0.9), rgba(101, 57, 193, 0.9), rgba(81, 40, 174, 0.9))',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#ffffff'
                                }}
                            >
                                Explorar Monstros
                            </button>
                        </Link>
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