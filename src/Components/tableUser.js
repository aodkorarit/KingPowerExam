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
export default function TableUser({ user, handleClickEdit }) {
  const classes = useStyles();
  const [newuser, setnewuser] = useState(user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("----");
    setnewuser(user);
  }, [user]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
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
              <StyledTableCell align="left" className={classes.TableCellHead}>
                GENDER
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.TableCellHead}>
                MONILE PHONE
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.TableCellHead}>
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
              // {newuser?.map((user, i) => (
              <TableRow key={user.userid}>
                {console.log("user: ", user.fname)}
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.TableCellContent}
                ></TableCell>
                <TableCell align="left" className={classes.TableCellContent}>
                  {`${user.fname} ${user.lname}`}
                </TableCell>
                <TableCell align="left" className={classes.TableCellContent}>
                  {user.gender}
                </TableCell>
                <TableCell align="left" className={classes.TableCellContent}>
                  {`${user.flags}${user.phone}`}
                </TableCell>
                <TableCell align="left" className={classes.TableCellContent}>
                  {user.nation}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="iconEdit"
                    onClick={() => handleClickEdit(user)}
                  >
                    <Typography className={classes.typoLabel}>EDIT</Typography>
                  </IconButton>
                </TableCell>
                <TableCell className={classes.TableCellContent}>/</TableCell>
                <TableCell align="left">
                  <IconButton
                    aria-label="iconDelete"
                    // onClick={() => handleClickDelete(user.userid)}
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
    </div>
  );
}
