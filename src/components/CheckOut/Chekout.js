import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useCartContext} from '../../cartContext/CartContext'
import { getFirestore } from '../../configs/firebase'
import firebase from 'firebase/app'
import './Chekout.css'
const Checkout = () => {
    const {cart,clearCart} = useCartContext()

    const[validate, setValidation] = useState("false");
    const [order,setOrder] = useState(undefined)
    // const [emptyInput,setEmptyInput] = useState(false);
    // const [wrongEmail, setWrongEmail] = useState(false);

    const submit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        let form = e.target
        setValidation("true")
    
    if(form.checkValidity()){
    const newOrder = {
      costumer :{
        name: document.getElementById("first_name").value + ' ' + document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value
      },
      products: [...cart], 
      total : cart.reduce((total,order)=> total + order.item1.price * order.quantity,100),
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

    clearCart()
  })
    .catch((error)=>setOrder({
      id:undefined,
      details:error
         }
      ))
    }
  }

    const ClientInfo = () => {
        return (
            <>
            <h5>Datos de la Facturación</h5>
            <div className="row col s12 formu">
    <form validate={validate} className={validate ? "was-validated" : "not-validated" } onSubmit={(e) => submit(e)}>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Nombre" id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name"></label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" placeholder="Apellido"/>
          <label htmlFor="last_name"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" placeholder="Email"/>
          <label htmlFor="email"></label>
        </div>
        <div className="input-field col s12">
          <input id="email2" type="email" className="validate" placeholder="Reingrese Email"/>
          <label htmlFor="email"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="telephone" type="tel" className="validate" placeholder="Telefono"/>
          <label htmlFor="telephone"></label>
        </div>
      </div>
      <div className="input-field ">
    <button className="col s12" type="submit">Finalizar compra</button>
    <p>Los datos de su compra y la factura seran enviados a su mail</p>
  </div>
    </form>
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