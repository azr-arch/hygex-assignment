/**
 * NOTE :
 * Currently, this component is populated with static or 'dummy' data.
 * Interactive features have not been implemented because they were not specifically required in the assignment description.
 * However, if necessary, I can implement them within a few hours!
 **/

import { BreadCrumbs } from "./components/bread-crumbs";
import { FAQ } from "./components/faq-section";
import { Header } from "./components/header";
import { Hero } from "./components/hero-section";
import { LayoutContainer } from "./components/layout-container";

function App() {
    return (
        <div className="w-full min-h-screen bg-main">
            <LayoutContainer>
                <Header />
                <BreadCrumbs />

                <Hero />
                <FAQ />
            </LayoutContainer>
        </div>
    );
}

export default App;
