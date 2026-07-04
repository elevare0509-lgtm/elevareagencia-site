import Link from "next/link";
import { MessageCircle, AtSign, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy/90 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-gold text-2xl font-bold tracking-wide">Elevare</span>
          <p className="text-offwhite/50 text-sm leading-relaxed max-w-[220px]">
            Automação inteligente para negócios locais.{" "}
            <span className="text-gold font-semibold">Atendimento 24h</span> no WhatsApp com IA.
          </p>
        </div>

        {/* Col 2 — Contato */}
        <div className="flex flex-col gap-4">
          <h4 className="text-offwhite text-sm font-semibold tracking-widest uppercase">
            Contato
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://wa.me/5511950274038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-offwhite/60 text-sm hover:text-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                +55 11 95027-4038
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/elevare_on"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-offwhite/60 text-sm hover:text-gold transition-colors"
              >
                <AtSign className="w-4 h-4 text-gold shrink-0" />
                @elevare_on
              </a>
            </li>
            <li>
              <a
                href="mailto:elevare0509@gmail.com"
                className="flex items-center gap-3 text-offwhite/60 text-sm hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                elevare0509@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Navegação */}
        <div className="flex flex-col gap-4">
          <h4 className="text-offwhite text-sm font-semibold tracking-widest uppercase">
            Navegação
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#como-funciona" className="text-offwhite/60 text-sm hover:text-gold transition-colors">
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="#solucoes" className="text-offwhite/60 text-sm hover:text-gold transition-colors">
                Soluções
              </Link>
            </li>
            <li>
              <Link href="#resultados" className="text-offwhite/60 text-sm hover:text-gold transition-colors">
                Resultados
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="text-offwhite/60 text-sm hover:text-gold transition-colors">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-offwhite/30 text-xs">
            © 2026 Elevare. Todos os direitos reservados.
          </span>
          <span className="text-gold/50 text-xs">
            Elevare — Automação inteligente para negócios locais.
          </span>
        </div>
      </div>
    </footer>
  );
}
