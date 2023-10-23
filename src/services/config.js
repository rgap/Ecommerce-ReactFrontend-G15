const baseUrl = "https://65360434c620ba9358ecdf3c.mockapi.io/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
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
