import { SEOHead } from "../components/seo/seo-head";
import { Card } from "../components/ui/card";
import { LoginHeader } from "../components/login/login-header";
import { LoginForm } from "../components/login/login-form";
import { SocialLogin } from "../components/login/social-login";
import { LoginFooter } from "../components/login/login-footer";

export default function LoginPage() {
  return (
    <>
      <SEOHead 
        title="Login - Voidback | Access Your AI Training Data Account"
        description="Login to your Voidback account to manage datasets, track annotations, and access enterprise AI training data. Secure portal for annotators and enterprises."
        keywords="Voidback login, annotator portal, dataset management, AI training platform login"
      />
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <LoginHeader />

          <Card className="p-8 border border-border shadow-sm">
            <LoginForm />
            <SocialLogin />
          </Card>

          <LoginFooter />
        </div>
      </div>
    </>
  );
}