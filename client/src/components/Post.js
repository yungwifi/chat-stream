import React from 'react'

const Post = (props) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }
    return (
        <div>

        </div>
    )
}

export default Post