

const Education = () => {
    return (
        <div className="w-full flex flex-col text-sm py-1">
            <div className="w-full flex flex-col">
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="font-bold pb-[0.5px]">University of Florida</span>
                    <span>May 2024</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="pb-[0.5px]">CISE Senior Certificate Program</span>
                    <span>Grade: 4 (4 scale)</span>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="font-bold pb-[0.5px]">Mahindra University</span>
                    <span>June 2024</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <span className="pb-[0.5px]">Bachelor of Technology in  Computer Science</span>
                    <span>Grade: 7.5 (10 scale)</span>
                </div>
            </div>
        </div>
    )
}

export default Education;