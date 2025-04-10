
import { useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import RecoveryForm from "@/components/auth/RecoveryForm";
import { Footer } from "@/components/layout/Footer";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  
  // Check if user is already logged in
  const isLoggedIn = false; // Replace with actual auth check
  
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
  
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center py-10 px-4 md:py-20">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Bienvenido a HABY
            </h1>
            <p className="mt-2 text-muted-foreground">
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
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registro</TabsTrigger>
              <TabsTrigger value="recovery">Recuperar Contraseña</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
            <TabsContent value="recovery">
              <RecoveryForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
