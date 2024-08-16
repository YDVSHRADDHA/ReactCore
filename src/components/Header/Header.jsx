import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// Produce the rondom number 
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {/* {} used to dynamic data  */}

      {/* Important : If-statements, for-loop, functio definitions and othe block statements are not allowed here! 
      
      Only expressions that directly produce a value. */}
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}