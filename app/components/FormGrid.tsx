import * as React from "react";
import useFormFetcher from "../hooks/UseFormFetcher";
import TablePaginationActions from "./FormGridPagination";

import {
  Container,
  Typography,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { forms, isLoading, error } = useFormFetcher();

  function handleChangePage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setRowsPerPage(parseInt(event.target.value, 10));
  }

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
            {forms
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(form => (
                <TableRow key={form.DocID}>
                  <TableCell>{form.DocID}</TableCell>
                  <TableCell>{form.Name}</TableCell>
                  <TableCell>{form.Edition}</TableCell>
                  <TableCell>{form.DocType}</TableCell>
                  <TableCell align="right">{form.SubTypesPiped}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
                count={forms.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "Rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Forms;
