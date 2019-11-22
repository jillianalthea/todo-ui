
export const apiFetch = (type, verb, url) => {
    return fetch(url, {method: verb })
        .then(tasksResponse => tasksResponse.json())
        .then(result => {
            return {
                type: type.SUCCESS,
                todos: result
            }
        })
        .catch(error => {
            console.log('error? ', error);
            return {
                type: type.FAILURE,
                error
            }
        });
}

export const apiFetchWithBody = (type, verb, url, data = null) => {
    console.log(JSON.stringify(data));
    return fetch(url, 
        {
            method: verb, 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(tasksResponse => tasksResponse.json())
        .then(result => {
            return {
                type: type.SUCCESS,
                todos: result
            }
        })
        .catch(error => {
            console.log('error? ', error);
            return {
                type: type.FAILURE,
                error
            }
        });
}