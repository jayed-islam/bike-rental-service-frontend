import React from "react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  loading = false,
  onClick,
  className = "",
  title,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 bg-sky-800 hover:bg-sky-900 text-white font-semibold ${className}`}
      disabled={loading}
    >
      {title}
    </button>
  );
};

export default CustomButton;
