import Introduction from "./Introduction.tsx";
import WizardSprite from "../components/WizardSprite.tsx"
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import Headshot from "../components/Headshot.tsx";

const Home = () => {
    return (
        <div className="mt-6 space-y-4">
            <section id="introduction" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col lg:flex-row gap-4">
                    <WizardSprite></WizardSprite>
                    <Introduction></Introduction>
                </div>
            </section>
            <div className="flex items-center w-full">
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
                </div>
            <section id="about" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col lg:flex-row gap-4">
                    <About></About>
                    <Headshot></Headshot>
                </div>
            </section>
            <div className="flex items-center w-full">
                <div
                    className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
            </div>
            <section id="projects" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col md:flex-row gap-4">
                    <Projects></Projects>
                </div>
            </section>
            <div className="flex items-center w-full">
                <div
                    className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
            </div>
            <section id="contact" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col md:flex-row gap-4">
                    <Contact></Contact>
                </div>
            </section>
        </div>
    );
};
export default Home;