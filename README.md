# 🐲 Monster Gallery - Monster Sanctuary API Explorer

Uma aplicação web moderna desenvolvida em **Next.js** para explorar e visualizar monstros do jogo **Monster Sanctuary** através de uma API REST com sistema de paginação e notificações interativas.

<div align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?style=for-the-badge&logo=axios)
![React Toastify](https://img.shields.io/badge/React_Toastify-10.x-FF6B6B?style=for-the-badge&logo=react)

</div>

## 🎯 Sobre o Projeto

**Monster Gallery** é uma Single Page Application (SPA) que consome a [Monster Sanctuary API](https://api.sampleapis.com/monstersanctuary/monsters) para exibir informações detalhadas sobre mais de 100 monstros únicos do popular jogo indie Monster Sanctuary.

### ✨ Funcionalidades

- 📋 **Lista de Monstros**: Visualização em cards responsivos com informações essenciais
- 📄 **Paginação Inteligente**: Sistema de paginação com 8 monstros por página e navegação suave
- 🔍 **Detalhes Individuais**: Página dedicada para cada monstro com estatísticas completas
- 🔔 **Notificações Interativas**: Sistema de toasts com feedback visual para todas as ações
- 🎨 **Design Moderno**: Interface elegante com gradientes roxos e efeitos glassmorphism
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Performance**: Carregamento rápido com otimizações do Next.js
- 🖼️ **Fallback de Imagens**: Sistema inteligente para imagens indisponíveis
- 🔄 **Auto-scroll**: Navegação automática para o topo ao mudar de página

### 🔔 Sistema de Notificações

| Tipo | Ação | Feedback |
|------|------|----------|
| **Info** | Carregando dados | 🔍 "Buscando monstros..." |
| **Success** | Dados carregados | ✨ "X monstros carregados com sucesso!" |
| **Error** | Falha no carregamento | ❌ "Erro ao carregar monstros" |
| **Info** | Visualizar detalhes | 👁️ "Visualizando detalhes de [Nome]" |
| **Info** | Mudança de página | 📄 "Página X de Y" |

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Next.js** | 15.5.0 | Framework React com App Router |
| **React** | 19.1.0 | Biblioteca para interfaces de usuário |
| **Tailwind CSS** | 4.0 | Framework CSS utilitário |
| **Axios** | 1.11.0 | Cliente HTTP para requisições à API |
| **React Toastify** | 10.x | Sistema de notificações toast |
| **ESLint** | 9.x | Linting e qualidade de código |

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun como gerenciador de pacotes

### Instalação e Execução

1. **Clone o repositório**
```bash
git clone https://github.com/flaviamendes17/front-monstro.git
cd front-monstro
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.jsx              # Página inicial com navegação
│   ├── layout.js             # Layout raiz da aplicação
│   ├── globals.css           # Estilos globais + React Toastify
│   ├── intro/
│   │   └── page.jsx          # Página de informações da API
│   └── entidade/
│       ├── page.jsx          # Lista paginada de monstros
│       └── [id]/
│           └── page.jsx      # Detalhes do monstro
└── public/
    └── image/                # Imagens estáticas
```

## 📄 Sistema de Paginação

- **8 monstros por página** para melhor performance
- **Navegação inteligente** com máximo de 5 páginas visíveis
- **Botões Anterior/Próximo** com estados desabilitados
- **Indicador de progresso** "Página X de Y • Mostrando X de Y monstros"
- **Scroll automático** para o topo da galeria
- **Design responsivo** com glassmorphism

### Exemplo de Navegação:
```
← Anterior  [1] [2] [3] [4] ... [12]  Próximo →
```

## 🌐 API Utilizada

**Monster Sanctuary API**: `https://api.sampleapis.com/monstersanctuary/monsters`

### Dados Disponíveis:
- ✅ **ID único** do monstro
- ✅ **Nome** e **imagem** oficial
- ✅ **Elementos** (Fire, Water, Wind, Earth, Neutral)
- ✅ **Fraquezas** e **resistências**
- ✅ **Estatísticas** (força, magia, vida, defesa, poção)

## 🎨 Interface e UX

- **Design System**: Gradiente roxo como identidade visual
- **Glassmorphism**: Efeitos de vidro fosco com backdrop-blur
- **Navegação**: Sistema de rotas intuitivo com Next.js App Router
- **Cards Interativos**: Hover effects e transições suaves com scale
- **Loading States**: Spinner animado durante carregamento
- **Error Handling**: Tratamento elegante de erros com botão de retry
- **Toast Notifications**: Feedback visual para todas as interações

## 📱 Responsividade

| Dispositivo | Layout | Paginação |
|-------------|--------|-----------|
| **Desktop** | Grade de 4 colunas | Navegação completa |
| **Tablet** | Grade de 2-3 colunas | Navegação adaptada |
| **Mobile** | Grade de 1 coluna | Navegação compacta |

## 🔧 Scripts Disponíveis

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build para produção
npm run start  # Servidor de produção
npm run lint   # Verificação de código
```

## 🎯 Funcionalidades Principais

### 1. **Galeria de Monstros**
- Exibição em cards com imagens e informações básicas
- Sistema de fallback para imagens indisponíveis
- Hover effects com animações suaves

### 2. **Paginação Avançada**
- 8 monstros por página para otimizar performance
- Navegação inteligente com numeração dinâmica
- Scroll automático e feedback visual

### 3. **Sistema de Notificações**
- Toasts posicionados estrategicamente
- Diferentes tipos: info, success, error, warning
- Tema escuro para combinar com o design

### 4. **Detalhes do Monstro**
- Página individual com estatísticas completas
- Informações sobre elementos e fraquezas
- Design consistente com a galeria principal

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na main

### Outras Plataformas
- **Netlify**: Compatible com build estático
- **Railway**: Deploy direto do GitHub
- **Heroku**: Suporte para Node.js

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Autora

**Flavia Mendes** - [@flaviamendes17](https://github.com/flaviamendes17)

---

<div align="center">
  <p>Feito com ❤️ e ☕ usando Next.js</p>
  <p>© 2025 Monster Gallery. Todos os direitos reservados.</p>
</div>
