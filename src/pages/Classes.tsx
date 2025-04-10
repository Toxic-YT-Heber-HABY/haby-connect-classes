
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { CreateClassForm } from "@/components/classes/CreateClassForm";
import { JoinClassForm } from "@/components/classes/JoinClassForm";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ArrowLeft, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClassesPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pageTitle, setPageTitle] = useState("Clases");
  const [classCode, setClassCode] = useState("");
  
  const getPageContent = () => {
    if (params.action === "create") {
      return (
        <div className="w-full max-w-lg mx-auto">
          <CreateClassForm 
            onSuccess={(classData) => {
              // Set class code for display
              setClassCode(classData.classCode);
              // Show success message with class code
              toast({
                title: "Clase creada exitosamente",
                description: `Código de clase: ${classData.classCode}`,
              });
            }}
            onCancel={() => navigate("/dashboard")}
          />
          
          {classCode && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Comparte este código con tus alumnos:</p>
              <div className="flex items-center bg-background p-2 rounded border">
                <span className="text-xl font-mono flex-1">{classCode}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText(classCode);
                    toast({
                      title: "Código copiado",
                      description: "El código de clase ha sido copiado al portapapeles",
                    });
                  }}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      );
    } else if (params.action === "join") {
      return (
        <div className="w-full max-w-lg mx-auto">
          <JoinClassForm 
            onSuccess={() => {
              // Navigate to dashboard after successfully joining a class
              setTimeout(() => {
                navigate("/dashboard");
              }, 1000);
            }}
            onCancel={() => navigate("/dashboard")}
          />
        </div>
      );
    } else if (params.id) {
      return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Contenido de la clase</h2>
            <p className="text-muted-foreground">
              Aquí se mostrará el contenido de la clase seleccionada, incluyendo anuncios, tareas y materiales.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">Selecciona una clase</h2>
          <p className="text-muted-foreground">
            Selecciona una clase de la barra lateral o crea una nueva
          </p>
        </div>
      );
    }
  };
  
  useEffect(() => {
    if (params.action === "create") {
      setPageTitle("Crear Clase");
      document.title = "HABY - Crear Clase";
    } else if (params.action === "join") {
      setPageTitle("Unirse a una Clase");
      document.title = "HABY - Unirse a una Clase";
    } else if (params.id) {
      setPageTitle("Detalles de la Clase");
      document.title = "HABY - Detalles de la Clase";
    } else {
      setPageTitle("Clases");
      document.title = "HABY - Clases";
    }
  }, [params]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => navigate("/dashboard")}
                  className="mr-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
              </div>
              
              {getPageContent()}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default ClassesPage;
