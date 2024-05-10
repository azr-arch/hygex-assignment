import { Home, ChevronRight } from "lucide-react";

/** 
 * At present, this component is populated with static or 'dummy' data. 
 * It's designed to display a breadcrumb navigation for the 'Flashcard' > 'Mathematics' > 'Relation and Function' path.
 * However, this is not its final functionality. In the future, it can be updated to dynamically generate breadcrumbs based on URL parameters. 
 * This would be achieved using the 'react-router-dom' library.
 * This dynamic functionality has not been implemented yet as it was not explicitly required in the assignment brief. But it's entirely feasible to add this feature if needed.

 * Please note that other functionalities related to this component are also not yet implemented for the same reason.
**/

export const BreadCrumbs = () => {
    return (
        <div className="w-full my-8 flex items-center gap-x-2">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-3 h-3" />
            <p className="text-xs text-secondary truncate">Flashcard</p>
            <ChevronRight className="w-3 h-3" />
            <p className="text-xs text-secondary truncate">Mathematics</p>
            <ChevronRight className="w-3 h-3" />
            <p className="text-xs text-blueMain font-semibold truncate">Relation and Function</p>
        </div>
    );
};
