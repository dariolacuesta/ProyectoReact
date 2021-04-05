import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Itemdata from '../../mock-data/Itemdata.json'
import  ItemDetail from '../ItemDetail/ItemDetail'
import ItemListContainer from '../ItemListContainer/ItemListContainer'



const  ItemDetailContainer = ()=> {
const [Song,setSong] = useState([])
const [Item,setItem] = useState([])
let {id} = useParams()


useEffect(()=>{

  getItem().then((result)=>{
        let filter = id ? result.filter((el)=> el.id === parseInt(id)) : result
        setItem(filter);
         setSong(result[id].songs.map(song=><li key={song}>{song}</li>))
        })
},[id]
);
const getItem = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Itemdata)
        },2000);
    })
}





return (
<>{
 Item.length >0 ? <ItemDetail  item1={Item[0]} song={Song}/>:<ItemListContainer/>
 }</>)
}
export default ItemDetailContainer;
