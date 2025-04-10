
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const About = () => {
  document.title = "HABY - Acerca de";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Acerca de HABY</h1>
              
              <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Nuestra Historia</h2>
                  <p>
                    HABY (High-Achievement Bridge for Youth) fue fundada por Heber Zadkiel Garcia Perez con la visión de crear un puente educativo que conectara a profesores y estudiantes en un entorno de aprendizaje digital integral.
                  </p>
                  <p>
                    Nacida en 2025, HABY surgió como respuesta a la creciente necesidad de plataformas educativas que pudieran adaptarse a las necesidades específicas de instituciones educativas latinoamericanas, con un enfoque especial en la facilidad de uso y la seguridad.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Nuestra Misión</h2>
                  <p>
                    Proporcionar una plataforma educativa accesible, intuitiva y segura que facilite la comunicación entre profesores y alumnos, mejorando la experiencia de enseñanza-aprendizaje y permitiendo una gestión eficiente de recursos educativos.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Nuestra Visión</h2>
                  <p>
                    Convertirnos en la plataforma educativa de referencia en Latinoamérica, transformando la educación digital mediante soluciones innovadoras que se adapten a las necesidades específicas de cada institución educativa y cada estudiante.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Nuestros Valores</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Accesibilidad:</strong> Creemos que la educación debe ser accesible para todos, independientemente de sus circunstancias.</li>
                    <li><strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar la experiencia educativa.</li>
                    <li><strong>Seguridad:</strong> Protegemos los datos de nuestros usuarios con los más altos estándares de seguridad.</li>
                    <li><strong>Comunidad:</strong> Fomentamos un sentido de comunidad y colaboración entre profesores y alumnos.</li>
                    <li><strong>Adaptabilidad:</strong> Nos adaptamos a las necesidades cambiantes de las instituciones educativas y sus estudiantes.</li>
                  </ul>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Equipo Fundador</h2>
                  <div className="flex flex-col items-center max-w-xs mx-auto py-4">
                    <div className="w-32 h-32 rounded-full bg-haby-purple flex items-center justify-center text-white text-3xl font-bold mb-4">
                      HG
                    </div>
                    <h3 className="text-xl font-medium">Heber Zadkiel Garcia Perez</h3>
                    <p className="text-muted-foreground">Fundador & CEO</p>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default About;
