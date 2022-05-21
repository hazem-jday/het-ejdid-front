import {useEffect,useState} from 'react';
import { Container } from 'react-bootstrap';
import Ticker from 'react-ticker'
import axios from 'axios';
import "./PageHeader.css"
import { FaVolleyballBall, FaGlobeAmericas, FaCloudSunRain, FaMapMarkerAlt } from 'react-icons/fa'
var PageHeader = () => {


  useEffect(() => {

    axios.get(`/newsTicker`)
        .then(res => {
            const articles = res.data;
            setArticles(articles)
        })
  },[]);
  const [articles, setArticles] = useState([]);

    

  const NewsTicker = () => (
    <Ticker height={28} direction="toRight" offset={0} mode="smooth">
      {() => (
        <div style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"

        }}>{articles.map((article,i) => <a key={i} href={"/Article/"+article.id} style={{textDecoration:"none"}} className='text-light'><span>{" - "+article.title+" "}</span></a>)}
        </div>
      )}
    </Ticker>
  )


  return (
    <>
      <Container fluid className={`border-bottom border-primary border-3 bg-light pt-2 pb-2`}>

        <div className="d-flex justify-content-between align-items-center">
          <div className="col-lg-2 justify-content-between align-items-center text-center header-title">
            <a href="/Nat/1" style={{textDecoration:"none"}}>

              <FaMapMarkerAlt className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaMapMarkerAlt>
              <div>الأخبار الوطنية</div>
            </a>
          </div>

          <div className="col-lg-2 justify-content-between align-items-center text-center header-title">
            <a href="/Inter/1" style={{textDecoration:"none"}}>
              <FaGlobeAmericas className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaGlobeAmericas>
              <div>الأخبار الدولية</div>
            </a>
          </div>
          
          <div className="col-lg-2 justify-content-between align-items-center text-center header-title">
            <a href="/Sport/1" style={{textDecoration:"none"}}>
              <FaVolleyballBall className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaVolleyballBall>
              <div>أخبار الرياضة</div>
            </a>
          </div>
          <div className="col-lg-2 justify-content-between align-items-center text-center header-title">
            <a href="/Meteo" style={{textDecoration:"none"}}>
            <FaCloudSunRain className='text-primary' style={{ fontSize: "200%", color: "white" }}></FaCloudSunRain>
              <div>أحوال الطقس</div>
            </a>
          </div>

        </div>

      </Container>

      <div className='row col-lg-12 bg-primary text-light mb-2'>
        <NewsTicker />
      </div>
    </>
  );
};
export default PageHeader;
