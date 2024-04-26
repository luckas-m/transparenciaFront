import { useState } from "react"

interface SubDropdownProps{
    children:React.ReactNode
}

export default function SubDropdown({children}:SubDropdownProps){
    const [dropdownAberta, setDropDownAberta] = useState(false)

    const handleMouseEnter = () => {
        setDropDownAberta(true)
    }

    const handleMouseLeave = () => {
        setDropDownAberta(false)
    }

    return(
        <>
            <p>Dropdown 2</p>
            {dropdownAberta && (
                <ul>
                    <div>
                            <li>{children}</li>
                    </div>
                </ul>
            )}
        </>
    )
}