import { buttonVariants } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="grid grid-cols-2 w-6xl h-8/12 p-8 bg-white rounded-lg shadow-slate-300 shadow-2xl">
      <div className="flex items-center justify-center">
        <img className="w-md" src="/acoriss.png" alt="img Acoriss" />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-right font-bold text-3xl">Inscription</h1>
        <Input placeholder="Joe Blose" id="name" label="Noms" type="text" />
        <Input
          placeholder="0800000000"
          id="tel"
          label="Téléphone"
          type="number"
        />
        <Input id="pwd" label="Mot de passe" type="password" />
        <Input id="pwd2" label="Confirmer mot de passe" type="password" />
        <Link
          href="dashboard"
          className={
            buttonVariants({ size: "lg", variant: "outline" }) +
            "bg-green-100 hover:bg-teal-700 hover:text-white text-xl block mt-12"
          }
        >
          S'inscrire
        </Link>
        <div className="flex justify-end items-end">
          <Link
            href="/auth/signin"
            className="hover:underline font-thin"
          >
            J'ai changé d'avis
          </Link>
        </div>
      </div>
    </div>
  );
}
