const stats = [
  { value: "500+", label: "Eventos Realizados" },
  { value: "150K", label: "Corredores Inscritos" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "27", label: "Estados Atendidos" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-16 xl:px-8 py-16 sm:py-20 xl:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
