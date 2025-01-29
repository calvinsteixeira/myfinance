import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import Logo from "@/assets/Logo";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-10 bg-gradient-to-b from-background to-primary/5 via-background">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="font-bold text-3xl text-center">
          Bem vindo ao{" "}
          <Logo/>
        </h1>
        <NavLink to="/dashboard">
          <Button size={"sm"}>Acessar dashboard</Button>
        </NavLink>
      </div>
    </div>
  );
}