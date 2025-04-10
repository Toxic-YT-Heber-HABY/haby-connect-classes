
import { Link } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClassCardProps {
  id: string;
  name: string;
  section?: string;
  subject?: string;
  room?: string;
  teacher?: string;
  pendingTasks: number;
  className?: string;
}

export function ClassCard({
  id,
  name,
  section,
  subject,
  room,
  teacher,
  pendingTasks,
  className
}: ClassCardProps) {
  // Generate a repeatable background color based on class name
  const getColor = () => {
    const colors = [
      "bg-haby-softPurple", "bg-haby-softGreen", "bg-haby-softYellow", 
      "bg-haby-softOrange", "bg-haby-softBlue"
    ];
    const hash = name.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  return (
    <Link
      to={`/classes/${id}`}
      className={cn(
        "group relative flex flex-col rounded-lg border p-5 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className={cn("absolute right-0 top-0 h-20 w-20 overflow-hidden rounded-bl-lg rounded-tr-lg", getColor())}>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-foreground/40" />
        </div>
      </div>
      
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold group-hover:text-haby-purple transition-colors pr-16">
          {name}
        </h3>
        
        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          {section && (
            <p>Sección: {section}</p>
          )}
          {subject && (
            <p>Asignatura: {subject}</p>
          )}
          {room && (
            <p>Sala: {room}</p>
          )}
          {teacher && (
            <p>Profesor: {teacher}</p>
          )}
        </div>
        
        <div className="mt-auto pt-4">
          {pendingTasks > 0 ? (
            <div className="flex items-center gap-1.5 text-sm font-medium text-destructive">
              <Clock className="h-4 w-4" />
              <span>{pendingTasks} tarea{pendingTasks !== 1 ? "s" : ""} pendiente{pendingTasks !== 1 ? "s" : ""}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Sin tareas pendientes</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
