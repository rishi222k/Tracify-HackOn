import {useParams} from "react-router-dom";
import useFetch from "../UseFetch";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#282828',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
//   function createData(travelid, from, to, personid, date) {
//     return { travelid, from, to, personid, date}
//   }

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const PersonDetails = () => {

    const classes = useStyles();
  const { id } = useParams();
  const { data, error, isPending } = useFetch('http://localhost:8080/travel/detail/' + id);
  

  return (
    <div className="data-details">

    

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Travel Id</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Date&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }

        {data && data.map(data =>(
            <StyledTableRow key={12344820}>
              <StyledTableCell align="right">{ data.trip_id }</StyledTableCell>
              <StyledTableCell align="right">{data.to}</StyledTableCell>
              <StyledTableCell align="right">{data.from}</StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
            </StyledTableRow>

            ))}
  
            
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  );
}
 
export default PersonDetails;