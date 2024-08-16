 


export default function TabButton({children, onSelect}){
   
// document.querySelector('button').addEventListener('click', ()=>{

// })
// inner functions : The advantage of defining these event handler fucntions inside the commpopent function is that hey have access o the component's props and state(covered later )
function  handleSelect() {
    console.log('Button clicked');
}
console.log('TabButton EXECUTING');

//  "Children" Prop vs "Attribute Props"
//  "Children" Prop is a special prop in React that allows you to pass a React element
//  or a collection of React elements as a prop to a component. It's used to pass
//  dynamic content to a component.
//  "Attribute Props" are props that are passed to a component as attributes, like
//  class, style, or id.
//  In this case, we're using the "Children" Prop to pass the children of the
//  TabButton component to the button element.

// using "children" 
// function TabButton({children}){
//     return <button>{children}</button>
// }

// using Attributes
// function TabButton({label}){
//     return <button>{label}</button>;
// }

// ultimately, it comes down to your use-case and personal preferences.
    return (
    <li>
    <button onSelect={handleSelect}>{children}</button>
    </li>
    );

}