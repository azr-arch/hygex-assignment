import { Logo } from "./logo";
import { Navbar } from "./navbar";

export const Header = () => {
    return (
        <header className=" w-full px-8 2xl:px-[102px]  py-8 flex items-center justify-between">
            <Logo />
            <Navbar />
        </header>
    );
};
