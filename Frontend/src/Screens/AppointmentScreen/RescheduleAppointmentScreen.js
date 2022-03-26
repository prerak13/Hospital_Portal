import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen";
import Footer from "../../Components/Footer";
import { Form, Row, Col } from "react-bootstrap";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RescheduleAppointmentScreen(props) {
  const history = useHistory();
  const [dataReceived, setDataReceived] = useState(props);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = props.history.location.state;
    formData.selectedDate = selectedDate.toDateString();
    formData.selectedTime = selectedDate.toTimeString();
    formData.dateTime = selectedDate;

    axios.put(`/api/docappointment/${formData._id}`, formData).then((res) => {
      if (res.status === 200) {
        history.push("/viewappointment");
      }
    });
  };

  return (
    <MainScreen title="Reschedule Appointment">
      <div>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Patient Name:</Form.Label>
                <Form.Label>
                  {props.history.location.state.patientName}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="emailid">
                <Form.Label>Patient Email Id:</Form.Label>
                <Form.Label>{props.history.location.state.email}</Form.Label>
              </Form.Group>

              <Form.Group controlId="specialInstruction">
                <Form.Label>Special Instruction:</Form.Label>
                <Form.Label>
                  {props.history.location.state.specialInstruction}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="docName">
                <Form.Label>Doctor Name and Specilization:</Form.Label>
                <Form.Label>
                  {props.history.location.state.docSelected}
                </Form.Label>
              </Form.Group>

              {/* referenced from https://www.youtube.com/watch?v=tojwQEdI-QI 
                        and https://reactdatepicker.com/#example-include-times */}
              <Form.Group controlId="calendar">
                <Form.Label>
                  Pick a new Date and Time to Book your Appointment
                </Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minTime={setHours(setMinutes(new Date(), 0), 11)}
                  maxTime={setHours(setMinutes(new Date(), 30), 20)}
                ></DatePicker>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  required
                  className="btn btn-primary mt-1 d-flex justify-content-center"
                >
                  Reschedule Appointment
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <Footer />
    </MainScreen>
  );
}

export default RescheduleAppointmentScreen;
