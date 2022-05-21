import { useState,useEffect } from 'react';
import './Settings.css';
import { Badge } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Settings = (props) => {

    const [updated, setUpdated] = useState("")
    const [firstName, setFirstName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [username, setUserName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    let navigate = useNavigate()
    useEffect(() => {
        axios.get(`/user/` + localStorage.getItem("ID"))
            .then(res => {
                const userInfo = res.data;
            
                setFirstName(userInfo.firstName)
                setFamilyName(userInfo.familyName)
                setUserName(userInfo.username)
                setBirthDate(userInfo.birthDate)
                setEmail(userInfo.email)
                setPassword(userInfo.password)
            })
        }, []);

        const updateInfo = (event) => {
            event.preventDefault();

            setError("")
    
            const user = {
                "username": event.target.username.value,
                "firstName": event.target.firstName.value,
                "familyName": event.target.familyName.value,
                "birthDate": event.target.birthDate.value,
                "email": event.target.email.value,
                "password": event.target.password.value
            }
    
            axios.put("/user/"+localStorage.getItem("ID"), user)
                .then((response) => {
                    if (response.status === 200){
                        setUpdated(true)
                        alert("تمت عملية التعديل بنجاح")
                    }
                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response.status);
                        setError("إسم المستخدم موجود مسبقا")
                        console.log(updated)
                    }
                });
    
        }
        const deleteUser = () =>{
            axios.delete("/user/"+localStorage.getItem("ID"))
                    .then((response) => {
                        if (response.status === 200){
                            localStorage.removeItem("ID")
                        }
                            
                    })
    }


    return (

        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-lg-12 bg-light">
                        <div className="signup d-flex align-items-center py-5">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h4 className="text-light"><Badge bg="primary">إعدادات الحساب</Badge></h4>
                                            <p className="text-muted mb-4">يمكنك هنا تعديل معلومات حسابك</p>
                                            <form onSubmit={updateInfo}>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="nameSignUp">الإسم</label>
                                                    <input name="firstName" type="text" className="form-control mb-2" id="nameSignUp" placeholder="حازم" pattern="[a-zأ-ي]{2,14}" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="familyNameSignUp">اللقب</label>
                                                    <input name="familyName" type="text" className="form-control mb-2" id="familyNameSignUp" placeholder="الجدي" pattern="[a-zأ-ي]{2,14}" value={familyName} onChange={e=>setFamilyName(e.target.value)}/>
                                                </div>
                                                <div className="col-auto">

                                                    <label className="sr-only text-primary" htmlFor="userNameSignUp">إسم المستخدم</label>
                                                    <div className="input-group mb-2" >

                                                        <input name="username" type="text" className="form-control" id="userNameSignUp" placeholder="إسم المستخدم" value={username} onChange={e=>setUserName(e.target.value)}/>
                                                    

                                                    </div>
                                                    <h6 className="text-danger">{error}</h6>

                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="birthSignUp">تاريخ الولادة</label>
                                                    <input name="birthDate" type="date" className="form-control mb-2" id="birthSignUp" placeholder="تاريخ الولادة" value={birthDate} onChange={e=>setBirthDate(e.target.value)}/>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="eMailSignUp">البريد الإلكتروني</label>
                                                    <input name="email" type="email" className="form-control mb-2" id="eMailSignUp" placeholder="hazemjday@gmail.com" value={email} onChange={e=>setEmail(e.target.value)}/>
                                                </div>
                                                <div className="col-auto">
                                                    <label className="sr-only text-primary" htmlFor="passwordSignUp">كلمة المرور</label>
                                                    <input name="password" required type="password" className="form-control mb-2" id="passwordSignUp" placeholder="كلمة المرور" value={password} onChange={e=>setPassword(e.target.value)}/>
                                                </div>

                                                <div className="d-grid gap-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">تعديل</button>
                                                    
                                                </div>
                                            </form>
                                            <div className="d-grid gap-2 mt-2">
                                            <button className="btn btn-danger btn-block text-uppercase mb-2 shadow-sm" onClick={() =>{
                                                        let resultat = window.confirm("هل تريد حقا حذف حسابك ؟");
                                                        if(resultat){
                                                            props.setUserID(null)
                                                            deleteUser();
                                                            
                                                            navigate("/Deleted");
                                                        }
                                                            
                                                        
                                                    }
                                                    }>حذف الحساب</button>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Settings;
