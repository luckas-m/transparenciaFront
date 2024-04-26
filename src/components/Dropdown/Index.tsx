import { useState } from "react"
import styles from './Dropdown.module.css'

interface DropdownProps{
    children:React.ReactNode
    name:string
}


export default function Dropdown({children, name}:DropdownProps){
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(false);
      };

    return (
        <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.dropdown}
    >
      
      <a>{name}</a>
      {isOpen && (
        <div className={styles.divOpcoes}>
          <ul>
            <li>{children}</li>
          </ul>
        </div>
      )}
    </div>
    )
}