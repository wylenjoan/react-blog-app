import { useEffect, useState } from "react";

function useToken() {
    const storageToken = localStorage.getItem('usertoken');

    const [token, setToken] = useState<string>('');

    useEffect(() => {
        if (storageToken) {
            setToken(storageToken);
        }
    }, [storageToken]);

    return token;
}

export default useToken;
