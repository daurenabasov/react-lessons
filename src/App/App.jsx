import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { POSTS_URL } from '../Constants/api';

const App = () => {

  const [data, setData] = useState([])
  console.log(data);

  const getData = async () => {
    const response = await axios.get(POSTS_URL)
    setData(response.data)
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
        
    </div>
  );
};

export default App;