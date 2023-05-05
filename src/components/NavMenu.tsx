import Button from "./ui/Button";

const NavMenu = () => {
  return (
    <div className="navigation__menu">
      <div className="navigation__menu-links">
        <ul className="navigation__menu-list">
          <li className="navigation__menu-item">
            <a href="#about" className="navigation__menu-link">
              About
            </a>
          </li>
          <li className="navigation__menu-item">
            <a href="#services" className="navigation__menu-link">
              Services
            </a>
          </li>
          <li className="navigation__menu-item">
            <a href="" className="navigation__menu-link">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation__menu-btn">
        <Button
          label="Contact"
          onClick={() => {}}
          className="btn--yellow btn--rounded"
        />
      </div>
    </div>
  );
};

export default NavMenu;
