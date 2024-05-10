// To select which type of problem
// Quiz, Test, Game etc

import { useState } from "react";
import { ProblemType } from "../../utils/types";
import { defaultProblemTypes } from "../../utils/constants";

export const TypeSelector = () => {
    const [selectedType, setSelectedType] = useState<ProblemType>(ProblemType.STUDY);

    const handleSelectedType = (newType: ProblemType) => {
        setSelectedType(newType);
    };

    return (
        <div className="max-w-[440px] w-full mx-auto">
            <ul className="flex items-center justify-between">
                {defaultProblemTypes.map((item, idx) => (
                    <li key={idx} onClick={() => handleSelectedType(item.value as ProblemType)}>
                        <p
                            className={`${
                                selectedType === item.value
                                    ? "text-blueMain font-bold underline-effect"
                                    : "text-[#696671] font-medium"
                            } cursor-pointer`}
                        >
                            {item.value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
