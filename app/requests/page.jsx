import { SEOHead } from "../components/seo/seo-head";
import { RequestsHeader } from "../components/requests/requests-header";
import { RequestForm } from "../components/requests/request-form";
import { ActiveRequests } from "../components/requests/active-requests";
import { AnnotatorInfo } from "../components/requests/annotator-info";

// Mock data for existing requests
const existingRequests = [
  {
    id: 1,
    company: "AutoDrive AI",
    type: "Traffic & Road Conditions",
    images: 10000,
    budget: "$25,000",
    deadline: "2026-03-15",
    status: "active",
    matches: 23
  },
  {
    id: 2,
    company: "RetailVision Inc",
    type: "Retail Product Recognition",
    images: 5000,
    budget: "$12,500",
    deadline: "2026-03-01",
    status: "active",
    matches: 18
  },
  {
    id: 3,
    company: "MedTech Solutions",
    type: "Medical Equipment",
    images: 3000,
    budget: "$18,000",
    deadline: "2026-03-20",
    status: "in_progress",
    matches: 8
  }
];

export default function RequestsPage() {
  return (
    <>
      <SEOHead 
        title="Request Custom Datasets - Voidback | Enterprise AI Training Data"
        description="Request custom AI training datasets tailored to your needs. Browse active data requests from enterprises and connect with verified annotators. Get matched with quality datasets quickly."
        keywords="custom dataset request, AI training data request, enterprise data needs, annotator matching, custom annotation services, machine learning data acquisition"
      />
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <RequestsHeader />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RequestForm />
            
            <div>
              <ActiveRequests requests={existingRequests} />
              <AnnotatorInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}