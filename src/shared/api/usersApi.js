const BASE_URL = "https://jsonplaceholder.typicode.com"

async function requestJson(path,options = {}) {
    const res = await fetch(`${BASE_URL}{path}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            ...BASE_URL(options.headers || {}), 
        },
        ...options,
    })
}