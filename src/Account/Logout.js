import { Badge, Button, ButtonGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Login = (props) => {

    let navigate = useNavigate()
    const handleLogout = (event) => {

        localStorage.removeItem("ID")
        props.setUserID(null)



    }
    return (

        <div className="container">





            {localStorage.getItem("ID") !== null ?
                <div className="row justify-content-center" style={{minHeight:"40vh"}}>
                    <div className="col-md-4 text-center align-items-center justify-content-center align-self-center">
                        <h4 className="text-light"><Badge bg="primary">تسجيل الخروج</Badge></h4>
                        <p className="text-muted mb-4">لن تتمكن بعد الآن من التفاعل أو تسجيل المقالات</p>

                        <button className='btn btn-danger' onClick={handleLogout}>تسجيل الخروج</button>
                    </div>
                </div>
                :
                <div className="row justify-content-center text-center bg-light" style={{minHeight:"40vh"}}>
                    <div className="col-md-4 align-items-center justify-content-center align-self-center" >
                        <h4 className="text-light"><Badge bg="primary">تسجيل الخروج</Badge></h4>

                        <h6 className="text-primary">أنت الآن غير مسجل</h6>

                        <ButtonGroup dir="ltr">
                            <Button className='btn btn-primary' onClick={()=>{navigate("/login");}}>تسجيل الدخول</Button>
                            <Button className='btn btn-primary' onClick={()=>{navigate("/");}}>الرئيسية</Button>
                        </ButtonGroup>
                        
                    </div>
                </div>


            }


        </div>


    )
}
export default Login;
