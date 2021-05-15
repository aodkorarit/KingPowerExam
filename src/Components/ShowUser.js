import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  TextField,
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";

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

function ShowUser({ newuser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checked, setchecked] = useState();
  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, []);

  const handleChecked = (e) => {
    const { value } = e.target;
    setchecked({ ...checked, id: value });
    console.log("value", value);
  };

  const handleClickEdit = () => {
    console.log("handleClickEdit");
  };

  const handleClickDelete = () => {
    console.log("handleClickDelete");
  };

  return (
    <div>
      <Grid container>
        <Grid container item xs={6} alignItems="center">
          <Typography className={classes.typoLabel}>Firstname :</Typography>
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
              <TableBody>
                {newuser?.map((user, i) => (
                  <TableRow key={user.userid}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.TableCellContent}
                    >
                      <Checkbox
                        checked={checked}
                        onChange={handleChecked}
                        value={user.userid}
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
                        onClick={(e) => handleClickEdit()}
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
                        onClick={() => handleClickDelete(i)}
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
