import { FC } from "react";

interface SubheadingProps {
    title: string;
}

const Subheading:FC<SubheadingProps> = ({title}) => {
    return (
        <div className="w-full border-b-[1px] border-black pt-2 text-base">
            <span>{title}</span>
        </div>
    )
}

export default Subheading;