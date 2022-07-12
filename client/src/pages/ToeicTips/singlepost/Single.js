import React from 'react'
import Posts from '../posts/posts'
import Sidebar from '../sidebar/sidebar'
import SinglePost from './singlepost'

export default function Single() {
  return (
    <div>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
