// import React from 'react';
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
// import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";

export default function App() {
  const [selectedTopic, setselectedTopic] = useState('components');


  function handleSelect(selectedButton){
    // selectedButton => 'components' , 'jsx', 'props', 'state'
    setselectedTopic(selectedButton);
   console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg} //Dynamic input
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} //Dynamic input
            />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} //Dynamic input
            />
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => setselectedTopic("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => setselectedTopic("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => setselectedTopic("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => setselectedTopic("state")}>
              States
            </TabButton>
          </menu>
          {/* Dynamic Content */}
          {/* Because you must handle the Event in the component that as manages the data that shoud be changed (i.e. the Dynamic Content" That shoud be dispayed in this case). */}

          {/* {selectedTopic} */}
          {/* {!selectedTopic ? <p>select topic </p> : (
               ) }
                 {!selectedTopic ?   : null} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}


































// Reacting to Events

// Your task is to work on a "User Login" component that has already been prepared by a colleague.

// The goal is to update the data stored in the already existing user object with some dummy data once the "Login" button in the App component is pressed.

// The email and password properties in the user object should be set to any non-empty string values of your choice. The loggedIn field should be set to true.

// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
// export const user = {
//   email: '',
//   password: '',
//   loggedIn: false,
// };

// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
// function App() {
//     function handleClick(){
//         user.email="xyz";
//         user.password="xyz";
//         user.loggedIn=true;
//     }
//   return (
//     <div id="app">
//       <h1>User Login</h1>
//       <p>
//         <label>Email</label>
//         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
//         <input type="email" />
//       </p>

//       <p>
//         <label>Password</label>
//         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
//         <input type="password" />
//       </p>

//       <p id="actions">
//         <button onClick={handleClick}>Login</button>
//       </p>
//     </div>
//   );
// }

// export default App;

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// practices sections

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

// export function MainGoal() {
//     return <p>My main goal: Learn React from the ground up.</p>;
// }
// // Component
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice!</h1>
//       <p>
//         Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
//         text.
//       </p>
//       <p>
//         Your <code>&lt;MainGoal&gt;</code> component should simply output some
//         text that describes your main course goal (e.g., &quot;My main goal:
//         Learn React in great detail&quot;).
//       </p>
//       <p>
//         <strong>Important:</strong> You custom component must contain the text
//         &quot;My main goal:&quot;
//       </p>
//       <p>
//         <strong>Also important:</strong> For the automatic checks to succeed,
//         you <strong>must export</strong> your custom component function! Not as
//         a default but simply by adding the <code>export</code> keyword in front
//         of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
//         ).
//       </p>
//       {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
//       {/* OUTPUT YOUR COMPONENT HERE */}
//       <MainGoal/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// export const userData = {
//   firstName: 'Maximilian', // feel free to replace the name value
//   lastName: 'Schwarzmüller', // feel free to replace the name value
//   title: 'Instructor', // feel free to replace the title value
// };

// // Edit the User component code to output the userData data
// export function User() {
//   return (
//     <div id="user" data-testid="user">
//       <h2>
//         {userData.firstName}{userData.lastName}
//       </h2>
//       <p>{userData.title}</p>
//     </div>
//   );
// }

// // DON'T edit the App component code
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice</h1>
//       <p>Welcome on board of this course! You got this 💪</p>
//       <User />
//     </div>
//   );
// }

// export default App;

// Using & Outputting Dynamic Values [Core Concept]
// ===============================================
// 43. Setting HTML Attributes Dynamically & Loading Image Files ---  import namefro the iamges from assests
// Static adn Dyanamic content

// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// // Produce the rondom number
// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// function Header() {
//   const description = reactDescriptions[genRandomInt(2)];
//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//       {/* {} used to dynamic data  */}

//       {/* Important : If-statements, for-loop, functio definitions and othe block statements are not allowed here!

//       Only expressions that directly produce a value. */}
//         {description} React concepts you will need for almost any app you are going to build!
//       </p>
//     </header>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header/>
//       {/* You Can Reuse React Components But You Don't Have To! */}
//       {/* <Header/>
//       <Header/> */}
//       {/* Components Can Potentiay Be Reused */}
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;

// Outputting Dynamic Content

// Outputting Dynamic Content
// Your task is to fill the already existing User component with some life! You should output the user's first name and last name (stored in the also already existing userData object) inside of the User component's <h2> element.

// In addition, you should output the title (also stored in userData) in the <p> element inside the User component.

// You're not allowed to copy & paste the values into the component.

// import React from 'React';
// export const userData = {
//   firstName: 'Shradda',
//   lastName: 'Yadav',
//   title: 'Software Engineer'
// };
// // Edit the User component code to output the userData data
// export function User(){
//   return(
//     <div id="user" data-testid="user">
//       <h2>
//         {userData.firstName}{userData.lastName}
//       </h2>
//       <p>{userData.title}</p>
//     </div>
//   );
// }

// // Don't edit the App component code

// function App(){
//   return(
//     <div id = "app">
//      <h1>Time to Practice</h1>
//      <p>Welcome on board of this course! You got this 💪</p>
//      <User/>
//     </div>
//   );
// }

// export default App;

// 44. Making Components Reusable with Props [Core Concept]
// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// // Produce the rondom number
// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// function Header(){
//   const description = reactDescriptions[genRandomInt(2)];
//   return (
//     <header>
//       <img src={reactImg} alt="tom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are going to build!
//       </p>
//     </header>
//   )
// }

// // props to data pass

// function CoreConcept(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// function App(){
//   return (
//     <div>
//       <Header/>
//       <main>
//       <section id="core-concepts">
//         <h2>Core Concepts</h2>
//         <ul>
//           <CoreConcept
//           title = "Components"
//           description = "The core UI building block - compose the user interface by combining multiple components."
//           image = {componentsImg}     //Dynamic input
//            />
//          <CoreConcept
//           title = {CORE_CONCEPTS[1].title}
//           description = {CORE_CONCEPTS[1].description}
//           image = {CORE_CONCEPTS[1].image}     //Dynamic input
//            />

//           <CoreConcept
//           {...CORE_CONCEPTS[2]}
//            />

//           <CoreConcept
//           title = {CORE_CONCEPTS[3].title}
//           description = {CORE_CONCEPTS[3].description}
//           image = {CORE_CONCEPTS[3].image}     //Dynamic input
//            />
// </ul>
//       </section>
//         {/* <h2>Time to get started!</h2> */}
//       </main>
//     </div>
//   )
// }

// export default App;

// tssk time

// Working with Props
// Your task is to make the CourseGoal component reusable / configurable. It should accept a "title" and a "description" input and output the received data between the <h2> (title) and <p> (description) tags.

// The App component should then render at least two instances of the CourseGoal component.

// One of those CourseGoal components must receive a title of "Learn React" and a description of "In-depth". The other titles and descriptions are entirely up to you.

// export  function CourseGoal ({title,description}){  // object destructive way

//   return(
//     <li>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </li>
//   )

// }

// function App(){
//   return(
//     <div id="app" data-testid>
//       <h1>Time To Practice</h1>
//       <p>One course, many goals! 🎯</p>
//        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
//       <ul>
//        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
//         <CourseGoal
//           title="Learn React"
//           description="In-depth"
//         />
//         <CourseGoal
//           title="Learn JavaScript"
//           description="In-depth"
//         />

//       </ul>
//     </div>
//   )
// }
// export default App;
