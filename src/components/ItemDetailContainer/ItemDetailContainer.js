import React,{useState,useEffect} from 'react'
import Itemdata from '../../mock-data/Itemdata'
import  ItemDetail from '../ItemDetail/ItemDetail'



const  ItemDetailContainer = ()=> {
const [Song,setSong] = useState([])
const [Item,setItem] = useState([])
useEffect(()=>{
//    setTimeout(()=>{setSong(Itemdata[2].songs.map(song=><li>{song}</li>))},2000)
    const call = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(Itemdata[2]);
        },2000)
    })
    call.then(result=>
        {setItem(result);
        setSong(result.songs.map(song=><li>{song}</li>))
        })
},[]
);



return (<>
<ItemDetail item1={Item} song={Song}/>
</>)
}
export default ItemDetailContainer;
