export async function makeHttpRequest({ endpoint, id, body, method = "GET" }) {
  const apiUrl = `${import.meta.env.VITE_HOSTNAME_BACKEND}/api/v1/`;

  let finalUrl = id ? `${apiUrl}${endpoint}/${id}` : `${apiUrl}${endpoint}`;
  // console.log("finalUrl", finalUrl);

  try {
    const response = await fetch(`${finalUrl}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, // Include the Bearer token in every request
      },

      body: method !== "GET" ? JSON.stringify(body) : undefined, // Only include body for methods that use it
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorBody = await response.json();
      return { error: true, ...errorBody, status: response.status };
    }

    const data = await response.json();
    return { ...data, status: response.status };
  } catch (error) {
    // Handle network errors or other fetching issues
    console.error("HTTP Request failed", error);
    return { error: true, message: "Network error or unable to fetch data", status: 0 };
  }
}
