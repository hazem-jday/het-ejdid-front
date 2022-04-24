import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Badge } from 'react-bootstrap';






const Search = () => {
    const [articles, setArticles] = useState([]);
    let { s } = useParams();
    useEffect(() => {
        axios.get(`/search/` + s)
            .then(res => {
                const articles = res.data;
                setArticles(articles)
            })

    }, [s]);


    function Articles() {
        return articles.map((article, i) =>
        <div key={i} className="col-lg-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{ aspectRatio: 3 / 2 }} className="img-fluid" />
                    <a href={article.source}>
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}>{article.publisher}</div>
                    </a>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content.slice(0, 100) + "..."}</p>
                    <div className='row col-lg-12 justify-content-between'>
                        <div>
                            <a href={"/article/" + article.id} className="btn btn-secondary">اقرأ</a>
                        </div>
                        <div>{article.date}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }











    return (
        <div className="container row" dir="rtl" style={{}}>
            <div className='row col-lg-12' dir="rtl">
                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">نتيجة البحث</Badge></h4>
                </div>
                {articles.length > 0 ?
                <Articles/> :
                <h5 className="text-danger">{"لا توجد نتائج متعلقة بـ "+s}</h5>
                }
                
            </div>
        </div>
    )
}
export default Search