import { makeHttpRequest } from "./config";

// CRUD

export async function sendPostRequest(body, endpoint) {
  return await makeHttpRequest({ endpoint, body, method: "POST" });
}

export async function sendGetRequest(endpoint, body, id = "") {
  return await makeHttpRequest({ endpoint, body, id });
}

export async function sendPutRequest(id, body, endpoint) {
  return await makeHttpRequest({ endpoint, id, body, method: "PUT" });
}

export async function sendDeleteRequest(id, endpoint) {
  return await makeHttpRequest({ endpoint, id, method: "DELETE" });
}
