
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Terms = () => {
  document.title = "HABY - Términos";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Términos y Condiciones</h1>
              
              <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
                <section className="space-y-4">
                  <p className="text-muted-foreground">
                    Fecha de última actualización: 10 de abril de 2025
                  </p>
                  <p>
                    Bienvenido a HABY Open The Doors. Estos Términos y Condiciones rigen el uso de nuestra plataforma educativa y constituyen un acuerdo legalmente vinculante entre usted y HABY Education Technologies, S.A. de C.V.
                  </p>
                  <p>
                    Al acceder o utilizar nuestra plataforma, usted acepta estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestra plataforma.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">1. Uso de la Plataforma</h2>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">1.1 Elegibilidad</h3>
                    <p>
                      Para utilizar HABY, debe tener al menos 13 años de edad. Si es menor de 18 años, debe tener el consentimiento de un padre o tutor legal.
                    </p>
                    
                    <h3 className="text-lg font-medium">1.2 Cuentas de Usuario</h3>
                    <p>
                      Al registrarse en HABY, usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Usted acepta notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta.
                    </p>
                    
                    <h3 className="text-lg font-medium">1.3 Uso Aceptable</h3>
                    <p>
                      Usted acepta utilizar HABY únicamente para fines educativos legítimos y de acuerdo con todas las leyes y regulaciones aplicables. No debe utilizar la plataforma para:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Publicar contenido ilegal, ofensivo, difamatorio o inapropiado</li>
                      <li>Acosar, intimidar o discriminar a otros usuarios</li>
                      <li>Intentar obtener acceso no autorizado a la plataforma o a las cuentas de otros usuarios</li>
                      <li>Distribuir virus o cualquier otro código malicioso</li>
                      <li>Realizar actividades que interfieran con el funcionamiento de la plataforma</li>
                    </ul>
                  </div>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">2. Contenido</h2>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">2.1 Contenido del Usuario</h3>
                    <p>
                      Al publicar contenido en HABY, usted otorga a HABY una licencia mundial, no exclusiva, libre de regalías para usar, reproducir, modificar, adaptar, publicar, distribuir y mostrar dicho contenido en relación con la operación de la plataforma.
                    </p>
                    
                    <h3 className="text-lg font-medium">2.2 Propiedad del Contenido</h3>
                    <p>
                      Usted conserva todos los derechos de propiedad intelectual sobre el contenido que publica en HABY, pero es responsable de asegurarse de que tiene los derechos necesarios para publicar dicho contenido.
                    </p>
                    
                    <h3 className="text-lg font-medium">2.3 Contenido Prohibido</h3>
                    <p>
                      HABY se reserva el derecho de eliminar cualquier contenido que viole estos Términos o que consideremos inapropiado.
                    </p>
                  </div>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">3. Privacidad</h2>
                  <p>
                    Nuestra Política de Privacidad, disponible en [enlace a política de privacidad], describe cómo recopilamos, utilizamos y compartimos su información personal. Al utilizar HABY, usted acepta nuestras prácticas de privacidad.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">4. Propiedad Intelectual</h2>
                  <p>
                    HABY y su contenido original, características y funcionalidad son propiedad de HABY Education Technologies, S.A. de C.V. y están protegidos por derechos de autor, marcas comerciales, patentes y otras leyes de propiedad intelectual.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">5. Terminación</h2>
                  <p>
                    HABY se reserva el derecho de suspender o terminar su acceso a la plataforma en cualquier momento, por cualquier motivo, sin previo aviso.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">6. Limitación de Responsabilidad</h2>
                  <p>
                    En la máxima medida permitida por la ley, HABY no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, ni por cualquier pérdida de ganancias o ingresos.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">7. Modificaciones</h2>
                  <p>
                    Nos reservamos el derecho de modificar estos Términos en cualquier momento. Le notificaremos sobre cualquier cambio significativo a través de un aviso en la plataforma. Su uso continuado de HABY después de dichos cambios constituye su aceptación de los nuevos Términos.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">8. Ley Aplicable</h2>
                  <p>
                    Estos Términos se rigen por las leyes de México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">9. Contacto</h2>
                  <p>
                    Si tiene preguntas sobre estos Términos y Condiciones, contáctenos en:
                  </p>
                  <p>
                    HABY Open The Doors<br />
                    Correo electrónico: habyopenthedoors@gmail.com
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

export default Terms;
