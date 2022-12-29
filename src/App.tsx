import React from 'react';
import './App.css';
import Clock from './components/clock';
import data from './json/1.json'
import JsonTest from './components/jsonParser';
import styled from 'styled-components';

const NexonDiv = styled.div`
  width:100%;
  text-align:center;
`

class App extends React.Component{
  render(): React.ReactNode {
    return (
      <div>
        <JsonTest data={JSON.stringify(data)} />
        <Clock />
        <NexonDiv>Data based on NEXON DEVELOPERS</NexonDiv>
      </div>
    );
  }
}

export default App;