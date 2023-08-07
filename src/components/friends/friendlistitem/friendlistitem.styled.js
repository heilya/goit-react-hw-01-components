import styled from 'styled-components';


export const FriendsListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 20px;
    width:250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;

export const FriendAvatar = styled.img`
    width: 48px;
    height: 48px;`;

export const FriendName = styled.p`
    font-size: 24px;
    margin: 0;
    padding: 0;`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    `;
