
import { useState } from "react";
import { Link } from "react-router-dom";
import { recoverPassword, verifyRecoveryCode, updatePassword } from "@/lib/firebase";
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

const MathCaptcha = ({ onVerify }: { onVerify: (isValid: boolean) => void }) => {
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

const VerificationCodeInput = ({ 
  code, 
  setCode 
}: { 
  code: string[]; 
  setCode: React.Dispatch<React.SetStateAction<string[]>> 
}) => {
  const inputRefs = Array(4).fill(0).map(() => useState<HTMLInputElement | null>(null));

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input if value is entered
    if (value && index < 3) {
      inputRefs[index + 1][0]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1][0]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {code.map((digit, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs[index][1](el))}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center text-xl"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

const RecoveryForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    code: "",
    password: "",
    confirmPassword: ""
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    const code = verificationCode.join("");
    if (!code || code.length !== 4) {
      newErrors.code = "El código de verificación debe tener 4 dígitos";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep3 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!passwords.password) {
      newErrors.password = "La nueva contraseña es obligatoria";
      isValid = false;
    } else if (passwords.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      isValid = false;
    }

    if (!passwords.confirmPassword) {
      newErrors.confirmPassword = "Confirme su nueva contraseña";
      isValid = false;
    } else if (passwords.password !== passwords.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep1()) {
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
      const result = await recoverPassword(formData.email);
      
      if (result.success) {
        toast({
          title: "Código enviado",
          description: `Se ha enviado un código de verificación a ${formData.email}`,
        });
        setStep(2);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el código de verificación. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
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
      const code = verificationCode.join("");
      const result = await verifyRecoveryCode(code);
      
      if (result.success) {
        toast({
          title: "Código verificado",
          description: "El código de verificación es correcto",
        });
        setStep(3);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Código de verificación inválido. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep3()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await updatePassword(passwords.password);
      
      if (result.success) {
        toast({
          title: "Contraseña actualizada",
          description: "Su contraseña ha sido actualizada correctamente",
        });
        
        // Redirect to login
        setTimeout(() => {
          window.location.href = "/auth?tab=login";
        }, 2000);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar la contraseña. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Recuperar Contraseña</CardTitle>
        <CardDescription className="text-center">
          {step === 1 && "Ingrese su información para recibir un código de verificación"}
          {step === 2 && "Ingrese el código de verificación de 4 dígitos enviado a su correo"}
          {step === 3 && "Establezca su nueva contraseña"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <form onSubmit={handleRequestCode} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="correo@ejemplo.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email}</p>
              )}
            </div>

            <MathCaptcha onVerify={setCaptchaVerified} />

            <Button 
              type="submit" 
              className="w-full haby-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar código de verificación"}
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="space-y-4">
              <Label htmlFor="verificationCode" className="text-center block">
                Código de verificación
              </Label>
              <VerificationCodeInput code={verificationCode} setCode={setVerificationCode} />
              {errors.code && (
                <p className="text-destructive text-sm text-center">{errors.code}</p>
              )}
            </div>

            <MathCaptcha onVerify={setCaptchaVerified} />

            <Button 
              type="submit" 
              className="w-full haby-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verificando..." : "Verificar código"}
            </Button>

            <div className="text-center">
              <Button 
                type="button" 
                variant="link" 
                className="text-sm haby-link"
                onClick={() => setStep(1)}
              >
                Volver al paso anterior
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Escriba su nueva contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={passwords.password}
                onChange={handlePasswordChange}
                placeholder="Mínimo 8 caracteres"
                className={errors.password ? "border-destructive" : ""}
              />
              {errors.password && (
                <p className="text-destructive text-sm">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Reescriba su nueva contraseña</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirme su nueva contraseña"
                className={errors.confirmPassword ? "border-destructive" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full haby-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Actualizando..." : "Actualizar contraseña"}
            </Button>

            <div className="text-center">
              <Button 
                type="button" 
                variant="link" 
                className="text-sm haby-link"
                onClick={() => setStep(2)}
              >
                Volver al paso anterior
              </Button>
            </div>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ¿Recordaste tu contraseña?{" "}
          <Link to="/auth?tab=login" className="haby-link">
            Iniciar sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RecoveryForm;
