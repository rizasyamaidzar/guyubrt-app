// api.js

const API_URL = "http://127.0.0.1:8000/api"; // Change this to your API base URL

const checkResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Network response was not ok");
  }
  return response.json();
};

export const apiFetch = async (endpoint, method = "GET", data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data); // Add request body if data is provided
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);
  return checkResponse(response);
};
