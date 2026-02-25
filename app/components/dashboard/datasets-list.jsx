import { DatasetCard } from "./dataset-card";

export function DatasetsList({ datasets }) {
  return (
    <div className="space-y-6">
      {datasets.map((dataset) => (
        <DatasetCard key={dataset.id} dataset={dataset} />
      ))}
    </div>
  );
}
