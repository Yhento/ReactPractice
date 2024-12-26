import "./App.css";

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

function App() {
  return (
    <div className="card">
      <Avatar image="./output.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ image }) {
  return <img className="avatar" src={image} alt="Stick Guy" />;
}

function Intro() {
  return (
    <div>
      <h1>Tyler Payne</h1>
      <p>
        An IT Guy that is at Western State Hospital. He does the best he can
        everyday!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        );
      })}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

export default App;
