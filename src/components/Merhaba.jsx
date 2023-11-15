import React, { useState } from 'react'

export default function Merhaba() {
  return (
    <>
      <button onClick={() => console.log("deneme")} type='button'>Counter</button>
      <div style={{backgroundColor:"red"}}>counter</div>
    </>
  )
}
