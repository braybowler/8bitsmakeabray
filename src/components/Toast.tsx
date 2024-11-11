import {useEffect, useRef, useState} from 'react';

//@ts-ignore
const Toast = ({message, onClose}) => {
    const [isVisible, setIsVisible] = useState(true);
    const toastRef = useRef(null);

    useEffect(() => {
        //@ts-ignore
        function handleClickOutside(event) {
            //@ts-ignore
            if (toastRef.current && !toastRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [onClose])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 2000);
        return () => clearTimeout(timer)
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className="toast-overlay">
            <div ref={toastRef} className="animate-slideInOut left-1/2 transform -translate-x-1/2 bg-slate-50 dark:bg-black text-purple-400 dark:text-green-400 font-press-start p-4 m-2 sm:m-4 shadow-8bit shadow-purple-400 dark:shadow-green-400 z-50">
                {message}
            </div>
        </div>
    )
}

export default Toast