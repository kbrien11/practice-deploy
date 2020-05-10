import React, { useState, useEffect } from 'react';
import {Box,Image,Card,Flex,Text} from 'rebass';
import Images from './userPicture'
import Name from './UserNames';


const Names = () => {

const[data,setData] = useState([])
const [token, setToken] = useState(sessionStorage.getItem('token'))

  
useEffect(() => {seeUsers()},[])

  const seeUsers = async () => {
    
    try{
    const response = await fetch(`http://127.0.0.1:5000/api/users/${token}`);
    const res = await response.json();
    setData(res.results);
    setToken(res.token)
    
  } catch(error) {
    console.log(error)
  
  }
  };

  const output = data.map((i) => {
    return <Name data={i}/> 
  })
return (
    <Box>

    {/* <Flex>
  <Card  marginTop={3} width={[ 330, 360 ]} mx='auto'>
    <div class = 'profilebutton'> */}
     {/* <button type = 'button' onClick = {e => seeUsers()}> Profile</button>  */}
     
    {output}
    {/* {output}  */}
    {/* </div>
  </Card>
</Flex> */}

    </Box>
)
}
export default Names
