import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from  './EmailEditor.module.scss'

export function EmailEditor() {
  
  return (
  <div>
    <h1>Email editor</h1>

    <div className={styles.card}>
      
      <div className={styles.editor}>
      Hey, Marik
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet? Nulla expedita possimus pariatur corrupti, ullam magni, dolores earum impedit minus sed, et velit animi dolorum eveniet temporibus ad nostrum.
      </div>

      <div className={styles.actions}>

        <div className={styles.tools}>
          <button><Eraser size={17}/></button>
          <button><Bold size={17}/></button>
          <button><Italic size={17}/></button>
          <button><Underline size={17}/></button>
        </div>

        <button className={styles.send_button}>Send now</button>
      </div>

    </div>
  </div>
  )
}


