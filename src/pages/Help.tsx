
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users, Inbox, Calendar, Settings, HelpCircle } from "lucide-react";
import { useState } from "react";

const HelpArticle = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-haby-purple" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="px-6 py-4 bg-muted/30 border-t">
        <Button variant="link" className="p-0 h-auto text-haby-purple">
          Leer más
        </Button>
      </div>
    </div>
  );
};

const Help = () => {
  document.title = "HABY - Ayuda";
  const [searchQuery, setSearchQuery] = useState("");
  
  const helpArticles = [
    {
      title: "Primeros pasos en HABY",
      description: "Guía básica para comenzar a utilizar la plataforma, registro e inicio de sesión.",
      icon: BookOpen
    },
    {
      title: "Unirse y crear clases",
      description: "Aprende a crear clases como profesor o unirte como alumno utilizando códigos de clase.",
      icon: Users
    },
    {
      title: "Gestión de tareas",
      description: "Cómo crear, asignar, entregar y calificar tareas en la plataforma.",
      icon: Inbox
    },
    {
      title: "Uso del calendario",
      description: "Gestiona eventos, entregas y fechas importantes con el calendario integrado.",
      icon: Calendar
    },
    {
      title: "Configuración de la cuenta",
      description: "Personaliza tu perfil, notificaciones y preferencias de privacidad.",
      icon: Settings
    },
    {
      title: "Solución de problemas comunes",
      description: "Respuestas a problemas frecuentes y cómo resolverlos por tu cuenta.",
      icon: HelpCircle
    }
  ];
  
  const filteredArticles = helpArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Just filter the articles (already happening with state change)
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Centro de Ayuda</h1>
              
              <div className="max-w-3xl mx-auto mb-10">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar en el centro de ayuda..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-6 text-lg"
                  />
                  <Button type="submit" className="absolute right-2 top-2 haby-button-primary">
                    Buscar
                  </Button>
                </form>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">Artículos populares</h2>
                
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                      <HelpArticle
                        key={index}
                        title={article.title}
                        description={article.description}
                        icon={article.icon}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg border">
                    <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                    <p className="text-muted-foreground">
                      No hemos encontrado artículos que coincidan con tu búsqueda.
                    </p>
                    <Button 
                      variant="link" 
                      className="mt-4 text-haby-purple"
                      onClick={() => setSearchQuery("")}
                    >
                      Ver todos los artículos
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="mt-12 p-8 bg-white rounded-lg border text-center">
                <h2 className="text-2xl font-semibold mb-4">¿No encuentras lo que buscas?</h2>
                <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                  Si no has podido encontrar la respuesta a tu pregunta en nuestro centro de ayuda, no dudes en contactarnos directamente.
                </p>
                <Button asChild className="haby-button-primary">
                  <a href="/support">Contactar al soporte</a>
                </Button>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Help;
