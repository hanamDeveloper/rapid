import { useState } from "react";

const useChangeInput = (defaultInput?: string) => {
  const [input, setInput] = useState(defaultInput || "");

  const onChange = (e: any) => {
    const { value } = e.target;

    setInput(value);
  };

  return { input, onChange, setInput };
};

export default useChangeInput;
