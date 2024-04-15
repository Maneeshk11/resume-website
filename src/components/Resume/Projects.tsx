const Projects = () => {
    return (
        <div className="w-full flex flex-col text-sm py-1 gap-y-1">
            <div className="w-full flex flex-col">
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="font-bold pb-[0.5px]">Optimization of Non-linear Programming Methods | <span className="font-normal italic">Python, Flask, React</span></span>
                    <span>Feb 2023 - Apr 2023</span>
                </div>
                <ul className="w-[calc(100%-2rem)] mx-auto list-disc list-outside">
                    <li>Developed a repository of implementations of non-linear programming methods discussed in Optimization techniques course such as Gradient descent, Newtons method and Stochastic Gradient method. </li>
                    <li>Built a website for user to visualize the workings of these methods based on input recieved. </li>
                </ul>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="font-bold pb-[0.5px]">RateMUprofessors | <span className="font-normal italic">Next.js, Golang, AWS, PostgreSQL</span></span>
                    <span>Feb 2023 - Apr 2023</span>
                </div>
                <ul className="w-[calc(100%-2rem)] mx-auto list-disc list-outside">
                    <li>Developed a fully functioning website for students to review, and give feedback to professors and courses taken in Mahindra University. The prototype was used by 300+ students.</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;