import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Badge } from 'react-bootstrap';






const International = () => {
    const [articles, setArticles] = useState([]);
    const [pagination, setPagination] = useState([])
    const [n,setN] = useState(0)
    
    let page = useParams().n
    if(typeof(useParams().n) === 'undefined')
        page = 1
    else if (page < 0)
        page = 1
    useEffect(() => {
        setN(parseInt(page,0))
        if(n!==0 && typeof(n) !== "undefined" && n!=null)
        axios.get(`/inter/` + n)
            .then(res => {
                const articles = res.data;
                setArticles(articles)
            })
        
        const prev = n > 1 ? n-1 : -1
        const next = n+1

        const p1 = n > 1 ? n-1 : 1
        const p2 = n > 1 ? n : n+1
        const p3 = n > 1 ? n+1 : n+2

        setPagination([prev,p1,p2,p3,next])


    }, [page,n]);


    function Articles() {
        return articles.map((article, i) => <div className="col-lg-4 d-flex mb-3" key={i}>
            <div className="card">
                <div className="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{ aspectRatio: 3 / 2 }} className={`img-fluid ${localStorage.getItem("DARK") === "true" ? "inv" : ""}`} />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body row">
                    <h6 className="card-title text-center text-primary" style={{ lineHeight: "24px", maxHeight: "48px", overflow: "hidden", minHeight: "48px" }}>{article.title}</h6>
                    <p className="card-text" style={{ lineHeight: "20px", maxHeight: "42px", overflow: "hidden", minHeight: "42px", fontSize: "90%" }}>{article.content.slice(0, 70) + "..."}</p>

                    <p className="text-center" style={{ fontSize: "120%" }}><Badge className="badge badge-secondary">{article.date.slice(0, 10).replaceAll("-", "/") + " | " + article.date.slice(11, 16)}</Badge></p>
                    <a href={"/article/" + article.id} className="btn btn-outline-primary">اقرأ</a>
                </div>
            </div>
        </div>
        )
    }











    return (
        <div className="container row justify-content-center" dir="rtl" style={{}}>
            <div className='row col-lg-12' dir="rtl">

                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">الأخبار الدولية</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary' />

                {articles && articles.length > 0 ?
                        <Articles /> :
                        ""
                }

            </div>
                <nav className="row " dir="ltr" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${n===1 ? "disabled":""}`}>
                            <a className="page-link" href={"/Inter/"+pagination[0]} tabIndex="-1">{"<"}</a>
                        </li>
                        <li className={`page-item ${n===pagination[1] ? "active":""}`}><a className="page-link" href={"/Inter/"+pagination[1]}>{pagination[1]}</a></li>
                        <li className={`page-item ${n===pagination[2] ? "active":""}`}><a className="page-link" href={"/Inter/"+pagination[2]}>{pagination[2]}</a></li>
                        <li className="page-item"><a className="page-link" href={"/Inter/"+pagination[3]}>{pagination[3]}</a></li>
                        <li className="page-item">
                            <a className="page-link" href={"/Inter/"+pagination[4]}>{">"}</a>
                        </li>
                    </ul>
                </nav>


        </div>
    )
}
export default International