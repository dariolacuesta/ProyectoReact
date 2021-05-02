import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {getFirestore} from '../../configs/firebase'
import './OrderDetail.css'
const OrderDetail = () => {

    const {id} = useParams()
    const [order,setOrder] = useState(undefined);
    
   
    useEffect(()=>{
        let unmounted =false ;
        setTimeout(()=>{      
            if(!unmounted){
            const db= getFirestore()
            const orderCollection = db.collection('order')
            orderCollection.doc(id).get()
            .then((docRef)=>{
                
                setOrder(docRef.data())
                
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }},0)

        return () =>{
            unmounted= true;
        }
    },[id]);

    
    return(
        <div>
            {
                order?
                <div className="cardDetail">
                <h2>Su pedido fue realizado con exito</h2>
                    <p>ID de su pedido: {id}</p>              
            <div className="row">
            <div className="col s12 cardDetail">
              <div className="card blue-grey darken-1">
              <div className="card-content white-text">
              <span className="card-title">Compra Realizada</span>
                 {
                 order.products.map((OrderDetail,i)=>
                    <li key={i}>
                        Cantidad: {OrderDetail.quantity} x {OrderDetail.item1.name}
                        <br/>
                        Artista : {OrderDetail.item1.band}
                        <br/>
                        Precio Unitario por CD: ${OrderDetail.item1.price}
                        <br/>
                        <img src={OrderDetail.item1.img} className="miniImage" alt=""></img> 
                        <br/>
                        <hr></hr>
                    </li>)
                }
                Total:$ {order.total}
                </div>
              </div>
               </div>
            </div>
                <Link to="/" className="bnt">
                    <button className="backbutton">Volver al inicio</button>
                </Link>
                
                </div>
                :
                <>
               
                </>
            }
        </div>
    )
}

export default OrderDetail