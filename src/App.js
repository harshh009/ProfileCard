import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Header />
      <Info />
      <SkillSet />
    </div>
  );
}
function Header() {
  return (
    <>
      <div className="avatar">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E35AQEHAq92w-1tow/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726701900167?e=1738706400&v=beta&t=zxATPQETinmXS-bODM_FCxRRCwwKOXBN_JMDXpu8kD4"
          alt="myImage"
        />
      </div>
    </>
  );
}

function Info() {
  return (
    <div className="data">
      <h1>Harsh Sharma</h1>
      <p> This is my basic Informantion </p>
    </div>
  );
}
function SkillSet() {
  return (
    <div className="skill-list">
      <Skills title="web Design" emoji="😂" color="blue" />
      <Skills title="JS" emoji="'🤷‍♂️" color="red" />
      <Skills title="Git" emoji="🤧" color="green" />
      <Skills title="React" emoji="🥳" color="yellow" />
    </div>
  );
}

function Skills(props) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.title}</span>
        <span>{props.emoji}</span>
      </div>
    </>
  );
}
