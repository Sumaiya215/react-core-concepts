import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'

function App() {
 
  const actors = ['Jovan','Siam','Apurbo','Mishu Sabbir'];

  const books = [
    {id:1,name:'physics', price:100},
    {id:2,name:'math', price:120},
    {id:3,name:'chemistry', price:140},
    {id:4,name:'biology', price:160},
  ]

  const singers = [
    {id:1, name:'Dr. Mahfuzur Rahman', age:68},
    {id:2, name:'Eva Rahman', age:38},
    {id:3, name:'Habib Wahid', age:40},
    {id:4, name:'Pritom', age:28},
  ]
  return (
    <>
      <h1>Vite + React</h1> 
      <Bookstore books={books}></Bookstore>

      {
          singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Afran Nisho"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device  name="Watch" price="3"></Device>
      <Person></Person> 
      <Student grade="7" score="90"></Student> 
      <Student grade={12} score="85"></Student> 
      <Student></Student>  
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This device: {props.name} price:{props.price} </h2>
}

function Person(){
  const age = 25;
  const money = 30;
  const person = {name: 'Sadia', age: 10}
  return <h3>I am {person.name} with age: {age + money}</h3>
  
}

function Student({grade=1,score=0}){
  console.log(grade,score)
  return ( 
  <div className="student">
    <h3>This is a student</h3>
    <p>Class: {grade} </p>
    <p>Score: {score} </p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }

  return (
    <div style={developerStyle}>
      <h5>Devop Devop</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
