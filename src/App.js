import { useState}  from 'react';
import './App.css';
import ColorButton from './components/ColorButton';



function App() {
  // 상태 변수(state 변수)
  /* const [count, setCount] = useState(0)

  
  const addCount = () => {
    console.log('클릭')
    setCount(count + 1)
    console.log(count)
  }
  const removeCount = () => {
    setCount(count - 1)
  }



  return (
    <>
      <h1 title='값'>App</h1>
      <ColorButton bgColor="green" color="white">버튼1</ColorButton>
      <ColorButton bgColor="orange" color="white">버튼2</ColorButton>
      <button onClick={addCount}>count증가</button>
      <button onClick={removeCount}>count감소</button>
      <p>count: {count}</p>
    </>
  ); */
  

  // false 닫힘 | true 열림
  // 이름짓는건 보통 일관성있게적기때문에 ~~~, set~~~ 이런식으로지어줌
  const [modal, setModal ] = useState(false)
  const closeModal = () => {
    setModal(false)
  }
  const openModal = () => {
    setModal(true)
  }
  let modalJSX = (
    <div className='modal'>
        <h2>모달창</h2>
        <button onClick={closeModal}>닫기</button>
      </div>

  )

  

  return (
    <>
      <h1>모달창 연습</h1>
      {/* 버튼 클릭시 모달창 열기 */} 
      <a href='#' onClick={openModal}>모달창 열기</a>
      {/* modal이 true 면 모달창 등장 false 안보임 */}
      {
        modal === true ? modalJSX : null
      }
      
    </>
  );

}
export default App;