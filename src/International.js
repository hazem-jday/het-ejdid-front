import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Badge } from 'react-bootstrap';






const International = () => {
    const [articles, setArticles] = useState([]);
    let { n } = useParams();
    useEffect(() => {
        axios.get(`/inter/` + n)
            .then(res => {
                const articles = res.data;
                setArticles(articles)
            })

    }, [n]);


    function Articles() {
        return articles.map((article, i) => <div className="col-lg-4 d-flex mb-3">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
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
        <div className="container row" dir="rtl" style={{}}>
            <div className='row col-lg-12' dir="rtl">

                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">الأخبار الدولية</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary'/>

                {articles ?
                    <Articles /> :
                    <h5 className="text-danger">{"لا توجد مقالات تخص هذا الطلب"}</h5>
                }

            </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="/Inter/" tabindex="-1">الصفحة السابقة</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">الصفحة التالية</a>
                        </li>
                    </ul>
                </nav>


        </div>
    )
}
export default International