import React, {useState} from 'react'

const HW5: React.FC<any> = () => {
    const [dots, setDot] = useState<string>('')
    let currentDots = dots
    const setCurrentDot = () => {
        setDot(currentDots + '.')
    }
    dots.length < 4? setTimeout(setCurrentDot, 500) : setDot('')
    return (
        <div style={{   margin: '5% 5%',
            fontWeight: 'bold',
            minHeight: '65vmin',
            fontSize: '40px'}}>
            Nothing happens here{dots}
        </div>
    )
}

export default HW5
