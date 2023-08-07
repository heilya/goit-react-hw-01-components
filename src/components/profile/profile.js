import { Avatar, Description, Label, Name, Quantity, Stats, StatsItem, Wrapper } from "./profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
        <Wrapper>
            <Wrapper>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Description>@{tag}</Description>
                <Description>{location}</Description>
            </Wrapper>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>
        </Wrapper>
    );