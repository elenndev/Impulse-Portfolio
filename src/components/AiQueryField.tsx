import { useRef } from "react"
import { useAiQueryField } from "../hooks/useAiQueryField"

export const AiQueryField = () => {
  const { aiResponse, handleFormSubmit } = useAiQueryField(cleanInput);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const isLoading = aiResponse === "Analisando pergunta..."

  function cleanInput() {
    if (!inputRef?.current) return;

    inputRef.current.value = "";
  }

  return (
    <section id="queryField" className="white-shadow-sm mx-auto mb-[8rem] mt-2 flex flex-col py-4 justify-center items-center w-full bg-[#0000002e] backdrop-blur-sm rounded-3xl">
      <div className="aiField w-[90%] md:w-3/4 text-center mb-2">{aiResponse}</div>
      <form className="userField flex flex-row gap-2"
        onSubmit={(e) => handleFormSubmit(e, inputRef.current)}>
        <textarea
          ref={inputRef}
          minLength={5} required
          className="w-[90%] rounded-3xl border border-white bg-[#0000002e] pl-2 pt-2 flex items-center" />
        <button
          className="rounded-3xl white-shadow-sm disabled:opacity-60"
          type="submit"
          disabled={isLoading}>
          Perguntar
        </button>
      </form>
    </section>
  )
}
