import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving to database
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, save to localStorage as a demo
    const contacts = JSON.parse(localStorage.getItem("unica_contacts") || "[]");
    contacts.push({
      ...formData,
      propertyId,
      propertyTitle,
      type,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("unica_contacts", JSON.stringify(contacts));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
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
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
