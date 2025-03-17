import PropTypes from 'prop-types'

import { useState } from 'react'
import { data } from './../data';
const searchform = ({item,updateTask}) => {
 const [value,setusers] = useState(item.taskName)
 const handlesubmit=(e)=>{
    e.preventDefault()
    updateTask(value,item.id)
    setValue("")
 }
  return (
    <div>
        <form  onSubmit={handlesubmit}   className="font-medium font-serif bg-black text-white h-36 w-56 rounded-md text-center  ">
       <input value={value} onChange={(e) =>{setusers(e.target.value) }}  className=" border-2 border-yellow-700 rounded-md  px-2 py-2 outline-none" type="text" />
       <button  type="submit" className=" pt-2  bg-amber-700 border-2 border-black p-2 rounded-md text-black text-sm font-serif" >

    update
       </button>
       </form> 
    </div>
  )
}


export default searchform