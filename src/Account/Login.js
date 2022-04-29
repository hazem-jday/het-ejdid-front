import './Login.css';
import { Badge } from "react-bootstrap"
import axios from "axios"
import { useState } from 'react';

const Login = (props) => {


    const [loginError, setLoginError] = useState("")
    const handleLogin = (event) => {
        event.preventDefault();

        const user = {
            "username": event.target.username.value,
            "password": event.target.password.value
        }

        axios.post("/login", user).then((response) => {
            if (response.status === 200){
                localStorage.setItem("ID",""+response.data.id)
                props.setUserID(localStorage.getItem("ID"))
            }
                
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.status);
                setLoginError("الرجاء التثبت من إسم المستخدم و كلمة السر")
            } else {
                setLoginError("فشلت عملية الدخول")
            }
        });



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
                                            <h4 className="text-light"><Badge bg="primary">تسجيل الدخول</Badge></h4>
                                            <p className="text-muted mb-4">يمكنك الآن التفاعل مع المقالات و تسجيلها في حسابك</p>

                                            <h6 className="text-primary">تمت عملية تسجيل الدخول</h6>
                                            <a href="/" >
                                                <button className='btn btn-primary'>الرئيسية</button>
                                            </a>
                                            <a href="/logout" >
                                                <button className='btn btn-danger'>تسجيل الخروج</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                :

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">تسجيل الدخول</Badge></h4>
                                            <p className="text-muted mb-4">مرحبا، سجل دخولك الآن حتى تستطيع الحصول على كل ميزات الموقع</p>
                                            <form onSubmit={handleLogin}>

                                                <div className="col-auto">
                                                    <label className="sr-only" htmlFor="userNameLogIn">إسم المستخدم</label>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">@</div>
                                                        </div>
                                                        <input name="username" type="text" className="form-control" id="userNameLogIn" placeholder="إسم المستخدم" />
                                                    </div>
                                                </div>

                                                <div className="col-auto">
                                                    <label className="sr-only" htmlFor="passwordLogIn">كلمة المرور</label>
                                                    <input name="password" required type="password" className="form-control mb-2" id="passwordLogIn" placeholder="كلمة المرور" />
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">دخول</button>
                                                </div>
                                            </form>
                                            <div className="d-grid gap-2 mt-2">
                                                <h5 className='text-danger'>{loginError}</h5>
                                            </div>
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
