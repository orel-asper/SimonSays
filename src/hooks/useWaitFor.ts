import { useEffect } from "react";

const useWaitFor = (condition: boolean, callback: () => void) => {
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const waitFor = () => {
            if (condition) {
                callback();
            } else {
                timeout = setTimeout(waitFor, 100);
            }
        };
        waitFor();
        return () => clearTimeout(timeout);
    }, [condition]);
};

export default useWaitFor;
