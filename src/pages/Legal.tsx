
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Legal = () => {
  document.title = "HABY - Legal";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Información Legal</h1>
              
              <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Aviso Legal</h2>
                  <p>
                    HABY Open The Doors es una plataforma educativa operada por HABY Education Technologies, S.A. de C.V. con domicilio en Ciudad de México, México.
                  </p>
                  <p>
                    La información contenida en este sitio web es meramente informativa y no constituye asesoramiento legal, fiscal, regulatorio, profesional o de cualquier otro tipo.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Propiedad Intelectual</h2>
                  <p>
                    Todos los derechos de propiedad intelectual, incluidos entre otros, derechos de autor, marcas comerciales, nombres comerciales, diseños, textos, imágenes, logotipos, iconos, código fuente y software utilizados en esta plataforma son propiedad de HABY Education Technologies, S.A. de C.V. o de sus licenciantes.
                  </p>
                  <p>
                    Queda prohibida la reproducción, distribución, comunicación pública o transformación, total o parcial, de cualquier elemento de esta plataforma sin autorización expresa y por escrito de HABY Education Technologies, S.A. de C.V.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Descargo de Responsabilidad</h2>
                  <p>
                    HABY Open The Doors no garantiza la disponibilidad y continuidad del funcionamiento de la plataforma, ni que esté libre de errores. HABY no será responsable de los daños y perjuicios de cualquier naturaleza que puedan deberse a la falta de disponibilidad o continuidad del funcionamiento de la plataforma.
                  </p>
                  <p>
                    HABY no será responsable por el contenido subido por usuarios, incluidos profesores y alumnos, dentro de la plataforma, siendo cada usuario responsable del contenido que comparte y publica.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Legislación Aplicable</h2>
                  <p>
                    La relación entre HABY y el usuario se regirá por la legislación vigente en México y cualquier controversia se someterá a los Juzgados y Tribunales de la Ciudad de México.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Copyright</h2>
                  <p>
                    © 2025 HABY Open The Doors. Todos los derechos reservados.
                  </p>
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

export default Legal;
