import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Camiseta Runner Pro",
    price: "R$ 89",
    image: "/black-running-tshirt-performance.jpg",
    badge: "Mais Vendido",
  },
  {
    name: "Camiseta Maratona 2025",
    price: "R$ 99",
    image: "/orange-running-tshirt-sport.jpg",
    badge: null,
  },
  {
    name: "Boné Performance",
    price: "R$ 59",
    image: "/black-running-cap-snapback.jpg",
    badge: null,
  },
  {
    name: "Meias Compressão",
    price: "R$ 49",
    image: "/compression-running-socks.jpg",
    badge: "Novo",
  },
]

export function ShopSection() {
  return (
    <section id="loja" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">LOJA OFICIAL</h2>
          <Button variant="link" className="text-accent hover:text-accent/80">
            Ver Tudo →
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/4] relative bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold">{product.price}</span>
                  <Button size="icon" variant="ghost" className="text-foreground hover:bg-secondary">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
