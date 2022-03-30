import "./Reports.css"
import {DataGrid} from "@mui/x-data-grid";
import { Col, Container, Row, Table } from "react-bootstrap";

import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
const axios = require("axios").default;


function LabReports({ history }){
  const [reports, setReports] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  
  if (!userInfo) {
    history.push("/login");
  }

  useEffect(() => {
    axios
      .get(`/api/pathology/getPathaAppointment?email=${userInfo.email}`)
      .then((res) => {
        setReports(res.data);
      });
  }, [userInfo.email]);

    console.log(reports)
    return(
      <Container>
        <Row>
        <Col>
          <h1 className="h1">Lab</h1>
        </Col>
      </Row>

      <Row>
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
          <Col>
            <Table striped bordered hover responsive>
              <thead className="head">
                <tr>
                  <th>S.No.</th>
                  <th>Date</th>
                  <th>Test</th>
                  <th>Status</th>
                  <th>Comments</th>
                  <th>Cost</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((x, i) => {
                  return (
                    <>
                      <tr>
                        <td style={{ padding: "15px" }}>{i + 1}</td>
                        <td style={{ padding: "15px" }}>{x.date}</td>
                        <td style={{ padding: "15px" }}>{x.testType}</td>
                        <td style={{ padding: "15px" }}>{x.status}</td>
                        <td style={{ padding: "15px" }}>{x.comments}</td>
                        <td style={{ padding: "15px" }}>{x.cost}</td>
                     
                     
                        <td style={{ padding: "15px" }}>
                          <a
                            href={x.docURI}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            VIEW REPORT
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </div>
      </Row>
      </Container>
    )
}

export default LabReports;