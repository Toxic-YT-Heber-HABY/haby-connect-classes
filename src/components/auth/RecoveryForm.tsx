
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { updateUserPassword } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface RecoveryFormProps {
  onBackToLogin: () => void;
  verificationCode?: string;
}

const RecoveryForm: React.FC<RecoveryFormProps> = ({
  onBackToLogin,
  verificationCode,
}) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(verificationCode || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(verificationCode ? 2 : 1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa tu correo electrónico",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate sending reset code
    setTimeout(() => {
      toast({
        title: "Código enviado",
        description: "Se ha enviado un código de verificación a tu correo electrónico",
      });
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa el código de verificación",
        variant: "destructive",
      });
      return;
    }
    
    if (!newPassword.trim()) {
      toast({
        title: "Error",
        description: "Por favor, ingresa tu nueva contraseña",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // We're using updateUserPassword instead of updatePassword
      await updateUserPassword(email, code, newPassword);
      
      toast({
        title: "Contraseña actualizada",
        description: "Tu contraseña ha sido actualizada exitosamente",
      });
      
      navigate("/auth");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Ocurrió un error al actualizar la contraseña",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recuperar Contraseña
      </h2>
      
      {step === 1 ? (
        <form onSubmit={handleRequestCode}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              disabled={loading}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full mb-4"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Código"}
          </Button>
          
          <div className="text-center">
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-haby-purple hover:text-haby-purple-dark font-medium text-sm"
            >
              Volver al inicio de sesión
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Código de Verificación</label>
            <Input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código de verificación"
              disabled={loading}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nueva Contraseña</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nueva contraseña"
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
            {loading ? "Actualizando..." : "Actualizar Contraseña"}
          </Button>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-haby-purple hover:text-haby-purple-dark font-medium text-sm"
            >
              Volver al paso anterior
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RecoveryForm;
