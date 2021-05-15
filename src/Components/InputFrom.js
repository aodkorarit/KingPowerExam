import React, { useState, useEffect } from "react";
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
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Thailand from "../assets/flags/thailand.png";
import VietNam from "../assets/flags/vietnam.png";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { connect, useDispatch } from "react-redux";

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
    marginBottom: "15px",
  },
  typoLabel: {
    marginRight: "10px",
  },
  typoLabelRequired: {
    marginRight: "10px",
    color: "#f2569a",
  },
  selectTitle: {
    width: "120px",
  },
  selectNation: {
    width: "180px",
  },
  formFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectPhoneIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "130px",
  },
  typoLabelFlags: {
    marginLeft: "10px",
  },
  textfieldCitizenpos1: {
    width: "50px",
  },
  textfieldCitizenpos2: {
    width: "100px",
  },
  textfieldCitizenpos3: {
    width: "80px",
  },
}));

const countries = [
  {
    label: "+66",
    src: Thailand,
    value: "+66",
  },
  {
    label: "+84",
    src: VietNam,
    value: "+84",
  },
];

function InputFrom({ userEdit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    title: "",
    fname: "",
    lname: "",
    birthday: null,
    nation: "",
    gender: "",
    flags: "",
    phone: "",
    passportNo: "",
    expectedSalary: "",
  });
  const [citizenID, setcitizenID] = useState({
    pos1: "",
    pos2: "",
    pos3: "",
    pos4: "",
    pos5: "",
  });
  const [edit, setedit] = useState(false);

  useEffect(() => {
    if (userEdit) {
      handleSetuserEdit(userEdit);
      console.log("--setedit---");
      setedit(true);
    }
  }, [userEdit]);

  const handleSetuserEdit = (userEdit) => {
    setuser({
      title: userEdit.title,
      fname: userEdit.fname,
      lname: userEdit.lname,
      birthday: userEdit.birthday,
      nation: userEdit.nation,
      gender: userEdit.gender,
      flags: userEdit.flags,
      phone: userEdit.phone,
      passportNo: userEdit.passportNo,
      expectedSalary: userEdit.expectedSalary,
    });
    setcitizenID({
      pos1: userEdit.citizenID?.slice(0, 1),
      pos2: userEdit.citizenID?.slice(1, 5),
      pos3: userEdit.citizenID?.slice(5, 10),
      pos4: userEdit.citizenID?.slice(10, 12),
      pos5: userEdit.citizenID?.slice(12, 13),
    });
  };

  const handleChangecitizenID = (e) => {
    const { value, name } = e.target;
    setcitizenID({ ...citizenID, [name]: value });
  };

  const handleDateChange = (date) => {
    setuser({ ...user, birthday: date });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleBtnSubmit = (e) => {
    e.preventDefault();
    const data = user;

    let newcitizenID =
      citizenID.pos1 +
      citizenID.pos2 +
      citizenID.pos3 +
      citizenID.pos4 +
      citizenID.pos5;
    data.citizenID = newcitizenID;
    if (edit) {
      data.userid = userEdit.userid;
      dispatch({ type: "UPDATE_USER", playload: data, id: userEdit.userid });
    } else {
      const id = Math.floor(Math.random() * 10000);
      data.userid = id;
      dispatch({ type: "ADD_USER", playload: data });
    }
    clearState();
  };

  const clearState = () => {
    setuser({
      title: "",
      fname: "",
      lname: "",
      birthday: null,
      nation: "",
      gender: "",
      flags: "",
      phone: "",
      passportNo: "",
      expectedSalary: "",
    });
    setcitizenID({
      pos1: "",
      pos2: "",
      pos3: "",
      pos4: "",
      pos5: "",
    });
    setedit(false);
  };

  return (
    <form onSubmit={handleBtnSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item xs={12} container className={classes.gridRow}>
              <Grid item xs={4} container alignItems="center">
                <Typography className={classes.typoLabel}>Title : </Typography>
                <Typography className={classes.typoLabelRequired}>*</Typography>
                <FormControl
                  variant="outlined"
                  required
                  className={classes.formControl}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    className={classes.selectTitle}
                    id="selecttitle"
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
                  Firstname :
                </Typography>
                <Typography className={classes.typoLabelRequired}>*</Typography>
                <TextField
                  id="textFieldfname"
                  value={user.fname}
                  name="fname"
                  variant="outlined"
                  inputProps={{
                    pattern: "[a-zA-Z]+",
                  }}
                  required={true}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4} container alignItems="center">
                <Typography className={classes.typoLabel}>
                  Lastname :
                </Typography>
                <Typography className={classes.typoLabelRequired}>*</Typography>
                <TextField
                  id="textFieldlname"
                  value={user.lname}
                  name="lname"
                  variant="outlined"
                  inputProps={{
                    pattern: "[a-zA-Z]+",
                  }}
                  required={true}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.gridRow}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={4} container alignItems="center">
                  <Typography className={classes.typoLabel}>
                    Birthday :
                  </Typography>
                  <Typography className={classes.typoLabelRequired}>
                    *
                  </Typography>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-birthday"
                    label="MM/DD/YYYY"
                    value={user.birthday}
                    required={true}
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
                    <MenuItem value={"Thailand"}>Thailand</MenuItem>
                    <MenuItem value={"VietNam"}>VietNam</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              container
              alignItems="center"
              className={classes.gridRow}
            >
              <Typography className={classes.typoLabel}>CitizenID :</Typography>
              <TextField
                id="selectCitizenIDpos1"
                value={citizenID.pos1}
                name="pos1"
                variant="outlined"
                className={classes.textfieldCitizenpos1}
                inputProps={{
                  maxLength: 1,
                }}
                onChange={handleChangecitizenID}
              />
              <Typography style={{ margin: "0 10px" }}>-</Typography>
              <TextField
                id="selectCitizenIDpos2"
                value={citizenID.pos2}
                name="pos2"
                variant="outlined"
                className={classes.textfieldCitizenpos2}
                inputProps={{
                  maxLength: 4,
                }}
                onChange={handleChangecitizenID}
              />
              <Typography style={{ margin: "0 10px" }}>-</Typography>
              <TextField
                id="selectCitizenIDpos3"
                value={citizenID.pos3}
                name="pos3"
                variant="outlined"
                className={classes.textfieldCitizenpos2}
                inputProps={{
                  maxLength: 5,
                }}
                onChange={handleChangecitizenID}
              />
              <Typography style={{ margin: "0 10px" }}>-</Typography>
              <TextField
                id="selectCitizenIDpos4"
                value={citizenID.pos4}
                name="pos4"
                variant="outlined"
                className={classes.textfieldCitizenpos3}
                inputProps={{
                  maxLength: 2,
                }}
                onChange={handleChangecitizenID}
              />
              <Typography style={{ margin: "0 10px" }}>-</Typography>
              <TextField
                id="selectCitizenIDpos5"
                value={citizenID.pos5}
                name="pos5"
                variant="outlined"
                className={classes.textfieldCitizenpos1}
                inputProps={{
                  maxLength: 1,
                }}
                onChange={handleChangecitizenID}
              />
            </Grid>
            <Grid item xs={12} container className={classes.gridRow}>
              <FormControl className={classes.formFlex}>
                <Typography className={classes.typoLabel}>Gender :</Typography>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="unisex"
                    control={<Radio />}
                    label="Unisex"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              container
              alignItems="center"
              className={classes.gridRow}
            >
              <Typography className={classes.typoLabel}>
                Mobile Phone :
              </Typography>
              <Typography className={classes.typoLabelRequired}>*</Typography>
              <FormControl
                variant="outlined"
                required
                className={classes.formFlex}
              >
                <Select
                  labelId="demo-simple-select-label"
                  className={classes.selectPhoneIcon}
                  id="selectflags"
                  value={user.flags}
                  name="flags"
                  onChange={handleChange}
                >
                  {countries.map((option, key) => (
                    <MenuItem
                      value={option.value}
                      key={key}
                      className={classes.selectPhoneIcon}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={option.src}
                          alt={option.label}
                          width="30"
                          height="30"
                        />
                        <Typography className={classes.typoLabelFlags}>
                          {option.label}
                        </Typography>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                <Typography style={{ margin: "0 10px" }}>-</Typography>
                <TextField
                  id="selectphone"
                  value={user.phone}
                  name="phone"
                  variant="outlined"
                  inputProps={{
                    maxLength: 10,
                    pattern: "[0-9]{10}",
                  }}
                  required={true}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              container
              alignItems="center"
              className={classes.gridRow}
            >
              <Typography className={classes.typoLabel}>
                Passport No :
              </Typography>
              <TextField
                id="selectpassportNo"
                value={user.passportNo}
                name="passportNo"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} container className={classes.gridRow}>
              <Grid item xs={6} container alignItems="center">
                <Typography className={classes.typoLabel}>
                  Expected Salary :
                </Typography>
                <Typography className={classes.typoLabelRequired}>*</Typography>
                <TextField
                  id="selectexpectedSalary"
                  value={user.expectedSalary}
                  name="expectedSalary"
                  variant="outlined"
                  type="number"
                  required={true}
                  onChange={handleChange}
                />
                <Typography style={{ marginLeft: "10px" }}>THB</Typography>
              </Grid>
              <Grid item xs={6} container justify="center" alignItems="center">
                <Button type="submit" variant="contained">
                  submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
export default connect()(InputFrom);
