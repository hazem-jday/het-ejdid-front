import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';




const Article = () => {
    const [article, setArticle] = useState({});
    let { id } = useParams();
    useEffect(() => {
        axios.get(`/article/`+id)
            .then(res => {
                const article = res.data;
                setArticle(article)                
            })

    }, [id]);
        
    return (
        <div className="container row align-items-start" dir="rtl" style={{}}>
            <div className='row col-lg-9' dir="rtl">
                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">مقال</Badge></h4>
                </div>
                <div className="row col-lg-12 ">
                    <div className="card align-items-center">
                        <div className="bg-image row col-lg-12 " data-mdb-ripple-color="light">
                            <img alt="66" style={{ aspectRatio: 5 / 2 }} src={article.image} className="img-fluid" />
                            <a href="/login">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body row align-items-start">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.content}</p>

                            <div className='row col-lg-12 justify-content-between'>
                                <div className='row col-lg-6'>
                                    {article.publisher}
                                </div>
                                <div className='row col-lg-6 justify-content-end'>
                                    {article.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="row col-lg-3 justify-content-center align-self-start mt-3">

                <ListGroup>
                    <ListGroupItem active>
                        المستجدات
                    </ListGroupItem>
                    <ListGroupItem>
                        حالة الطقس السبت
                    </ListGroupItem>
                    <ListGroupItem>
                        متابعة للوضع الوبائي: دعوة إلى مواصلة أخذ الحيطة بمناطق العبور
                    </ListGroupItem>
                    <ListGroupItem>
                        تأجيل النظر في القضية المرفوعة ضدّ نادية عكاشة
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className='mt-3'>
                    <ListGroupItem active>
                        الرياضة
                    </ListGroupItem>
                    <ListGroupItem>
                        مدرب النجم الساحلي السابق جورفان فييرا ينفي خبر وفاته ...
                    </ListGroupItem>
                    <ListGroupItem>
                        الاتّحاد الإفريقي يعلن موعد قرعة تصفيات الكان والشان
                    </ListGroupItem>
                    <ListGroupItem>
                        صلاح: ''مفاوضات تجديد العقد مع ليفربول حسّاسة''
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className='mt-3'>
                    <ListGroupItem active>
                        العالم
                    </ListGroupItem>
                    <ListGroupItem>
                        البنك المركزي الروسي يسمح مجددا ببيع العملات الأجنبية
                    </ListGroupItem>
                    <ListGroupItem>
                        البنتاغون: 'روسيا دولة نوويّة ونسعى لتجنب التوتر معها..'
                    </ListGroupItem>
                    <ListGroupItem>
                        بايدن: روسيا ارتكبت مجزرة مروّعة في كراماتورسك
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>

    )
}

export default Article