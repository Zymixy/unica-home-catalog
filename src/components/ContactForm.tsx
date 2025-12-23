import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
  type?: "info" | "visit";
}

const ContactForm = ({ propertyId, propertyTitle, type = "info" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: type === "visit" 
      ? `Me gustaría agendar una visita para ver "${propertyTitle}".`
      : propertyTitle 
        ? `Estoy interesado/a en "${propertyTitle}". Me gustaría recibir más información.`
        : "",
  });
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    
    if (email && !validateEmail(email)) {
      setEmailError("El email debe ser una dirección @gmail.com");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError("El email debe ser una dirección @gmail.com");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contactos')
        .insert({
          nombre: formData.name,
          telefono: formData.phone,
          mensaje: `Email: ${formData.email}\n\n${formData.message}`,
        });

      if (error) throw error;

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Nombre completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border-border bg-transparent focus:border-foreground transition-all duration-200 py-6 focus:scale-[1.01]"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email (@gmail.com)"
            value={formData.email}
            onChange={handleEmailChange}
            required
            className={`border-border bg-transparent focus:border-foreground transition-all duration-200 py-6 focus:scale-[1.01] ${
              emailError ? "border-destructive" : ""
            }`}
          />
          {emailError && (
            <p className="text-sm text-destructive mt-1">{emailError}</p>
          )}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="border-border bg-transparent focus:border-foreground transition-all duration-200 py-6 focus:scale-[1.01]"
          />
        </div>
        <div>
          <Textarea
            placeholder="Mensaje"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="border-border bg-transparent focus:border-foreground transition-all duration-200 resize-none focus:scale-[1.01]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !!emailError}
        className="w-full py-6 text-sm tracking-[0.2em] bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
