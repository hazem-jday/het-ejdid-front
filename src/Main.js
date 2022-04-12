
import { useEffect, useState } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';





const Main = () => {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`/articles`)
            .then(res => {
                const articles = res.data;
                console.log(articles)
                setArticles(articles)

            })
    }, []);




    function NationalPreview() {
        console.log(articles)
        return articles.map((article, i) => <div className="col-lg-4">
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img alt="55" src={article.image} style={{aspectRatio:3/2}} className="img-fluid" />
                    <a href="/login">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                        شدّد المشاركون في الإجتماع الدوري لمتابعة تطورات الوضع الوبائي العالمي والمحلي لجائحة كوفيد-19، على مواصلة...                            </p>
                    <div className='row col-lg-12 justify-content-between'>
                        <div>
                            <a href="/login" className="btn btn-secondary">اقرأ</a>
                        </div>
                        <div>ssss</div>
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
                <NationalPreview />
                {/*}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649454413_media.jpg" className="img-fluid" />
                            <a href="#">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>

                        </div>
                        <div className="card-body">
                            <h5 className="card-title">متابعة للوضع الوبائي: دعوة إلى مواصلة أخذ الحيطة بمناطق العبور</h5>
                            <p className="card-text">
                                شدّد المشاركون في الإجتماع الدوري لمتابعة تطورات الوضع الوبائي العالمي والمحلي لجائحة كوفيد-19، على مواصلة...                            </p>
                            <a href="#" className="btn btn-secondary">اقرأ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649439499_media.jpg" className="img-fluid" />
                            <a href="#">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">وزير الخارجية يلتقي سفراء مجموعة السّبع</h5>
                            <p className="card-text">
                                استقبل عثمان الجرندي ظهر أمس الخميس 7 أفريل 2022 سفراء مجموعة السّبع (G7) وهي الولايات المتحدة الأمريكية...
                            </p>
                            <a href="#" className="btn btn-secondary">اقرأ</a>
                        </div>
                    </div>
                </div>
                {*/}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img alt="66" style={{aspectRatio:3/2}} src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649426313_media.jpg" className="img-fluid" />
                            <a href="/login">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">تونسيون يقتاتون من أنشطة تزدهر في رمضان.. لكن الإحتكار أضر ...</h5>
                            <p className="card-text">
                                يقبل المستهلك التونسي خلال شهر رمضان على عدة منتجات بكثافة بحكم  العادات والتقاليد وميزة هذا...                            </p>
                            <a href="/login" className="btn btn-secondary">اقرأ</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <h4 className="text-light"><Badge bg="primary">الأخبار الدولية</Badge></h4>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img alt="66" src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649348242_media.jpg" className="img-fluid" />
                            <a href="/login">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">الخطوط التونسية تُحقّق رقما قياسيا في مارس</h5>
                            <p className="card-text">
                                حققت شركة الخطوط التونسية، خلال شهر مارس 2022، رقما قياسيا على مستوى نسبة التعبئة، حيث تمكنت من تجاوز الأرقام المسجلة قبل...
                            </p>
                            <a href="/login" className="btn btn-primary">اقرأ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img alt="" src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649348242_media.jpg" className="img-fluid" />
                            <a href="/login">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">الخطوط التونسية تُحقّق رقما قياسيا في مارس</h5>
                            <p className="card-text">
                                حققت شركة الخطوط التونسية، خلال شهر مارس 2022، رقما قياسيا على مستوى نسبة التعبئة، حيث تمكنت من تجاوز الأرقام المسجلة قبل...
                            </p>
                            <a href="/login" className="btn btn-primary">اقرأ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img alt="zz" src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649348242_media.jpg" className="img-fluid" />
                            <a href="/login">
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">الخطوط التونسية تُحقّق رقما قياسيا في مارس</h5>
                            <p className="card-text">
                                حققت شركة الخطوط التونسية، خلال شهر مارس 2022، رقما قياسيا على مستوى نسبة التعبئة، حيث تمكنت من تجاوز الأرقام المسجلة قبل...
                            </p>
                            <a href="/login" className="btn btn-primary">اقرأ</a>
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

export default Main