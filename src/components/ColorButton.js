import React from 'react'

export default function ColorButton(props) {
    // 분할대입
    const { bgColor, color, children } = props;
    const style = {
        backgroundColor: bgColor,
        color: color
    }
  return (
    <>
        <button style={style}>{children}</button>
    </>
    
    /* props 의 속성중 children 은 자식요소(x) 자식을 가져(물려줌)오는건 보통 태그안에 텍스트정보,태그자체를 가져옴 */
  )
}
