import React, { useContext, useState } from "react";
import { Nav, NavbarToggler, NavItem, Collapse, Navbar, NavbarBrand, Modal, ModalBody, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "../assets/images/logowhite.png";
import { NavLink } from "react-router-dom";
import cartLogo from "../assets/images/cart.png";
import CartContext from "../store/cart-content";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../App.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const [isOpenNav, setIsOpenNav] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [regModalOpen, setRegModalOpen] = useState(false);
  
  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const toggleRegModal = () => {
    setRegModalOpen(!regModalOpen);
  }

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <Navbar dark expand="lg">
        <div className="container head">
          <div className="row navbar fixed-top nav">
            <NavbarToggler onClick={toggleNav} />
            <NavbarBrand>
              <div className="col-lg-5 col-xl-1 col-md-3 col-sm-3 logo">
                <img src={mainLogo} alt="logo" className="main-logo"/>
                
              </div>
              
            </NavbarBrand>
            <div className="d-none d-xl-block col-md-5 col-xl-4 ml-5 nav-name">
              <span className="title">HOME GYM EQUIPMENT</span>
            </div>
            <Collapse isOpen={isOpenNav} navbar>
              <Nav navbar>
                <div
                  className="col-sm-5 col-xl-auto ml-5 col-12 nav-item"
                  id="Navbar"
                >
                  <ul className="navbar-nav mr-auto col-sm-auto">
                    <NavItem>
                      <NavLink className="nav-link" to="/home" onClick={toggleNav}>
                        HOME
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/product" onClick={toggleNav}>
                        PRODUCT
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink className="nav-link" to="/home" onClick={toggleNav}>
                        SERVICE
                      </NavLink>
                    </NavItem> */}
                    <NavItem>
                      <NavLink className="nav-link" to="/contact" onClick={toggleNav}>
                        CONTACT
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          size="md"
                          className="dropdown-btn"
                        >
                          ACCOUNT
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem className="dropdown">
                            <a onClick={toggleRegModal}>Register</a>
                          </DropdownItem>
                          <DropdownItem className="dropdown">
                            <a onClick={toggleLoginModal}>Login</a>
                          </DropdownItem>
                        </DropdownMenu>           
                      </UncontrolledDropdown>
                    </NavItem>
                    
                  </ul>
                </div>
              </Nav>
            </Collapse>
            <div className="cart">
              <img
                      src={cartLogo}
                      alt="cart-logo"
                      className="cart-logo" onClick={props.onShowCart}
                    />
                    <span className='cart-number' style={{ color: "#fff" }}>{numberOfCartItems}</span>
            </div>
          </div>
          
        </div>
        
      </Navbar>
      

      <Modal isOpen={regModalOpen} toggle={toggleRegModal}>
        <ModalBody>
          <button
            type="button"
            className="close"
            onClick={toggleRegModal}
            aria-hidden="true"
          >
            ×
          </button>
          <RegisterForm onCloseReg={toggleRegModal} onOpenLogin={toggleLoginModal} />
        </ModalBody>
      </Modal>

      <Modal isOpen={loginModalOpen} toggle={toggleLoginModal}>
        <ModalBody>
          <button
            type="button"
            className="close"
            onClick={toggleLoginModal}
            aria-hidden="true"
          >
            ×
          </button>
          <LoginForm onCloseLogin={toggleLoginModal} />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Header;
