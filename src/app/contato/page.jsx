'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTema } from '../../contexts/Tema';
import BotaoTema from '../../components/BotaoTema';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function ContatoPage() {
  const { tema, estiloTema, estiloCard, estiloBotao } = useTema();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        subject: formData.assunto,
        message: formData.mensagem,
        to_email: 'flavia.mendes@senai.sp.br' // Seu email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
      );
      
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    background: tema === 'dark' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(255, 255, 255, 0.9)',
    border: `1px solid ${tema === 'dark' ? 'rgba(249, 250, 251, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
    color: tema === 'dark' ? '#f9fafb' : '#1f2937',
    borderRadius: '8px',
    padding: '12px',
    width: '100%',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  };

  const focusStyle = {
    ...inputStyle,
    borderColor: tema === 'dark' ? '#60a5fa' : '#3b82f6',
    boxShadow: `0 0 0 3px ${tema === 'dark' ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
  };

  return (
    <div className="min-h-screen" style={estiloTema}>
      <BotaoTema />

      <header className="backdrop-blur-sm border-b" style={{
        background: tema === 'dark' ? 'rgba(55, 65, 81, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(255, 255, 255, 0.3)'
      }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold" style={{
              color: tema === 'dark' ? '#f9fafb' : '#ffffff'
            }}>
              ← Monster Gallery
            </Link>
            <h1 className="text-3xl font-bold" style={{
              color: tema === 'dark' ? '#f9fafb' : '#ffffff'
            }}>
              Entre em Contato
            </h1>
            <div className="w-48"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg shadow-lg" style={estiloCard}>
              <h2 className="text-2xl font-bold mb-6" style={{
                color: tema === 'dark' ? '#f9fafb' : '#1f2937'
              }}>
                Nossas Informações
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{
                      color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                    }}>
                      Endereço
                    </h3>
                    <p style={{
                      color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                    }}>
                      SENAI Valinhos<br />
                      Rua Pedro Rizzi, 300<br />
                      Vila São Joaquim - Valinhos, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{
                      color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                    }}>
                      Telefone
                    </h3>
                    <p style={{
                      color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                    }}>
                    (19) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{
                      color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                    }}>
                      Email
                    </h3>
                    <p style={{
                      color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                    }}>
                    flavia.r.mendes@aluno.senai.br                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t" style={{
                  borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.2)' : 'rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 className="font-semibold mb-4" style={{
                    color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                  }}>
                    Me siga para acompanhar mais projetos!
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/flaviamendes17" target="_blank" rel="noopener noreferrer" 
                       className="transform hover:scale-110 transition-transform duration-200">
                      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <Image src="/image/github.png" alt="GitHub" width={20} height={20} className="hover:opacity-80" />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/flaviamendes17" target="_blank" rel="noopener noreferrer"
                       className="transform hover:scale-110 transition-transform duration-200">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                        <Image src="/image/linkedin.png" alt="LinkedIn" width={20} height={20} className="hover:opacity-80" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/flaviaramendes" target="_blank" rel="noopener noreferrer"
                       className="transform hover:scale-110 transition-transform duration-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
                        <Image src="/image/instagram.png" alt="Instagram" width={20} height={20} className="hover:opacity-80" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg shadow-lg" style={estiloCard}>
              <h2 className="text-2xl font-bold mb-6" style={{
                color: tema === 'dark' ? '#f9fafb' : '#1f2937'
              }}>
                Envie sua Mensagem
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  ❌ Erro ao enviar mensagem. Tente novamente.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold" style={{
                      color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                    }}>
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{
                      color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{
                    color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                  }}>
                    Assunto *
                  </label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre o projeto</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="colaboracao">Colaboração</option>
                    <option value="feedback">Feedback</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{
                    color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                  }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Escreva sua mensagem aqui..."
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={estiloBotao}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12">
            <div className="p-8 rounded-lg shadow-lg text-center" style={estiloCard}>
              <h2 className="text-2xl font-bold mb-6" style={{
                color: tema === 'dark' ? '#f9fafb' : '#1f2937'
              }}>
                Nossa Localização
              </h2>
              <div className="p-12 rounded-lg border-2 border-dashed" style={{
                borderColor: tema === 'dark' ? 'rgba(249, 250, 251, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                background: tema === 'dark' ? 'rgba(55, 65, 81, 0.3)' : 'rgba(249, 250, 251, 0.5)'
              }}>
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold mb-2" style={{
                  color: tema === 'dark' ? '#f9fafb' : '#1f2937'
                }}>
                  SENAI Valinhos
                </p>
                <p style={{
                  color: tema === 'dark' ? '#d1d5db' : '#6b7280'
                }}>
                  Rua Pedro Rizzi, 300 - Vila São Joaquim, Valinhos - SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 mt-12" style={{
        color: tema === 'dark' ? 'rgba(249, 250, 251, 0.6)' : 'rgba(31, 41, 55, 0.6)'
      }}>
        <p>&copy; 2025 Monster Gallery. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}