import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Calendar,
  ChevronDown,
  ChevronRight, 
  Home, 
  Info, 
  LifeBuoy, 
  Mail, 
  MessageSquare, 
  Settings, 
  Shield, 
  GraduationCap, 
  BookOpen, 
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getClasses } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

interface NavItemProps {
  icon: React.ElementType;
  title: string;
  to: string;
  isActive?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
}

const NavItem = ({ 
  icon: Icon, 
  title, 
  to, 
  isActive = false, 
  hasNotification = false,
  onClick 
}: NavItemProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 py-2 px-3 text-sm font-medium rounded-md transition-colors",
        isActive 
          ? "bg-haby-purple text-white" 
          : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-haby-purple/10"
      )}
    >
      <Icon size={18} />
      <span>{title}</span>
      {hasNotification && (
        <span className="ml-auto flex h-2 w-2 rounded-full bg-red-500"></span>
      )}
    </Link>
  );
};

interface ClassItemProps {
  id: string;
  name: string;
  pendingTasks: number;
  isActive?: boolean;
  onClick?: () => void;
}

const ClassItem = ({ id, name, pendingTasks, isActive = false, onClick }: ClassItemProps) => {
  return (
    <Link
      to={`/classes/${id}`}
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 py-2 px-3 pl-8 text-sm font-medium rounded-md transition-colors",
        isActive 
          ? "bg-haby-purple/20 text-haby-purple" 
          : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-haby-purple/10"
      )}
    >
      <span className="truncate">{name}</span>
      {pendingTasks > 0 && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
          {pendingTasks}
        </span>
      )}
    </Link>
  );
};

interface ClassDropdownProps {
  isActive: boolean;
  isOpen: boolean;
  toggleOpen: () => void;
  onClassClick?: () => void;
}

const ClassDropdown = ({ isActive, isOpen, toggleOpen, onClassClick }: ClassDropdownProps) => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const fetchedClasses = await getClasses();
        setClasses(fetchedClasses);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="space-y-1">
      <button
        onClick={toggleOpen}
        className={cn(
          "flex w-full items-center justify-between gap-x-2 py-2 px-3 text-sm font-medium rounded-md transition-colors",
          isActive 
            ? "bg-haby-purple text-white" 
            : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-haby-purple/10"
        )}
      >
        <div className="flex items-center gap-x-2">
          <BookOpen size={18} />
          <span>Mis Clases</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      
      {isOpen && (
        <div className="mt-1 space-y-1">
          {loading ? (
            <div className="py-2 px-3 pl-8 text-sm text-sidebar-foreground">Cargando...</div>
          ) : classes.length > 0 ? (
            classes.map(classItem => (
              <ClassItem 
                key={classItem.id}
                id={classItem.id}
                name={classItem.name}
                pendingTasks={classItem.pendingTasks}
                onClick={onClassClick}
              />
            ))
          ) : (
            <div className="py-2 px-3 pl-8 text-sm text-sidebar-foreground">No hay clases disponibles</div>
          )}
          <Link
            to="/classes/join"
            onClick={onClassClick}
            className="flex items-center gap-x-2 py-2 px-3 pl-8 text-sm font-medium text-haby-purple hover:bg-haby-purple/10 rounded-md transition-colors"
          >
            + Unirse a una clase
          </Link>
        </div>
      )}
    </div>
  );
};

export function MainSidebar({ onMobileClose }: { onMobileClose?: () => void }) {
  const location = useLocation();
  const [isClassesOpen, setIsClassesOpen] = useState(true);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const isClassesActive = () => {
    return location.pathname.startsWith("/classes");
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-x-2">
          <GraduationCap className="h-6 w-6 text-haby-purple" />
          <h1 className="text-xl font-bold tracking-tight">HABY</h1>
        </div>
        <div className="ml-auto md:hidden">
          <SidebarTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-3.5rem)] px-3 py-2">
          <div className="space-y-1">
            <NavItem 
              icon={Home} 
              title="Inicio" 
              to="/dashboard" 
              isActive={isActive("/dashboard")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={Calendar} 
              title="Calendario" 
              to="/calendar" 
              isActive={isActive("/calendar")}
              onClick={onMobileClose}
            />
            <ClassDropdown 
              isActive={isClassesActive()} 
              isOpen={isClassesOpen} 
              toggleOpen={() => setIsClassesOpen(!isClassesOpen)}
              onClassClick={onMobileClose}
            />
            <NavItem 
              icon={Settings} 
              title="Configuración" 
              to="/settings" 
              isActive={isActive("/settings")}
              onClick={onMobileClose}
            />
          </div>

          <Separator className="my-4" />

          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider">Enlaces Rápidos</p>
            <NavItem 
              icon={Info} 
              title="Acerca de" 
              to="/about" 
              isActive={isActive("/about")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={MessageSquare} 
              title="Legal" 
              to="/legal" 
              isActive={isActive("/legal")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={Shield} 
              title="Privacidad" 
              to="/privacy" 
              isActive={isActive("/privacy")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={MessageSquare} 
              title="Términos" 
              to="/terms" 
              isActive={isActive("/terms")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={LifeBuoy} 
              title="Soporte" 
              to="/support" 
              isActive={isActive("/support")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={Mail} 
              title="Contacto" 
              to="/contact" 
              isActive={isActive("/contact")}
              onClick={onMobileClose}
            />
            <NavItem 
              icon={LifeBuoy} 
              title="Ayuda" 
              to="/help" 
              isActive={isActive("/help")}
              onClick={onMobileClose}
            />
          </div>
          
          <div className="py-4 px-3 text-center text-xs text-muted-foreground">
            <p>HABY Open The Doors &copy; 2025</p>
            <p className="mt-1">Fundada por Heber Zadkiel García Pérez</p>
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}

export function MobileMenuButton() {
  return (
    <SidebarTrigger>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SidebarTrigger>
  );
}
