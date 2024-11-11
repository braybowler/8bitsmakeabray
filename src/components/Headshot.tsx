import {useTheme} from "../providers/ThemeContext.tsx";

const Headshot = () => {
    //@ts-ignore
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? "frame-dark" : "frame"}`}>
            <img
                src="../images/8-bit-headshot.webp"
                alt="Brayden Bowler 8-bit themed headshot"
                className="w-[300px] h-[325px] rounded"
            />
        </div>
    )
}

export default Headshot