import {Link} from 'react-router-dom';
import './main.component.css';
import {NavDropdown , Button, Navbar,Nav,Form,Brand,FormControl } from 'react-bootstrap'
// import MyList from '../MyList/MyList';
export default function Main({search}) {


    return (
  <Navbar bg="transparent" expand="lg">
  <Navbar.Brand  href="#home"><img id="logo1"  src="/logo.svg"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="/home">Home</Nav.Link>
      <Nav.Link href="/movies">Movies</Nav.Link>
      <Nav.Link href="/tvshows">TV Shows</Nav.Link>
      <Nav.Link href="/list">My List</Nav.Link>
    </Nav>
    
    <Form inline>
      <FormControl onChange={search} type="text" placeholder="Search" className="mr-sm-2" />
      <NavDropdown title={<img style={{width:"25px"}} className="thumbnail-image" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU" 
                        />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">name</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Log out</NavDropdown.Item>
      </NavDropdown>
    </Form>
  </Navbar.Collapse>
</Navbar>    
    )
}
