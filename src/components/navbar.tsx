import { navItems } from "../utils/constants";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
    return (
        <nav>
            <ul className="hidden md:flex items-center gap-x-10">
                {navItems.map((item, idx) => (
                    // This could be extracted into separate component
                    <li key={idx}>
                        <a
                            href={item.href}
                            className="text-secondary hover:text-secondary/70 transition text-sm font-medium 2xl:text-lg"
                        >
                            {item.value}
                        </a>
                    </li>
                ))}

                {/* Login Button */}
                <button className="bg-gradient-to-b from-gradient_start to-gradient_stop text-white rounded-full px-10 py-3 text-sm font-medium">
                    Login
                </button>
            </ul>

            <MobileNav />
        </nav>
    );
};
