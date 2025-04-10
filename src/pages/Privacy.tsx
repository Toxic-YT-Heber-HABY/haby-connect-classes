
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Privacy = () => {
  document.title = "HABY - Privacidad";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <h1 className="text-3xl font-bold tracking-tight mb-6">Política de Privacidad</h1>
              
              <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
                <section className="space-y-4">
                  <p className="text-muted-foreground">
                    Fecha de última actualización: 10 de abril de 2025
                  </p>
                  <p>
                    En HABY Open The Doors, nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestra plataforma educativa.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Información que Recopilamos</h2>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Información de Registro</h3>
                    <p>
                      Cuando crea una cuenta en HABY, recopilamos la siguiente información:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Nombre de usuario</li>
                      <li>Correo electrónico</li>
                      <li>Folio de identificación</li>
                      <li>CURP</li>
                      <li>Contraseña (almacenada de forma segura)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Información de Uso</h3>
                    <p>
                      Recopilamos información sobre cómo utiliza nuestra plataforma, incluyendo:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Clases a las que se une o crea</li>
                      <li>Tareas creadas o entregadas</li>
                      <li>Materiales compartidos o descargados</li>
                      <li>Fecha y hora de acceso a la plataforma</li>
                      <li>Dispositivo y navegador utilizados</li>
                    </ul>
                  </div>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Cómo Utilizamos su Información</h2>
                  <p>
                    Utilizamos su información personal para los siguientes fines:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Proporcionar y mantener la plataforma educativa HABY</li>
                    <li>Permitir la comunicación entre profesores y alumnos</li>
                    <li>Gestionar y mejorar las funcionalidades de la plataforma</li>
                    <li>Enviar notificaciones relacionadas con las clases, tareas y anuncios</li>
                    <li>Analizar el uso de la plataforma para mejorar nuestros servicios</li>
                    <li>Prevenir actividades fraudulentas y proteger la seguridad de los usuarios</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Compartición de Información</h2>
                  <p>
                    No vendemos, alquilamos ni compartimos su información personal con terceros no afiliados, excepto en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Con profesores y alumnos dentro de las clases a las que pertenece</li>
                    <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                    <li>Si es requerido por ley o por proceso legal</li>
                    <li>En caso de una fusión, adquisición o venta de activos</li>
                  </ul>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Seguridad de los Datos</h2>
                  <p>
                    Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información personal contra acceso no autorizado, destrucción o modificación. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Sus Derechos de Privacidad</h2>
                  <p>
                    Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como el derecho a:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Acceder a su información personal</li>
                    <li>Corregir datos inexactos</li>
                    <li>Eliminar su información personal</li>
                    <li>Oponerse o restringir el procesamiento de sus datos</li>
                    <li>Solicitar la portabilidad de sus datos</li>
                  </ul>
                  <p>
                    Para ejercer estos derechos, contáctenos en habyopenthedoors@gmail.com.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Cambios a esta Política</h2>
                  <p>
                    Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre disponible en nuestra plataforma. Le recomendamos revisar esta política regularmente.
                  </p>
                </section>
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">Contacto</h2>
                  <p>
                    Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:
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

export default Privacy;
