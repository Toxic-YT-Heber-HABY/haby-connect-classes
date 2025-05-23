
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Calendar, Shield, Gift, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    document.title = "HABY-CLASS - Plataforma Educativa";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="h-7 w-7 text-purple-600" />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold tracking-tight" 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              HABY-CLASS
            </motion.span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="nav-link font-medium">Características</a>
            <a href="#about" className="nav-link font-medium">Acerca de</a>
            <Link to="/auth?tab=login" className="nav-link font-medium">Iniciar Sesión</Link>
            <Link to="/auth?tab=register">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Registrarse</Button>
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 dark:opacity-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute top-1/3 right-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
            </div>
            <div className="absolute top-1/4 left-0 w-full h-1/2 opacity-10 dots-bg"></div>
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div 
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
                  variants={fadeInUp}
                >
                  Transformando la <span className="relative">
                    educación
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 -z-10 rounded-sm"></span>
                  </span> digital
                </motion.h1>
                
                <motion.p 
                  className="md:text-xl text-muted-foreground max-w-lg"
                  variants={fadeInUp}
                >
                  HABY-CLASS simplifica la gestión de clases, tareas y comunicación, permitiéndote centrarte en lo que realmente importa: la educación.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInUp}
                >
                  <Link to="/auth?tab=register">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white text-base flex items-center gap-2 h-12 px-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
                      Comenzar ahora
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#features">
                    <Button variant="outline" size="lg" className="h-12 border-purple-300 hover:border-purple-500">
                      Conoce más
                    </Button>
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-6 text-sm"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span>Fácil de usar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span>Soporte 24/7</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative h-[500px] hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-600/10 to-purple-100/30">
                  <div className="absolute inset-0 backdrop-blur-[2px] rounded-2xl"></div>
                </div>
                
                <motion.div 
                  className="absolute top-12 left-12 w-3/4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 z-10 border border-purple-100 dark:border-purple-900/30"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Matemáticas Avanzadas</h3>
                      <p className="text-sm text-muted-foreground">Prof. Martínez • 28 estudiantes</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-52 right-12 w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-purple-100 dark:border-purple-900/30"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      F
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Física Cuántica</h3>
                      <p className="text-sm text-muted-foreground">Dr. Rodríguez • 15 estudiantes</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`h-3.5 w-3.5 ${star <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-12 left-16 w-3/4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-purple-100 dark:border-purple-900/30"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      L
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Literatura Contemporánea</h3>
                      <p className="text-sm text-muted-foreground">Dra. Sánchez • 32 estudiantes</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <Star className="h-3.5 w-3.5 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text inline-block">Características Principales</h2>
              <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                HABY-CLASS ofrece todas las herramientas que necesitas para crear un entorno educativo efectivo y colaborativo.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestión de Clases</h3>
                <p className="text-muted-foreground">
                  Crea y organiza clases fácilmente, comparte materiales didácticos y gestiona tareas de forma intuitiva a través de una interfaz amigable diseñada pensando en la experiencia del usuario.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunicación Efectiva</h3>
                <p className="text-muted-foreground">
                  Facilita la comunicación entre profesores y alumnos con herramientas diseñadas específicamente para mejorar la interacción en el entorno educativo, incluyendo chats, foros y notificaciones personalizadas.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calendario Integrado</h3>
                <p className="text-muted-foreground">
                  Organiza eventos, fechas de entrega y actividades importantes en un calendario centralizado con notificaciones personalizables que te mantendrán al día con todas tus responsabilidades académicas.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Seguridad Avanzada</h3>
                <p className="text-muted-foreground">
                  Protege la información de usuarios con medidas de seguridad robustas y verificación en múltiples niveles para garantizar la privacidad y confidencialidad de todos los datos académicos y personales.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accesibilidad Total</h3>
                <p className="text-muted-foreground">
                  Diseñada para ser utilizada por todos, con una interfaz intuitiva y adaptada a diferentes dispositivos, garantizando una experiencia fluida tanto en computadoras de escritorio como en dispositivos móviles.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-300/20 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enfoque Educativo</h3>
                <p className="text-muted-foreground">
                  Creada específicamente para el ámbito educativo, con herramientas pensadas para profesores y alumnos que mejoran el proceso de aprendizaje y facilitan la evaluación continua del progreso académico.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/20 -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-purple-100 dark:bg-purple-900/20 -z-10"></div>
                
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text inline-block">HABY-CLASS Open The Doors</h3>
                      <p className="text-muted-foreground mb-6">Fundada por Heber Zadkiel Garcia Perez</p>
                      <p className="mb-5 text-balance">
                        HABY-CLASS nace con la misión de transformar la educación digital, proporcionando herramientas accesibles y seguras para mejorar la experiencia de enseñanza-aprendizaje en instituciones educativas de todos los niveles.
                      </p>
                      <p className="text-balance">
                        Nuestra visión es convertirnos en la plataforma educativa de referencia en Latinoamérica, adaptándonos a las necesidades específicas de cada institución y cada estudiante para potenciar su desarrollo académico y profesional.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text inline-block">Nuestra Historia</h2>
                <p className="text-muted-foreground">
                  HABY-CLASS (High-Achievement Bridge for Youth - CLASS) fue fundada con la visión de crear un puente educativo que conectara a profesores y estudiantes en un entorno digital integral, seguro y altamente eficiente.
                </p>
                <p className="text-muted-foreground">
                  Nacida en 2025, HABY-CLASS surgió como respuesta a la creciente necesidad de plataformas educativas que pudieran adaptarse a las necesidades específicas de instituciones educativas latinoamericanas, con un enfoque especial en la facilidad de uso, la accesibilidad y la seguridad de los datos.
                </p>
                <p className="text-muted-foreground">
                  Nuestro equipo multidisciplinario de desarrolladores, diseñadores, pedagogos y expertos en educación trabaja constantemente para mejorar la plataforma y adaptarla a las necesidades cambiantes del sector educativo moderno, incorporando las últimas tendencias tecnológicas y pedagógicas.
                </p>
                <div className="pt-4">
                  <Link to="/about">
                    <Button variant="outline" className="group border-purple-300 hover:border-purple-500">
                      Conocer más sobre HABY-CLASS
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-purple-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text inline-block">Testimonios</h2>
              <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Descubre lo que dicen nuestros usuarios sobre la experiencia HABY-CLASS.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "HABY-CLASS ha transformado por completo la forma en que gestiono mis clases. Ahora puedo comunicarme con mis alumnos de manera efectiva y organizar todo el contenido de forma intuitiva. La plataforma es extremadamente fácil de usar y ha mejorado significativamente la participación de mis estudiantes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <h4 className="font-medium">Prof. María Jiménez</h4>
                    <p className="text-sm text-muted-foreground">Universidad Nacional</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Como estudiante, HABY-CLASS me ha ayudado a mantenerme organizado y nunca perder una fecha de entrega. La comunicación con mis profesores es mucho más fluida y efectiva. Además, las herramientas de colaboración han facilitado enormemente los proyectos en grupo, permitiéndonos trabajar juntos sin importar dónde nos encontremos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
                    C
                  </div>
                  <div>
                    <h4 className="font-medium">Carlos Mendoza</h4>
                    <p className="text-sm text-muted-foreground">Estudiante de Ingeniería</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-5 w-5 ${star <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Como director académico, HABY-CLASS nos ha permitido estandarizar procesos y mejorar la comunicación entre departamentos. El seguimiento de rendimiento académico es excepcional y las herramientas analíticas nos proporcionan información valiosa para tomar decisiones basadas en datos que mejoran constantemente nuestra oferta educativa."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Ramón Vázquez</h4>
                    <p className="text-sm text-muted-foreground">Coordinador Académico</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-600"></div>
          <div className="absolute inset-0 opacity-10 dots-bg"></div>
          
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold tracking-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Únete a la comunidad HABY-CLASS
            </motion.h2>
            <motion.p 
              className="md:text-lg max-w-3xl mx-auto mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comienza a disfrutar de todas las ventajas de nuestra plataforma educativa. Regístrate hoy mismo y transforma tu experiencia de enseñanza y aprendizaje con herramientas diseñadas específicamente para potenciar el rendimiento académico.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/auth?tab=register">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 shadow-xl h-12 px-8">
                  Registrarse
                </Button>
              </Link>
              <Link to="/auth?tab=login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                  Iniciar Sesión
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
