
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">HABY-CLASS</h3>
            <p className="text-sm text-muted-foreground">
              Una plataforma educativa para facilitar la interacción entre profesores y alumnos.
            </p>
            <p className="text-sm text-muted-foreground">
              Fundada por Heber Zadkiel Garcia Perez.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Calendario
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clases
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                  Configuración
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda & Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Soporte
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ayuda
                </Link>
              </li>
              <li>
                <a href="mailto:habyopenthedoors@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  habyopenthedoors@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} HABY-CLASS Open The Doors. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.youtube.com/@HABYOpenDoors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="Canal de YouTube"
            >
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
            <a 
              href="https://www.facebook.com/zadkiel.garcia.31/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="Página de Facebook"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/habydoors/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="Perfil de Instagram"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://x.com/Haby_Open_Doors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="Perfil de Twitter/X"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter/X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
