import Link from "next/link"
import { Zap, Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  Plataforma: ["Funcionalidades", "Preços", "Integrações", "API"],
  Eventos: ["Calendário", "Resultados", "Rankings", "Recordes"],
  Empresa: ["Sobre Nós", "Blog", "Carreiras", "Contato"],
  Legal: ["Termos de Uso", "Privacidade", "Cookies", "LGPD"],
}

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer id="contato" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Runner Shoot</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">A plataforma completa para corridas de rua no Brasil.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Runner Shoot. Todos os direitos reservados.</p>
          <p className="text-muted-foreground text-sm">Feito com ❤️ para corredores brasileiros</p>
        </div>
      </div>
    </footer>
  )
}
