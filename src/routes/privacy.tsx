import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/common/Layout/Footer";

export const Route = createFileRoute("/privacy")({
	component: Privacidade,
});

function Privacidade() {
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
						Política de Privacidade
					</h1>
					<p className="text-lg text-slate-600 font-medium leading-relaxed">
						A sua privacidade é importante para nós. É política da CriaWeb
						respeitar a sua privacidade em relação a qualquer informação sua que
						possamos coletar no site.
					</p>
				</div>

				<div className="space-y-12">
					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<ShieldCheck className="w-6 h-6 text-emerald-500" /> 1. Coleta de
							Dados Pessoais
						</h2>
						<p className="text-slate-600 leading-loose mb-4">
							Solicitamos informações pessoais apenas quando realmente
							precisamos delas para lhe fornecer um serviço, como o
							processamento de um orçamento ou o agendamento de uma reunião.
							Fazemo-lo por meios justos e legais, com o seu conhecimento e
							consentimento.
						</p>
						<p className="text-slate-600 leading-loose">
							Também informamos por que estamos coletando e como será usado,
							garantindo total transparência.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<ShieldCheck className="w-6 h-6 text-emerald-500" /> 2. Retenção
							de Dados e Contratos
						</h2>
						<p className="text-slate-600 leading-loose">
							Apenas retemos as informações coletadas pelo tempo necessário para
							fornecer o serviço ou durante a vigência dos{" "}
							<strong>contratos e acordos formais</strong> firmados entre as
							partes. Quando armazenamos dados (como logs e métricas de
							aplicações Fullstack), protegemos dentro de meios comercialmente
							aceitáveis e de alta segurança.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<ShieldCheck className="w-6 h-6 text-emerald-500" /> 3.
							Compartilhamento de Informações
						</h2>
						<p className="text-slate-600 leading-loose">
							Não compartilhamos informações de identificação pessoal
							publicamente ou com terceiros, exceto quando exigido por lei ou
							quando expressamente previsto em contrato (como para o uso de APIs
							ou serviços terceirizados de deploy). Nosso sistema utiliza dados
							apenas internamente para gerar as soluções acordadas na
							negociação.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<ShieldCheck className="w-6 h-6 text-emerald-500" /> 4. Links
							Externos
						</h2>
						<p className="text-slate-600 leading-loose">
							O nosso site pode ter links para sites externos que não são
							operados por nós. Esteja ciente de que não temos controle sobre o
							conteúdo e práticas desses sites e não podemos aceitar
							responsabilidade por suas respectivas políticas de privacidade.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
							<ShieldCheck className="w-6 h-6 text-emerald-500" /> 5.
							Consentimento
						</h2>
						<p className="text-slate-600 leading-loose">
							Você é livre para recusar a nossa solicitação de informações
							pessoais, entendendo que talvez não possamos fornecer alguns dos
							serviços desejados sem elas. O uso continuado de nosso site será
							considerado como aceitação de nossas práticas em torno de
							privacidade e informações pessoais.
						</p>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
