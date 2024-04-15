import Experience from "./Experience";
import Skills from "./Skills";
import Subheading from "./Subheading";
import Header from "./header";


const Resume = () => {
    return (
        <div className="font-tex-pyre w-[700px] h-[900px] bg-white border border-[#0000001d] px-8 py-4">
            <Header />

            <Subheading title="Skills"  />
            <Skills />

            <Subheading title="Experience"  />
            <Experience />

            <Subheading title="Education"  />
            <Subheading title="Certifications"  />
        </div>
    )
}

export default Resume;