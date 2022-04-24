
import { useState } from 'react';
import { ToggleButton, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Offcanvas, ButtonGroup } from 'react-bootstrap';
import { FaMoon, FaRegSun, FaSearch, FaUserCircle, FaTwitterSquare, FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa'

const NavBar = (props) => {
  const [searchStr, setSearchStr] = useState("")
  let { setDark } = props
  const handleSearchStrChange = (e) => {
    const val = e.target.value
    setSearchStr(val)
  }


  return (
    <Navbar variant="dark" className="bg-light border-bottom border-primary border-3 sticky-top" style={{ borderBottom: "2px solid lightgray" }} expand={false} dir="rtl">
      <Container fluid>

        <Navbar.Toggle variant="dark" className="btn btn-primary bg-primary text-light" aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas dir="rtl"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">هات الجديد</Offcanvas.Title>

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
              <Nav.Link href="#action1">الرئيسية</Nav.Link>


              <NavDropdown title="الأخبار" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3" style={{ textAlign: "right" }}>الأخبار الوطنية</NavDropdown.Item>
                <NavDropdown.Item href="#action4" style={{ textAlign: "right" }}>الأخبار الدولية</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action1">أخبار الرياضة</Nav.Link>

              <Nav.Link href="#action2">أحوال الطقس</Nav.Link>
            </Nav>

            <Form className="d-flex" dir="rtl">
              <FormControl
                type="search"
                placeholder="بحث"
                className="ms-2"
                aria-label="Search"
              />
              <Button className='btn btn-primary' style={{ background: "#0d6efd" }}>بحث</Button>

            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div>


          <FaTwitterSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaTwitterSquare>
          <FaFacebookSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaFacebookSquare>
          <FaYoutubeSquare className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaYoutubeSquare>

        </div>

        <Form className="d-none d-md-flex">
          <FormControl
            type="search"
            placeholder="بحث"
            className="ms-2"
            aria-label="Search"
            onChange={handleSearchStrChange}
          />
          <Button className="btn btn-primary text-light" onClick={(e) => {
            e.preventDefault();
            window.location.href = '/search/' + searchStr;
          }}>
            <FaSearch></FaSearch>
          </Button>
        </Form>


        <NavDropdown title={<FaUserCircle className='ml-1 text-primary' style={{ fontSize: "200%", color: "white" }} />} className="" id="basic-nav-dropdown" dir="rtl">
          {localStorage.getItem("ID") !== null ?

            <>
              <NavDropdown.Item className="text-end" href="#action/3.1">التسجيلات</NavDropdown.Item>
              <NavDropdown.Item className="text-end" href="#action/3.2">الإشعارات</NavDropdown.Item>
              <NavDropdown.Item className="text-end" href="#action/3.3">الإعدادات</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-end" style={{ color: "red" }} href="/logout">تسجيل الخروج</NavDropdown.Item>
            </>

            :

            <>
              <NavDropdown.Item className="text-end" href="/login">تسجيل الدخول</NavDropdown.Item>
              <NavDropdown.Item className="text-end" href="/signup">إنشاء حساب</NavDropdown.Item>
            </>
          }

        </NavDropdown>




      </Container>

    </Navbar>
  );
};
export default NavBar;
