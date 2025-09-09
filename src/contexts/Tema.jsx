'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const TemaContext = createContext();

export const useTema = () => {
const context = useContext(TemaContext);
if (!context) {
    throw new Error('useTema deve ser usado dentro de TemaProvider');
}
return context;
};

export const TemaProvider = ({ children }) => {
const [tema, setTema] = useState('light');

  // Função para alternar tema
const alternarTema = () => {
    try {
    const novoTema = tema === 'light' ? 'dark' : 'light';
    console.log(`🎨 Alterando tema de '${tema}' para '${novoTema}'`);
    
      // Calcular data de expiração (30 dias)
    const dataExpiracao = new Date();
    dataExpiracao.setDate(dataExpiracao.getDate() + 30);
    console.log('📅 Cookie expira em:', dataExpiracao.toLocaleDateString());
    
      // Salvar cookie
    document.cookie = `tema=${novoTema}; expires=${dataExpiracao.toUTCString()}; path=/`;
    console.log('💾 Cookie salvo');
    
      // Atualizar estado
    setTema(novoTema);
    } catch (error) {
    console.error('❌ Erro ao alterar tema:', error);
    }
};

  // Carregar tema do cookie ao iniciar
useEffect(() => {
    const cookieTema = document.cookie
    .split('; ')
    .find(row => row.startsWith('tema='))
    ?.split('=')[1];
    
    if (cookieTema) {
    setTema(cookieTema);
    }
}, []);

  // Estilos baseados no tema
const estiloTema = tema === 'dark' ? {
    background: 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #6b7280 75%, #9ca3af 100%)',
    color: '#f9fafb'
} : {
    background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)',
    color: '#ffffff'
};

const value = {
    tema,
    alternarTema,
    estiloTema,
    // Estilos utilitários
    estiloCard: tema === 'dark' ? {
    background: '#374151',
    color: '#f9fafb'
    } : {
    background: '#ffffff',
    color: '#1f2937'
    },
    estiloBotao: tema === 'dark' ? {
    background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.8), rgba(75, 85, 99, 0.8))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(249, 250, 251, 0.2)',
    color: '#f9fafb'
    } : {
    background: 'linear-gradient(135deg, rgba(122, 75, 212, 0.3), rgba(101, 57, 193, 0.3), rgba(81, 39, 175, 0.3), rgba(60, 21, 156, 0.3), rgba(39, 3, 137, 0.3))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff'
    }
};

return (
    <TemaContext.Provider value={value}>
    {children}
    </TemaContext.Provider>
);
};