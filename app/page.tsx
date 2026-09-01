"use client"
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/context";

export default function Home() {
  const {user} = useUserContext() as UserContextType
  return (
    <div>
      <h3>Welcome Home {user?.name}</h3>
    </div>
  );
}
