import React from 'react'
import Post from './Post'

function Wall(props) {



    return (
        <div>
            <div>{ props.posts.map(u =><Post modifiable={props.modifiable} changeHandler={() => props.changeHandler()} id={u._id} name={u.author} pic={props.pic} image={u.image} pseudo={u.author} text={u.text}/>)}</div>
        </div>
    )
}

export default Wall