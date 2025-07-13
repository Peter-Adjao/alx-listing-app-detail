import { ReactNode } from "react";

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export interface PropertyProps {
  id: string | string[] | undefined;
  name: string;
  rating: number;
  address: {
    state?: string;
    city: string;
    country: string;
  };
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  discount?: string;

  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };

  reviews: Review[];
  host?: {
    name: string;
    bio: string;
    avatar?: string;
  };
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}






