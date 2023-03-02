import { useContext } from "react";
import { CartContext } from "@/contexts";

export const useCart = () => useContext(CartContext);
