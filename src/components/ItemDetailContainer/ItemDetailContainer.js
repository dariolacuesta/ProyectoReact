import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../configs/firebase'
import  ItemDetail from '../ItemDetail/ItemDetail'
import ItemListContainer from '../ItemListContainer/ItemListContainer'



const  ItemDetailContainer = ()=> {
const [Song,setSong] = useState([])
const [Item,setItem] = useState([])
let {id} = useParams()

useEffect(()=>{
    const db = getFirestore();
    const items = db.collection('menu')
    
    items.where("id","==",parseInt(id)).get().then((result)=>{
        setItem(result.docs.map(doc=>doc.data()));  
        setSong(result.docs.map(songs=>songs.data().songs.map((song,index) => <li key={index}>{song}</li>))) 
    })
},[id]);


return (
<>{
 Item.length >0 ? <ItemDetail  item1={Item[0]} song={Song}/>:<ItemListContainer/>
 }</>)
}
export default ItemDetailContainer;
