import * as React from "react";
import useFormFetcher from "../hooks/UseFormFetcher";

import {
  Container,
  Typography,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    //marginLeft: theme.spacing(1),
    //marginRight: theme.spacing(1),
    width: "auto"
  },
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

const Forms: React.SFC = function() {
  const classes = useStyles();

  const { forms, isLoading, error } = useFormFetcher();

  let titleText = "Forms";

  if (error) {
    titleText = error.message;
  }

  if (isLoading) {
    titleText = "Please wait... loading......";
  }

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="lg">
        <Typography variant="h6" id="tableTitle">
          {titleText}
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Edition</TableCell>
              <TableCell>DocType</TableCell>
              <TableCell align="right">Coverages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map(form => (
              <TableRow key={form.DocID}>
                <TableCell>{form.DocID}</TableCell>
                <TableCell>{form.Name}</TableCell>
                <TableCell>{form.Edition}</TableCell>
                <TableCell>{form.DocType}</TableCell>
                <TableCell align="right">{form.SubTypesPiped}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Forms;
