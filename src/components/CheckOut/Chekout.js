import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useCartContext} from '../../cartContext/CartContext'
import { getFirestore } from '../../configs/firebase'
import firebase from 'firebase/app'
import './Chekout.css'
const Checkout = () => {
    const {cart,clearCart} = useCartContext()
    const [order,setOrder] = useState(undefined)
    const [emptyInput,setEmptyInput] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [finishPurchase, setFinishPurchase] = useState(false)
  
    
    
    const createOrder = () => {
    const newOrder = {
      costumer :{
        name: document.getElementById("first_name").value + ' ' + document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        email2 : document.getElementById("email2").value
      },
      products: [...cart], 
      total : cart.reduce((total,order)=> total + order.item1.price * order.quantity,1),
      createOn: firebase.firestore.Timestamp.fromDate(new Date())
    }
    const db = getFirestore()
    const orders = db.collection("order")
    const itemCollection = db.collection("menu")

    orders.add(newOrder).then((resp)=>{
      setOrder({
        id:resp.id,
        details:newOrder
      })
  
    cart.forEach(element=>{
      let stockUpdate = {}
      stockUpdate[`${element.item.size}`] = firebase.firestore.FieldValue.increment(element.quantity * -1)
      itemCollection.where("id","==",element.item.id).get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=> itemCollection.doc(doc.id).update(stockUpdate))
      })
      .catch((err)=>{
        console.log("Error al actualizar stock",err)
      })
    })
  })
    .catch((error)=>setOrder({
      id:undefined,
      details:error
         }
      ))
      clearCart()
    }
  
    const checkData = (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const email2 = document.getElementById("email2").value;

    if(email === '' || email2 ===""){
      setEmptyInput(true);
    }else{
      setEmptyInput(false);
      if(email=== email2){
        setWrongEmail(false); 
        createOrder();
        setFinishPurchase(true)
      }
      else{
        setWrongEmail(true)
      }
    }
  }

    const ClientInfo = () => {
        return (
          finishPurchase === false ?
            <>
            <h5>Datos de la Facturación</h5>
            <div className="row col s12 formu">
    <form>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Nombre" id="first_name" type="text" required className="validate"/>
          <label htmlFor="first_name"></label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" required placeholder="Apellido"/>
          <label htmlFor="last_name"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" required placeholder="Email"/>
          <label htmlFor="email"></label>
        </div>
        <div className="input-field col s12">
          <input id="email2" type="email" className="validate" required placeholder="Reingrese Email"/>
          <label htmlFor="email"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="telephone" type="tel" className="validate" required placeholder="Telefono"/>
          <label htmlFor="telephone"></label>
        </div>
      </div>
      <div className="input-field ">
        {
          emptyInput ?
          <span className="warning-text"> Por favor complete todos los campos</span>
          :wrongEmail &&
          <span className="warning-text">El correo no coincide</span>
        }
    <button className="col s12" type="submit" onClick={(e)=>checkData(e)}>Finalizar compra</button>
    <p>Los datos de su compra y la factura seran enviados a su mail</p>
  </div>
    </form>
  </div>
  </> 
  :
  <>
    <div className="purchaseMsg">
       <h2>Su compra esta siendo procesada</h2>
       <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-blue-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
     </div>
  </>
      ) 
  }




return (
    <div>
        {order ===undefined ? <ClientInfo/> :<Redirect to ={`/order/${order.id}`}/>}
    </div>
    )
}

export default Checkout 