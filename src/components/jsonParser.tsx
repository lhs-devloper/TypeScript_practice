import React from "react";
import redCube from '../img/cube_icon01.png'
import blackCube from '../img/cube_icon02.png'
import additionalCube from '../img/cube_icon03.png'
import questionableCube from '../img/cube_icon04.png'
import meisterCube from '../img/cube_icon05.png'
import masterCube from '../img/cube_icon06.png'
import { IHistory } from "../interface/CubeHistoryDTO";

interface Props{
    data: string;
}

class JsonTest extends React.Component<Props>{
    render(): React.ReactNode {
        const { data } = this.props
        const { count , cube_histories } = JSON.parse(data);
        function imageReturn(cube_name: string){
          switch(cube_name){
            case '수상한 큐브':
              return questionableCube
            case '블랙 큐브':
              return blackCube
            case '레드 큐브':
              return redCube
            case '장인의 큐브':
              return meisterCube
            case '에디셔널 큐브':
              return additionalCube
            case '명장의 큐브':
              return masterCube
          }
        }
        return (
            <div>
            <div>Total count: {count}</div>
            {cube_histories.map((history: IHistory) => (
              <div key={history.id}>
                <div>Character name: {history.character_name}</div>
                <div>부위: {history.item_equip_part}</div>
                <div>아이템 레벨: {history.item_level}</div>
                <div>대상 아이템: {history.target_item}</div>
                <div>사용한 큐브: <img src={imageReturn(history.cube_type)} alt="cube"/> </div>
                <div>등급: {history.before_potential_options[0].grade}</div>
                <div>전옵션1: {history.before_potential_options[0].value}</div>
                <div>전옵션2: {history.before_potential_options[1].value}</div>
                <div>전옵션3: {history.before_potential_options[2].value}</div>
                <br/>
                <div>등급: {history.after_potential_options[0].grade}</div>
                <div>후옵션1: {history.after_potential_options[0].value}</div>
                <div>후옵션2: {history.after_potential_options[1].value}</div>
                <div>후옵션3: {history.after_potential_options[2].value}</div>
                <br />
              </div>
            ))}
          </div>
    
        )
    }
}

export default JsonTest;
