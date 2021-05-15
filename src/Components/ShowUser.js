import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  Grid,
  Paper,
  FormControl,
  Typography,
  TableHead,
  Checkbox,
  TableCell,
  IconButton,
  Button,
  TableBody,
  Table,
  TableContainer,
  TableRow,
  withStyles,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";
import TableUser from "./tableUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridRow: {
    marginBottom: "15px",
  },
  typoLabel: {
    marginRight: "10px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#6DC9BE",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function ShowUser({ newuser, editUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectAll, setselectAll] = useState(false);
  const [countSelect, setcountSelect] = useState(0);
  const [checked, setchecked] = useState({});
  const [userstate, setuserstate] = useState(newuser);

  useEffect(() => {
    dispatch({ type: "GET_USER" });
    console.log("----");
    setuserstate(newuser);
  }, [newuser]);

  const handleSelectAllChecked = () => {
    let newState = !selectAll;
    if (newState === false) {
      setcountSelect(0);
    } else {
      setcountSelect(newuser.length);
    }
    setselectAll(newState);
    newuser.forEach((element) => {
      let newchecked = checked;
      newchecked[element.userid] = newState;
      setchecked(newchecked);
    });
  };

  const handleChangeChecked = (e) => {
    const { value } = e.target;
    if (selectAll) {
      setselectAll(false);
    }
    let newState = checked[value];
    setchecked({ ...checked, [value]: !newState });
    if (!newState == false) {
      setcountSelect(countSelect - 1);
    } else {
      setcountSelect(countSelect + 1);
    }
  };

  const handleDeleteAll = () => {
    newuser.forEach((element) => {
      if (checked[element.userid]) {
        dispatch({ type: "DELETE_USER", playload: element.userid });
      }
    });
    if (selectAll) {
      setselectAll(false);
    }
  };

  const handleClickEdit = (user) => {
    editUser(user);
  };

  const handleClickDelete = (userid) => {
    dispatch({ type: "DELETE_USER", playload: userid });
  };

  const handledisablebtnDeleteAll = () => {
    if (countSelect >= 1) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <Grid container>
        <Grid container item xs={6} alignItems="center">
          <Checkbox checked={selectAll} onChange={handleSelectAllChecked} />
          <Typography className={classes.typoLabel}>Select All </Typography>
          <Button
            variant="contained"
            disabled={handledisablebtnDeleteAll()}
            onClick={handleDeleteAll}
          >
            DELETE
          </Button>
        </Grid>

        <Grid container item xs={6} alignItems="center" justify="flex-end">
          <Typography className={classes.typoLabel}>Firstname :</Typography>
        </Grid>
        <Grid container item xs={12}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              aria-label="simple table"
              stickyHeader
            >
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <StyledTableCell
                    align="center"
                    padding="checkbox"
                    className={classes.TableCellHead}
                  />

                  <StyledTableCell className={classes.TableCellHead}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    className={classes.TableCellHead}
                  >
                    GENDER
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    className={classes.TableCellHead}
                  >
                    MONILE PHONE
                  </StyledTableCell>
                  <StyledTableCell
                    align="left"
                    className={classes.TableCellHead}
                  >
                    NATIONALITY
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    padding="checkbox"
                    className={classes.TableCellHead}
                  />
                  <StyledTableCell
                    align="center"
                    padding="checkbox"
                    className={classes.TableCellHead}
                  />
                  <StyledTableCell
                    align="center"
                    padding="checkbox"
                    className={classes.TableCellHead}
                  />
                </TableRow>
              </TableHead>
              {console.log("--------: ", new Date())}
              <TableBody>
                {/* {userstate?.map((user, i) => ( */}
                {newuser?.map((user, i) => (
                  <TableRow key={user.userid}>
                    {console.log("user: ", user.fname)}
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.TableCellContent}
                    >
                      <Checkbox
                        checked={checked[user.userid] || false}
                        value={user.userid}
                        onChange={handleChangeChecked}
                      />
                    </TableCell>
                    <TableCell
                      align="left"
                      className={classes.TableCellContent}
                    >
                      {`${user.fname} ${user.lname}`}
                    </TableCell>
                    <TableCell
                      align="left"
                      className={classes.TableCellContent}
                    >
                      {user.gender}
                    </TableCell>
                    <TableCell
                      align="left"
                      className={classes.TableCellContent}
                    >
                      {`${user.flags}${user.phone}`}
                    </TableCell>
                    <TableCell
                      align="left"
                      className={classes.TableCellContent}
                    >
                      {user.nation}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="iconEdit"
                        onClick={() => handleClickEdit(user)}
                      >
                        <Typography className={classes.typoLabel}>
                          EDIT
                        </Typography>
                      </IconButton>
                    </TableCell>
                    <TableCell className={classes.TableCellContent}>
                      /
                    </TableCell>
                    <TableCell align="left">
                      <IconButton
                        aria-label="iconDelete"
                        onClick={() => handleClickDelete(user.userid)}
                      >
                        <Typography className={classes.typoLabel}>
                          DELETE
                        </Typography>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newuser: state,
  };
};

export default connect(mapStateToProps)(ShowUser);
