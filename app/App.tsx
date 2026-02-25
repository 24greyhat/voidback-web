import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ResourceHints } from './components/seo/resource-hints';
import { Navigation } from './components/navigation';
import Page from './page';
import LoginPage from './login/page';
import DashboardPage from './dashboard/page';
import RequestsPage from './requests/page';
import '../styles/index.css';

export default function App() {
  return (
    <HelmetProvider>
      <ResourceHints />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/requests" element={<RequestsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}