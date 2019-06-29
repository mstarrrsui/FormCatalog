import * as React from "react";
import Form from "../models/Form";
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

const DATA_URL =
  "http://localhost:3230/formslibrary/api/catalogs/find/forms/table";

interface FormFetcherResult {
  isLoading: boolean;
  error: Error | null;
  forms: Form[];
}

const useTaskFetcher = (): FormFetcherResult => {
  const [forms, setForms] = React.useState<Array<Form>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(DATA_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error...");
          throw Error("Error fetching the data!!!");
        }
      })
      .then(formData => {
        setForms(formData.Data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);
  return { isLoading, error, forms };
};

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

  const { forms, isLoading, error } = useTaskFetcher();

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
