import { makeHttpRequest } from "./config";

// CRUD

export async function create(body, url) {
  return await makeHttpRequest({ url, body, method: "POST" });
}

export async function read(url, id = "") {
  return await makeHttpRequest({ url, id });
}

export async function update(id, body, url) {
  return await makeHttpRequest({ url, id, body, method: "PUT" });
}

export async function destroy(id, url) {
  return await makeHttpRequest({ url, id, method: "DELETE" });
}
