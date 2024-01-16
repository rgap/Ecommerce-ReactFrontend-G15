const apiUrl = "http://localhost:3000/api/v1/";
// const apiUrl = "https://65360434c620ba9358ecdf3c.mockapi.io/";

const cartUrl = "https://65273be7917d673fd76d826c.mockapi.io/";

let baseUrl = "";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
  if (url != "shoppingcart") {
    baseUrl = apiUrl;
  } else {
    baseUrl = cartUrl;
  }

  let finalUrl = id ? `${baseUrl}${url}/${id}` : `${baseUrl}${url}`;

  if (method == "GET") {
    if (body && Object.keys(body).length > 0) {
      const urlObject = new URL(finalUrl);
      Object.keys(body).forEach((key) =>
        urlObject.searchParams.append(key, body[key])
      );
      finalUrl = urlObject.toString();
    }
  }

  console.log("finalUrl", finalUrl);

  const response = await fetch(`${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method !== "GET" ? JSON.stringify(body) : null,
  });

  const data = await response.json();
  return data;
}
