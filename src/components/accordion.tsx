import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Accordion = ({ title, answer }: { title: string; answer: string }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className=" bg-gradient-to-br from-[#217EEC] to-[#082299] p-[1.5px] rounded-lg ">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex gap-x-2  justify-between w-full rounded-md bg-main items-center px-6 py-4"
            >
                <span className="text-sm sm:text-base font-semibold text-[#28262C] text-start">
                    {title}
                </span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <ChevronDown
                    className={`${
                        accordionOpen ? "!rotate-180" : "rotate-0"
                    } transition-transform duration-200 ease-in-out w-4 h-4 flex-shrink-0`}
                />
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm py-0.5 ${
                    accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden text-white  text-xs sm:text-sm pl-6 pr-4">
                    {answer}
                </div>
            </div>
        </div>
    );
};
