import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Key, Scale } from "lucide-react";
import { Footer } from "@/components/common/Layout/Footer";

export const Route = createFileRoute("/license")({
	component: Licenca,
});

function Licenca() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
			<nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-200/60 bg-white/50 backdrop-blur-md sticky top-0 z-50">
				<Link
					to="/"
					className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold transition-colors"
				>
					<ArrowLeft className="w-5 h-5" />
					Voltar ao Início
				</Link>
			</nav>

			<main className="container mx-auto px-6 py-16 max-w-4xl grow">
				<div className="mb-12">
					<h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
						Licença Comercial
					</h1>
					<p className="text-lg text-slate-600 font-medium leading-relaxed">
						Todas as informações sobre direitos de uso, propriedade intelectual
						e restrições relacionadas aos produtos e códigos desenvolvidos pela
						CriaWeb.
					</p>
				</div>

				<div className="space-y-12">
					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<Key className="w-6 h-6 text-emerald-500" /> 1. Propriedade e
							Direitos
						</h2>
						<p className="text-slate-600 leading-loose">
							O layout, design, estrutura de código e identidade visual (exceto
							elementos de marca do cliente) desenvolvidos neste site e nos
							projetos associados à marca CriaWeb são de propriedade intelectual
							exclusiva de <strong>Henrick Ferreira Saraiva</strong>.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<BookOpen className="w-6 h-6 text-emerald-500" /> 2. Uso do Código
							e Templates
						</h2>
						<p className="text-slate-600 leading-loose mb-4">
							Apesar do design e da estrutura terem sido elaborados por Henrick,
							<strong> você tem permissão</strong> para copiar, reutilizar e
							adaptar os componentes visuais deste site (como cards, estilos,
							animações e lógicas de interface).
						</p>
						<div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-4">
							<h3 className="font-bold text-emerald-800 mb-2">
								⚠️ Condição Obrigatória de Atribuição
							</h3>
							<p className="text-emerald-700 text-sm leading-relaxed">
								Para utilizar qualquer componente ou trecho visual intensivo
								deste projeto, é <strong>obrigatório</strong> que você mantenha
								uma referência clara de autoria. Você deve incluir o texto{" "}
								<code>Henr. Ferreira</code> e um link apontando para{" "}
								<code>https://github.com/rickferrdev</code>.
							</p>
							<p className="text-emerald-700 text-sm leading-relaxed mt-2">
								Essa atribuição pode ser feita através de um texto no rodapé, um
								card de créditos ou num efeito visual de hover (mesmo que oculto
								num primeiro olhar, deve estar acessível na interação com o
								componente). O prefixo "By" ou "Criado por" é opcional.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<Scale className="w-6 h-6 text-emerald-500" /> 3. Violação da
							Licença
						</h2>
						<p className="text-slate-600 leading-loose">
							A cópia e reutilização de componentes do CriaWeb sem a devida
							atribuição de autoria (conforme especificado na seção acima)
							constitui violação da nossa licença de uso, estando sujeita a
							remoção de conteúdo (DMCA) e outras ações aplicáveis sob a
							proteção da propriedade intelectual.
						</p>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
