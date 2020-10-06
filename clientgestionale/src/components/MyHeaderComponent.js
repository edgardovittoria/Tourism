import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Headroom from 'react-headroom';
import { NavLink } from "react-router-dom";


class MyHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      carouselItem: [
        {
          src: './assets/img/banner/banner.png',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header'
        },
        {
          src: './assets/img/banner/banner2.png',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header'
        },
        {
          src: './assets/img/banner/banner3.png',
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header'
        }
      ]
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
        this.setState({
      isNavOpen: !this.state.isNavOpen
    });
    
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      " Username: " + this.username.value +
      " Password: " + this.password.value +
      " Remember: " + this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
          <div>
            <Navbar light expand="md">
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="./assets/img/logo.jpg"
                  height="100"
                  width="90"
                  alt="Be-Tour"
                />
              </NavbarBrand>

              <NavbarToggler onClick={this.toggleNav} />
              <div className="container">
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (this.username = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      innerRef={(input) => (this.password = input)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="remember"
                        innerRef={(input) => (this.remember = input)}
                      />
                  Remember me
                </Label>
                  </FormGroup>
                  <button type="submit" className="boxed-btn3">
                    <span></span> Login
              </button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        
      </React.Fragment>
    )
  }
}

export default MyHeader;