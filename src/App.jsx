import {data} from "./data/data"
import React,{useState} from "react"
function App() {
 
const[searchTerm,setsearchTerm]=useState("")
  return (
<div >
<input onChange={(e)=>{setsearchTerm(e.target.value)}} type="search"  className="p-2 pl-10text-xltext-gray-700  " placeholder="search here"></input>
<table className="w-full text-purple-400 h-screen  px-24 font-semibold text-sm ">
<thead className="text-xs text-lime-500  uppercase">
  <tr>
    <th className="px-3 py-6 ">ID</th>
    <th className="px-3 py-6 ">first Name</th>
    <th className="px-3 py-6 ">Last Name</th>
    <th className="px-3 py-6 ">phone</th>
   
  </tr>
</thead>
<tbody>
  {data.filter((item)=>{
    return searchTerm=== ""?item:item.first_name.includes(searchTerm)
  })
  .map((item,index)=>(
    <tr key={index} className="border-b ">
      <td className="py-4 px-6">{item.id}</td>
      <td className="py-4 px-6">{item.first_name}</td>
      <td className="py-4 px-6">{item.last_name}</td>
      <td className="py-4 px-6">{item.phone}</td>
    </tr>
  ))}
</tbody>
</table>
</div>
  )
}

export default App
