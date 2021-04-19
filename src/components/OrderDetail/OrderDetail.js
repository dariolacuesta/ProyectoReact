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
              <div class="col s12 m4" >
               <div class="card-panel teal">
                 {
                 order.products.map((OrderDetail,i)=>
                    <li key={i}>
                        {OrderDetail.quantity}  CDS {OrderDetail.item1.name}
                        <br/>
                        {OrderDetail.item1.band}
                        <br/>
                        <span>Total: ${OrderDetail.item1.price * OrderDetail.quantity} </span>
                    </li>)
                }
                {/* <span>Total: ${OrderDetail.item1.price * OrderDetail.quantity}</span> */}
                </div>
               </div>
            </div>
                <Link to="/" className="bnt">
                    <button>Volver al inicio</button>
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