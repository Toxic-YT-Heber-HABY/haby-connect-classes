
import { useState } from "react";
import { createClass } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface CreateClassFormProps {
  onSuccess?: (classData: any) => void;
  onCancel?: () => void;
}

export function CreateClassForm({ onSuccess, onCancel }: CreateClassFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    section: "",
    subject: "",
    room: ""
  });
  const [errors, setErrors] = useState({
    name: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (name === "name" && errors.name) {
      setErrors({ ...errors, name: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre de la clase es obligatorio";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await createClass(formData);
      
      if (result.success) {
        toast({
          title: "Clase creada",
          description: `La clase "${formData.name}" ha sido creada exitosamente`,
        });
        
        if (onSuccess) {
          onSuccess(result);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo crear la clase. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl">Crear Clase</CardTitle>
        <CardDescription>
          Complete el formulario para crear una nueva clase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Nombre de la clase <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej. Matemáticas Avanzadas"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="section">Sección</Label>
            <Input
              id="section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="Ej. A, B, 101, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Asignatura</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ej. Matemáticas, Física, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="room">Sala</Label>
            <Input
              id="room"
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="Ej. 101, Laboratorio 3, etc."
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button 
          onClick={handleSubmit}
          className="haby-button-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creando..." : "Crear Clase"}
        </Button>
      </CardFooter>
    </Card>
  );
}
