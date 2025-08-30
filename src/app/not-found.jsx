import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='min-h-screen flex flex-col' style={{
            background: 'linear-gradient(135deg, #7a4bd4 0%, #6539c1 25%, #5127af 50%, #3c159c 75%, #270389 100%)'
        }}>
            <div className="flex-1 flex items-center justify-center relative">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <div className="mb-8 animate-bounce">
                            <span className="text-9xl md:text-[12rem] filter drop-shadow-lg">
                                👾
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
                            404
                        </h1>

                        <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6">
                            Monstro Não Encontrado!
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Parece que este monstro fugiu para outra dimensão! 🌌<br />
                            A página que você procura não existe ou foi movida.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 max-w-md mx-auto border border-white/20">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center space-x-2 text-white/90">
                                    <span className="text-2xl">🔍</span>
                                    <span className="font-medium">Status: Perdido</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-white/90">
                                    <span className="text-2xl">📍</span>
                                    <span className="font-medium">Local: Dimensão Desconhecida</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-white/90">
                                    <span className="text-2xl">⚡</span>
                                    <span className="font-medium">Tipo: Erro 404</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white text-purple-700 rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105">
                                    🏠 Voltar ao Início
                                </button>
                            </Link>
                            
                            <Link href="/entidade">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg backdrop-blur-sm hover:scale-105">
                                    👾 Ver Monstros
                                </button>
                            </Link>

                            <Link href="/intro">
                                <button className="w-full sm:w-auto px-8 py-4 bg-purple-600/80 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105">
                                    📖 Sobre a API
                                </button>
                            </Link>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-white/60 text-sm mb-4">💡 Dicas para encontrar o que procura:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-2xl mb-2">🏠</div>
                                    <p className="text-white/70 text-sm">
                                        Comece pela página inicial para navegar pelo site
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-2xl mb-2">🔍</div>
                                    <p className="text-white/70 text-sm">
                                        Explore a galeria de monstros para encontrar criaturas incríveis
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-2xl mb-2">📚</div>
                                    <p className="text-white/70 text-sm">
                                        Consulte as informações da API para entender melhor o projeto
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-20 left-10 text-4xl opacity-20 animate-pulse">👻</div>
                    <div className="absolute top-40 right-20 text-3xl opacity-20 animate-pulse delay-1000">🔮</div>
                    <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-pulse delay-500">⭐</div>
                    <div className="absolute bottom-40 right-10 text-4xl opacity-20 animate-pulse delay-1500">🌙</div>
                </div>
            </div>

            {/* Footer */}
            <footer className='text-center text-white/40 py-4 bg-black/20 backdrop-blur-sm border-t border-white/10'>
                <p className="text-sm">
                    &copy; 2025 Monster Gallery • Página não encontrada, mas a aventura continua! 🚀
                </p>
            </footer>
        </div>
    );
}