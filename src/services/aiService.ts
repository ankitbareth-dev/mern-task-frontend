const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface AskAIResponse {
  success: boolean;
  data: {
    response: string;
  };
}

export const generateAIResponse = async (prompt: string): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/api/ask-ai`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`,
    );
  }

  const result: AskAIResponse = await response.json();

  if (result.success && result.data && result.data.response) {
    return result.data.response;
  } else {
    throw new Error("Invalid response format from server");
  }
};
