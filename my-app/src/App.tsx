import React, {useState} from 'react';
import './App.css';

const inform= [
  {
    header: 'Card header here',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl. Eu feugiat pretium nibh ipsum. Neque laoreet suspendisse interdum consectetur. Id semper risus in hendrerit gravida rutrum. Convallis a cras semper auctor neque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Cum sociis natoque penatibus et magnis dis parturient. Vel quam elementum pulvinar etiam non quam lacus. Et ligula ullamcorper malesuada proin libero. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Ultricies lacus sed turpis tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Fames ac turpis egestas sed tempus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor vitae purus faucibus ornare suspendisse sed nisi. Mauris augue neque gravida in fermentum.'
  },{
    header: 'Card header here',
    post: 'Nisi scelerisque eu ultrices vitae auctor eu augue. Lobortis mattis aliquam faucibus purus in massa tempor. Vitae sapien pellentesque habitant morbi tristique senectus et. At erat pellentesque adipiscing commodo elit at imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Praesent elementum facilisis leo vel fringilla. Enim sed faucibus turpis in eu mi bibendum neque. Arcu vitae elementum curabitur vitae nunc. Neque egestas congue quisque egestas. Nunc pulvinar sapien et ligula ullamcorper. Nunc congue nisi vitae suscipit tellus mauris. Id venenatis a condimentum vitae sapien. Tristique et egestas quis ipsum suspendisse. Nunc pulvinar sapien et ligula. Ut pharetra sit amet aliquam. Fusce ut placerat orci nulla pellentesque. Sed libero enim sed faucibus turpis in eu. Ultrices neque ornare aenean euismod. Ornare arcu odio ut sem nulla pharetra. Volutpat est velit egestas dui.'
  },
]

function Card (header:any) {

  const [counter, setCounter] = useState('')

  const [icons, setIcons] = useState('fas fa-angle-down')

  let btn = () => {
      counter === '' ? setCounter(header.post) : setCounter('')
      icons === 'fas fa-angle-down' ? setIcons('fas fa-angle-up') : setIcons('fas fa-angle-down')
 }

 return (
    <div >
        <div className='header'>
          <button onClick={btn} className={icons} /> 
         
             {header.header}
        </div>
        <div className='post'>
            {counter}
        </div>
  </div>
  )

}

const App = () => {
  return (
    <div className='page'>
        {inform.map((e,i) => <Card
                                header ={e.header} 
                                key={e.header} 
                                index = {i}
                                post={e.post}
                              ></Card>
        )}
    </div>
  )};

export default App