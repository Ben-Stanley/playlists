import Label from "./Label";
import { cn } from "@/lib/utils";

function FieldItem({children, label, htmlFor, error, className}: 
{
    children: React.ReactNode; 
    label: string; 
    className?: string, 
    htmlFor?: string;
    error?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor} className="font-medium text-sm">{label}</Label>  
      {children}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FieldItem;