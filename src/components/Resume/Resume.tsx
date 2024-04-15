import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Subheading from "./Subheading";
import Header from "./header";


const Resume = () => {
    return (
        <div className="font-tex-pyre w-[710px] h-[900px] bg-white border border-[#0000001d] px-8 py-4">
            <Header />

            <Subheading title="Skills" />
            <Skills />

            <Subheading title="Experience" />
            <Experience />

            <Subheading title="Education" />
            <Education />

            <Subheading title="Projects" />
            <Projects />

            <Subheading title="Certifications" />

        </div>
    )
}

export default Resume;