import Image from "next/image";
import { Inter } from "next/font/google";
import Resume from "@/components/Resume/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f8fafe]">
      <Resume />
    </div>
  );
}
