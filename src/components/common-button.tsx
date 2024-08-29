import React from "react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  title: string;
  variant?: "contained" | "outline" | "text"; // Add variant prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  loading = false,
  onClick,
  className = "",
  title,
  variant = "contained", // Default variant
}) => {
  const baseClasses = "px-5 py-2 font-semibold transition-all duration-300";

  // Define styles for different variants
  const variantClasses = {
    contained: "bg-sky-800 hover:bg-sky-900 text-white",
    outline:
      "border-2 border-sky-800 hover:bg-sky-800 text-sky-800 hover:text-white",
    text: "bg-transparent text-sky-800 hover:bg-sky-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={loading}
    >
      {loading ? "Loading..." : title}
    </button>
  );
};

export default CustomButton;
