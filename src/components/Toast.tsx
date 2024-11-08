import { useEffect } from 'react';

//@ts-ignore
const Toast = ({message, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <div className="fixed bottom-2 w-full flex justify-center items-center p-2">
            <div className="animate-slideInOut left-1/2 transform -translate-x-1/2 bg-slate-50 dark:bg-black text-purple-400 dark:text-green-400 font-press-start p-4 shadow-8bit shadow-purple-400 dark:shadow-green-400 z-50">
                {message}
            </div>
        </div>
    )
}

export default Toast