export function StatsSection() {
  const stats = [
    { value: "2,847", label: "Global annotators" },
    { value: "156", label: "Countries represented" },
    { value: "100%", label: "Consensually sourced" },
    { value: "80%", label: "Revenue for annotators" }
  ];

  return (
    <section className="py-20 border-y border-border bg-secondary/30" aria-label="Platform statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-semibold mb-3">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}