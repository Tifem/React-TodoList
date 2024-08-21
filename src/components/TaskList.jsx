import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BasicTable from './BasicTable'


import React from 'react'
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const TaskList = () => {
  return (
    <>
  

<Box
  sx={{ width: "100%" }}
  className="flex flex-col justify-center pt-12 items-center"
>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="All" />
    <Tab label="Completed" />
    <Tab label="Active" />
  </Tabs>
  <TabPanel value={value} index={0}>
    <BasicTable />
  </TabPanel>
  <TabPanel value={value} index={1}>
    <BasicTable />
  </TabPanel>
  <TabPanel value={value} index={2}>
    <BasicTable />
  </TabPanel>
</Box>;

<BasicTable/>
    </>
  )
}

export default TaskList
