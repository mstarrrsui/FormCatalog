import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  fade
} from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { Container, Grid } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

const useStylesReddit = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fcfcfb",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main
      }
    },
    focused: {}
  })
);

function RedditTextField(props: TextFieldProps) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={
        { classes, disableUnderline: true } as Partial<OutlinedInputProps>
      }
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
      //width: 400
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  })
);

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="md">
      <form noValidate autoComplete="off">
        <Grid container>
          <Grid item md={4} sm={6}>
            <RedditTextField
              id="docNumber"
              label="Number"
              placeholder="Number"
              variant="filled"
              className={classes.textField}
              value={values.name}
              onChange={handleChange("name")}
              margin="normal"
            />
          </Grid>
          <Grid item md={4} sm={6}>
            <TextField
              id="docEdition"
              label="Edition"
              className={classes.dense}
              margin="dense"
            />
          </Grid>
          <Grid item md={4} sm={12}>
            <TextField
              id="docEdition"
              label="Edition"
              className={classes.textField}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="docDescription"
              label="Description"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
