import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="bg-card relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/marathon-runners-group-finish-line-celebration.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/brand.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            PRONTO PARA
            <span className="text-primary"> CORRER</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Junte-se a milhares de corredores e organizadores que já fazem parte
            da maior comunidade de corridas do Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Criar Conta Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-lg px-8 py-6 bg-transparent"
            >
              Falar com Vendas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
