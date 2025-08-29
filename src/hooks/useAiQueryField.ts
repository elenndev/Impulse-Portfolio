import { useState } from "react"
import { askGemini } from "../service/gemini";

export const useAiQueryField = (cleanInput: () => void) => {
  const [aiResponse, setAiResponse] = useState("Tire aqui suas dúvidas sobre o programa Impulse!");

  async function handleFormSubmit(e: React.FormEvent, input: HTMLTextAreaElement | null) {
    e.preventDefault()

    if (!input) return;

    setAiResponse("Analisando pergunta...")

    const userQuestion = input.value;

    const response = await askGemini(userQuestion)

    response && setAiResponse(response);
    cleanInput();
  }


  return { aiResponse, handleFormSubmit }

}
