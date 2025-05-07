
import { useEffect } from "react";
import { useSearchParams, Navigate, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
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
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-haby-purple-50 dark:from-haby-charcoal dark:to-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-haby-purple-700 border-r-transparent border-b-haby-purple-700 border-l-transparent"></div>
      </div>
    );
  }
  
  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 bg-gradient-to-b from-white to-haby-purple-50 dark:from-haby-charcoal dark:to-gray-900">
        <div className="container flex flex-col items-center justify-center py-16 px-4 md:py-24">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <motion.img
                src="/images/haby-logo.png"
                alt="HABY Logo"
                className="h-20 w-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight mb-2 gradient-text inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bienvenido a HABY
            </motion.h1>
            <motion.p 
              className="mt-2 text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              La plataforma educativa que conecta profesores y alumnos
            </motion.p>
          </motion.div>
          
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tabs
              defaultValue={tab}
              value={tab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-haby-purple-700 data-[state=active]:text-white data-[state=active]:shadow-button"
                >
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="data-[state=active]:bg-haby-purple-700 data-[state=active]:text-white data-[state=active]:shadow-button"
                >
                  Registro
                </TabsTrigger>
                <TabsTrigger 
                  value="recovery" 
                  className="data-[state=active]:bg-haby-purple-700 data-[state=active]:text-white data-[state=active]:shadow-button"
                >
                  Recuperar Contraseña
                </TabsTrigger>
              </TabsList>
              
              <div className="bg-white dark:bg-haby-darkGray rounded-xl border border-border shadow-soft p-8">
                <TabsContent value="login" className="animate-enter mt-0">
                  <LoginForm />
                </TabsContent>
                <TabsContent value="register" className="animate-enter mt-0">
                  <RegisterForm onToggleForm={handleToggleForm} />
                </TabsContent>
                <TabsContent value="recovery" className="animate-enter mt-0">
                  <RecoveryForm onBackToLogin={handleBackToLogin} />
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
