import {useTheme} from "../providers/ThemeContext.tsx";

const WizardSprite = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="flex justify-center align-middle ">
            <img
                src={isDarkMode ? "../../public/images/necromancer.webp" : "../../public/images/wizard.webp"}
                alt="8-bit red wizard"
                className="wizard-sprite-glow w-auto h-[300px] border-2 border-purple-400 dark:border-green-400 rounded-lg"
            />
        </div>
    )
}

export default WizardSprite