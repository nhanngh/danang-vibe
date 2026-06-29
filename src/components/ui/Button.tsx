interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-foreground text-background hover:bg-zinc-700",
    outline: "border border-zinc-300 hover:bg-zinc-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
