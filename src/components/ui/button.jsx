import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button için varyantları ve boyutları tanımlıyoruz
const buttonVariants = cva(
  // Ortak stiller
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // Buton varyantları
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",  // Varsayılan stil
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",  // Tehditkar stil
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",  // Çerçeveli stil
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",  // İkincil stil
        ghost: "hover:bg-accent hover:text-accent-foreground",  // Hayalet stil
        link: "text-primary underline-offset-4 hover:underline",  // Link gibi stil
      },
      // Buton boyutları
      size: {
        default: "h-10 px-4 py-2",  // Varsayılan boyut
        sm: "h-9 rounded-md px-3",  // Küçük boyut
        lg: "h-11 rounded-md px-8",  // Büyük boyut
        icon: "h-10 w-10",  // Sadece simge boyutu
      },
    },
    // Varsayılan seçenekler
    defaultVariants: {
      variant: "default",  // Varsayılan varyant
      size: "default",  // Varsayılan boyut
    },
  }
);

// Buton bileşeni tanımlanıyor
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Eğer asChild true ise, Slot bileşenini kullanıyoruz, yoksa normal bir button
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}  // Dinamik sınıflar
        ref={ref}  // Ref'yi bağlıyoruz
        {...props}  // Diğer özellikleri de geçiyoruz
      />
    );
  }
);

// Buton bileşeninin adı ayarlanıyor
Button.displayName = "Button";

// Button bileşenini ve varyantları dışa aktarıyoruz
export { Button, buttonVariants };
