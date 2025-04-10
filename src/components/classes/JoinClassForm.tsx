
import { useState } from "react";
import { joinClass } from "@/lib/firebase";
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

interface JoinClassFormProps {
  onSuccess?: (classData: any) => void;
  onCancel?: () => void;
}

export function JoinClassForm({ onSuccess, onCancel }: JoinClassFormProps) {
  const { toast } = useToast();
  const [classCode, setClassCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassCode(e.target.value);
    
    // Clear error when user types
    if (error) {
      setError("");
    }
  };

  const validateForm = () => {
    if (!classCode.trim()) {
      setError("El código de clase es obligatorio");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await joinClass(classCode);
      
      if (result.success) {
        toast({
          title: "Te has unido a la clase",
          description: "Te has unido a la clase exitosamente",
        });
        
        if (onSuccess) {
          onSuccess(result);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo unir a la clase. Verifica el código e inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl">Unirse a una Clase</CardTitle>
        <CardDescription>
          Ingresa el código de clase proporcionado por tu profesor
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="classCode">
              Código de clase <span className="text-destructive">*</span>
            </Label>
            <Input
              id="classCode"
              value={classCode}
              onChange={handleChange}
              placeholder="Ej. ABC123"
              className={error ? "border-destructive" : ""}
            />
            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Si no tienes un código de clase, solicítalo a tu profesor para poder unirte.
            </p>
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
          {isSubmitting ? "Uniéndose..." : "Unirse a la Clase"}
        </Button>
      </CardFooter>
    </Card>
  );
}
