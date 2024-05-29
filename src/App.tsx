import { useState } from "react";
import Card from "./components/Card";

// export default function App(): React.ReactNode   {
export default function App(): JSX.Element {
  // const [text, setText]: [
  //   string,
  //   React.Dispatch<React.SetStateAction<string>>
  // ] = useState("");

  // const [text, setText] = useState<number | string>("");

  const [text, setText] = useState<string>("");

  // For Forms
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        value={text}
      />

      <br />
      {text}

      <Card name={"tarun"} age={20} />
      <Card name={"tarun"} age={20} />
      <Card name={"tarun"} type="no" />
    </div>
  );
}
