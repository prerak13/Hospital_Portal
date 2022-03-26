import React, { useState, useEffect } from "react";
import MainScreen from "../../Components/MainScreen";
import Footer from "../../Components/Footer";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import axios from "axios";
import { useHistory } from "react-router-dom";

function BookAppointmentScreen() {
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [doctorNames, setDoctorNames] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("1");
  const [specialInstruction, setSpecialInstruction] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const findDocs = async () => {
    const response = await fetch("/api/users/doctorNames")
      .then((response) => response.json())
      .then((json) => {
        setDoctorNames(json);
      });
  };

  useEffect(() => {
    findDocs();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor === "1") alert("Please select Doctor");
    else {
      let formData = {};
      formData.patientName = userInfo.name;
      formData.email = userInfo.email;
      formData.docSelected = selectedDoctor;
      formData.selectedDate = selectedDate.toDateString();
      formData.specialInstruction = specialInstruction;
      formData.selectedTime = selectedDate.toTimeString();
      formData.dateTime = selectedDate;

      axios
        .post("/api/docappointment/booking", {
          data: formData,
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Appointment Successfully Booked");
            history.push("/viewappointment");
          }
        });
    }
  };

  const handleSelectChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  return (
    <MainScreen title="Book Appointment">
      <div>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Patient Name:</Form.Label>
                <Form.Label>{userInfo.name}</Form.Label>
              </Form.Group>

              <Form.Group controlId="emailid">
                <Form.Label>Patient Email Id:</Form.Label>
                <Form.Label>{userInfo.email}</Form.Label>
              </Form.Group>

              <Form.Group controlId="specialInstruction">
                <Form.Label>Special Instruction:</Form.Label>
                <Form.Control
                  type="instructions"
                  placeholder="Enter Special Insturctions if any"
                  onChange={(e) => setSpecialInstruction(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="docName">
                <Form.Label>Doctor Name and Specilization</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="Doc Name"
                  onChange={handleSelectChange}
                >
                  <option key="1" value="1">
                    Please select the doctor to book an appointment with
                  </option>
                  (
                  {doctorNames.map((doctor) => (
                    <option key={doctor._id} value={doctor.name}>
                      {doctor.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              {/* referenced from https://www.youtube.com/watch?v=tojwQEdI-QI 
                        and https://reactdatepicker.com/#example-include-times */}
              <Form.Group controlId="calendar">
                <Form.Label>
                  Pick a Date and Time to Book your Appointment
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
                  Book Appointment
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

export default BookAppointmentScreen;
