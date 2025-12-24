import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/marathon-runners-crossing-finish-line-dramatic-lig.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium">
              Temporada 2025 Aberta
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-20 mb-6 text-balance">
            SINTA A<span className="text-primary"> ADRENALINA</span>
            <br />
            DA CORRIDA
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            A plataforma completa para organizadores e corredores. Gerencie
            eventos, inscrições e conquiste seus objetivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/app" passHref>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-lg px-8 py-6 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
