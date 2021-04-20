import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {getFirestore} from '../../configs/firebase'
import './OrderDetail.css'
const OrderDetail = () => {

    const {id} = useParams()
    const [order,setOrder] = useState(undefined);
    
   
    useEffect(()=>{
        if(id){
            const db= getFirestore()
            const orderCollection = db.collection('order')

            orderCollection.doc(id).get()
            .then((docRef)=>{
                setOrder(docRef.data())
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },[id]);

    console.log(order)
    return(
        <div>
            {
                order?
                <div className="cardDetail">
                <h2>Su pedido fue realizado con exito</h2>
                    <p>ID de su pedido: {id}</p>              
            <div class="row">
            <div class="col s12 cardDetail">
              <div class="card blue-grey darken-1">
              <div class="card-content white-text">
              <span class="card-title">Compra Realizada</span>
                 {
                 order.products.map((OrderDetail,i)=>
                    <li key={i}>
                        {OrderDetail.quantity} x {OrderDetail.item1.name}
                        <br/>
                        {OrderDetail.item1.band}
                        <br/>
                        <span>Total: ${OrderDetail.item1.price * OrderDetail.quantity} </span>
                        
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
                <h2>Hubo un error en su pedido</h2>
                </>
            }
        </div>
    )
}

export default OrderDetail