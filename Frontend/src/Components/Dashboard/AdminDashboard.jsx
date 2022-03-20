import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  appointmentPerMonth,
  employeeCountByDepartment,
  employeeCountByGender,
  vaccineData,
} from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const appointmentChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const apointmentBookdata = {
  labels: appointmentPerMonth.map((x) => x.month),
  datasets: [
    {
      label: "Total appointment booked",
      data: appointmentPerMonth.map((x) => x.count),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const vaccineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const vaccineBookdata = {
  labels: vaccineData.map((x) => x.month),
  datasets: [
    {
      label: "Total Vaccination",
      data: vaccineData.map((x) => x.count),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const AdminDashboard = () => {
  const chartOptions = {};
  const chartData = {
    labels: employeeCountByDepartment.map((x) => x.department),
    datasets: [
      {
        label: "Full-Time",
        data: employeeCountByDepartment.map((x) => x.fullTime),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.4)",
      },
      {
        label: "Part-Time",
        data: employeeCountByDepartment.map((x) => x.partTime),
        borderColor: "rgba()",
        backgroundColor: "rgba(11, 162, 1, 0.4)",
      },
    ],
  };

  const employeeCountByGenderdata = {
    labels: Object.keys(employeeCountByGender),
    datasets: [
      {
        data: Object.keys(employeeCountByGender).map(
          (x) => employeeCountByGender[x]
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Admin Analytics</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Row>
            <Col lg="6">
              <h5 className="text-center">Employee Count By Gender</h5>
            </Col>
          </Row>
          <Row>
            <Pie
              options={{ maintainAspectRatio: false }}
              data={employeeCountByGenderdata}
            />
          </Row>
        </Col>
        <Col style={{ width: "10px" }}>
          <Row>
            <h5 className="text-center">Employee Count By Department</h5>
          </Row>
          <Row>
            <Bar options={chartOptions} data={chartData} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h5 className="text-center">Total Appointments Booked per month</h5>
          </Row>
          <Row>
            <Line options={appointmentChartOptions} data={apointmentBookdata} />
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className="text-center">
              Vaccine Dose provided in a particular month
            </h5>
          </Row>
          <Row>
            <Line options={vaccineChartOptions} data={vaccineBookdata} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminDashboard;
