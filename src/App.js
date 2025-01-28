import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
// OLOD WAY OF USING PROPS USINF OBJECT TO STORE PROPS DETAILS
// function SkillSet() {
//   return (
//     <div className="skill-list">
//       <Skills title="web Design" emoji="😂" color="blue" />
//       <Skills title="JS" emoji="'🤷‍♂️" color="red" />
//       <Skills title="Git" emoji="🤧" color="green" />
//       <Skills title="React" emoji="🥳" color="yellow" />
//     </div>
//   );
// }
function SkillSet() {
  return (
    <ul className="skill-list">
      {skills.map((s) => (
        <Skills key={1} sObj={s} />
      ))}
    </ul>
  );
}

function Skills(props) {
  let level = props.sObj.level;
  if (level === "advanced") level = "😘";
  if (level === "intermediate") level = "🤧";
  if (level === "beginner") level = "😂";
  return (
    <>
      <l1 className="skill" style={{ backgroundColor: props.sObj.color }}>
        <h2>{props.sObj.skill}</h2>
        <span>{level}</span>
      </l1>
    </>
  );
}
