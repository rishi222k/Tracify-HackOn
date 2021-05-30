import React, { useEffect, useState } from 'react'
import {Link } from "react-router-dom";
import useFetch from "../UseFetch";
import Map from '../Components/Map'
import Navbar from '../Components/Navbar'
import "leaflet/dist/leaflet.css"
import "../Styles/Map.scss"
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

const CovidMap = () => {

    const classes = useStyles();
    const [mapstates, setmapstates] = useState([])
    const [maptype, setmaptype] = useState(0)

    useEffect(() => {
        const IndiaData = async () =>{
            await fetch('covid-data.json')
            .then((res)=>res.json())
            .then((data)=>{
                setmapstates(data);
                console.log(data[0].lat);
            });
        };
        IndiaData();
    }, []);
    
    
    const { data:tdata, error, isPending } = useFetch('http://localhost:8080/travel/data');
  
    
    return (
        <>
        <Navbar/>
        <div className="CovidMap">
        <div className="cards">
            <div className="card0" onClick={(e) => setmaptype(0)}>
                <h1>Average Cases/Week</h1>
                <h3>3,19,497</h3>
            </div>
            <div className="card1" onClick={(e) => setmaptype(1)}>
                <h1>Partially Vaccinated</h1>
                <h3>128,627,919</h3>
            </div>
            <div className="card2" onClick={(e) => setmaptype(2)}>
                <h1>Fully Vaccinated</h1>
                <h3>35,906,905</h3></div>
            <div className="card3" onClick={(e) => setmaptype(3)}>
                <h1>Passenger Travel/Week</h1>
                <h3>251,000</h3>
            </div>
        </div>
        
        <Map
        states={mapstates}
        type={maptype}
        center={{lat:20.5937,lng:78.9629}}
        zoom={4.5}
        />

        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }

        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">Person Id&nbsp;(g)</StyledTableCell>
            <StyledTableCell>Travel Id</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Date&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {tdata && tdata.map(tdata =>(
            <StyledTableRow key={12344820}>
              <StyledTableCell component="th" scope="row">
              <Link to={`/travel/${(tdata.p_hash)}`}>{tdata.p_hash}</Link>
              </StyledTableCell>
              <StyledTableCell align="right">{tdata.trip_id }</StyledTableCell>
              <StyledTableCell align="right">{ tdata.from}</StyledTableCell>
              <StyledTableCell align="right">{tdata.to}</StyledTableCell>
              <StyledTableCell align="right">{tdata.date}</StyledTableCell>
            </StyledTableRow>

            ))}
  
            
        </TableBody>
      </Table>
    </TableContainer>

            
        </div>
        </>
    )
}

export default CovidMap
