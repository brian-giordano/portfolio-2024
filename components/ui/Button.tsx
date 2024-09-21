import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles =
    "w-full px-4 py-4 font-accent rounded focus:outline-none focus:ring";
  const variantStyles = {
    primary:
      "bg-crimson font-accent text-2xl font-bold text-ivoryWhite uppercase hover:bg-darkCrimson focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    accent: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} `}
    >
      {label}
    </button>
  );
};

export default Button;
