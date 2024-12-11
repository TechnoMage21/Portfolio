import React from "react";
import { useInView } from "react-intersection-observer";
import Card from "react-bootstrap/Card";
import './Education.css';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="Education" id="edu">
      <br></br>
        <h2>Education <SchoolIcon fontSize="large"/></h2>
       
      <div className="main-card"  ref={ref}>
        <Card  className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>MCA</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Master Of Computer Application 
            </Card.Subtitle>
            <Card.Text>
              Mulana Abul Kalam Azad University of Technology<br></br>
              Grade:8.11<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>BCA</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              Bachelor Of Computer Application
            </Card.Subtitle>
            <Card.Text>
              Techno College Hooghly<br></br>
              Grade:9.46<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>Higher Secondary</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
             I.S.C(Council For The Indian school Certificate Examinations)
            </Card.Subtitle>
            <Card.Text>
              St. Luke's Day School<br></br>
              67%<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  className={`cards ${inView ? "visible animate-left" : ""}`}>
          <Card.Body variant="primary">
            <Card.Title>Secondary</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >
              I.C.S.E(Council For The Indian school Certificate Examinations)
            </Card.Subtitle>
            <Card.Text>
              St. Luke's Day School<br></br>
              75%<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
