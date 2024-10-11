// import auth from '../utils/auth'; // may not be needed
import { UserData } from '../interfaces/UserData';

// should be the only function we need as username, userId can be grabbed later if needed from token payload
// function that calls /api/users endpoint to create a new user
const createUser = async (body: UserData) => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'      // not using token for authorization here...
            },
            body: JSON.stringify(body)
        })
        const data = response.json();

        if (!response.ok){
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    }
    catch (error){
        console.log('Error creating user: ', error);
        return Promise.reject('Could not create user'); 
    }
}

export { createUser };