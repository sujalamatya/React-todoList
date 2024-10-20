import profilepic from "./assets/pp.jpg";
function Card({name,des}) {
  return (
    <div className="card">
      <img className="cardImg" alt="profile picture" src={profilepic}></img>
      <h2 className="cardTitle">{name}</h2>
      <p className="cardTxt">{des}</p>
    </div>
  );
}
export default Card;
