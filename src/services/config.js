export async function makeHttpRequest({ endpoint, id, body, method = "GET" }) {
  const apiUrl = `${import.meta.env.VITE_HOSTNAME_BACKEND}/api/v1/`;

  let finalUrl = id ? `${apiUrl}${endpoint}/${id}` : `${apiUrl}${endpoint}`;
  // console.log("finalUrl", finalUrl);

  const response = await fetch(`${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return { ...data, status: response.status };
}
