import {
  Users,
  Calendar,
  ShoppingBag,
  Trophy,
  Timer,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Gestão de Eventos",
    description:
      "Crie e gerencie corridas de rua, maratonas e competições com facilidade.",
  },
  {
    icon: Users,
    title: "Inscrições Online",
    description:
      "Sistema completo de inscrições com pagamento integrado e confirmação automática.",
  },
  {
    icon: Timer,
    title: "Cronometragem",
    description:
      "Integração com chips de cronometragem e resultados em tempo real.",
  },
  {
    icon: Trophy,
    title: "Rankings & Medalhas",
    description:
      "Acompanhe classificações, recordes pessoais e conquistas dos atletas.",
  },
  {
    icon: ShoppingBag,
    title: "Loja Integrada",
    description:
      "Venda kits, camisetas e produtos esportivos diretamente na plataforma.",
  },
  {
    icon: BarChart3,
    title: "Relatórios & Analytics",
    description:
      "Dashboards completos com métricas de participação e desempenho.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-card">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            TUDO QUE VOCÊ PRECISA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma plataforma completa para organizar eventos de corrida do início
            ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
