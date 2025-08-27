import { useState } from "react"
import { askGemini } from "../service/gemini";

export const useAiQueryField = (cleanInput: () => void) => {
  const [aiResponse, setAiResponse] = useState("Tire aqui suas dúvidas sobre o programa Impulse!");
  // const [userQuestion, setUserQuestion] = useState("");

  async function handleFormSubmit(e: React.FormEvent, input: HTMLInputElement | null) {
    e.preventDefault()

    if (!input) return;

    const userQuestion = input.value;

    const response = await askGemini(userQuestion)

    response && setAiResponse(response);
    cleanInput();
  }


  return { aiResponse, handleFormSubmit }

}
