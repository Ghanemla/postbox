import "./globals.css"; // importerar en CSS-fil med namnet "globals.css"
import type { Metadata } from "next"; // importerar en typ med namnet "Metadata" från "next" modulen
import { Inter } from "next/font/google"; //importerar ett typsnitt (font) med namnet "Inter" från "next/font/google"

const inter = Inter({ subsets: ["latin"] }); //kapas en instans av typsnittet "Inter" och tilldelas variabeln "inter"

export const metadata: Metadata = {
  //konstant med namnet "metadata" av typen "Metadata".
  title: "PostBox", // App name
  description: "PostBox: Your Digital Letter to the World", //Slogan of the app
};

export default function RootLayout({
  // funktion med namnet "RootLayout" som är exporteras som standard från detta modul.
  //Denna funktion fungerar som en layoutkomponent som omsluter andra React-komponenter med de globala stilar och typsnitt
  children,
}: {
  children: React.ReactNode;
}) {
  //
  return (
    // skapas en HTML-struktur som har ett "html"-element med attributet "lang" satt till "en"
    <html lang="en">
      {
        <body className={inter.className}>
          {children}
        </body> /*body element Klassen för body  elementet sätts till "inter.className vilket  tillämpar typsnittet "Inter" på hela sidans text*/
      }
    </html>
  );
}
