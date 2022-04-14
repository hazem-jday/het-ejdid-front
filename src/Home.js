
import { useEffect, useState } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';





const Home = () => {

    const [NatArticles, setNatArticles] = useState([]);
    const [InterArticles, setInterArticles] = useState([]);
    const [SportArticles, setSportArticles] = useState([]);

    useEffect(() => {
        axios.get(`/natPreview`)
            .then(res => {
                const articles = res.data;
                setNatArticles(articles)
                console.log("ssss")
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
        
        return NatArticles.map((article, i) => <div className="col-lg-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className="img-fluid" />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content.slice(0,100) + "..."}</p>
                    <div className='row col-lg-12 justify-content-between'>
                        <div>
                            <a href={"/article/"+article.id} className="btn btn-secondary">اقرأ</a>
                        </div>
                        <div>{article.date}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
    function InterPreview(props) {
        
        return InterArticles.map((article, i) => <div className="col-lg-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className="img-fluid" />
                    <a href={article.source}>
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}>aaa</div>
                    </a>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content.slice(0,100) + "..."}</p>
                    <div className='row col-lg-12 justify-content-between'>
                        <div>
                            <a href={"/article/"+article.id} className="btn btn-secondary">اقرأ</a>
                        </div>
                        <div>{article.date}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
    function SportPreview() {
        
        return SportArticles.map((article, i) => <div className="col-lg-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className="img-fluid" />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content.slice(0,100) + "..."}</p>
                    <div className='row col-lg-12 justify-content-between'>
                        <div>
                            <a href={"/article/"+article.id} className="btn btn-secondary">اقرأ</a>
                        </div>
                        <div>{article.date}</div>
                    </div>
                </div>
            </div>
        </div>)
    }




    return (
        <div className="container row" dir="rtl" style={{}}>
            <div className='row col-lg-9' dir="rtl">
                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">الأخبار الوطنية</Badge></h4>
                </div>
                <NatPreview/>
                
                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">الأخبار الدولية</Badge></h4>
                </div>
                <InterPreview/>

                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">الرياضة</Badge></h4>
                </div>
                <SportPreview/>

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

export default Home