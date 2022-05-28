import { TabPanels } from "../components";
import NowPlaying from "./NowPlaying/NowPLaying";

const Dashboard = () => {
  return (
    <div>
      <TabPanels>
        <NowPlaying />
      </TabPanels>
    </div>
  );
};

export default Dashboard;
