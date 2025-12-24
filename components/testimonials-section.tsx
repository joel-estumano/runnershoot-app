import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Mendes",
    role: "Organizador de Eventos",
    image: "/professional-man-portrait.png",
    quote:
      "A plataforma revolucionou a forma como gerenciamos nossas corridas. Tudo ficou mais simples e organizado.",
  },
  {
    name: "Fernanda Lima",
    role: "Corredora Amadora",
    image: "/athletic-woman-portrait.png",
    quote:
      "Adoro poder acompanhar minhas inscrições e resultados em um só lugar. A experiência é incrível!",
  },
  {
    name: "Gustavo Reis",
    role: "Atleta Profissional",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Os rankings e medalhas me motivam a cada corrida. É a melhor plataforma de corridas do Brasil.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            O QUE DIZEM SOBRE NÓS
          </h2>
          <p className="text-muted-foreground text-lg">
            A opinião de quem usa a plataforma
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
