'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTema } from '../../contexts/Tema'; 
import BotaoTema from '../../components/botaotema'; 

export default function Entidades() {
    const { tema, estiloTema, estiloCard } = useTema(); 
    const [monsters, setMonsters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [monstersPerPage] = useState(8); 

    useEffect(() => {
        fetchMonsters();
    }, []);

    const fetchMonsters = async () => {
        try {
            setLoading(true);
            
            const response = await axios.get('https://api.sampleapis.com/monstersanctuary/monsters');
            const data = response.data;
            
            const validMonsters = data.filter(monster => 
                monster.name && monster.name.trim() !== ''
            );
            
            setMonsters(validMonsters);
            
            toast.success(`✨ ${validMonsters.length} monstros carregados!`, {
                position: "top-right",
                autoClose: 2000,
            });
            
        } catch (err) {
            setError(err.message);
            toast.error(`❌ Erro ao carregar: ${err.message}`, {
                position: "top-right",
                autoClose: 4000,
            });
        } finally {
            setLoading(false);
        }
    };



    const indexOfLastMonster = currentPage * monstersPerPage;
    const indexOfFirstMonster = indexOfLastMonster - monstersPerPage;
    const currentMonsters = monsters.slice(indexOfFirstMonster, indexOfLastMonster);
    const totalPages = Math.ceil(monsters.length / monstersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        
        return pageNumbers;
    };

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={estiloTema}>
                <BotaoTema />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 mx-auto mb-4" style={{
                        borderColor: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}></div>
                    <p className="text-xl" style={{
                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                    }}>Carregando monstros...</p>
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
                    <button 
                        onClick={() => {
                            setError(null);
                            fetchMonsters();
                        }}
                        className="px-6 py-3 rounded-lg transition-colors"
                        style={{
                            background: tema === 'dark' ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                            color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                        }}
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={estiloTema}>
            <BotaoTema />
            
            <header className="backdrop-blur-sm border-b" style={{
                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(255, 255, 255, 0.3)'
            }}>
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/intro" style={{
                            color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                        }} className="hover:opacity-100 transition-colors">
                            ← Voltar
                        </Link>
                        <div className="text-center">
                            <h1 className='text-4xl font-bold' style={{
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}>Monster Gallery</h1>
                            <p className='mt-2' style={{
                                color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                            }}>Aqui você encontra um mundo de criaturas fantásticas.</p>
                        </div>
                        <div className="w-16"></div> 
                    </div>
                </div>
            </header>

            <main className='container mx-auto px-4 py-8'>
                <div className="mb-8 text-center">
                    <p className="text-lg" style={{
                        color: tema === 'dark' ? 'rgba(249, 250, 251, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                    }}>
                        {monsters.length} monstros encontrados na galeria.
                    </p>
                    {totalPages > 1 && (
                        <p className="text-sm mt-2" style={{
                            color: tema === 'dark' ? 'rgba(249, 250, 251, 0.7)' : 'rgba(255, 255, 255, 0.7)'
                        }}>
                            Página {currentPage} de {totalPages} • Mostrando {currentMonsters.length} de {monsters.length} monstros
                        </p>
                    )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {currentMonsters.map((monster) => (
                        <div 
                            key={monster.id} 
                            className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={estiloCard}
                        >
                            <div className="relative h-48" style={{
                                background: tema === 'dark' 
                                    ? 'linear-gradient(135deg, #4b5563, #6b7280)' 
                                    : 'linear-gradient(135deg, #e5e7eb, #f3f4f6)'
                            }}>
                                {monster.image && 
                                !monster.image.includes('data:image/gif;base64') && 
                                monster.image.startsWith('http') ? (
                                    <img
                                        src={monster.image}
                                        alt={monster.name || 'Monstro'}
                                        className="w-full h-full object-contain p-2"
                                        crossOrigin="anonymous"
                                    />
                                ) : null}
                                <div 
                                    className="w-full h-full flex flex-col items-center justify-center"
                                    style={{ 
                                        display: (monster.image && 
                                                !monster.image.includes('data:image/gif;base64') && 
                                                monster.image.startsWith('http')) ? 'none' : 'flex' 
                                    }}
                                >
                                    <span className="text-6xl mb-2">👾</span>
                                    <span className="text-xs text-center px-2" style={{
                                        color: tema === 'dark' ? '#9ca3af' : '#6b7280'
                                    }}>
                                        {monster.image && monster.image.includes('data:image/gif;base64') 
                                            ? 'Imagem placeholder' 
                                            : 'Imagem não disponível'}
                                    </span>
                                </div>
                                
                                {monster.elements && monster.elements.length > 0 && (
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2 py-1 text-white text-xs rounded-full font-semibold" style={{
                                            background: tema === 'dark' ? '#4b5563' : '#7c3aed'
                                        }}>
                                            {monster.elements[0].type?.replace(' (Element)', '') || 'Elemento'}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 truncate" style={{
                                    color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                                }}>
                                    {monster.name || 'Nome não disponível'}
                                </h3>
                                
                                {monster.elements && monster.elements.length > 0 && (
                                    <div className="mb-2">
                                        <p className="text-sm mb-1" style={{
                                            color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                        }}>
                                            <span className="font-semibold">Elementos:</span>
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {monster.elements.slice(0, 3).map((element, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 text-xs rounded"
                                                    style={{
                                                        background: tema === 'dark' ? '#4b5563' : '#e5e7eb',
                                                        color: tema === 'dark' ? '#f9fafb' : '#374151'
                                                    }}
                                                >
                                                    {element.type?.replace(' (Element)', '') || `Elemento ${index + 1}`}
                                                </span>
                                            ))}
                                            {monster.elements.length > 3 && (
                                                <span className="px-2 py-1 text-xs rounded" style={{
                                                    background: tema === 'dark' ? '#6b7280' : '#f3f4f6',
                                                    color: tema === 'dark' ? '#f9fafb' : '#6b7280'
                                                }}>
                                                    +{monster.elements.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {monster.stats && (
                                    <div className="mb-3">
                                        <p className="text-sm mb-1" style={{
                                            color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                        }}>
                                            <span className="font-semibold">Stats:</span>
                                        </p>
                                        <div className="grid grid-cols-2 gap-1 text-xs">
                                            {Object.entries(monster.stats).slice(0, 4).map(([stat, value]) => (
                                                <div key={stat} className="flex justify-between">
                                                    <span className="capitalize" style={{
                                                        color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                                    }}>{stat}:</span>
                                                    <span className="font-semibold" style={{
                                                        color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                                                    }}>{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {monster.weakness && monster.weakness.length > 0 && (
                                    <div className="mb-3">
                                        <p className="text-sm mb-1" style={{
                                            color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                                        }}>
                                            <span className="font-semibold">Fraqueza:</span>
                                        </p>
                                        <span className="px-2 py-1 text-xs rounded" style={{
                                            background: tema === 'dark' ? '#7f1d1d' : '#fecaca',
                                            color: tema === 'dark' ? '#fca5a5' : '#991b1b'
                                        }}>
                                            {monster.weakness[0].type?.replace(' Weakness', '') || 'Desconhecida'}
                                        </span>
                                    </div>
                                )}
                                <Link href={`/entidade/${monster.id}`}>
                                    <button 
                                        className="w-full px-4 py-2 rounded-lg transition-colors duration-200 font-semibold"
                                        style={{
                                            background: tema === 'dark' ? '#4b5563' : '#7c3aed',
                                            color: '#ffffff'
                                        }}
                                    >
                                        Ver Detalhes
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center">
                        <div className="rounded-lg p-4" style={{
                            background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        currentPage === 1
                                            ? 'cursor-not-allowed opacity-40'
                                            : 'hover:opacity-80'
                                    }`}
                                    style={{
                                        background: currentPage === 1 
                                            ? (tema === 'dark' ? 'rgba(75, 85, 99, 0.3)' : 'rgba(255, 255, 255, 0.1)')
                                            : (tema === 'dark' ? 'rgba(75, 85, 99, 0.6)' : 'rgba(255, 255, 255, 0.2)'),
                                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                                    }}
                                >
                                    ← Anterior
                                </button>

                                {getPageNumbers().map((pageNumber, index) => (
                                    <React.Fragment key={index}>
                                        {pageNumber === '...' ? (
                                            <span className="px-3 py-2" style={{
                                                color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(255, 255, 255, 0.6)'
                                            }}>...</span>
                                        ) : (
                                            <button
                                                onClick={() => handlePageChange(pageNumber)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                    currentPage === pageNumber
                                                        ? 'font-bold'
                                                        : 'hover:opacity-80'
                                                }`}
                                                style={{
                                                    background: currentPage === pageNumber
                                                        ? '#ffffff'
                                                        : (tema === 'dark' ? 'rgba(75, 85, 99, 0.6)' : 'rgba(255, 255, 255, 0.2)'),
                                                    color: currentPage === pageNumber
                                                        ? '#7c3aed'
                                                        : (tema === 'dark' ? '#f9fafb' : '#ffffff')
                                                }}
                                            >
                                                {pageNumber}
                                            </button>
                                        )}
                                    </React.Fragment>
                                ))}

                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        currentPage === totalPages
                                            ? 'cursor-not-allowed opacity-40'
                                            : 'hover:opacity-80'
                                    }`}
                                    style={{
                                        background: currentPage === totalPages 
                                            ? (tema === 'dark' ? 'rgba(75, 85, 99, 0.3)' : 'rgba(255, 255, 255, 0.1)')
                                            : (tema === 'dark' ? 'rgba(75, 85, 99, 0.6)' : 'rgba(255, 255, 255, 0.2)'),
                                        color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                                    }}
                                >
                                    Próximo →
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {monsters.length === 0 && !loading && (
                    <div className="text-center mt-12">
                        <p className="text-xl" style={{
                            color: tema === 'dark' ? 'rgba(249, 250, 251, 0.8)' : 'rgba(255, 255, 255, 0.8)'
                        }}>Nenhum monstro encontrado.</p>
                        <button 
                            onClick={fetchMonsters}
                            className="mt-4 px-6 py-3 rounded-lg transition-colors"
                            style={{
                                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                                color: tema === 'dark' ? '#f9fafb' : '#ffffff'
                            }}
                        >
                            Recarregar
                        </button>
                    </div>
                )}
            </main>

            <footer className='text-center py-6 mt-8' style={{
                color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(255, 255, 255, 0.6)'
            }}>
                <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
            </footer>

            {/* ✅ ToastContainer simples */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={tema === 'dark' ? 'dark' : 'light'}
                style={{
                    fontSize: '14px'
                }}
            />
        </div>
    );
}
