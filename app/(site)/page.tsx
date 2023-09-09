import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  // funktion med namnet "Home" som är exporteras som standard från detta modul
  //Inuti funktionen returneras en enkel JSX-struktur som består av ett "div"-element.
  return (
    <div className=" flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-900">
      {/* här skapar jag ett "div-element  men en bild på appens logga inuti och et H2 element under loggan"  */}
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={150}
          width={150}
          className="mx-auto"
          src={"/images/logo.png"}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
        <h4 className="mt-6 text-center text-xl font-bold tracking-tight text-white">
          PostBox: Your Digital Letter to the World
        </h4>
      </div>
      <AuthForm />
    </div>
  );
}
