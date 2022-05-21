
import { useState } from 'react';
import { ToggleButton, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { FaMoon, FaRegSun, FaSearch, FaUserCircle } from 'react-icons/fa'
import './NavBar.css'
import logo from "./hetjdid.svg"

const NavBar = (props) => {
  const [searchStr, setSearchStr] = useState("")
  const [sideMenuSearchStr, setSideMenuSearchStr] = useState("")
  let { setDark } = props
  const handleSearchStrChange = (e) => {
    const val = e.target.value
    setSearchStr(val)
  }
  const handleSideMenuSearchStrChange = (e) => {
    const val = e.target.value
    setSideMenuSearchStr(val)
  }
  



  return (
    <Navbar variant="dark" className="d-flex row justify-content-between bg-light border-bottom border-primary border-3 sticky-top" expand={false} dir="rtl" >
      <Container fluid className='text-start'>

        <Navbar.Toggle variant="dark" className="bg-primary text-light" style={{fontSize:"120%"}} aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas dir="rtl"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <a href="/" style={{textDecoration:"none"}}>
              <img alt="0" src={logo} style={{height:"40px"}}></img>
            </a>
          </Offcanvas.Title>

          </Offcanvas.Header>
          <Offcanvas.Body>
              <ToggleButton
                style={{display:`${localStorage.getItem("DARK") === "true" ? "none" : ""}`}}
                id={`radio-dark`}
                type="radio"
                variant={'outline-dark'}
                name="radio"
                value={true}
                checked={localStorage.getItem("DARK") === "true"}
                onChange={(e) => { setDark(e.currentTarget.value); localStorage.setItem("DARK", "true") }}
              >
                الوضع المظلم
                <FaMoon />
              </ToggleButton>
              <ToggleButton
                style={{display:`${localStorage.getItem("DARK") !== "true" ? "none" : ""}`}}
                id={`radio-light`}
                type="radio"
                variant={'outline-dark'}
                name="radio"
                value={false}
                checked={localStorage.getItem("DARK") !== "true"}
                onChange={(e) => { setDark(e.currentTarget.value); localStorage.setItem("DARK", "false") }}
              >
                إضاءة
                <FaRegSun />
              </ToggleButton>
            <Nav className="justify-content-end flex-grow-1 pe-3" >
              <Nav.Link href="/">الرئيسية</Nav.Link>


              <NavDropdown title="الأخبار" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/Nat/1" className='text-primary' style={{ textAlign: "right" }}>الأخبار الوطنية</NavDropdown.Item>
                <NavDropdown.Item href="/Inter/1" className='text-primary' style={{ textAlign: "right" }}>الأخبار الدولية</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/Sport/1">الرياضة</Nav.Link>

              <Nav.Link href="/Meteo">أحوال الطقس</Nav.Link>
            </Nav>

            <Form className="d-flex" dir="rtl"
            onSubmit={e => { e.preventDefault();
              if(sideMenuSearchStr)
                window.location.href = '/search/' + sideMenuSearchStr; }}
            >
              <FormControl
                type="search"
                placeholder="بحث"
                className="ms-2"
                aria-label="Search"
                
                onChange={handleSideMenuSearchStrChange}
              />
              <Button className='btn btn-primary' style={{ background: "#0d6efd" }} onClick={(e) => {
                e.preventDefault();
                if(sideMenuSearchStr)
                window.location.href = '/search/' + sideMenuSearchStr;
              }}>
                <FaSearch/>
              </Button>

            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div className='me-4'>
            <a href="/" style={{textDecoration:"none"}}>
              <img alt="0" src={logo} style={{height:"35px"}}></img>
            </a>
{/*
          <FaTwitterSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaTwitterSquare>
          <FaFacebookSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaFacebookSquare>
          <FaYoutubeSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaYoutubeSquare>
*/}
        </div>

        <Form className="d-none d-md-flex"
          onSubmit={e => { e.preventDefault();
            if(searchStr)
              window.location.href = '/search/' + searchStr; }}

        >
          <FormControl
            type="search"
            placeholder="بحث"
            className="ms-2"
            aria-label="Search"
            onChange={handleSearchStrChange}
          />
          <Button className="btn btn-primary text-light" onClick={(e) => {
            e.preventDefault();
            if(searchStr)
            window.location.href = '/search/' + searchStr;
          }}>
            <FaSearch/>
          </Button>
        </Form>


        <NavDropdown title={<FaUserCircle className='text-primary text-start' style={{ fontSize: "200%", color: "white"}} />} className="" id="basic-nav-dropdown" dir="rtl">
          {localStorage.getItem("ID") !== null ?

            <>
              <NavDropdown.Item className="text-end text-primary" href="/saved">التسجيلات</NavDropdown.Item>
              <NavDropdown.Item className="text-end text-primary" href="/liked">الإعجابات</NavDropdown.Item>
              <NavDropdown.Item className="text-end text-primary" href="/Settings">الإعدادات</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-end text-primary" style={{ color: "red" }} href="/logout">تسجيل الخروج</NavDropdown.Item>
            </>
            :
            <>
              <NavDropdown.Item className="text-end text-primary" href="/login">تسجيل الدخول</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-end text-primary" href="/signup">إنشاء حساب</NavDropdown.Item>
            </>
          }

        </NavDropdown>




      </Container>

    </Navbar>
  );
};
export default NavBar;
