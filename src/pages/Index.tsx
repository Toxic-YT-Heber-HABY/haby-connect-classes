
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Calendar, Shield, Gift } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  document.title = "HABY - Plataforma Educativa";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-haby-purple" />
            <span className="text-xl font-bold tracking-tight">HABY</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Características</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Acerca de</a>
            <Link to="/auth?tab=login" className="text-muted-foreground hover:text-foreground transition-colors">Iniciar Sesión</Link>
            <Link to="/auth?tab=register">
              <Button className="haby-button-primary">Registrarse</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Link to="/auth?tab=login">
              <Button variant="outline" size="sm">Acceder</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  La plataforma educativa que conecta profesores y alumnos
                </h1>
                <p className="md:text-xl text-muted-foreground">
                  HABY simplifica la gestión de clases, tareas y comunicación, permitiéndote centrarte en lo que realmente importa: la educación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/auth?tab=register">
                    <Button className="haby-button-primary" size="lg">
                      Comenzar ahora
                    </Button>
                  </Link>
                  <a href="#features">
                    <Button variant="outline" size="lg">
                      Conoce más
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] animate-fade-in">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-haby-softPurple to-haby-purple/20 rounded-lg">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg"></div>
                </div>
                <div className="absolute top-8 left-8 w-3/4 h-24 bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-haby-purple flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <h3 className="font-medium">Matemáticas Avanzadas</h3>
                      <p className="text-xs text-muted-foreground">Prof. Martínez</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-40 right-8 w-2/3 h-24 bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-haby-darkPurple flex items-center justify-center text-white font-bold">
                      F
                    </div>
                    <div>
                      <h3 className="font-medium">Física Cuántica</h3>
                      <p className="text-xs text-muted-foreground">Dr. Rodríguez</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-12 w-3/4 h-24 bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-haby-deepPurple flex items-center justify-center text-white font-bold">
                      L
                    </div>
                    <div>
                      <h3 className="font-medium">Literatura Contemporánea</h3>
                      <p className="text-xs text-muted-foreground">Dra. Sánchez</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Características Principales</h2>
              <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                HABY ofrece todas las herramientas que necesitas para crear un entorno educativo efectivo y colaborativo.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestión de Clases</h3>
                <p className="text-muted-foreground">
                  Crea y organiza clases fácilmente, comparte materiales y gestiona tareas de forma intuitiva.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comunicación Efectiva</h3>
                <p className="text-muted-foreground">
                  Facilita la comunicación entre profesores y alumnos con herramientas diseñadas para el entorno educativo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calendario Integrado</h3>
                <p className="text-muted-foreground">
                  Organiza eventos, fechas de entrega y actividades importantes en un calendario centralizado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
                <p className="text-muted-foreground">
                  Protege la información de usuarios con medidas de seguridad robustas y verificación en múltiples niveles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accesibilidad</h3>
                <p className="text-muted-foreground">
                  Diseñada para ser utilizada por todos, con una interfaz intuitiva y adaptada a diferentes dispositivos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-haby-softPurple flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-haby-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enfoque Educativo</h3>
                <p className="text-muted-foreground">
                  Creada específicamente para el ámbito educativo, con herramientas pensadas para profesores y alumnos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="bg-gradient-to-br from-haby-purple to-haby-darkPurple rounded-lg p-1">
                <div className="bg-white dark:bg-haby-darkGray rounded-md p-8 h-full">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">HABY Open The Doors</h3>
                    <p className="text-muted-foreground mb-6">Fundada por Heber Zadkiel Garcia Perez</p>
                    <p className="mb-4">
                      HABY nace con la misión de transformar la educación digital, proporcionando herramientas accesibles y seguras para mejorar la experiencia de enseñanza-aprendizaje.
                    </p>
                    <p>
                      Nuestra visión es convertirnos en la plataforma educativa de referencia en Latinoamérica, adaptándonos a las necesidades específicas de cada institución y cada estudiante.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Nuestra Historia</h2>
                <p className="text-muted-foreground">
                  HABY (High-Achievement Bridge for Youth) fue fundada con la visión de crear un puente educativo que conectara a profesores y estudiantes en un entorno digital integral.
                </p>
                <p className="text-muted-foreground">
                  Nacida en 2025, HABY surgió como respuesta a la creciente necesidad de plataformas educativas que pudieran adaptarse a las necesidades específicas de instituciones educativas latinoamericanas, con un enfoque especial en la facilidad de uso y la seguridad.
                </p>
                <Link to="/about">
                  <Button variant="outline">Conocer más sobre HABY</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-haby-purple text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Únete a la comunidad HABY
            </h2>
            <p className="md:text-lg max-w-3xl mx-auto mb-8">
              Comienza a disfrutar de todas las ventajas de nuestra plataforma educativa. Regístrate hoy mismo y transforma tu experiencia de enseñanza y aprendizaje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth?tab=register">
                <Button size="lg" className="bg-white text-haby-purple hover:bg-white/90">
                  Registrarse
                </Button>
              </Link>
              <Link to="/auth?tab=login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
