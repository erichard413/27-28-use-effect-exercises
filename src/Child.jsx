import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  //re-renders
  useEffect(() => {
    console.log("Render");
  });
  //mounts
  useEffect(() => {
    console.log("Hi");
  }, []);
  //update
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);
  // //name update
  // useEffect(() => {
  //   document.title = name;

  //   return () => {
  //     console.log("Bye");
  //   };
  // });

  useEffect(() => {
    document.title = name;

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}

// console.log the text Render each time the component re-renders
// console.log the text Hi when the component mounts
// console.log the text My name is 'name' and I am 'age' years old whenever the name or age changes
// Update the document.title to be equal to name whenever the name changes
// BONUS: console.log the text Bye when the component unmounts
// BONUS: Create a timeout that console.logs the text My name is only after there has been a 1 second delay since the last time the name was changed. For example, if I change the name from Kyle to Kyl and then to Ky without having more than 1 second between each name change the console should log nothing until 1 second after I finishing changing the name to Ky and then it will log Ky. If instead there as greater than 1 second delay between each change, it should log Kyl and then Ky. Each of those logs would happen exactly 1 second after the name was changed.
