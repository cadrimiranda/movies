import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Children, FC, ReactElement } from "react";

const Panels = ({
  children,
}: {
  children: ReactElement<{ key: string; [key: string]: any }>[] | ReactElement;
}) => {
  const tabProps = {
    _selected: {
      color: "#c8c8c8",
    },
    color: "#737373",
  };
  return (
    <Tabs>
      <TabList backgroundColor="blackAlpha.500">
        <Tab {...tabProps}>Now in the theathers</Tab>
        <Tab {...tabProps}>Favorites</Tab>
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
