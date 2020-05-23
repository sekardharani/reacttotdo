import React from 'react'

export default function Child1(props) {
    console.log(props)

    const childDispatch = () => {
        props.parentDispatch({type:"chomp",payload:"John"});
    }

    return (
        <div>
            {props.parentSate[0].name}

            <button onClick={childDispatch}>Child Dispatch</button>
        </div>
    )
}
