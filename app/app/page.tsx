// import StartingDrawer from '@/components/starting-drawer';
import Image from "next/image";

export default function Busca() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/30 px-4 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* <StartingDrawer /> */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-2xl">
              <div className="aspect-video bg-muted/50 relative">
                <Image
                  src="/pharmacy-medicine-search-interface-with-map.jpg"
                  alt="Interface do Medifinder mostrando busca de medicamentos e mapa"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
