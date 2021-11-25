import React, {
  useState,
  Children,
  cloneElement,
  useCallback,
  useEffect,
} from "react";
import { useUI } from "../../UI-context";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
  const { children, options = [], rootStyle } = props;

  const { lockScroll, unlockScroll } = useUI();

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <div className="menu-container" style={rootStyle}>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { ...child.props, onClick: toggleIsOpen })
      )}
      {isOpen && (
        <ul className="menu-options-container p-2 shadow border-radius">
          {options.map((option) => (
            <MenuItem closeMenu={closeMenu} {...option} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
