
import React from 'react'

export default function Colors(props) {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink']

    return(
        <div className="colors">
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}