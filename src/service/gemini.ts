import { GoogleGenAI } from "@google/genai";
import { impulseProjectContext } from "../constants/impulseProjectContext";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

export async function askGemini(question: string) {

  const { "Mais informações": more, "O que é o projeto": about } = impulseProjectContext

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
      **Contexto:**
      ${about}

      ${more}

      ---
      **Pergunta:**
      ${question}
      ---

      **Instrução:** Com base APENAS no contexto fornecido, responda à pergunta do usuário. Se a resposta não estiver no contexto, diga que não tem as informações para responder a aquela pergunta, ao responder, não responda como 'Com base no contexto fornecido, a resposta é...' e sim de uma forma mais amigável que soe mais natural para quem fez a pergunta.
    `,
  });

  return response.text;
}


