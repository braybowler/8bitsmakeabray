import About from "./About.tsx";
import WizardSprite from "../components/WizardSprite.tsx"

const Home = () => {
    return (
        <div className="mt-4">
            <section id="about" className="flex flex-row w-full">
                <div className="relative flex flex-row">
                    <WizardSprite></WizardSprite>
                    <About></About>
                </div>
            </section>
        </div>
    );
};
export default Home;