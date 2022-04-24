import { Button, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FaShare, FaHeart, FaSave } from 'react-icons/fa'
import axios from 'axios';
import NewsHighlights from '../NewsHighlights';



const Article = () => {
    const [article, setArticle] = useState({});
    let { id } = useParams();
    useEffect(() => {
        axios.get(`/article/` + id)
            .then(res => {
                const article = res.data;
                setArticle(article)
            })

    }, [id]);

    
    function like() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            const likeInfo = { "user": parseInt(localStorage.getItem("ID")), "article": article.id }
            console.log(likeInfo)
            axios.post(`/like`, likeInfo)
                .then(res => {
                    console.log(res);
                })
        } else {
            alert("يجب عليك تسجيل الدخول أولا")
        }

    }

    function save() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            const saveInfo = { "user": parseInt(localStorage.getItem("ID")), "article": article.id }
            console.log(saveInfo)
            axios.post(`/save`, saveInfo)
                .then(res => {
                    console.log(res);
                })
        } else {
            alert("يجب عليك تسجيل الدخول أولا")
        }

    }

    return (
        <div className="row container align-items-start" dir="rtl" style={{}}>
            <div className='col-lg-9 mb-2' dir="rtl">

                <div className="col-lg-12 ">
                    <div className="row card align-items-center">
                        <div className="row col-lg-12 card-header">
                            <h4 className="text-light"><Badge bg="primary">مقال</Badge></h4>
                            <h4 className="card-title text-primary text-center">{article.title}</h4>
                        </div>
                        <div className="row col-lg-12 align-items-center" data-mdb-ripple-color="light">
                            <img alt="66" style={{ aspectRatio: 5 / 2 }} src={article.image} className={`card-img-center ${localStorage.getItem("DARK") === "true" ? "inv" : ""}`} />
                        </div>
                        
                        <div className="card-body align-items-start">
                            {
                                article.date ?
                                <Badge className='col-lg-6'>
                                    {article.date.slice(0,10).replaceAll("-", "/") + " | " + article.date.slice(11,16)}
                                </Badge> : ""
                            }
                            <Button onClick={()=>
                                window.responsiveVoice.speak(document.getElementById("article-text").innerHTML,"Arabic Male")
                            }>اقرأ</Button>
                            <p className="card-text" style={{ whiteSpace: "pre-line" }} id="article-text">{article.content}</p>

                            <div className='col-lg-12 justify-content-between'>
                                <div className='col-lg-6'>
                                    {article.publisher}
                                </div>
                                                                
                            </div>
                        </div>
                        <div className="card-footer d-flex col-12 text-center">
                            <div className="col-4">
                                <button className="btn btn-outline-success" onClick={save}>
                                    سجل
                                    <FaSave></FaSave>
                                </button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-outline-danger" onClick={like}>
                                    إعجاب
                                    <FaHeart></FaHeart>
                                </button>
                            </div>
                            <div className="col-4">
                                <a href={`https://facebook.com/sharer/sharer.php?u=${article.source}`}>
                                    <button className="btn btn-outline-primary">
                                        مشاركة
                                        <FaShare></FaShare>
                                    </button>
                                </a>
                            </div>

                        </div>


                    </div>


                </div>



            </div>

            <NewsHighlights/>
        </div>

    )
}

export default Article