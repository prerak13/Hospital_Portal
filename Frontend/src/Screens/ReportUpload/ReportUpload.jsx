import { Grid, Paper, TextField } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import "./ReportUpload.css"
// import DateFnsUtils from '@date-io/date-fns';
import {  KeyboardDateTimePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Radio,RadioGroup } from "@material-ui/core";
import { FormControlLabel,FormControl ,FormLabel  } from "@material-ui/core";
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { InputAdornment } from "@material-ui/core";
import { styled } from "@material-ui/core";
import axios from "axios";





function ReportUpload(){
    
    const ini_values={
        id:0,
        patient_name:'',
        patient_email:'',   
        test:'',
        date:'',
        in_progress:false,
        completed:false,
    
    }
    
  
      
    return(
    
        <form className="form" style={{marginTop:"10px"}}>
    
            <Paper elevation={20} className="newpaperstyle">
        <Grid >
          <h2 className="h2style">Enter the Lab Report Details here!</h2><br/>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6} >
            <TextField required label="Patient Name" name="pname" variant="filled"  className="grid"/> <hr className="hr"/>
            <TextField required label="Patient Email" name="pemail" variant="filled" color="success"  className="grid" /><hr className="hr"/>
            <TextField required label="Test Type" name="testname" variant="filled" color="success"  className="grid"/>
            <hr className="hr"/>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled"  >
           
          <FilledInput 
            id="price" className="grid"
            startAdornment={<InputAdornment position="start" >$</InputAdornment>}
          />
        </FormControl>
            </Grid>
            <Grid item xs={6}>
                <div style={{marginTop:"0px"}}>
               <TextField required label="Please enter date of test taken" name="date" variant="filled" className="url" size="large"/>
               </div>
                <div style={{marginTop:"20px"}}>
               
                <FormControl >
                    <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group">
                            
                                <FormControlLabel value="inprogress" control={<Radio />} label="In Progress" />
                                <FormControlLabel value="completed" control={<Radio />} label="Completed" />
                               
                            </RadioGroup>
                            </FormControl>

               </div><br/>
               <div style={{marginTop:"10px"}}>
               <TextField required label="Please enter the URL of lab report" name="url" variant="filled" className="url" size="large"/>
               </div><br/>
               <div style={{marginTop:"10px"}} >
               <TextField label="Write your comments here" name="comments" variant="filled" className="url" size="large"/>
               </div>
                </Grid>
                <div  style={{marginTop:"30px"}}> <Button variant="contained" color="success"> Submit
                </Button></div>
                </Grid>
                </Paper>
        
        </form>
        
    )
}

export default ReportUpload;