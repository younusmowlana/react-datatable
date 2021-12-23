
import './App.css';
import {useState,useEffect} from 'react'
import { data } from './data/data';
import DataTable from './components/DataTable';


function App() {
  const [items, setItems] = useState(data)
  const [searchText, setsearchText] = useState('')

  useEffect(() => {
  //  setItems(data)
  }, [])

const handleSearch = (event) => {
//let value = event.target.value.toLowerCase();
setsearchText(event.target.value)


}



  return (
    <div className="App">
     {/* Data Table

     <input type="text" onChange={(e)=>handleSearch(e)}/>
     <table>
    
      <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Is partner</th>
    <th>Is Available</th>
  </tr>
  {data.filter((val)=>{
    if (searchText === '') {
      return val
    }else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
      return val
    } 
  }).map(item => (<>
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td><input type="checkbox" defaultChecked={item.isPartner ? true : false}/></td>
    <td><input type="checkbox" defaultChecked={item.isAvailable ? true : false}/></td>
  </tr>
  </>))}
  
     </table> */}
     <DataTable/>
    </div>
  );
}

export default App;
