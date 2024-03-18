import { useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() {
  const [title, setTitle] = useState('Null')

  return (
  <div className={styles.layout} >
    <img scr='/music.png' width={300} height={100}/>
    <h1>Email-power</h1>
    <Details title={title} setTitle={setTitle} />
  </div>
  )
}


