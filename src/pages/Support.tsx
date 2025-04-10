
import { useState, FormEvent } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  document.title = "HABY - Soporte";
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
        description: "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
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
              <h1 className="text-3xl font-bold tracking-tight mb-6">Soporte</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>¿Cómo crear una clase?</AccordionTrigger>
                        <AccordionContent>
                          Para crear una clase, inicia sesión como profesor, ve al Dashboard y haz clic en el botón "Crear clase". Completa el formulario con el nombre de la clase, sección, asignatura y sala, luego haz clic en "Crear Clase". Se generará un código único que podrás compartir con tus alumnos.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>¿Cómo unirme a una clase?</AccordionTrigger>
                        <AccordionContent>
                          Para unirte a una clase, necesitas el código de clase proporcionado por tu profesor. Ve al Dashboard y haz clic en "Unirse a una clase", ingresa el código y haz clic en "Unirse a la Clase".
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>¿Cómo recuperar mi contraseña?</AccordionTrigger>
                        <AccordionContent>
                          En la página de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?". Ingresa tu nombre de usuario y correo electrónico, y se te enviará un código de verificación. Una vez verificado, podrás establecer una nueva contraseña.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger>¿Cómo cambiar mi información de perfil?</AccordionTrigger>
                        <AccordionContent>
                          Ve a "Configuración" en la barra lateral y selecciona la pestaña "Perfil". Allí podrás actualizar tu información personal, cambiar tu contraseña y ajustar tus preferencias de notificaciones.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger>¿Cómo funciona el sistema de tareas?</AccordionTrigger>
                        <AccordionContent>
                          Los profesores pueden crear tareas dentro de una clase específica, estableciendo fechas de entrega y adjuntando materiales. Los alumnos recibirán notificaciones, podrán ver las tareas pendientes y enviar sus entregas antes de la fecha límite.
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6">
                        <AccordionTrigger>¿Puedo usar HABY en dispositivos móviles?</AccordionTrigger>
                        <AccordionContent>
                          Sí, HABY está diseñado con un enfoque responsive y funciona en navegadores de dispositivos móviles como teléfonos y tablets. Por ahora no tenemos una aplicación móvil nativa, pero estamos trabajando en ello.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h2 className="text-2xl font-semibold mb-4">Recursos de Ayuda</h2>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-haby-purple hover:underline flex items-center">
                          Manual del Usuario (PDF)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-haby-purple hover:underline flex items-center">
                          Guía de Inicio Rápido para Profesores
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-haby-purple hover:underline flex items-center">
                          Guía de Inicio Rápido para Alumnos
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-haby-purple hover:underline flex items-center">
                          Videotutoriales
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-haby-purple hover:underline flex items-center">
                          Blog de HABY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
                  <p className="mb-4 text-muted-foreground">
                    Si no encuentras respuesta a tu pregunta, envíanos un mensaje y te responderemos lo antes posible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto de tu mensaje"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe tu problema o pregunta"
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
                  
                  <div className="mt-6 p-4 bg-muted rounded-md">
                    <h3 className="font-medium mb-2">También puedes contactarnos por:</h3>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">Email:</span> 
                      <a href="mailto:habyopenthedoors@gmail.com" className="text-haby-purple hover:underline">
                        habyopenthedoors@gmail.com
                      </a>
                    </p>
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

export default Support;
