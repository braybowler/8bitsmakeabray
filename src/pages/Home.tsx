import About from "./About.tsx";
import WizardSprite from "../components/WizardSprite.tsx"

const Home = () => {
    return (
        <div className="mt-4">
            <section id="about" className="flex flex-row w-full justify-center align-middle">
                <div className="relative flex flex-col md:flex-row gap-4">
                    <WizardSprite></WizardSprite>
                    <About></About>
                </div>
            </section>
        </div>
    );
};
export default Home;