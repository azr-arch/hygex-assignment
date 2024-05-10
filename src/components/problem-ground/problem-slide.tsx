import { questions } from "../../utils/constants";
import { getRandomInt } from "../../utils/util";
import { useState } from "react";

import { Lightbulb, Volume2 } from "lucide-react";

export const ProblemSlide = () => {
    const [currentQuestion, setCurrentQuestion] = useState(
        questions[getRandomInt(0, questions.length - 1)]
    );

    return (
        <div className="max-w-[712px] w-full mx-auto">
            <div className="w-full h-[393px] rounded-3xl flex items-center justify-center relative problem-card">
                <p className="text-[5vw] sm:text-[38px] font-bold tracking-widest text-white select-none">
                    {currentQuestion?.question}
                </p>

                {/* Hint button */}
                <button className="absolute top-7 left-7 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-150 ease-in hover:bg-white/20">
                    <Lightbulb className="w-6 h-6" />
                </button>

                {/* Mute Button */}
                <button className="absolute top-7 right-7 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-150 ease-in hover:bg-white/20">
                    <Volume2 className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};
