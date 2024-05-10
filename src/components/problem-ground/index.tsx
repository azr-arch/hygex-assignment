import { ControlBar } from "./control-bar";
import { ProblemGroundFooter } from "./problem-ground-footer";
import { ProblemSlide } from "./problem-slide";
import { TypeSelector } from "./type-selector";

export const ProblemGround = () => {
    return (
        <div className="space-y-8 ">
            <TypeSelector />
            <ProblemSlide />
            <ControlBar />

            <ProblemGroundFooter />
        </div>
    );
};
