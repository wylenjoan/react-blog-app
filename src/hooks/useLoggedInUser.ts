import { useEffect, useState } from "react";

function useLoggedInUser() {
    const loggedInUser = localStorage.getItem('user');

    const [user, setUser] = useState<{
        name: string,
        username: string,
    }>();

    useEffect(() => {
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, [loggedInUser]);

    return user;
}

export default useLoggedInUser;
