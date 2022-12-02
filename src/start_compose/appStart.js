import React from 'react'


export default function AppStart(props) {
  const user=props.user;
  const num1=props.num1;
  const num2=props.num2;

  console.log(user);
  return (
    <div className='container'>
      <p>{user}</p>
      <p>sum: {num1+num2}</p>
    </div>
  )
}
