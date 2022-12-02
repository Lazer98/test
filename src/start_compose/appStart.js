// rfc - קיצור ליצירת קומפנינטה
import React from 'react'


export default function AppStart(props) {
  const user=props.user;
  console.log(user);
  return (
    <div className='container'>
      <p>{user}</p>
    </div>
  )
}
