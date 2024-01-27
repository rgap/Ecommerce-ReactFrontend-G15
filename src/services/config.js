const apiUrl = "https://ecommerce-nodebackend-g15.onrender.com/api/v1/";
// const apiUrl = "http://localhost:3000/api/v1/";

export async function makeHttpRequest({ endpoint, id, body, method = "GET" }) {
  console.log(apiUrl);

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
