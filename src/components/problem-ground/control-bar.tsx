import { RotateCw, ChevronLeft, ChevronRight, Scan } from "lucide-react";
import { addLeadingZero } from "../../utils/util";
import { questions } from "../../utils/constants";

interface ControlBarProps {
    goNext: () => void;
    goPrev: () => void;
    currentProblemIdx: number;
}

export const ControlBar = ({ goNext, goPrev, currentProblemIdx }: ControlBarProps) => {
    return (
        <div className="max-w-[612px] flex items-center justify-between mx-auto">
            <button className="w-8 h-8 flex items-center justify-center">
                <RotateCw className="text-blueMain" />
            </button>

            <div className="flex items-center gap-x-4 md:gap-x-8 select-none">
                <button
                    onClick={goPrev}
                    className=" bg-gradient-to-b hover:outline hover:outline-black transition-all duration-100 ease-in-out from-gradient_start to-gradient_stop text-white w-7 sm:w-[50px] aspect-square flex items-center justify-center rounded-full"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8" />
                </button>

                <p className="text-[#202B37] font-bold text-sm sm:text-lg md:text-xl flex-grow-0 flex-shrink-0 ">
                    {addLeadingZero(currentProblemIdx + 1)} / {addLeadingZero(questions.length - 1)}
                </p>

                <button
                    onClick={goNext}
                    className="bg-gradient-to-b hover:outline hover:outline-black transition-all duration-100 ease-in-out from-gradient_start to-gradient_stop text-white w-7 sm:w-[50px] aspect-square flex items-center justify-center rounded-full"
                >
                    <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8" />
                </button>
            </div>

            <button className="w-8 h-8 flex items-center justify-center">
                <Scan className="text-blueMain" />
            </button>
        </div>
    );
};
