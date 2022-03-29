import React, { Component } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";

class NormalDashboard extends Component {
  state = {
    appointments: [],
    reports: [],
  };

  componentDidMount() {
    setTimeout(() => {
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        this.props.history.push("/login");
      }
    }, 2000);

    axios.get(`/api/normalDash/getAppointments`).then((res) => {
      const appointments = res.data;
      this.setState({ appointments });
    });

    axios.get(`/api/normalDash/getReports`).then((res) => {
      const reports = res.data;
      this.setState({ reports });
    });
  }
  render() {
    console.log(this.state.reports);
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">User's Dashboard</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="text-center">Upcomming Appointments</h4>
          </Col>
        </Row>

        <Row>
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Special Instructions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((x, i) => {
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
            <h4 className="text-center">Pathalogy Reports</h4>
          </Col>
        </Row>
        <Row>
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <Col>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Date</th>
                    <th>Test</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reports.map((x, i) => {
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
  }
}

export default NormalDashboard;
