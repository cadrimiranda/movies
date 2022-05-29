import { TabPanels } from "../components";
import FavoriteMovies from "./Favorites/Favorites";
import NowPlaying from "./NowPlaying/NowPLaying";

const Dashboard = () => {
  return (
    <div>
      <TabPanels>
        <NowPlaying key="1" />
        <FavoriteMovies key="2" />
      </TabPanels>
    </div>
  );
};

export default Dashboard;
