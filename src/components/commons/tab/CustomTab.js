import React, { useState } from "react";
import { Box, Tab, Paper } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

const CustomTab = ({
  optionsTabs,
  configurationTabs,
  selectedAccident,
  backArrow,
}) => {
  const classes = useStyle();
  const [value, setValue] = useState("1");
  const handlerChangeTabs = (dataTab, valueTab) => {
    setValue(valueTab);
  };

  return (
    <Paper className={classes.container}>
      <TabContext value={value}>
        {backArrow && backArrow}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handlerChangeTabs}
            textColor={configurationTabs.textColor}
            indicatorColor={configurationTabs.indicatorColor}
            centered={configurationTabs.centered}
            variant={configurationTabs.variant}
            orientation={configurationTabs.orientation || "horizontal"}
          >
            {optionsTabs &&
              optionsTabs.map(({ label, value, wrapped, disabled }) => (
                <Tab
                  key={value}
                  label={label}
                  value={value}
                  wrapped={wrapped}
                  disabled={disabled}
                />
              ))}
          </TabList>
        </Box>
        {optionsTabs &&
          optionsTabs.map(({ component, value }) => (
            <TabPanel value={value} key={value}>
              {component(selectedAccident)}
            </TabPanel>
          ))}
      </TabContext>
    </Paper>
  );
};

export default CustomTab;
