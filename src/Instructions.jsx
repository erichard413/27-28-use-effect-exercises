import React from "react";

function Instructions() {
  return (
    <div className="Instructions">
      <h2>Instructions: Before Getting Started</h2>
      <p>
        This project is a bit different since the starting code is a fully
        working React application. All you need to do is run npm i and npm run
        dev to install all dependencies and run the application. You will notice
        that this code looks nearly identical to the previous project. The only
        change is I added a button that will toggle between hiding and showing
        the Child component. This is just there to help us test mounting and
        unmounting of our component.
      </p>
      <h3>Instructions</h3>
      <p>
        The following exercises should all be performed within the Child
        component.
      </p>
      <ul>
        <li>console.log the text Render each time the component re-renders</li>
        <li>console.log the text Hi when the component mounts</li>
        <li>
          console.log the text My name is 'name' and I am 'age' years old
          whenever the name or age changes
        </li>
        <li>
          Update the document.title to be equal to name whenever the name
          changes
        </li>
        <li>BONUS: console.log the text Bye when the component unmounts</li>
        <li>
          BONUS: Create a timeout that console.logs the text My name is {name}{" "}
          only after there has been a 1 second delay since the last time the
          name was changed. For example, if I change the name from Kyle to Kyl
          and then to Ky without having more than 1 second between each name
          change the console should log nothing until 1 second after I finishing
          changing the name to Ky and then it will log Ky. If instead there as
          greater than 1 second delay between each change, it should log Kyl and
          then Ky. Each of those logs would happen exactly 1 second after the
          name was changed.
        </li>
      </ul>
    </div>
  );
}

export default Instructions;
