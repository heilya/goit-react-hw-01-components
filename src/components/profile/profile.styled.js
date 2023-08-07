import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;`;

export const Avatar = styled.img`
    width: 300px;
    margin-bottom: 20px;
    border-radius: 50%;`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 45px;`;

export const Description = styled.p`
font-size:24px;
color: darkgray;
margin: 0 0 20px 0;`;

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0; 
    background-color: rgba(232, 228, 228, 0.885);`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(215, 214, 214);
    padding: 20px;`;

export const Label = styled.span`
    font-size: 20px;
    color: gray;
    margin-bottom: 10px;`;

export const Quantity = styled.span`
    font-size: 24px;
    font-weight: bold;`;
