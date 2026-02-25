import { Database, Download, FolderOpen, Image } from "lucide-react";

export function DashboardStats({ datasets }) {
  const stats = [
    {
      label: "Total datasets",
      value: datasets.length,
      icon: Database
    },
    {
      label: "Total images",
      value: datasets.reduce((acc, d) => acc + d.images, 0).toLocaleString(),
      icon: Image
    },
    {
      label: "Annotations",
      value: datasets.reduce((acc, d) => acc + d.annotations, 0).toLocaleString(),
      icon: FolderOpen
    },
    {
      label: "Exports",
      value: "47",
      icon: Download
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
            <stat.icon className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-3xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
