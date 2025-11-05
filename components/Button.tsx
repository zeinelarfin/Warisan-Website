import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className = '', icon }) => {
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-transform duration-200 transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-700/70 text-white hover:bg-gray-600/70 backdrop-blur-sm",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {icon && <span className="w-6 h-6">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
