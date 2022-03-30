import React from "react";
import "./Reports.css"
import {DataGrid} from "@mui/x-data-grid"


function LabReports(){
    const columns = [
        { field: 'id', headerName: 'ID',headerClassName:'super-app-theme--header', width: 100,sortable: true },
        { field: 'test', headerName: 'Test Type',headerClassName:'super-app-theme--header', width: 160,sortable: false },
        { field: 'date', headerName: 'Test Date',headerClassName:'super-app-theme--header', width: 160,sortable: true},
       
        {
          field: 'price',
          headerName: 'Test Price',
          headerClassName:'super-app-theme--header',
          width: 160,
          sortable:true
        },
        {
          field: 'comments',
          headerName: 'Doctor Comments',
          headerClassName:'super-app-theme--header',
          sortable: false,
          width: 180,
         
        },
        {
            field: 'status',
            headerName: 'Test Status',
            headerClassName:'super-app-theme--header',
            sortable: false,
            width: 180,
            renderCell:(params)=>{
                return(
                    <div className="status" style={{
                        backgroundColor: 
                        ((rows.status === 'Completed' && 'green') ||
                        (rows.status === 'In Progress' && 'orange'))}}>{params.row.status}
                    </div>
                )
            }
           
          },
          {
            field: 'view',
            headerName: 'View/Download Reports',
            headerClassName:'super-app-theme--header',
            sortable: false,
            width: 250,
           renderCell:(params)=>{
               return(
                   <div className="viewreports">
                    <img className="img" src={params.row.labavatar} alt=""/>
                    {params.row.view}
                   </div>
               )
           }
          }
      ];
      
      const rows = [
        { id: 1, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 2, date:"2022-02-25",test:"Cholesterol",price:"$80",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 3, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 4, date:"2022-02-25",test:"Cholesterol",price:"$70",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 5, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 6, date:"2022-02-25",test:"Cholesterol",price:"$60",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 7, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 8, date:"2022-02-25",test:"Cholesterol",price:"$50",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 9, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 10, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"},
        { id: 11, date:"2022-02-25",test:"Cholesterol",price:"$100",comments:"Exercise more",status:"In Progress",view:"View/Download",labavatar:"https://www.freeiconspng.com/uploads/document-icon-10.jpg"}
     
      ];
      
      const statuses=['In Progress','Completed']
    return(
        <div className="reportlist" >
           <DataGrid className="gridtype" 
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        autoHeight 
        disableColumnSelector
        sx={{
          boxShadow: 7,
          border: 2,
          borderColor: 'success.dark',
          '& .MuiDataGrid-cell:hover': {
            color: 'success.light',
          },'& .super-app-theme--header': {
            backgroundColor: 'rgba(99, 162, 93, 0.76)', fontSize:'18', fontFamily:'sans-serif', fontWeight:'bold',
          },
        }}
        
      />
        </div>
    )
}

export default LabReports;