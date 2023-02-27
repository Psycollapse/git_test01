import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function NewLineText(props){
  const text = props.text;
  return <div>{text}</div>;
}

const lema = "Soy el lema! y debo salir tras presionar el boton, soy global"

function MiBoton(){
  return (
    <button>Yo soy un boton</button>
  );
}


const user ={
  name: "Fernando Del Valle",
  imageUrl: 'https://th.bing.com/th/id/OIP.QsObdHBpiTyWpyOgNZ_xtAHaHa?pid=ImgDet&rs=1',
  imageSize: 90,
};

function Profile(){
  return (
    <>
    <h1>{user.name}</h1>
    <img
      className='avatar'
      src={user.imageUrl}
      alt={'Photo of '+ user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
    </>
  )
}

ReactDom.render(
  <div classname="App">
    <Profile/>
    <h1>Chupo Chupo!!! Unas jones deli</h1>
    <MiBoton/>
    <NewLineText text={lema}/>
    <img className='avatar'/>
  </div>,
  document.getElementById('root')
  )





function App() {
  return (
    <div className="App">
      <h1>Chupo Chupo!!! Unas jones deli</h1>
      <MiBoton/>
      <nl/>
      <img className='avatar'/>
      {lema}
    </div>
  );
}

export default App;
