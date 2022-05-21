import { useState } from 'react';
import './Signup.css';
import { Badge } from "react-bootstrap"
import axios from "axios"

const Signup = (props) => {

    const [signedup, setSignedup] = useState(false)
    const [error, setError] = useState("")
    const handleSignup = (event) => {
        event.preventDefault();

        const user = {
            "username": event.target.username.value,
            "firstName": event.target.firstName.value,
            "familyName": event.target.familyName.value,
            "birthDate": event.target.birthDate.value,
            "email": event.target.email.value,
            "password": event.target.password.value
        }

        axios.post("/signup", user)
            .then((response) => {
                if (response.status === 201)
                    setSignedup(true)

            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.status);
                    setError("إسم المستخدم موجود مسبقا")
                } else {
                    setError("فشلت عملية الدخول")
                }
            });

    }

    return (

        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">


                    <div className="col-lg-12 bg-light">
                        <div className="signup d-flex align-items-center py-5">

                            {
                            
                            localStorage.getItem("ID") !== null ?
                            <div className="container" style={{minHeight:"40vh"}}>
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">إنشاء حساب</Badge></h4>
                                            <p className="text-muted mb-4">بإنشاء حساب في الموقع ستتحصل على ميزات أكثر كالتفاعل مع المقالات و تسجيلها في حسابك</p>
                                            
                                            <h6 className="text-danger">عذرا ! لا يمكنك إنشاء حساب بينما أنت متصل، سجل الخروج لتتمكن من ذلك</h6>
                                            <a href="/login" >
                                                <button className='btn btn-danger'>تسجيل الخروج</button>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                            :(
                            !signedup ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">إنشاء حساب</Badge></h4>
                                            <p className="text-muted mb-4">بإنشاء حساب في الموقع ستتحصل على ميزات أكثر كالتفاعل مع المقالات و تسجيلها في حسابك</p>
                                            <form onSubmit={handleSignup}>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="nameSignUp">الإسم</label>
                                                    <input name="firstName" type="text" className="form-control mb-2" id="nameSignUp" placeholder="حازم" pattern="[a-zأ-ي]{2,14}" />
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="familyNameSignUp">اللقب</label>
                                                    <input name="familyName" type="text" className="form-control mb-2" id="familyNameSignUp" placeholder="الجدي" pattern="[a-zأ-ي]{2,14}" />
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="userNameSignUp">إسم المستخدم</label>
                                                    <div className="input-group mb-2" >

                                                        <input name="username" type="text" className="form-control" id="userNameSignUp" placeholder="إسم المستخدم" />
                                                    </div>
                                                    <h6 className="text-danger">{error}</h6>

                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="birthSignUp">تاريخ الولادة</label>
                                                    <input name="birthDate" type="date" className="form-control mb-2" id="birthSignUp" placeholder="تاريخ الولادة" />
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="eMailSignUp">البريد الإلكتروني</label>
                                                    <input name="email" type="email" className="form-control mb-2" id="eMailSignUp" placeholder="hazemjday@gmail.com" />
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="passwordSignUp">كلمة المرور</label>
                                                    <input name="password" required type="password" className="form-control mb-2" id="passwordSignUp" placeholder="كلمة المرور" />
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">تسجيل</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container">
                                    <div className="row  align-items-center justify-content-center" style={{minHeight:"40vh"}}>
                                        <div className="row col-lg-10 col-xl-7 mx-auto  text-center" >
                                            <h4 className="text-light"><Badge bg="primary">إنشاء حساب</Badge></h4>
                                            
                                            <h6 className="text-primary">تهانينا ! لقد تم إنشاء الحساب بنجاح.</h6>

                                            <p className="text-muted mb-4">الآن قد تحصلت على ميزات أكثر كالتفاعل مع المقالات و تسجيلها في حسابك</p>
                                            
                                            <a href="/login" >
                                                <button className='btn btn-primary'>تسجيل الدخول</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;
