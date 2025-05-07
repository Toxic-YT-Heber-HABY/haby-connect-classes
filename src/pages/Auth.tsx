
import { useEffect } from "react";
import { useSearchParams, Navigate, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import RecoveryForm from "@/components/auth/RecoveryForm";
import { Footer } from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname || "/dashboard";
  
  // Check if user is already logged in using our AuthContext
  const { isLoggedIn, loading } = useAuth();
  
  useEffect(() => {
    document.title = `HABY - ${
      tab === "register" 
        ? "Registro" 
        : tab === "recovery" 
        ? "Recuperar Contraseña" 
        : "Iniciar Sesión"
    }`;
  }, [tab]);
  
  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const handleToggleForm = () => {
    setSearchParams({ tab: "login" });
  };
  
  const handleBackToLogin = () => {
    setSearchParams({ tab: "login" });
  };
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-haby-purple"></div>
      </div>
    );
  }
  
  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 bg-gradient-to-b from-white to-haby-gray dark:from-haby-charcoal dark:to-gray-900">
        <div className="container flex flex-col items-center justify-center py-10 px-4 md:py-20">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/images/haby-logo.png"
                alt="HABY Logo"
                className="h-16 w-auto animate-fade-in"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight animate-fade-in">
              Bienvenido a HABY
            </h1>
            <p className="mt-2 text-muted-foreground animate-fade-in">
              La plataforma educativa que conecta profesores y alumnos
            </p>
          </div>
          
          <Tabs
            defaultValue={tab}
            value={tab}
            onValueChange={handleTabChange}
            className="w-full max-w-lg"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login" className="animate-fade-in">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register" className="animate-fade-in">Registro</TabsTrigger>
              <TabsTrigger value="recovery" className="animate-fade-in">Recuperar Contraseña</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="animate-enter">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register" className="animate-enter">
              <RegisterForm onToggleForm={handleToggleForm} />
            </TabsContent>
            <TabsContent value="recovery" className="animate-enter">
              <RecoveryForm onBackToLogin={handleBackToLogin} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
