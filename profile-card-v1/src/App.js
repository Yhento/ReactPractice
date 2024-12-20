import "./App.css";

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
    <ul className="skill-list">
      <Skill name="HTML&CSS" emoji="🙏" background_color="blue" />
      <Skill name="ASP.NET Core" emoji="🙏" background_color="red" />
      <Skill name="Javascript" emoji="🙏" background_color="yellow" />
    </ul>
  );
}

function Skill({ name, emoji, background_color }) {
  return (
    <li className="skill" style={{ backgroundColor: background_color }}>
      {name} {emoji}
    </li>
  );
}

export default App;
