import * as Icons from "@/components/icons/index";
import { Button } from "@/components/ui/button";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-10 bg-gradient-to-b from-background to-primary/5 via-background">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="font-bold text-3xl text-center">
          Bem vindo ao{" "}
          <span className="text-primary flex gap-2 items-center">
            MyFinance <Icons.ChartNoAxesCombined />
          </span>
        </h1>
        <Button size={'sm'}>Acessar dashboard</Button>
      </div>
    </div>
  );
}
