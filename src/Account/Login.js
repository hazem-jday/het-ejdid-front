import './Login.css';
import { Badge,Button, ButtonGroup } from "react-bootstrap"
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    let navigate = useNavigate()

    const [loginError, setLoginError] = useState("")
    const handleLogin = (event) => {
        event.preventDefault();

        const user = {
            "username": event.target.username.value,
            "password": event.target.password.value
        }

        axios.post("/login", user).then((response) => {
            if (response.status === 200) {
                localStorage.setItem("ID", "" + response.data.id)
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

        <div className="container">



            {localStorage.getItem("ID") !== null ?
                 <div className="row justify-content-center bg-light" style={{minHeight:"40vh"}}>
                    <div className="col-md-4 text-center align-items-center justify-content-center align-self-center">
                        <h4 className="text-light"><Badge bg="primary">تسجيل الدخول</Badge></h4>
                        
                        <h6 className="text-primary">تمت عملية تسجيل الدخول</h6>

                        
                        <p className="text-muted mb-4">يمكنك الآن التفاعل مع المقالات و تسجيلها في حسابك</p>

                        <ButtonGroup dir="ltr">
                            <Button className="btn btn-danger" onClick={()=>{navigate("/logout");}}>تسجيل الخروج</Button>
                            <Button className="btn btn-primary" onClick={()=>{navigate("/");}}>الرئيسية</Button>
                        </ButtonGroup>

                    </div>
                </div>
                :

                <div className="row justify-content-center bg-light" style={{minHeight:"40vh"}}>
                    <div className="col-md-4 align-items-center justify-content-center align-self-center">
                        <h4 className="text-light"><Badge bg="primary">تسجيل الدخول</Badge></h4>
                        <p className="text-muted mb-4">مرحبا، سجل دخولك الآن حتى تستطيع الحصول على كل ميزات الموقع</p>
                        <form onSubmit={handleLogin}>

                            <div className="col-md-12">
                                <label className="sr-only text-primary" htmlFor="userNameLogIn">إسم المستخدم</label>

                                <div className="input-group mb-2">


                                    <input name="username" type="text" className="form-control" id="userNameLogIn" placeholder="إسم المستخدم" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label className="sr-only text-primary" htmlFor="passwordLogIn">كلمة المرور</label>
                                <div className="input-group mb-2">

                                    <input name="password" required type="password" className="form-control mb-2" id="passwordLogIn" placeholder="كلمة المرور" />
                                </div>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                            <h5 className='text-danger'>{loginError}</h5>
                        </div>
                            <div className="d-grid gap-2 mt-2">
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">دخول</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            }

        </div>


    )
}
export default Login;
