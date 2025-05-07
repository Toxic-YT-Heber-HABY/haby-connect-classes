
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Laptop, 
  LogOut,
  ChevronDown,
  User,
  Languages
} from "lucide-react";
import { MobileMenuButton } from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Theme = "light" | "dark" | "system";
type Language = "es" | "en";

export function Header() {
  const [theme, setTheme] = useState<Theme>("system");
  const [language, setLanguage] = useState<Language>("es");
  const [notificationCount, setNotificationCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock user data
  const user = {
    name: "Usuario HABY",
    email: "usuario@haby.edu",
    avatar: undefined
  };

  // Effect to handle system theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    // In a real app, you might want to save this preference
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // In a real app, you would implement actual language switching
    localStorage.setItem("language", newLanguage);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality
    }
  };

  const handleLogout = () => {
    console.log("Logging out");
    // Implement logout functionality
    setTimeout(() => {
      window.location.href = "/auth?tab=login";
    }, 500);
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:hidden">
          <MobileMenuButton />
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center">
            <img 
              src="/images/haby-logo.png" 
              alt="HABY Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="font-bold text-xl">HABY</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-center px-2">
          <form onSubmit={handleSearch} className="w-full max-w-lg 2xl:max-w-xl">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar en HABY..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-2">
                <h3 className="font-medium">Notificaciones</h3>
                <div className="text-sm">
                  <div className="mb-2 rounded-md bg-muted p-2">
                    <p className="font-medium">Nueva tarea asignada</p>
                    <p className="text-xs text-muted-foreground">
                      Matemáticas: Ecuaciones diferenciales
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hace 2 horas
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-2">
                    <p className="font-medium">Recordatorio de entrega</p>
                    <p className="text-xs text-muted-foreground">
                      Física: Informe de laboratorio
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hace 1 día
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver todas las notificaciones
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Idioma</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className={language === "es" ? "bg-muted" : ""} 
                onClick={() => handleLanguageChange("es")}
              >
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={language === "en" ? "bg-muted" : ""} 
                onClick={() => handleLanguageChange("en")}
              >
                <span className="mr-2">🇺🇸</span> English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Theme Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "light" ? (
                  <Sun className="h-5 w-5" />
                ) : theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Laptop className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Tema</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className={theme === "light" ? "bg-muted" : ""} 
                onClick={() => handleThemeChange("light")}
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Claro</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={theme === "dark" ? "bg-muted" : ""} 
                onClick={() => handleThemeChange("dark")}
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Oscuro</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={theme === "system" ? "bg-muted" : ""} 
                onClick={() => handleThemeChange("system")}
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>Sistema</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-haby-purple text-white">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline-flex">
                  {user.name}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="flex flex-col gap-1">
                <span>{user.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {user.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  <User className="mr-2 h-4 w-4" />
                  <span>Mi perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
