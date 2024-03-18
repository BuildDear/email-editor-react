import styles from './App.module.scss'

export function App() {
  return (
  <div
  className={styles.layout}
  >
    <img scr='/music.png' width={300} height={100}/>
    <h1>Email-power</h1>
    <div>Hello, my world !!!</div>
    <button>Click</button>
  </div>
  )
}