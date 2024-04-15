import { Inter } from "next/font/google";
import Resume from "@/components/Resume/Resume";
import { jsPDF } from "jspdf";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const content = pdfRef.current;
    console.log("babai");
    if (!content) return;
    console.log("babai2");
    const doc = new jsPDF()
    doc.html(content, {
      callback: function (doc) {
        doc.save('sample.pdf');
      },
      html2canvas: { scale: 0.3 }
    });
  }

  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center bg-[#f8fafe] py-8">
      <div className="absolute top-5 left-5 border rounded-md border-black p-2 cursor-pointer"
        onClick={handleDownload}>
        <span>Download Resume</span>
      </div>
      <Resume ref={pdfRef} />
    </div>
  );
}
