import * as React from 'react';
import { Container, NavLink } from 'react-bootstrap';
import logo from "./hetjdid.png"
import Ticker from 'react-ticker'
import { FaVolleyballBall, FaGlobeAmericas, FaCloudSunRain, FaMapMarkerAlt } from 'react-icons/fa'

const PageHeader = () => {

  const MoveStuffAround = () => (
    <Ticker height={25}>
      {() => (
        <div style={{
          whiteSpace:"nowrap",
          overflow:"hidden",
          textOverflow:"ellipsis"
        }}>أعلن البنك المركزي الروسي الجمعة 8 أفريل 2022 أنه سيسمح مجددا اعتبارا من 18 أفريل ببيع العملات الأجنبية بعد تعليق هذا الامر مطلع مارس، إثر العقوبات الغربية غير المسبوقة بسبب اممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممممم
        ممممممممممملنزاع في </div>
      )}
    </Ticker>
  )


  return (
    <>
      <Container fluid className='border-bottom border-primary border-3 bg-light pt-2 pb-2'>

        <div className="d-flex justify-content-between align-items-center">
          <div className="col-lg-2 justify-content-between align-items-center text-center">
            <a href="#">
              <FaMapMarkerAlt className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaMapMarkerAlt>
              <NavLink className="">
                الأخبار الوطنية
              </NavLink>
            </a>
          </div>
          <div className="col-lg-2 justify-content-between align-items-center text-center">
            <a href="#">
              <FaGlobeAmericas className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaGlobeAmericas>
              <NavLink className="">
                الأخبار الدولية
              </NavLink>
            </a>
          </div>
          <div className='col-lg-2 justify-content-between align-items-center text-center'>
            <img src={logo}></img>
            <div className="text-primary pt-2">موقع تجريبي لبث الأخبار</div>
          </div>
          <div className="col-lg-2 justify-content-between align-items-center text-center">
            <a href="#">
              <FaVolleyballBall className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaVolleyballBall>
              <NavLink className="">
                أخبار الرياضة
              </NavLink>
            </a>
          </div>
          <div className="col-lg-2 justify-content-between align-items-center text-center">
            <FaCloudSunRain className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaCloudSunRain>
            <a href="#">
              <NavLink className="">
                أحوال الطقس
              </NavLink>
            </a>
          </div>

        </div>

      </Container>

      <div  className='row col-lg-12 bg-primary text-light mb-2'>
        <MoveStuffAround/>
      </div>
    </>
  );
};
export default PageHeader;
