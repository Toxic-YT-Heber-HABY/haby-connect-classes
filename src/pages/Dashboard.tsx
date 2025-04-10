
import { useState, useEffect } from "react";
import { getClasses } from "@/lib/firebase";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClassCard } from "@/components/dashboard/ClassCard";
import { MainSidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "HABY - Dashboard";
    
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
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <MainSidebar />
          <main className="flex-1 bg-muted/30">
            <div className="container py-8 px-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <Link to="/classes/create">
                  <Button className="haby-button-primary">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Crear clase
                  </Button>
                </Link>
              </div>
              
              <Separator className="my-6" />
              
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="text-muted-foreground">Cargando clases...</div>
                </div>
              ) : classes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map(classItem => (
                    <ClassCard
                      key={classItem.id}
                      id={classItem.id}
                      name={classItem.name}
                      section={classItem.section}
                      subject={classItem.subject}
                      room={classItem.room}
                      teacher={classItem.teacher}
                      pendingTasks={classItem.pendingTasks}
                    />
                  ))}
                  <Link
                    to="/classes/join"
                    className="flex flex-col items-center justify-center h-52 rounded-lg border border-dashed p-5 text-muted-foreground hover:border-haby-purple hover:text-haby-purple transition-colors"
                  >
                    <PlusCircle className="h-10 w-10 mb-2" />
                    <span className="font-medium">Unirse a una clase</span>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold mb-2">No tienes clases todavía</h2>
                  <p className="text-muted-foreground mb-6">
                    Crea una clase o únete a una existente para empezar
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link to="/classes/create">
                      <Button className="haby-button-primary">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Crear clase
                      </Button>
                    </Link>
                    <Link to="/classes/join">
                      <Button variant="outline">
                        Unirse a una clase
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
