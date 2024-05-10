import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../utils/constants";

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <div className="block md:hidden ">
            <button onClick={isOpen ? closeNav : openNav}>
                <Menu className="w-5 h-5" />
            </button>

            <div
                data-state={isOpen}
                className="fixed top-0 right-0 z-50 w-screen h-screen  bg-black/80 data-[state=true]:opacity-100 data-[state=false]:opacity-0 data-[state=false]:-z-10 transition-all duration-200 ease-in-out"
            >
                <button
                    onClick={isOpen ? closeNav : openNav}
                    className="absolute top-6 right-4 z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <ul
                    data-state={isOpen}
                    className="w-1/3 float-right h-full bg-main flex flex-col gap-y-6 items-start pt-12 pl-6 data-[state=true]:animate-in data-[state=false]:animate-out data-[state=false]:-z-10 transition-all duration-200 ease-in-out"
                >
                    {navItems.map((item, idx) => (
                        // This could be extracted into separate component
                        <li key={idx}>
                            <a
                                href={item.href}
                                className="text-secondary hover:text-secondary/70 transition  font-medium "
                            >
                                {item.value}
                            </a>
                        </li>
                    ))}

                    {/* Login Button */}
                    <button className="  text-blueMain font-medium">Login</button>
                </ul>
            </div>
        </div>
    );
};
