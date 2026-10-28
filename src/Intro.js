import "./Intro.css";

const Intro = () => {
  const user = {
    name: "Mubeen",
    age: 10,
    address: "Lahore",
    role: "IT",
  };

  return (
    <div className="intro-card">
      <h1>{user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h3>{user.address}</h3>
      <h4>{user.role}</h4>

      {user.age > 20 && <p>Eligible for driving</p>}

      {user.age >= 18 ? (
        <p className="eligible">Eligible to vote</p>
      ) : (
        <p className="not-eligible">Not Eligible to vote</p>
      )}
    </div>
  );
};

export default Intro;
