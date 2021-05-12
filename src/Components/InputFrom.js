import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridRow: {
    marginBottom: "20px",
  },
  typoLabel: {
    marginRight: "10px",
  },
  selectTitle: {
    width: "120px",
  },
  selectNation: {
    width: "180px",
  },
}));

export default function InputFrom() {
  const classes = useStyles();
  const [user, setuser] = useState({
    title: "",
    fname: "",
    lname: "",
    birthday: new Date(),
    nation: "",
    citizenID: "",
  });

  const handleBtnSubmit = () => {
    console.log("sdsdsd");
  };

  const handleDateChange = (date) => {
    // setSelectedDate(date);
    setuser({ ...user, ["birthday"]: date });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setuser({ ...user, [name]: value });
  };
  return (
    <form onSubmit={handleBtnSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item xs={12} container className={classes.gridRow}>
              <Grid item xs={4} container alignItems="center">
                <Typography className={classes.typoLabel}>Title : *</Typography>
                <FormControl
                  variant="outlined"
                  required
                  className={classes.formControl}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    className={classes.selectTitle}
                    id="demo-simple-select"
                    value={user.title}
                    name="title"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Mr."}>Mr.</MenuItem>
                    <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                    <MenuItem value={"Miss"}>Miss</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} container alignItems="center">
                <Typography className={classes.typoLabel}>
                  Firstname : *
                </Typography>
                <TextField
                  id="standard-select-currency"
                  value={user.fname}
                  name="fname"
                  variant="outlined"
                  required={true}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4} container alignItems="center">
                <Typography className={classes.typoLabel}>
                  Lastname : *
                </Typography>
                <TextField
                  id="standard-select-currency"
                  value={user.lname}
                  name="lname"
                  variant="outlined"
                  required={true}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.gridRow}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={4} container alignItems="center">
                  <Typography className={classes.typoLabel}>
                    Birthday : *
                  </Typography>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="MM/DD/YYYY"
                    value={user.birthday}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid item xs={8} container alignItems="center">
                <Typography className={classes.typoLabel}>
                  Nationality :
                </Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="inputlabelNation">Please Select</InputLabel>
                  <Select
                    id="selectNation"
                    className={classes.selectNation}
                    name="nation"
                    value={user.nation}
                    label="Please Select"
                    onChange={handleChange}
                  >
                    <MenuItem value={"China"}>China</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Thailand"}>Thailand</MenuItem>
                    <MenuItem value={"VietNam"}>VietNam</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.gridRow}>
              <Typography className={classes.typoLabel}>CitizenID :</Typography>
              <input
                id="standard-select-currency"
                value={user.citizenID}
                type="number"
                name="citizenID"
                variant="outlined"
                maxlength="1"
                size={1}
                required={true}
                onChange={handleChange}
              />
              <TextField
                id="standard-select-currency"
                value={user.citizenID}
                type="num"
                name="citizenID"
                variant="outlined"
                required={true}
                onChange={handleChange}
              />
              <TextField
                id="standard-select-currency"
                value={user.citizenID}
                type="num"
                name="citizenID"
                variant="outlined"
                required={true}
                onChange={handleChange}
              />
              <TextField
                id="standard-select-currency"
                value={user.citizenID}
                type="num"
                name="citizenID"
                variant="outlined"
                required={true}
                onChange={handleChange}
              />
              <TextField
                id="standard-select-currency"
                value={user.citizenID}
                type="num"
                name="citizenID"
                variant="outlined"
                required={true}
                onChange={handleChange}
              />
            </Grid>
            <Button type="submit">submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
