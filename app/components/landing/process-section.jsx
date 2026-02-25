export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Download the app",
      description: "Anyone with an iPhone can download Voidback. Our mobile app is the key to global diversity—contributors from 156 countries and counting."
    },
    {
      number: "02",
      title: "Capture & annotate",
      description: "Snap photos and consent to labeling. Our AI automatically draws bounding boxes around detected objects. All annotations are formatted for YOLO compatibility."
    },
    {
      number: "03",
      title: "Earn from requests",
      description: "When enterprises submit data requests, we match them with existing datasets. Annotators receive 80% of the sale price (20% platform commission)."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            Our mobile app drives diversity and ethical sourcing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <span className="text-sm text-muted-foreground font-semibold">{step.number}</span>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}