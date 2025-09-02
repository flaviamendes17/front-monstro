'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Entidades() {
    const [monsters, setMonsters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMonsters();
    }, []);

    const fetchMonsters = async () => {
        try {
            setLoading(true);
            toast.info('🔍 Buscando monstros...', {
                position: "top-right",
                autoClose: 2000,
            });
            
            const response = await axios.get('https://api.sampleapis.com/monstersanctuary/monsters');
            
            const data = response.data;
            
            const validMonsters = data.filter(monster => 
                monster.name && monster.name.trim() !== ''
            );
            
            setMonsters(validMonsters);
            
            toast.success(`✨ ${validMonsters.length} monstros carregados com sucesso!`, {
                position: "top-right",
                autoClose: 3000,
            });
            
        } catch (err) {
            setError(err.message);
            toast.error(`❌ Erro ao carregar monstros: ${err.message}`, {
                position: "top-right",
                autoClose: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleImageLoad = (monsterName) => {
        toast.success(`🖼️ Imagem do ${monsterName} carregada!`, {
            position: "bottom-left",
            autoClose: 2000,
        });
    };

    const handleImageError = (monsterName) => {
        toast.warning(`⚠️ Imagem do ${monsterName} não disponível`, {
            position: "bottom-left",
            autoClose: 3000,
        });
    };

    const handleViewDetails = (monsterName) => {
        toast.info(`👁️ Visualizando detalhes de ${monsterName}`, {
            position: "top-center",
            autoClose: 2000,
        });
    };

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center' style={{
                background: "linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)"
            }}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-xl">Carregando monstros...</p>
                </div>
                <ToastContainer theme="dark" />
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
                    <button 
                        onClick={() => {
                            setError(null);
                            fetchMonsters();
                        }}
                        className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                    >
                        Tentar Novamente
                    </button>
                </div>
                <ToastContainer theme="dark" />
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
                        <Link href="/intro" className="text-white/80 hover:text-white transition-colors">
                            ← Voltar
                        </Link>
                        <div className="text-center">
                            <h1 className='text-white text-4xl font-bold'>Monster Gallery</h1>
                            <p className='text-white/80 mt-2'>Aqui você encontra um mundo de criaturas fantásticas.</p>
                        </div>
                        <div className="w-16"></div> 
                    </div>
                </div>
            </header>

            <main className='container mx-auto px-4 py-8'>
                <div className="mb-8 text-center">
                    <p className="text-white/90 text-lg">
                        {monsters.length} monstros encontrados na galeria.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {monsters.map((monster) => (
                        <div 
                            key={monster.id} 
                            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200">
                                {monster.image && 
                                !monster.image.includes('data:image/gif;base64') && 
                                monster.image.startsWith('http') ? (
                                    <img
                                        src={monster.image}
                                        alt={monster.name || 'Monstro'}
                                        className="w-full h-full object-contain p-2"
                                        onLoad={() => handleImageLoad(monster.name)}
                                        onError={() => handleImageError(monster.name)}
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
                                    <span className="text-xs text-gray-600 text-center px-2">
                                        {monster.image && monster.image.includes('data:image/gif;base64') 
                                            ? 'Imagem placeholder' 
                                            : 'Imagem não disponível'}
                                    </span>
                                </div>
                                
                                {monster.elements && monster.elements.length > 0 && (
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full font-semibold">
                                            {monster.elements[0].type?.replace(' (Element)', '') || 'Elemento'}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                                    {monster.name || 'Nome não disponível'}
                                </h3>
                                
                                {monster.elements && monster.elements.length > 0 && (
                                    <div className="mb-2">
                                        <p className="text-gray-600 text-sm mb-1">
                                            <span className="font-semibold">Elementos:</span>
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {monster.elements.slice(0, 3).map((element, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                                                >
                                                    {element.type?.replace(' (Element)', '') || `Elemento ${index + 1}`}
                                                </span>
                                            ))}
                                            {monster.elements.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                    +{monster.elements.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {monster.stats && (
                                    <div className="mb-3">
                                        <p className="text-gray-600 text-sm mb-1">
                                            <span className="font-semibold">Stats:</span>
                                        </p>
                                        <div className="grid grid-cols-2 gap-1 text-xs">
                                            {Object.entries(monster.stats).slice(0, 4).map(([stat, value]) => (
                                                <div key={stat} className="flex justify-between">
                                                    <span className="capitalize text-gray-600">{stat}:</span>
                                                    <span className="font-semibold text-gray-800">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {monster.weakness && monster.weakness.length > 0 && (
                                    <div className="mb-3">
                                        <p className="text-gray-600 text-sm mb-1">
                                            <span className="font-semibold">Fraqueza:</span>
                                        </p>
                                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                                            {monster.weakness[0].type?.replace(' Weakness', '') || 'Desconhecida'}
                                        </span>
                                    </div>
                                )}
                                <Link href={`/entidade/${monster.id}`}>
                                    <button 
                                        onClick={() => handleViewDetails(monster.name)}
                                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
                                    >
                                        Ver Detalhes
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {monsters.length === 0 && !loading && (
                    <div className="text-center text-white/80 mt-12">
                        <p className="text-xl">Nenhum monstro encontrado.</p>
                        <button 
                            onClick={() => {
                                toast.info('🔄 Recarregando galeria de monstros...', {
                                    position: "top-center",
                                    autoClose: 2000,
                                });
                                fetchMonsters();
                            }}
                            className="mt-4 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                        >
                            Recarregar
                        </button>
                    </div>
                )}
            </main>

            <footer className='text-center text-white/60 py-6 mt-8'>
                <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
            </footer>

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
                theme="dark"
                style={{
                    fontSize: '14px'
                }}
            />
        </div>
    );
}
