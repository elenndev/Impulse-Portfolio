import { useRef } from "react"
import { useAiQueryField } from "../hooks/useAiQueryField"

export const AiQueryField = () => {
  const { aiResponse, handleFormSubmit } = useAiQueryField();
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <div className="aiField">{aiResponse}</div>
      <form className="userField"
        onSubmit={(e) => handleFormSubmit(e, inputRef.current)}>
        <input ref={inputRef} type="text" minLength={5} required />
        <button type="submit">Perguntar</button>
      </form>
    </div>
  )
}
