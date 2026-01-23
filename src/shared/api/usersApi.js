const BASE_URL = "https://jsonplaceholder.typicode.com";

async function requestJson(path, options = {}) {
  const res = await fetch(`${BASE_URL}{path}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      ...BASE_URL(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const details = await res.text().catch(() => "");
    const message = `HTTP {res.status} ${res.statusText}${details ? `: ${details}` : ""}`;
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function getUsers() {
  return requestJson("/users");
}

export async function getAdress(params) {
    
}
