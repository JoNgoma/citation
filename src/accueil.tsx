import Link from "next/link";
import { Button, buttonVariants } from "./components/ui/button";
import { Card, CardHeader } from "./components/ui/card";

export function Accueil() {
  return (
    <div className="grid grid-cols-2 w-6xl h-8/12 p-5 bg-white rounded-lg shadow-slate-300 shadow-2xl">
      <div className="flex items-center justify-center">
        <img className="w-md" src="acoriss.png" alt="" />
      </div>
      <div className="flex flex-col justify-center gap-12">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fugit
          molestiae inventore unde accusamus in. Libero, ipsum. Ipsum commodi
          natus perspiciatis accusamus aliquid magnam deserunt consectetur,
          numquam totam temporibus vitae?
        </p>
        <Link
          href="auth/signin"
          className={
            buttonVariants({ size: "lg", variant: "outline" }) +
            " text-slate-700 w-2/6 hover:bg-green-100"
          }
        >
          Suivant
        </Link>
      </div>
    </div>
  );
}
