import Topnavbar from "./components/Topnavbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furuhvammur 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <div className="flex justify-between gap-5 pt-4 ">
{/*           <div className="w-1/5 text-center pt-5 outline outline-gray-400 outline-1 ">
            Furuhvammur 2
          </div> */}
          <Topnavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
