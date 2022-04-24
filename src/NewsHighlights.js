import axios from 'axios';
import {useState,useEffect} from 'react'
import { ListGroup,ListGroupItem } from 'react-bootstrap';

const NewsHighlights = () => {

    const [newsHighlights,setNewsHighlights] = useState([])

    useEffect(() => {
        axios.get(`/newsHighlights`)
            .then(res => {
                const newsHighlights = res.data;
                setNewsHighlights(newsHighlights)
                console.log(newsHighlights)
            })

      },[]);


    return (
        <div className="container col-lg-3 justify-content-center align-self-start">
                <div>
                    <ListGroup className=''>
                        <ListGroupItem active>
                            الوطنية
                        </ListGroupItem>
                        {
                        newsHighlights.nat ?
                        newsHighlights.nat.map((article,i) =>
                        <a href={article.source} style={{textDecoration:"none"}}>
                            <ListGroupItem>
                                
                                    {article.title}
                               
                            </ListGroupItem>
                            </a>
                        )
                        :
                        ""
                        }
                    </ListGroup>
                    <ListGroup className=' mt-3'>
                        <ListGroupItem active>
                            العالمية
                        </ListGroupItem>
                        {
                        newsHighlights.nat ?
                        newsHighlights.nat.map((article,i) =>
                        <a href={article.source} style={{textDecoration:"none"}}>
                            <ListGroupItem>
                                
                                    {article.title}
                               
                            </ListGroupItem>
                            </a>
                        )
                        :
                        ""
                        }
                    </ListGroup>
                    <ListGroup className=' mt-3'>
                        <ListGroupItem active>
                            الرياضة
                        </ListGroupItem>
                        {
                        newsHighlights.nat ?
                        newsHighlights.nat.map((article,i) =>
                        <a href={article.source} style={{textDecoration:"none"}}>
                            <ListGroupItem>
                                
                                    {article.title}
                               
                            </ListGroupItem>
                            </a>
                        )
                        :
                        ""
                        }
                    </ListGroup>
                </div>
            </div>
    )
}

export default NewsHighlights