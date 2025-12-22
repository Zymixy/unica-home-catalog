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
    phone: "",
    message: type === "visit" 
      ? `Me gustaría agendar una visita para ver "${propertyTitle}".`
      : propertyTitle 
        ? `Estoy interesado/a en "${propertyTitle}". Me gustaría recibir más información.`
        : "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contactos')
        .insert({
          nombre: formData.name,
          telefono: formData.phone,
          mensaje: formData.message,
        });

      if (error) throw error;

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: "", phone: "", message: "" });
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
            className="border-border bg-transparent focus:border-foreground transition-colors py-6"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-border bg-transparent focus:border-foreground transition-colors py-6"
          />
        </div>
        <div>
          <Textarea
            placeholder="Mensaje"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="border-border bg-transparent focus:border-foreground transition-colors resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-sm tracking-[0.2em] bg-foreground text-background hover:bg-foreground/90 transition-all"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
