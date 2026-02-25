import { Database, Shield, Zap, Globe, UserCheck, Scale } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: UserCheck,
      title: "Consensual sourcing",
      description: "Every image is captured with explicit consent through our mobile app. Contributors photograph and consent to labeling, ensuring ethical data collection with full legal clarity."
    },
    {
      icon: Globe,
      title: "True diversity",
      description: "Anyone with an iPhone can contribute. Global annotators from 156 countries create authentically diverse datasets that represent real-world variety, not algorithmic bias."
    },
    {
      icon: Scale,
      title: "Ethical compliance",
      description: "Built-in consent management and provenance tracking. Know exactly where your data comes from and maintain full compliance with data regulations."
    },
    {
      icon: Zap,
      title: "Smart capture",
      description: "Automatic bounding box detection as you photograph objects. AI-powered recognition streamlines the entire annotation process."
    },
    {
      icon: Database,
      title: "YOLO-ready",
      description: "Export perfectly formatted datasets for immediate YOLO model training. Our SQL tables are pre-configured for your workflow."
    },
    {
      icon: Shield,
      title: "Private or public",
      description: "All datasets are private by default. Annotators control if they want to make datasets public and freely downloadable by anyone."
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-semibold mb-6">
            Why Voidback is different
          </h2>
          <p className="text-xl text-muted-foreground">
            The only platform where every piece of data is consensually sourced through our mobile app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <article key={index} className="space-y-4">
              <div className="w-12 h-12 border border-border flex items-center justify-center" aria-hidden="true">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}