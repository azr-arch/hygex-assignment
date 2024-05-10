import { Plus } from "lucide-react";

export const ProblemGroundFooter = () => {
    return (
        <div className="flex items-center w-full py-4">
            <button className="ml-auto flex items-center gap-x-2 text-blueMain font-semibold">
                <div className="w-[45px] flex items-center justify-center  aspect-square rounded-full  bg-gradient-to-b from-gradient_start to-gradient_stop text-white">
                    <Plus className="w-6 h-6" />
                </div>
                Create Flashcard
            </button>
        </div>
    );
};
