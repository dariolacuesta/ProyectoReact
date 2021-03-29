import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Itemdata from '../../mock-data/Itemdata'
import  ItemDetail from '../ItemDetail/ItemDetail'



const  ItemDetailContainer = ()=> {
const [Song,setSong] = useState([])
const [Item,setItem] = useState([])
let {id} = useParams()


useEffect(()=>{

    const call = new Promise((resolve) =>{
     resolve(Itemdata[id]);
    })
    call.then(result=>
        {setItem(result);
        setSong(result.songs.map(song=><li key={song}>{song}</li>))
        })
},[id]
);



return (<>
<ItemDetail  item1={Item} song={Song}/>
</>)
}
export default ItemDetailContainer;
