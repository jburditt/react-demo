import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuItem from './menu-item.model';
import { NavLink, DropdownItem } from 'react-bootstrap';
import React from "react";

export default function Menu({ title, items }: any) {
  if (items.length < 1)
    return;

  if (items.length == 1)
    return (
      <NavLink key={ items[0].routerLink } href={ items[0].routerLink }>
        <i className={ "bi bi-" + items[0].icon! }></i> { items[0].displayName }
      </NavLink>
    );

  const menuItems = items.map((menuItem: MenuItem) => {            
    return (
      <React.Fragment key={ menuItem.routerLink }>
        <DropdownItem key={ menuItem.routerLink } href={ menuItem.routerLink }>
          <i className={ "bi bi-" + menuItem.icon! }></i> { menuItem.displayName }
        </DropdownItem> 
        <div style={{ marginLeft: "32px" }}>
          { !!menuItem.children && Menu({ title: menuItem.displayName, items: menuItem.children }) }
        </div>
      </React.Fragment>
    );
  });

  return (
    <NavDropdown title={ title } id="basic-nav-dropdown">
      { menuItems }
    </NavDropdown>
  )
}