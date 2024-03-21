import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from  './EmailEditor.module.scss'
import { useRef, useState } from 'react'

export function EmailEditor() {

  const [text, setText] = useState(`Hey, Marik Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet? Nulla expedita possimus pariatur corrupti, ullam magni, dolores earum impedit minus sed, et velit animi dolorum eveniet temporibus ad nostrum.`)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const getSelectionText = (): string | undefined => {
    if (!textRef.current) return undefined;

    const cursorStart: number | undefined = textRef.current?.selectionStart;
    const cursorEnd: number | undefined = textRef.current?.selectionEnd;

    if (cursorStart === undefined || cursorEnd === undefined) return undefined;

    const selectedText: string = text.substring(cursorStart, cursorEnd);

    if (!selectedText) return undefined;

    return selectedText;
}


  
  return (
  <div>
    <h1>Email editor</h1>

    <div className={styles.card}>
      
      <textarea
      ref={textRef} 
      contentEditable 
      className={styles.editor} 
      spellCheck='false'
      onClick={getSelectionText}
      value={text}
      onChange={e => setText(e.target.value)}
      >

      </textarea>

      <div className={styles.actions}>

        <div className={styles.tools}>
          <button onClick={() => setText('')}>
            <Eraser size={17}/>
          </button>
          <button>
            <Bold size={17}/>
          </button>
          <button>
            <Italic size={17}/>
          </button>
          <button>
            <Underline size={17}/>
          </button>
        </div>

        <button className={styles.send_button}>Send now</button>
      </div>

    </div>
  </div>
  )
}


