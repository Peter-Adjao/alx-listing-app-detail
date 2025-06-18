// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-50 text-gray px-4 py-2 rounded-md hover:bg-blue-300 transition"
    >
      {label}
    </button>
  );
};

export default Button; // ✅ This line is required
