import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuItem from './menu-item.model';
import { NavLink, DropdownItem } from 'react-bootstrap';
import "./menu.css";

export default function Menu({ title, items }: any) {
  return (
    <NavDropdown title={ title } id="basic-nav-dropdown">
      { MenuItems({ title, items }) }
    </NavDropdown>
  );
}

function MenuItems({ title, items }: any) {
  if (!items?.length || items.length < 1)
    throw new Error("Unknown items argument");

  if (items.length == 1)
    return (
      <NavLink key={ items[0].routerLink } href={ items[0].routerLink }>
        <i className={ "bi bi-" + items[0].icon! }></i> { items[0].displayName }
      </NavLink>
    );

  const menuItems = items.map((menuItem: MenuItem) => {     
    if (menuItem.children) {     
      return (
        <div key={ menuItem.routerLink } className="menuItem">
          <i className={ "icon bi bi-" + menuItem.icon! }></i>
          <NavDropdown title={ menuItem.displayName } className="caret-right dropend">
            { MenuItems({ title: menuItem.displayName, items: menuItem.children }) }
          </NavDropdown>
        </div>
      );    
    } else {
      return (
        <DropdownItem key={ menuItem.routerLink } href={ menuItem.routerLink }>
          <i className={ "bi bi-" + menuItem.icon! }></i> { menuItem.displayName }
        </DropdownItem> 
      );    
    }
  });

  return menuItems;
}