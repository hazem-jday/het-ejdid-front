
import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import NewsHighlights from '../Highlights/NewsHighlights'

const Home = () => {

    const [NatArticles, setNatArticles] = useState([]);
    const [InterArticles, setInterArticles] = useState([]);
    const [SportArticles, setSportArticles] = useState([]);

    useEffect(() => {
        axios.get(`/natPreview`)
            .then(res => {
                const articles = res.data;
                setNatArticles(articles)
            })
        axios.get(`/sportPreview`)
            .then(res => {
                const articles = res.data;
                setSportArticles(articles)
            })
        axios.get(`/interPreview`)
            .then(res => {
                const articles = res.data;
                setInterArticles(articles)
            })
      },[]);

    function NatPreview() {
        
        return NatArticles.map((article, i) => <div className="col-lg-4 d-flex mb-2" key={i}>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className={`img-fluid ${localStorage.getItem("DARK")==="true" ? "inv" : ""}`} />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body row">
                    <h6 className="card-title text-center text-primary" style={{lineHeight:"24px",maxHeight:"48px",overflow:"hidden",minHeight:"48px"}}>{article.title}</h6>
                    <p className="card-text" style={{lineHeight:"20px",maxHeight:"42px",overflow:"hidden",minHeight:"42px",fontSize:"90%"}}>{article.content.slice(0,150) + "..."}</p>
                            
                    <p className="text-center" style={{fontSize:"120%"}}><Badge className="badge badge-secondary">{article.date.slice(0,10).replaceAll("-", "/") +" | "+ article.date.slice(11,16)}</Badge></p>
                    <a href={"/article/"+article.id} className="btn btn-outline-primary">اقرأ</a>
                </div>
            </div>
        </div>)
    }
    function InterPreview(props) {
        
        return InterArticles.map((article, i) => <div className="col-lg-4 d-flex mb-3" key={i}>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className={`img-fluid ${localStorage.getItem("DARK")==="true" ? "inv" : ""}`} />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body row">
                    <h6 className="card-title text-center text-primary" style={{lineHeight:"24px",maxHeight:"48px",overflow:"hidden",minHeight:"48px"}}>{article.title}</h6>
                    <p className="card-text" style={{lineHeight:"20px",maxHeight:"42px",overflow:"hidden",minHeight:"42px",fontSize:"90%"}}>{article.content.slice(0,150) + "..."}</p>
                            
                    <p className="text-center" style={{fontSize:"120%"}}><Badge className="badge badge-secondary">{article.date.slice(0,10).replaceAll("-", "/") +" | "+ article.date.slice(11,16)}</Badge></p>
                    <a href={"/article/"+article.id} className="btn btn-outline-primary">اقرأ</a>
                </div>
            </div>
        </div>)
    }
    function SportPreview() {
        
        return SportArticles.map((article, i) => <div className="col-lg-4 d-flex mb-3" key={i}>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className={`img-fluid ${localStorage.getItem("DARK")==="true" ? "inv" : ""}`} />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body row">
                    <h6 className="card-title text-center text-primary" style={{lineHeight:"24px",maxHeight:"48px",overflow:"hidden",minHeight:"48px"}}>{article.title}</h6>
                    <p className="card-text" style={{lineHeight:"20px",maxHeight:"42px",overflow:"hidden",minHeight:"42px",fontSize:"90%"}}>{article.content.slice(0,150) + "..."}</p>
                            
                    <p className="text-center" style={{fontSize:"120%"}}><Badge className="badge badge-secondary">{article.date.slice(0,10).replaceAll("-", "/") +" | "+ article.date.slice(11,16)}</Badge></p>
                    <a href={"/article/"+article.id} className="btn btn-outline-primary">اقرأ</a>
                </div>
            </div>
        </div>)
    }




    return (
        <div className="container row justify-content-center" dir="rtl">
            <div className='row col-lg-9' dir="rtl">
                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">الأخبار الوطنية</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary'/>
                <NatPreview/>
                
                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">الأخبار الدولية</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary'/>
                <InterPreview/>
                
                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">الرياضة</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary'/>
                <SportPreview/>

            </div>

            <NewsHighlights/>
        </div>

    )
}

export default Home