import { GoogleGenAI } from "@google/genai";
import { impulseProjectContext } from "../constants/impulseProjectContext";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

export async function askGemini(question: string) {

  const { "Mais informações": more, "O que é o projeto": about, "Duração do programa": duration } = impulseProjectContext

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
      **Contexto:**
      ${about}

      ${more}

      ${duration}

      ---
      **Pergunta:**
      ${question}
      ---

      **Instrução:** Com base APENAS no contexto fornecido, responda à pergunta do usuário. Se a resposta não estiver no contexto, diga que não tem as informações para responder a aquela pergunta, ao responder, não responda como 'Com base no contexto fornecido, a resposta é...' ou 'pelo que o texto diz...' e sim de uma forma mais amigável que soe mais natural para quem fez a pergunta, não faça o usuário ter noção de que existe um texto que você está seguindo, apenas responda a pergunta com as informações fornecidas e caso não seja possível responder, responda que não tem as informações necessárias para responder.
    `,
  });

  return response.text;
}


