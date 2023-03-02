import { useContext } from "react";
import { AuthContext } from "@/contexts";

export const useAuth = () => useContext(AuthContext);
