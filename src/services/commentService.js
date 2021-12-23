const mainUrl = 'http://localhost:3030/data';

export const getAllComments = (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    return fetch(`${mainUrl}/commentRecipes?where=${query}`).then(res => res.json())
}

export const createComment = (comment, recipeId, token) => {
    return fetch(`${mainUrl}/commentRecipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            comment,
            recipeId
        })
    }).then(res => res.json());
}