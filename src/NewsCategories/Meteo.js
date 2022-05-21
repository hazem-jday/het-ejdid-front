import { useEffect, useState } from 'react';
import axios from 'axios';

import { Badge } from 'react-bootstrap';





const Meteo = () => {
    const [meteo,setMeteo] = useState([]);

    

    useEffect(() => {


        axios.get(`/meteo`)
            .then(res => {
                const meteo = res.data;
                setMeteo(meteo)
                
            })

    }, []);













    return (
        <div className="container row justify-content-center" dir="rtl" style={{}}>
            <div className='row col-lg-12 text-center justify-content-center' dir="rtl">

                <div className="col-lg-12">
                    <h4 className="text-light text-center"><Badge bg="primary">أحوال الطقس</Badge></h4>
                </div>
                <hr className='divider py-1 bg-primary' />
                <div className="row col-lg-12 justify-content-center text-center">
                    <table className="table-primary text-center border border-primary">
                        <thead>
                        <tr className="table-primary text-center text-primary" style={{fontSize:"120%"}}>
                                    <th  className="text-primary text-center">اليوم</th>
                                    <th className="text-primary text-center">حالة الطقس</th>
                                    <th className="text-primary text-center">الحرارة الدنيا</th>
                                    <th className="text-primary text-center">الحرارة القصوى</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            meteo.map((m,i) =>
                                i === 0 ?(
                                    <tr className=" text-center" key={i} style={{background:"#0d6efd55",fontSize:"110%"}}>
                                        <td className="text-center">{m.day +" "+m.date}</td>
                                        <td className="text-center"><img alt="weather" src={m.image}/></td>
                                        <td className="text-center">{m.min}</td>
                                        <td className="text-center">{m.max}</td>
                                    </tr>
                                )
                                :
                                (
                                <tr className="table-primary text-center" key={i} style={{fontSize:"110%"}}>
                                    <td className="text-center">{m.day +" "+m.date}</td>
                                    <td className="text-center"><img alt="weather" src={m.image}/></td>
                                    <td className="text-center">{m.min}</td>
                                    <td className="text-center">{m.max}</td>
                                </tr>
                                )
                            
                            )
                        }
                        </tbody>
                    </table>
                </div>

                

            </div>




        </div>
    )
}
export default Meteo