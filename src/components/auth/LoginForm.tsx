
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/lib/firebase";
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
import { Eye, EyeOff } from "lucide-react";

interface MathCaptchaProps {
  onVerify: (isValid: boolean) => void;
}

const MathCaptcha: React.FC<MathCaptchaProps> = ({ onVerify }) => {
  const [answer, setAnswer] = useState("");
  const problem = "5 × 5 = ?";
  const correctAnswer = "25";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnswer(value);
    if (value === correctAnswer) {
      onVerify(true);
    } else {
      onVerify(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="captcha">Captcha: Resuelve el problema matemático</Label>
      <div className="flex items-center space-x-2">
        <div className="bg-muted p-2 rounded-md font-medium">{problem}</div>
        <Input
          id="captcha"
          className="w-20"
          value={answer}
          onChange={handleChange}
          placeholder="?"
        />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    folio: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    folio: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Username validation
    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio";
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
      isValid = false;
    }

    // Folio validation
    if (!formData.folio) {
      newErrors.folio = "El folio es obligatorio";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
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
    
    if (!captchaVerified) {
      toast({
        title: "Error de verificación",
        description: "Por favor, complete el captcha correctamente",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const credentials = {
        ...formData
      };
      
      const result = await loginUser(credentials);
      
      if (result.success) {
        toast({
          title: "Inicio de sesión exitoso",
          description: "¡Bienvenido a HABY!",
        });
        
        // Usar navigate en lugar de window.location para redireccionar correctamente
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Error de inicio de sesión",
        description: "Credenciales inválidas. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
        <CardDescription className="text-center">
          Ingrese sus credenciales para acceder a la plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nombre de usuario"
              className={errors.username ? "border-destructive" : ""}
            />
            {errors.username && (
              <p className="text-destructive text-sm">{errors.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="folio">Folio</Label>
            <Input
              id="folio"
              name="folio"
              value={formData.folio}
              onChange={handleChange}
              placeholder="Folio de identificación"
              className={errors.folio ? "border-destructive" : ""}
            />
            {errors.folio && (
              <p className="text-destructive text-sm">{errors.folio}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Su contraseña"
                className={errors.password ? "border-destructive pr-10" : "pr-10"}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-destructive text-sm">{errors.password}</p>
            )}
          </div>

          <MathCaptcha onVerify={setCaptchaVerified} />

          <Button 
            type="submit" 
            className="w-full haby-button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>

          <div className="text-center">
            <Link to="/auth?tab=recovery" className="text-sm haby-link">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <Link to="/auth?tab=register" className="haby-link">
            Regístrate
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
