import Introduction from "./Introduction.tsx";
import WizardSprite from "../components/WizardSprite.tsx"
import About from "./About.tsx";

const Home = () => {
    return (
        <div className="mt-6 space-y-4">
            <section id="introduction" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col md:flex-row gap-4">
                    <WizardSprite></WizardSprite>
                    <Introduction></Introduction>
                </div>
            </section>
            {/*<section id="about" className="flex flex-row w-full justify-center align-middle">*/}
            {/*    <div className="relative flex flex-col md:flex-row gap-4">*/}
            {/*        <WizardSprite></WizardSprite>*/}
            {/*        <About></About>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section id="projects" className="flex flex-row w-full justify-center align-middle">*/}
            {/*    <div className="relative flex flex-col md:flex-row gap-4">*/}
            {/*        <WizardSprite></WizardSprite>*/}
            {/*        <Introduction></Introduction>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section id="contact" className="flex flex-row w-full justify-center align-middle">*/}
            {/*    <div className="relative flex flex-col md:flex-row gap-4">*/}
            {/*        <WizardSprite></WizardSprite>*/}
            {/*        <Introduction></Introduction>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
};
export default Home;