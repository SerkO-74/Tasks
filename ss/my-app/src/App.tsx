import React from 'react';
import './App.css';
import Header from './container/header/header'
import PostOne from './container/post/postOne'
import PostTwo from './container/post/postTwo'

const App: React.FC = () => {
  return (
    <>
    <Header />
    <PostOne />
    <Header />
    <PostTwo />
    </>
  )
}

export default App;
