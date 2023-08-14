import './App.css';
import Header from './component/Header';
import FilterData from './component/FilterData';
import Cards from './component/Cards';
import {filterData, apiUrl} from '../src/Data'
import { useState, useEffect } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './component/Spinner';

function App() {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filterQuery, setFilterQuery] = useState(filterData[0].title)
  console.log(filterQuery);
  const  apiCall = async () =>{
    setLoading(true)
    try{
    const fetchdata = await fetch(apiUrl);
    let data = await fetchdata.json();
    data = data.data;
    setData(data)
    } 
    catch(error){
      toast.error('error')
    }
setLoading(false)
  }
  useEffect(()=>{
    apiCall();
  },[])
  return (
    <div className="main-container">
      <ToastContainer />
      <Header></Header>
      <FilterData 
      filterData={filterData}
      filterQuery={filterQuery}
      setFilterQuery={setFilterQuery}
      />

    {  
    loading ? (<Spinner />) : (<Cards data={data} filterQuery={filterQuery} />)
    }

    </div>
  );
}

export default App;
