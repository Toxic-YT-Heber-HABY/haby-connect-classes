
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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

const TermsAndConditions = () => (
  <div className="max-h-80 overflow-y-auto text-sm text-muted-foreground">
    <h2 className="text-lg font-semibold mb-2">Términos y Condiciones de HABY</h2>
    <p className="mb-4">
      Fecha de última actualización: 10 de abril de 2025
    </p>
    <p className="mb-2">
      Bienvenido a HABY Open The Doors. Estos términos y condiciones rigen el uso de nuestra plataforma educativa.
    </p>
    <h3 className="font-semibold mt-4 mb-2">1. Aceptación de los Términos</h3>
    <p className="mb-2">
      Al acceder y utilizar la plataforma HABY, usted acepta cumplir con estos términos y condiciones y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, está prohibido utilizar o acceder a este sitio.
    </p>
    <h3 className="font-semibold mt-4 mb-2">2. Uso de la Plataforma</h3>
    <p className="mb-2">
      HABY se compromete a proporcionar un entorno educativo seguro y productivo. Los usuarios deben utilizar la plataforma exclusivamente para fines educativos y respetar la integridad académica en todo momento.
    </p>
    <h3 className="font-semibold mt-4 mb-2">3. Cuentas de Usuario</h3>
    <p className="mb-2">
      Es responsabilidad del usuario mantener la confidencialidad de su información de cuenta, incluyendo contraseñas y datos personales. El usuario acepta asumir la responsabilidad de todas las actividades que ocurran bajo su cuenta.
    </p>
    <h3 className="font-semibold mt-4 mb-2">4. Contenido</h3>
    <p className="mb-2">
      Los usuarios son responsables del contenido que publican en la plataforma. HABY se reserva el derecho de eliminar cualquier contenido inapropiado, ilegal o que viole nuestras políticas.
    </p>
    <h3 className="font-semibold mt-4 mb-2">5. Privacidad</h3>
    <p className="mb-2">
      Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal. Al utilizar HABY, usted acepta nuestras prácticas de privacidad.
    </p>
    <h3 className="font-semibold mt-4 mb-2">6. Modificaciones</h3>
    <p className="mb-2">
      HABY se reserva el derecho de modificar o actualizar estos términos en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar periódicamente estos términos para estar al tanto de los cambios.
    </p>
    <h3 className="font-semibold mt-4 mb-2">7. Contacto</h3>
    <p className="mb-2">
      Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos en habyopenthedoors@gmail.com.
    </p>
  </div>
);

const RegisterForm = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    folio: "",
    curp: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    folio: "",
    curp: "",
    password: "",
    confirmPassword: ""
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
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
    } else if (formData.username.length < 3) {
      newErrors.username = "El nombre debe tener al menos 3 caracteres";
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

    // CURP validation
    if (!formData.curp) {
      newErrors.curp = "La CURP es obligatoria";
      isValid = false;
    } else if (!/^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/.test(formData.curp)) {
      newErrors.curp = "La CURP no tiene un formato válido";
      isValid = false;
    }

    // Password validation for teachers
    if (userType === "teacher") {
      if (!formData.password) {
        newErrors.password = "La contraseña es obligatoria";
        isValid = false;
      } else if (formData.password.length < 8) {
        newErrors.password = "La contraseña debe tener al menos 8 caracteres";
        isValid = false;
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirme su contraseña";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Las contraseñas no coinciden";
        isValid = false;
      }
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
    
    if (!termsAccepted) {
      toast({
        title: "Términos y condiciones",
        description: "Debe aceptar los términos y condiciones para continuar",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const userData = {
        ...formData,
        userType
      };
      
      const result = await registerUser(userData);
      
      if (result.success) {
        toast({
          title: "Registro exitoso",
          description: "¡Su cuenta ha sido creada correctamente!",
        });
        
        // Redirect to login or dashboard
        setTimeout(() => {
          window.location.href = userType === "student" 
            ? "/dashboard" 
            : "/auth?tab=login";
        }, 2000);
      }
    } catch (error) {
      toast({
        title: "Error en el registro",
        description: "Ha ocurrido un error. Por favor, inténtelo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Registro en HABY</CardTitle>
        <CardDescription className="text-center">
          Crea tu cuenta para comenzar a utilizar la plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={userType} onValueChange={setUserType} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Alumno</TabsTrigger>
            <TabsTrigger value="teacher">Profesor</TabsTrigger>
          </TabsList>
        </Tabs>

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
            <Label htmlFor="curp">CURP</Label>
            <Input
              id="curp"
              name="curp"
              value={formData.curp}
              onChange={handleChange}
              placeholder="CURP"
              className={errors.curp ? "border-destructive" : ""}
            />
            {errors.curp && (
              <p className="text-destructive text-sm">{errors.curp}</p>
            )}
          </div>

          {userType === "teacher" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mínimo 8 caracteres"
                  className={errors.password ? "border-destructive" : ""}
                />
                {errors.password && (
                  <p className="text-destructive text-sm">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme su contraseña"
                  className={errors.confirmPassword ? "border-destructive" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-destructive text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </>
          )}

          <MathCaptcha onVerify={setCaptchaVerified} />

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={termsAccepted} 
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              className={termsAccepted ? "bg-green-500 text-white border-green-500" : "bg-red-100 border-red-300"}
            />
            <div className="flex items-center space-x-1">
              <Label htmlFor="terms" className="text-sm font-medium">
                Acepto los 
              </Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto text-sm haby-link">
                    términos y condiciones
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Términos y Condiciones</DialogTitle>
                    <DialogDescription>
                      Por favor lea cuidadosamente estos términos antes de registrarse.
                    </DialogDescription>
                  </DialogHeader>
                  <TermsAndConditions />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full haby-button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Procesando..." : "Registrarse"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/auth?tab=login" className="haby-link">
            Iniciar sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
