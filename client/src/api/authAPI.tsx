interface UserLogin {
    username: string | null;
    password: string | null;
}

const login = async (userInfo: UserLogin) => {
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        });

        if (!response.ok){
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error from user login: ', error);
        return Promise.reject('Could not login user');
    }
}

export { login };