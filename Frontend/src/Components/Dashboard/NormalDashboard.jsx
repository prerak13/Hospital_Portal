import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./NormalDashboard.css";
const axios = require("axios").default;

const NormalDashboard = ({ history }) => {
  const [appointments, setAppointments] = useState([]);
  const [reports, setReports] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
  }

  useEffect(() => {
    axios
      .get(`/api/normalDash/getAppointments?email=${userInfo.email}`)
      .then((res) => {
        setAppointments(res.data);
      });

    axios
      .get(`/api/normalDash/getReports?email=${userInfo.email}`)
      .then((res) => {
        setReports(res.data);
      });
  }, [userInfo.email]);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="h1">User's Dashboard</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="h3">Upcoming Appointments</h4>
        </Col>
      </Row>

      <Row>
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
          <Table striped bordered hover responsive>
            <thead className="head">
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Special Instructions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((x, i) => {
                return (
                  <>
                    <tr>
                      <td style={{ padding: "15px" }}>{i + 1}</td>
                      <td style={{ padding: "15px" }}>{x.selectedDate}</td>
                      <td style={{ padding: "15px" }}>{x.docSelected}</td>
                      <td style={{ padding: "15px" }}>
                        {x.specialInstruction}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center h3">Pathology Reports</h4>
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
  );
};

export default NormalDashboard;
