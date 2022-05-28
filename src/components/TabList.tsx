import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Children, FC, ReactElement } from "react";

const Panels = ({
  children,
}: {
  children: ReactElement<{ key: string; [key: string]: any }>[] | ReactElement;
}) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Now in the theathers</Tab>
        <Tab>Favorites</Tab>
      </TabList>

      <TabPanels>
        {Children.map(children, (child) => {
          return <TabPanel key={child.key}>{child}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
};

export default Panels;
