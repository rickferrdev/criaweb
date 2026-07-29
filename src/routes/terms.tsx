import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Footer } from "../components/common/Layout/Footer";

export const Route = createFileRoute("/terms")({
	component: Termos,
});

function Termos() {
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
						Termos de Uso
					</h1>
					<p className="text-lg text-slate-600 font-medium leading-relaxed">
						Bem-vindo aos Termos de Uso da CriaWeb. Ao utilizar nossos serviços
						e acessar nosso site, você concorda em cumprir e estar vinculado às
						regras descritas abaixo. Leia com atenção.
					</p>
				</div>

				<div className="space-y-12">
					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 1. Escopo
							dos Serviços
						</h2>
						<p className="text-slate-600 leading-loose">
							Nossa atuação é estritamente voltada para{" "}
							<strong>Aplicações Web (Fullstack)</strong> de médio porte. Não
							desenvolvemos aplicativos nativos para Desktop, Mobile
							(iOS/Android) ou softwares para sistemas embarcados. A
							implementação de camadas extras, como sistemas de logs e métricas,
							ocorre mediante demanda e negociação.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 2.
							Orçamentos e Contratos
						</h2>
						<p className="text-slate-600 leading-loose">
							Operamos com um modelo de orçamento personalizado. O valor do
							projeto é definido através de negociação direta, alinhando de
							comum acordo o valor principal de desenvolvimento e os custos
							secundários (infraestrutura, deploy, APIs, etc). Essa modalidade
							pode ser ajustada através de{" "}
							<strong>contratos e acordos formais</strong> específicos para cada
							negócio.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 3. Aceitação
							dos Termos
						</h2>
						<p className="text-slate-600 leading-loose">
							Ao acessar a plataforma CriaWeb ou contratar nossos serviços, você
							concorda em cumprir estes termos de serviço, todas as leis e
							regulamentos aplicáveis e concorda que é responsável pelo
							cumprimento de todas as leis locais aplicáveis.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 4. Uso da
							Plataforma e Ferramentas
						</h2>
						<p className="text-slate-600 leading-loose">
							Nossos serviços são fornecidos para automatizar e otimizar
							processos de vendas online. O uso indevido das ferramentas, envio
							de spans ou violação da infraestrutura são estritamente proibidos
							e podem resultar no encerramento imediato do seu acesso, bem como
							quebra de contrato.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 5. Isenção
							de Responsabilidade
						</h2>
						<p className="text-slate-600 leading-loose">
							Em nenhum caso a CriaWeb ou seus fornecedores serão responsáveis
							por quaisquer danos decorrentes do mau uso, uso indevido ou da
							incapacidade de usar os materiais na nossa plataforma ou serviços
							desenvolvidos, salvo disposição contrária em contrato formal
							firmado entre as partes.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<CheckCircle2 className="w-6 h-6 text-emerald-500" /> 6.
							Modificações dos Termos
						</h2>
						<p className="text-slate-600 leading-loose">
							Podemos revisar estes termos de serviço do site a qualquer
							momento, sem aviso prévio. Ao usar este site, você concorda em
							ficar vinculado à versão atual desses termos de serviço.
						</p>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
