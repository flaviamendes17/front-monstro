'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTema } from '../contexts/Tema';
import styles from './BotaoTema.module.css';

export default function BotaoTema() {
  const { tema, alternarTema } = useTema();
  const [mudandoTema, setMudandoTema] = useState(false);

  const handleClick = () => {
    // Adicionar efeito visual
    setMudandoTema(true);
    
    // Executar mudança de tema
    alternarTema();
    
    // Remover efeito após animação
    setTimeout(() => {
      setMudandoTema(false);
    }, 600);
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        ${styles.botaoTema} 
        ${styles[tema]} 
        ${mudandoTema ? styles.mudandoTema : ''}
      `}
      title={tema === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
    >
      <Image
        src="/image/temaclaroeescuro.png"
        alt="Alternar tema"
        width={32}
        height={32}
        className={styles.imagemTema}
        priority
      />
    </button>
  );
}