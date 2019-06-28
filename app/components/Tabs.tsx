import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import SortableTable from "./SortableTable";
import SimpleTable from "./SimpleTable";

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps): React.ReactElement {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: "300px"
  }
});

export default function CenteredTabs(): React.ReactElement {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number): void {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      {value === 0 && <SortableTable />}
      {value === 1 && <SimpleTable />}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </Paper>
  );
}
