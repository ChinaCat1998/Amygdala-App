import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
    // returns token from local storage ; used when doing API calls to server; IS ENCODED
    getToken(): string {
        const loggedUser = localStorage.getItem('id_token') || '';
        return loggedUser;
    }

    // Return decoded JWT token
    decodeToken(token: string) {
        if (token){
            try {
                const decoded: JwtPayload = jwtDecode(token);
                return decoded;
            }
            catch (error){
                console.log('Error decoding token: ', error);
                return null;
            }
        }
        return null;
    }

    // returns value that indicates if token is expired
    isTokenExpired() {
        try {
            const token = this.getToken();
            const decoded = this.decodeToken(token);
            if (decoded && decoded.exp){            // SHOULD CHECK IF DECODED TOKEN IS NOT NULL AND EXP CLAIM EXISTS
                const expTime = decoded.exp * 1000;
                if (Date.now() >= expTime){
                    localStorage.removeItem('id_token');    // REMOVE TOKEN IF EXPIRED
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        }
        catch (error){
            console.log('Error decoding token: ', error);
            localStorage.removeItem('id_token');     // REMOVE TOKEN IF ERROR
            return true;
        }
    }

    // returns value that indicates if user is logged in AND if token is not expired
    loggedIn() {
        const token = this.getToken();
        return token !== '' && !this.isTokenExpired(); 
    }

    // sets token in local storage ; redirects to home page
    login(idToken: string){
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    // removes token from local storage ; redirects to home page
    logout(){
        localStorage.removeItem('id_token');
        window.localStorage.assign('/');
    }
}

export default new AuthService();