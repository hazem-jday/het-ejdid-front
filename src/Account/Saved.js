import axios from 'axios';
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa'




const Saved = () => {

    const [savedArticles, setSavedArticles] = useState([])

    useEffect(() => {
        axios.get(`/saved/` + localStorage.getItem("ID"))
            .then(res => {
                const savedArticles = res.data;
            
                setSavedArticles(savedArticles)
            })
        

    }, []);


    function unsaveArticle(id) {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            axios.delete(`/unsave/` + localStorage.getItem("ID") + "/" + id)
                .then((res) => {
                    setSavedArticles(res.data)
                });
        }

    }
    function deleteButton(id){
        return(
            <Button className='btn btn-danger' onClick={()=>unsaveArticle(id)}>
                حذف
                <FaSave className='me-3'></FaSave>
            </Button>
        )
    }


    return (
        <div className="container col-lg-12 justify-content-center align-self-start">
            <div>
                <ListGroup className='justify-content-start' style={{minHeight:"40vh"}}>
                    <ListGroupItem active >
                        التسجيلات
                    </ListGroupItem>
                    {
                        savedArticles.length ?
                        savedArticles.map((save, i) =>
                                
                                    <ListGroupItem className='col-lg-12 justify-content-between ' key={i}>
                                        <div className='row'>
                                        <a href={"/Article/" + save.article} style={{ textDecoration: "none" }} key={i}>
                                        {save.title}
                                        </a>
                                        
                                        </div>

                                        <div className="text-start">
                                        <Badge as={()=>deleteButton(save.id)}></Badge>
                                        </div>
                                    </ListGroupItem>
                                
                            )
                            :
                            <ListGroupItem className='justify-content-between d-flex'>
                                <div className='ms-auto me-2' style={{minHeight:"40vh"}}>
                                <Badge className='bg-danger' style={{fontSize:"150%"}} >لا توجد تسجيلات</Badge>
                                </div>
                            </ListGroupItem>
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default Saved