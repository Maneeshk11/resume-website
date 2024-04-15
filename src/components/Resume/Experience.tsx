const Experience = () => {
    return (
        <div className="w-full flex flex-col text-sm py-1">
            <div className="flex flex-row items-center justify-between w-full">
                <span className="font-bold pb-[0.5px]">Software Developer Intern, <span className="font-normal">Catalog, India</span></span>
                <span>May 2023 - Dec 2023</span>
            </div>
            <ul className="w-[calc(100%-2rem)] mx-auto list-disc list-outside">
                <li>Played a role in the development of "Garden" which does seamless cross-network token swaps. Techstack: Typescript, Golang.</li>
                <li>Devloped a system monitoring dashboard to track and analyze the vitals of different systems like servers, databases and order-books.</li>
                <li>Worked on POC's for the implementation of a reward system using ZK Proofs.</li>
            </ul>
        </div>
    )
}

export default Experience;