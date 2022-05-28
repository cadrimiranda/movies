import { TabPanels } from "./components";
import NowPlaying from "./pages/NowPlaying/NowPLaying";

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
