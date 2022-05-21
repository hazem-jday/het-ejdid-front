import axios from 'axios';
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'

const Liked = () => {

    const [likedArticles, setLikedArticles] = useState([])

    useEffect(() => {
        axios.get(`/liked/` + localStorage.getItem("ID"))
            .then(res => {
                const likedArticles = res.data;
                setLikedArticles(likedArticles)
            })
        

    }, []);


    function unlikeArticle(id) {
        if (localStorage.getItem("ID")) {
            console.log(localStorage.getItem("ID"))
            axios.delete(`/unlike/` + localStorage.getItem("ID") + "/" + id)
                .then((res) => {
                    setLikedArticles(res.data)
                });
        }

    }
    function deleteButton(id){
        return(
            <Button className='btn btn-danger' onClick={()=>unlikeArticle(id)}>
                حذف
                <FaHeart className='me-3'></FaHeart>
            </Button>
        )
    }


    return (
        <div className="container col-lg-12 justify-content-center align-self-start">
            <div>
                <ListGroup className='row justify-content-between'>
                    <ListGroupItem active >
                        التسجيلات
                    </ListGroupItem>
                    {
                        likedArticles.length ?
                        likedArticles.map((like, i) =>
                                
                                    <ListGroupItem className='justify-content-between d-flex' key={i}>
                                        <div className='ms-auto me-2'>
                                        <a href={"/Article/" + like.article} style={{ textDecoration: "none" }} key={i}>
                                        {like.title}
                                        </a>
                                        
                                        </div>
                                        <div>
                                        <Badge as={()=>deleteButton(like.id)}></Badge>
                                        </div>
                                    </ListGroupItem>
                                
                            )
                            :
                            <ListGroupItem className='justify-content-between d-flex'>
                                <div className='ms-auto me-2' style={{minHeight:"40vh"}}>
                                <Badge className='bg-danger' style={{fontSize:"150%"}} >لا توجد إعجابات</Badge>
                                </div>
                            </ListGroupItem>
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default Liked