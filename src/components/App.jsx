import user from "../user.json";
import data from "../data.json";



import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";

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
    </div>
  );
};
