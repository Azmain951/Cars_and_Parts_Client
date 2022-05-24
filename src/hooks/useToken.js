import React, { useEffect, useState } from 'react';

const useToken = user => {
    console.log(user)
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        console.log(email, name)
        const currentUser = {
            email
        };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('token', accessToken);
                    setToken(accessToken);
                })

        }
    }, [user]);

    return [token];
}

export default useToken;