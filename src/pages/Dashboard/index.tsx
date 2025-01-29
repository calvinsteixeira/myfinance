import React from "react";
import Logo from "@/assets/Logo";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-screen h-screen flex p-10">
      <div>
        <Logo size="md"/>
      </div>
    </div>
  );
}
