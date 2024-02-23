import { useState, useEffect } from 'react';

const useIsElementOnScreen = (ref) => {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const checkIsOnScreen = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isVisible =
                rect.top >= 0 && rect.bottom <= window.innerHeight;
            setIsOnScreen(isVisible);
        }
    };

    useEffect(() => {
        checkIsOnScreen();
        const scrollHandler = () => {
            checkIsOnScreen();
        };
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [ref]);

    return isOnScreen;
};

export default useIsElementOnScreen;