
export const apiFetch = (type, verb, url) => {
    return fetch(url)
        .then(tasksResponse => tasksResponse.json())
        .then(result => {
            return {
                type: type.SUCCESS,
                todos: result
            }
        })
        .catch(error => {
            return {
                type: type.ERROR,
                error
            }
        });

    
}