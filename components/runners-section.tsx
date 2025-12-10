import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const runners = [
  {
    name: "Carlos Silva",
    category: "Maratona",
    image: "/male-runner-portrait-athletic.jpg",
    flag: "🇧🇷",
  },
  {
    name: "Ana Santos",
    category: "Meia Maratona",
    image: "/female-runner-portrait-determined.jpg",
    flag: "🇧🇷",
  },
  {
    name: "Pedro Costa",
    category: "10K",
    image: "/young-male-runner-portrait-sporty.jpg",
    flag: "🇧🇷",
  },
  {
    name: "Julia Oliveira",
    category: "5K",
    image: "/female-athlete-runner-portrait.jpg",
    flag: "🇧🇷",
  },
  {
    name: "Marcos Lima",
    category: "Ultra",
    image: "/male-ultramarathon-runner-portrait.jpg",
    flag: "🇧🇷",
  },
]

export function RunnersSection() {
  return (
    <section id="atletas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">NOSSOS ATLETAS</h2>
          <Button variant="link" className="text-accent hover:text-accent/80">
            Ver Todos →
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {runners.map((runner, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={runner.image || "/placeholder.svg"}
                  alt={runner.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Badge className="mb-2 bg-secondary text-secondary-foreground border-0 text-xs">
                  {runner.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground text-sm">{runner.name}</span>
                  <span>{runner.flag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
