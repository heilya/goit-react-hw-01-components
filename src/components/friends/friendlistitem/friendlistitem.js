import { FriendAvatar, FriendName, FriendsListItem, Status} from "./friendlistitem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <FriendsListItem>
        <Status style={{backgroundColor: isOnline ? "#008000" : "#ff0000"}}></Status>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
    </FriendsListItem>
);


