import React from 'react'
import styled from "styled-components";

const Text = styled.div`
  position: absolute; 
  top: -5px;
  left: 800px;
  height: 700px;
  width: 200px;
  font-size: 15px;
  color: white;
  text-align: center;
  background-color: #000;
  border: solid 5px;
  border-color: #fff #777 #777 #fff;
  border-radius: 10%;
`

const Description = () => {
  return (
    <Text>
        <p>
        ↑: ドロップダウン<br/>
        →: 右移動<br/>
        ↓: 下移動<br/>
        ←: 左移動<br/>
        space: ぽーず<br/>
        shift: ホールド
        z: 左回転<br/>
        x: 右回転<br/>
        </p>
    </Text>
  )
}

export default Description