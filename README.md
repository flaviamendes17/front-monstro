# 🐲 Monster Gallery - Monster Sanctuary API Explorer

Uma aplicação web moderna desenvolvida em **Next.js** para explorar e visualizar monstros do jogo **Monster Sanctuary** através de uma API REST.

<div align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?style=for-the-badge&logo=axios)

</div>

## 🎯 Sobre o Projeto

**Monster Gallery** é uma Single Page Application (SPA) que consome a [Monster Sanctuary API](https://api.sampleapis.com/monstersanctuary/monsters) para exibir informações detalhadas sobre mais de 100 monstros únicos do popular jogo indie Monster Sanctuary.

### ✨ Funcionalidades

- 📋 **Lista de Monstros**: Visualização em cards responsivos com informações essenciais
- 🔍 **Detalhes Individuais**: Página dedicada para cada monstro com estatísticas completas
- 🎨 **Design Moderno**: Interface elegante com gradientes roxos e efeitos visuais
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Performance**: Carregamento rápido com otimizações do Next.js
- 🖼️ **Fallback de Imagens**: Sistema inteligente para imagens indisponíveis

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Next.js** | 15.5.0 | Framework React com App Router |
| **React** | 19.1.0 | Biblioteca para interfaces de usuário |
| **Tailwind CSS** | 4.0 | Framework CSS utilitário |
| **Axios** | 1.11.0 | Cliente HTTP para requisições à API |
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
│   ├── globals.css           # Estilos globais
│   ├── intro/
│   │   └── page.jsx          # Página de informações da API
│   └── entidade/
│       ├── page.jsx          # Lista de monstros
│       └── [id]/
│           └── page.jsx      # Detalhes do monstro
└── public/
    └── image/                # Imagens estáticas
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
- **Navegação**: Sistema de rotas intuitivo com Next.js App Router
- **Cards Interativos**: Hover effects e transições suaves
- **Loading States**: Indicadores visuais durante carregamento
- **Error Handling**: Tratamento elegante de erros da API

## 📱 Responsividade

| Dispositivo | Layout |
|-------------|--------|
| **Desktop** | Grade de 4 colunas |
| **Tablet** | Grade de 2-3 colunas |
| **Mobile** | Grade de 1 coluna |

## 🔧 Scripts Disponíveis

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build para produção
npm run start  # Servidor de produção
npm run lint   # Verificação de código
```

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
