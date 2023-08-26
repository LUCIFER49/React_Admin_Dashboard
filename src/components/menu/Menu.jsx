import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {
      menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {
            item.listItems.map((listItem) => (
            <Link to="/" className="listItem">
              <img src="images/home.svg" alt="home icon" />
              <span className="listItemTitle">Home</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
