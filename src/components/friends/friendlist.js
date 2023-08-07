import { FriendListItem } from "./friendlistitem/friendlistitem";



export const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                id={item.id}
            />))}
</ul>
);