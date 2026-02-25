import { SEOHead } from "../components/seo/seo-head";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { DashboardStats } from "../components/dashboard/dashboard-stats";
import { DashboardActions } from "../components/dashboard/dashboard-actions";
import { DatasetsList } from "../components/dashboard/datasets-list";
import { ExportInfo } from "../components/dashboard/export-info";

// Mock data
const datasets = [
  {
    id: 1,
    name: "Retail Products - Electronics",
    images: 2847,
    annotations: 12453,
    created: "2026-01-15",
    status: "active",
    privacy: "private"
  },
  {
    id: 2,
    name: "Traffic Signs - Urban",
    images: 1523,
    annotations: 4891,
    created: "2026-01-22",
    status: "active",
    privacy: "private"
  },
  {
    id: 3,
    name: "Food Items - Restaurant",
    images: 3201,
    annotations: 18654,
    created: "2026-02-03",
    status: "active",
    privacy: "private"
  },
  {
    id: 4,
    name: "Medical Equipment",
    images: 892,
    annotations: 3421,
    created: "2026-02-08",
    status: "active",
    privacy: "private"
  }
];

export default function DashboardPage() {
  return (
    <>
      <SEOHead 
        title="Dashboard - Voidback | Manage Your AI Training Datasets"
        description="Manage your AI training datasets, track annotations, and export data. View statistics and performance metrics for your machine learning projects."
        keywords="dataset management, annotation tracking, AI training dashboard, data export, machine learning metrics"
      />
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <DashboardHeader />
          <DashboardStats datasets={datasets} />
          <DashboardActions />
          <DatasetsList datasets={datasets} />
          <ExportInfo />
        </div>
      </div>
    </>
  );
}