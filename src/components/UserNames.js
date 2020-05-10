import React,{useState} from 'react';
import {Flex} from 'rebass';

const Name = (props)=> {

return (
  <div>
    <Flex>
      <div class = 'fullName'>  
      <h3> Welcome to Uva  </h3>
    <p>{props.data[0]+ '!'}    </p>
    {/* <p>{props.data[1]}</p> */}
   {/* <p>{props.data[0]}  {props.data[1]}</p> */}
  
  
</div>


</Flex>
</div>
)
 }
 export default Name