import { MessageCircle, X } from "lucide-react";
import { useId } from "react";

interface ContactTemplateCardProps {
	onClose: () => void;
	templateName: string;
}

export function ContactTemplateCard({
	onClose,
	templateName,
}: ContactTemplateCardProps) {
	const titleId = useId();
	const whatsappNumber = "5585989600081";
	const whatsappMessage = encodeURIComponent(
		`Olá, gostei da ideia do template ${templateName}. Podemos conversar?`,
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

	return (
		<div
			className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/75 p-5 backdrop-blur-md"
			role="presentation"
		>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				className="relative w-full max-w-lg rounded-3xl bg-white p-8 text-slate-900 shadow-2xl"
			>
				<button
					type="button"
					onClick={onClose}
					aria-label="Fechar"
					className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-500 hover:text-slate-900"
				>
					<X className="size-5" />
				</button>
				<div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
					<MessageCircle className="size-6" />
				</div>
				<p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
					CriaWeb
				</p>
				<h2 id={titleId} className="mt-2 text-3xl font-black tracking-tight">
					Gostou dessa ideia?
				</h2>
				<p className="mt-4 leading-7 text-slate-600">
					Envie agora uma mensagem e vamos organizar tudo juntos para
					transformar este template em um site com a cara do seu negócio.
				</p>
				<div className="mt-7 flex flex-col gap-3 sm:flex-row">
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-emerald-600 px-6 py-3 text-center font-bold text-white hover:bg-emerald-700"
					>
						Enviar mensagem no WhatsApp
					</a>
					<button
						type="button"
						onClick={onClose}
						className="rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-600 hover:bg-slate-50"
					>
						Continuar explorando
					</button>
				</div>
			</div>
		</div>
	);
}
