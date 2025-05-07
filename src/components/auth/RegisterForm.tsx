import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UserType = "student" | "teacher" | "admin";

interface RegisterFormProps {
  onToggleForm: () => void;
}

interface RegisterDataType {
  userType: UserType;
  username: string;
  email: string;
  folio: string;
  curp: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleForm }) => {
  const [userType, setUserType] = useState<UserType>("student");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [folio, setFolio] = useState("");
  const [curp, setCurp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa un nombre de usuario",
        variant: "destructive",
      });
      return false;
    }
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa un correo electrónico",
        variant: "destructive",
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Por favor, ingresa un correo electrónico válido",
        variant: "destructive",
      });
      return false;
    }
    
    if (!password.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa una contraseña",
        variant: "destructive",
      });
      return false;
    }
    
    if (password.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive",
      });
      return false;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      });
      return false;
    }
    
    if (userType === "student") {
      if (!folio.trim()) {
        toast({
          title: "Error",
          description: "Por favor, ingresa tu folio",
          variant: "destructive",
        });
        return false;
      }
      
      if (!curp.trim()) {
        toast({
          title: "Error",
          description: "Por favor, ingresa tu CURP",
          variant: "destructive",
        });
        return false;
      }
      
      if (curp.length !== 18) {
        toast({
          title: "Error",
          description: "El CURP debe tener 18 caracteres",
          variant: "destructive",
        });
        return false;
      }
    }
    
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      await registerUser({
        userType,
        username,
        email,
        folio: userType === "student" ? folio : "",
        curp: userType === "student" ? curp : "",
        password,
      } as RegisterDataType);
      
      toast({
        title: "Registro exitoso",
        description: "Tu cuenta ha sido creada correctamente",
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error de registro",
        description: error.message || "Ocurrió un error durante el registro",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>
      
      <div className="flex mb-6 rounded-md overflow-hidden border">
        <button
          type="button"
          onClick={() => setUserType("student")}
          className={`flex-1 py-2 px-4 text-center ${
            userType === "student"
              ? "bg-haby-purple text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          Estudiante
        </button>
        <button
          type="button"
          onClick={() => setUserType("teacher")}
          className={`flex-1 py-2 px-4 text-center ${
            userType === "teacher"
              ? "bg-haby-purple text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          Profesor
        </button>
      </div>
      
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nombre de Usuario</label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su nombre de usuario"
            disabled={loading}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            disabled={loading}
          />
        </div>
        
        {userType === "student" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Folio</label>
              <Input
                type="text"
                value={folio}
                onChange={(e) => setFolio(e.target.value)}
                placeholder="Ingrese su folio"
                disabled={loading}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">CURP</label>
              <Input
                type="text"
                value={curp}
                onChange={(e) => setCurp(e.target.value.toUpperCase())}
                placeholder="Ingrese su CURP"
                maxLength={18}
                disabled={loading}
              />
            </div>
          </>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Contraseña</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              disabled={loading}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Confirmar Contraseña</label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar contraseña"
              disabled={loading}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full mb-4"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </Button>
        
        <div className="text-center">
          <p className="text-sm">
            ¿Ya tienes una cuenta?{" "}
            <button
              type="button"
              onClick={onToggleForm}
              className="text-haby-purple hover:text-haby-purple-dark font-medium"
            >
              Inicia Sesión
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
