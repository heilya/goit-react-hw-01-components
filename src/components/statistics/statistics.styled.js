import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;`;

export const Title = styled.h2`
    font-size: 40px;`;

export const StatList = styled.ul`
    
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;`;

    export const StatListItem = styled.li`
    display: flex;
    width: 100px;
    height:100px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    color: white;
    `;

export const Label = styled.span`
font-size: 24px;`;

export const  generateDarkBackgroundColor = () =>{
  let color = '#';
  
  let red = Math.floor(Math.random() * 128).toString(16);
  let green = Math.floor(Math.random() * 128).toString(16);
  let blue = Math.floor(Math.random() * 128).toString(16);
  
  if (red.length === 1) {
    red = '0' + red;
  }
  
  if (green.length === 1) {
    green = '0' + green;
  }
  
  if (blue.length === 1) {
    blue = '0' + blue;
  }
  
  color += red + green + blue;
  
  return color;
};