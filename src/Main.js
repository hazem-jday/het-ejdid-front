
import * as React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';




const Main = () => {


  return (
      <div className="container" dir="rtl" style={{}}>
        {/*Section: Content*/}

          <div className='row col-lg-9 '>
            <div className="row col-lg-12">
              <h4 className="text-primary">الأخبار الوطنية</h4>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649348242_media.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">كورونا: مراكز التلقيح المفتوحة ليلا بقفصة والمهدية وصفاقس وتوزر والقصرين</h5>
                    <p className="card-text">
                    نشرت وزارة الصحة اليوم الجمعة 08 أفريل 2022، مراكز التلقيح ضد فيروس كوفيد - 19 خلال ...</p>
                    <a href="#" className="btn btn-primary">اقرأ</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649336252_media.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">طريق نابل-قليبية: أشغال منذ ثلاث سنوات..متى تُفرج؟</h5>
                    <p className="card-text">
                    تتواصل أشغال مشروع مضاعفة الطريق الجهويّة 27 الرابطة بين نابل وقربة وقليبية، الممتدة على 45 كلم...
                    </p>
                    <a href="#" className="btn btn-primary">اقرأ</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://content.mosaiquefm.net/uploads/content/thumbnails/1649332812_media.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">الطبوبي: لن نقبل بأيّ حوار تستثنى منه القوى الوطنية</h5>
                    <p className="card-text">
                    أكد أمين عام الاتحاد العام التونسي للشغل نور الدين الطبوبي أن الاتّحاد لن يقبل بأيّ حوار تُستثنى...
                    </p>
                    <a href="#" className="btn btn-primary">اقرأ</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="row col-lg-12">
            <h4 className="text-light">الأخبار الوطنية</h4>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row col-lg-12">
              <h4 className="mb-5"><strong>أخبار الرياضة</strong></h4>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                    <a href="#">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Post title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-lg-3 justify-content-center align-self-start">

            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
              <h4 style={{color:"#0d6efd"}}><strong>المستجدات</strong></h4>
              </ListGroup.Item>
              <ListGroup.Item>
              تطاوين: إلغاء السفرات البعيدة بسبب تردي أسطول النقل العمومي
              </ListGroup.Item>
              <ListGroup.Item>
              العلا: تعطّل الدروس بسبب مصب فضلات
              </ListGroup.Item>
              <ListGroup.Item>
              القيروان: مدفع رمضان يعود من جديد (صور)
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item>
              <h4 style={{color:"#0d6efd"}}><strong>الرياضة</strong></h4>
              </ListGroup.Item>
              <ListGroup.Item>
              مدرب النجم الساحلي السابق جورفان فييرا ينفي خبر وفاته ...
              </ListGroup.Item>
              <ListGroup.Item>
              الرابطة الثانية: سيدي بوزيد يمطر شباك مستقبل قابس بـ 8 أهداف
              </ListGroup.Item>
              <ListGroup.Item>
              نبيل الكوكي مدربا جديدا للنادي الصفاقسي
              </ListGroup.Item>
            </ListGroup>
          </div>
        {/*Section: Content*/}

        {/*Pagination*/}
        <nav className="my-4" aria-label="...">
          <ul className="pagination pagination-circle justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Main