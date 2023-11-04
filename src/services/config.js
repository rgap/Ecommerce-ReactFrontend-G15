const loginUrl = "https://65360434c620ba9358ecdf3c.mockapi.io/";

const cartUrl = "https://65273be7917d673fd76d826c.mockapi.io/";

let baseUrl = "";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
  if (url != "shoppingcart") {
    baseUrl = loginUrl;
  } else {
    baseUrl = cartUrl;
  }

  const finalUrl = id ? `${url}/${id}` : url;

  console.log(`${baseUrl}${finalUrl}`);

  const response = await fetch(`${baseUrl}${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}
