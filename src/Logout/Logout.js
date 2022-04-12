import { Badge } from "react-bootstrap"

const Login = (props) => {


    const handleLogout = (event) => {

        localStorage.removeItem("ID")
        props.setUserID(null)



    }
    return (

        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">


                    <div className="col-lg-12 bg-light">
                        <div className="signup d-flex align-items-center py-5">


                            {localStorage.getItem("ID") !== null ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">تسجيل الخروج</Badge></h4>
                                            <p className="text-muted mb-4">لن تتمكن بعد الآن من التفاعل أو تسجيل المقالات</p>

                                            <button className='btn btn-danger' onClick={handleLogout}>تسجيل الخروج</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">تسجيل الخروج</Badge></h4>

                                            <h6 className="text-primary">أنت غير مسجل</h6>
                                            <a href="/" >
                                                <button className='btn btn-primary'>الرئيسية</button>
                                            </a>
                                            <a href="/login" >
                                                <button className='btn btn-primary'>تسجيل الدخول</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;
