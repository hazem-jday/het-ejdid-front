import { Button, Badge } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FaShare, FaHeart, FaSave } from 'react-icons/fa'
import axios from 'axios';
import NewsHighlights from '../Highlights/NewsHighlights';



const Article = () => {
    const [article, setArticle] = useState({});
    const [like, setLike] = useState(false);

    const [save, setSave] = useState(false);

    let { id } = useParams();
    useEffect(() => {
        axios.get(`/article/` + id)
            .then(res => {
                const article = res.data;
                setArticle(article)
            })
        if (localStorage.getItem("ID"))
            axios.get(`/like/` + localStorage.getItem("ID") + "/" + id)
                .then(res => {
                    const like = res.data;
                    console.log(" ** ", like)
                    console.log(like.id !== 0)
                    setLike(like)
                })
        if (localStorage.getItem("ID"))
            axios.get(`/save/` + localStorage.getItem("ID") + "/" + id)
                .then(res => {
                    const save = res.data;
                    console.log(" ** ", save)
                    console.log(save.id !== 0)
                    setSave(save)
                })

    }, [id]);


    function likeArticle() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            const like = { "user": parseInt(localStorage.getItem("ID")), "article": article.id }
            console.log(like)
            axios.post(`/like`, like)
                .then(res => {
                    setLike(res.data)
                })
        } else {
            alert("يجب عليك تسجيل الدخول أولا")
        }

    }
    function unlikeArticle() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            axios.delete(`/unlike/` + like.id)
                .then((res) => {
                    setLike(res.data)
                });
        }

    }

    function saveArticle() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            const save = { "user": parseInt(localStorage.getItem("ID")), "article": article.id }
            console.log(save)
            axios.post(`/save`, save)
                .then(res => {
                    setSave(res.data)
                })
        } else {
            alert("يجب عليك تسجيل الدخول أولا")
        }

    }
    function unsaveArticle() {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            axios.delete(`/unsave/` + save.id)
                .then((res) => {
                    setSave(res.data)
                });
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
                            <Button onClick={() =>
                                window.responsiveVoice.speak(document.getElementById("article-text").innerHTML, "Arabic Male")
                            }>اقرأ</Button>




                            <p className="card-text" style={{ whiteSpace: "pre-line" }} id="article-text">{article.content}</p>
                            <h5 className='text-center'>{
                                article.date ?
                                    <Badge className='col-lg-6'>
                                        {article.date.slice(0, 10).replaceAll("-", "/") + " | " + article.date.slice(11, 16)}
                                    </Badge> : ""
                            }</h5>
                            <div className='col-lg-12 justify-content-between'>
                                <div className='col-lg-6'>
                                    {article.publisher}
                                </div>

                            </div>
                        </div>
                        <div className="card-footer d-flex col-12 text-center">
                            <div className="col-4">
                                {
                                    save.id ?
                                    <button className="btn btn-success" onClick={unsaveArticle}>
                                        حذف
                                        <FaSave></FaSave>
                                    </button>
                                    :
                                    <button className="btn btn-outline-success" onClick={saveArticle}>
                                        حفظ
                                        <FaSave></FaSave>
                                    </button>
                                }
                            </div>
                            <div className="col-4">
                                {
                                    like.id ?
                                        <button className="btn btn-danger" onClick={unlikeArticle}>
                                            إلغاء
                                            <FaHeart></FaHeart>
                                        </button>
                                        :
                                        <button className="btn btn-outline-danger" onClick={likeArticle}>
                                            إعجاب
                                            <FaHeart></FaHeart>
                                        </button>
                                }
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

            <NewsHighlights />
        </div>

    )
}

export default Article