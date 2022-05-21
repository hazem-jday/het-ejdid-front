import { Badge, Button, ButtonGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Deleted = () => {
    
    let navigate = useNavigate()

    
    return (

        <div className="container">






                <div className="row justify-content-center text-center bg-light" style={{minHeight:"40vh"}}>
                    <div className="col-md-4 align-items-center justify-content-center align-self-center" >
                        <h4 className="text-light"><Badge bg="primary">حذف الحساب</Badge></h4>

                        <h6 className="text-danger">تم حذف الحساب بنجاح</h6>

                        <ButtonGroup dir="ltr">
                            <Button className='btn btn-primary ' onClick={()=>{navigate("/signup");}}>إنشاء حساب</Button>
                            <Button className='btn btn-primary' onClick={()=>{navigate("/");}}>الرئيسية</Button>
                        </ButtonGroup>
                        
                    </div>
                </div>

        </div>


    )
}
export default Deleted;
