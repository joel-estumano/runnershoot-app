import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "SÃO PAULO",
    venue: "Parque Ibirapuera",
    date: "15-17 MAR",
    image: "/marathon-runner-determined-face-yellow-tint.jpg",
    status: "Inscrições Abertas",
    color: "from-amber-500/40",
  },
  {
    id: 2,
    title: "RIO DE JANEIRO",
    venue: "Orla de Copacabana",
    date: "12-14 ABR",
    image: "/female-runner-celebrating-finish-line.jpg",
    status: "Inscrições Abertas",
    color: "from-primary/40",
  },
  {
    id: 3,
    title: "BRASÍLIA",
    venue: "Esplanada dos Ministérios",
    date: "10-12 MAI",
    image: "/athlete-runner-profile-black-and-white.jpg",
    status: "Em Breve",
    color: "from-slate-500/40",
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            PRÓXIMOS EVENTOS
          </h2>
          <Button variant="link" className="text-accent hover:text-accent/80">
            Ver Todos →
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${event.color} to-transparent`}
                />
                <Badge className="absolute top-4 left-4 bg-card/90 text-foreground border-0">
                  {event.status}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-accent text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {event.venue}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-foreground bg-transparent"
                  >
                    Ver Detalhes
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground"
                  >
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
