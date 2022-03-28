import React, { useEffect, useState } from "react";
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
  vaccineData,
} from "./data";

const axios = require("axios").default;
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
  const [empCountGender, setEmpCountGender] = useState({}); //done
  const [empCountDept, setEmpCountDept] = useState({}); //done
  const [appointmentMonthly, setAppointmentMonthly] = useState({});
  const [empCountWork, setEmpCountWork] = useState({}); //done

  useEffect(() => {
    axios.get("/api/dashboard/getEmployeeByDepartment/").then((res) => {
      const females = res.data.females;
      const males = res.data.males;
      const others = res.data.others;

      const departments = Array.from(
        new Set(
          females.map((x) => x._id),
          males.map((x) => x._id),
          others.map((x) => x._id)
        )
      );

      var countByDept = {};
      for (var i = 0; i < departments.length; i++) {
        countByDept[departments[i]] = {
          male:
            males
              .filter((x) => x._id == departments[i])
              .map((x) => x.count)[0] || 0,
          female:
            females
              .filter((x) => x._id == departments[i])
              .map((x) => x.count)[0] || 0,
          others:
            others
              .filter((x) => x._id == departments[i])
              .map((x) => x.count)[0] || 0,
        };
      }
      setEmpCountDept(countByDept);
    });

    axios.get("/api/dashboard/getEmployeeByGender/").then((res) => {
      setEmpCountGender(res.data);
    });
    axios.get("/api/dashboard/getEmployeeByWorkingStatus/").then((res) => {
      setEmpCountWork(res.data);
    });
    axios.get("/api/dashboard/getVaccineDetails/").then((res) => {
      setAppointmentMonthly(res.data);
    });
  }, []);
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
    labels: Object.keys(empCountGender),
    datasets: [
      {
        data: Object.keys(empCountGender).map((x) => empCountGender[x]),
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
  console.log(1, empCountDept);
  console.log(2, employeeCountByDepartment);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Admin Analytics</h1>
        </Col>
      </Row>

      <Row style={{ marginBottom: "40px" }}>
        <Col lg="6" style={{ border: "1px solid" }}>
          <Row>
            <Col>
              <h5 className="text-center">Employee Count By Gender</h5>
            </Col>
          </Row>
          <Row>
            <Col style={{ height: "40vh" }}>
              <Pie
                options={{ maintainAspectRatio: false }}
                data={employeeCountByGenderdata}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="6" style={{ border: "1px solid" }}>
          <Row>
            <Col>
              <h5 className="text-center">Employee Count By Department</h5>
            </Col>
          </Row>
          <Row>
            <Col style={{ height: "40vh" }}>
              <Bar options={chartOptions} data={chartData} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="6" style={{ border: "1px solid" }}>
          <Row>
            <Col>
              <h5 className="text-center">
                Total Appointments Booked per month
              </h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <Line
                options={appointmentChartOptions}
                data={apointmentBookdata}
              />
            </Col>
          </Row>
        </Col>

        <Col style={{ border: "1px solid" }}>
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
