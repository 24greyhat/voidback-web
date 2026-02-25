import { RequestCard } from "./request-card";

export function ActiveRequests({ requests }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Active requests</h2>
      <div className="space-y-6">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
}
