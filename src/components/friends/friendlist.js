import { FriendsList } from "./friendlist.styled";
import { FriendListItem } from "./friendlistitem/friendlistitem";



export const FriendList = ({ friends }) => (
    <FriendsList>
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                id={item.id}
            />))}
</FriendsList>
);