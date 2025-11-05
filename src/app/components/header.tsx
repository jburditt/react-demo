import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavbarBrand, NavbarToggle, NavbarCollapse, NavLink, DropdownItem } from 'react-bootstrap';
import Menu from './menu/menu';
import MenuItem from './menu/menu-item.model';

const menuItemList: Array<MenuItem> = [
    new MenuItem('Home', '/', 'house-door'),
    new MenuItem('User', '/user', 'file-earmark-person', [
      new MenuItem('Search', '/user/search', 'search')
    ]),
    new MenuItem('Form', '/feature/form', 'folder', [
      new MenuItem('Flags', '/feature/flags', 'flag'),
      new MenuItem('NgRx Store', '/feature/ngrx-store', 'box-fill')
    ]),
    new MenuItem('Admin', '/admin', 'gear'),
  ];

export default function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavbarBrand href="#home">Fullswing Solutions</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <Menu title="Menu" items={ menuItemList } />
          </Nav>
        </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}