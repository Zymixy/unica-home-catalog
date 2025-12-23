import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CopyableFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const CopyableField = ({ icon, label, value }: CopyableFieldProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        title: "Copiado",
        description: `${label} copiado al portapapeles`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar al portapapeles",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-between w-full gap-3 p-4 border border-border hover:bg-secondary transition-all duration-200 active:scale-[0.98] group"
    >
      <div className="flex items-center gap-3">
        {icon}
        <div className="text-left">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>
      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </div>
    </button>
  );
};

export default CopyableField;
