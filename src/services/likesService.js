const mainUrl = 'http://localhost:3030/data';

export const likeRecipe = (userId, recipeId, token) => {
    return fetch(`${mainUrl}/likeRecipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({
            userId,
            recipeId
        })
    }).then(res => res.json())
}

export const getRecipeLikes = (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    return fetch(`${mainUrl}/likeRecipes?where=${query}`).then(res => res.json()).then(res => res.map(x => x.userId));
}

export const getLikesByUserId = (userId) => {
    const query = encodeURIComponent(`userId="${userId}"`);
    return fetch(`${mainUrl}/likeRecipes?where=${query}`).then(res => res.json()).then(res => res.map(x => x.recipeId));
}