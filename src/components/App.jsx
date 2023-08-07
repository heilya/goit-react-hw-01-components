import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";



import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friends/friendlist";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};