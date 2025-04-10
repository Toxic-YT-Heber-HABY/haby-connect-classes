
import { useState, FormEvent } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  Globe
} from "lucide-react";

const Contact = () => {
  document.title = "HABY - Contacto";
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos lo antes posible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Contacto</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Nombre</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Correo electrónico</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Asunto</Label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto de tu mensaje"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Mensaje</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tu mensaje"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full haby-button-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-haby-purple" />
                        <div>
                          <h3 className="font-medium">Correo electrónico</h3>
                          <a 
                            href="mailto:habyopenthedoors@gmail.com" 
                            className="text-haby-purple hover:underline"
                          >
                            habyopenthedoors@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Globe className="h-5 w-5 mr-3 text-haby-purple" />
                        <div>
                          <h3 className="font-medium">Sitio web</h3>
                          <a 
                            href="https://www.habyeducation.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-haby-purple hover:underline"
                          >
                            www.habyeducation.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="text-2xl font-semibold mb-4">Síguenos en redes sociales</h2>
                    
                    <div className="space-y-4">
                      <a 
                        href="https://www.youtube.com/@HABYOpenDoors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <Youtube className="h-6 w-6 mr-3 text-red-600" />
                        <div className="flex-1">
                          <h3 className="font-medium">YouTube</h3>
                          <p className="text-sm text-muted-foreground">@HABYOpenDoors</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.facebook.com/share/12HJiSutd3H/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <Facebook className="h-6 w-6 mr-3 text-blue-600" />
                        <div className="flex-1">
                          <h3 className="font-medium">Facebook</h3>
                          <p className="text-sm text-muted-foreground">HABY Open The Doors</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://www.instagram.com/habydoors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <Instagram className="h-6 w-6 mr-3 text-pink-600" />
                        <div className="flex-1">
                          <h3 className="font-medium">Instagram</h3>
                          <p className="text-sm text-muted-foreground">@habydoors</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Contact;
