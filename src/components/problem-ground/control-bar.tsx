import { RotateCw, ChevronLeft, ChevronRight, Scan } from "lucide-react";

export const ControlBar = () => {
    return (
        <div className="max-w-[612px] flex items-center justify-between mx-auto">
            <button className="w-8 h-8 flex items-center justify-center">
                <RotateCw className="text-blueMain" />
            </button>

            <div className="flex items-center gap-x-4 md:gap-x-8">
                <div className="bg-gradient-to-b from-gradient_start to-gradient_stop text-white w-7 sm:w-[50px] aspect-square flex items-center justify-center rounded-full">
                    <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8" />
                </div>

                <p className="text-[#202B37] font-bold text-sm sm:text-lg md:text-xl">01/10</p>

                <div className="bg-gradient-to-b from-gradient_start to-gradient_stop text-white w-7 sm:w-[50px] aspect-square flex items-center justify-center rounded-full">
                    <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8" />
                </div>
            </div>

            <button className="w-8 h-8 flex items-center justify-center">
                <Scan className="text-blueMain" />
            </button>
        </div>
    );
};
