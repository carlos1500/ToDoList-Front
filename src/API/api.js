const Api = {
    apiUrl: "https://todolist-backend-cb.herokuapp.com/",
    

    fetchGetAll: () => fetch(Api.apiUrl),

    fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),

    fetchPost: (todo) => {
        return fetch(Api.apiUrl+"/add", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json" }),
            body: JSON.stringify(todo)
        });
    },

    fetchPut: (tarefa, id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(tarefa),
        });
    },

    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/${id}`, {
            method: "DELETE",
        });
    },
};

export default Api;