const mainUrl = 'http://localhost:3030';

export const login = (email, password) => {
    return  fetch(`${mainUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json());
}

export const register = (email, password) => {
    return  fetch(`${mainUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json());
}

export const logout = (accessToken)=>{
    return fetch(`${mainUrl}/users/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    });
};