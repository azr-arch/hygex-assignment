import { useState } from "react";
import { ControlBar } from "./control-bar";
import { ProblemGroundFooter } from "./problem-ground-footer";
import { ProblemSlide } from "./problem-slide";
import { TypeSelector } from "./type-selector";
import { questions } from "../../utils/constants";

export const ProblemGround = () => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

    // Go to next problem
    const goNext = () => {
        setCurrentQuestionIdx((prev) => (prev + 1) % (questions.length - 1));
    };

    // Go to previous problem
    const goPrev = () => {
        setCurrentQuestionIdx(
            (prev) => (prev - 1 + (questions.length - 1)) % (questions.length - 1)
        );
    };

    return (
        <div className="space-y-8 ">
            <TypeSelector />
            <ProblemSlide currentQuestionIdx={currentQuestionIdx} />
            <ControlBar goNext={goNext} goPrev={goPrev} currentProblemIdx={currentQuestionIdx} />

            <ProblemGroundFooter />
        </div>
    );
};
