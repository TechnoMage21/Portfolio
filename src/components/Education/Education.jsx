import React from "react";
import { useInView } from "react-intersection-observer";
import Card from "react-bootstrap/Card";
import SchoolIcon from '@mui/icons-material/School';
import './Education.css';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="Education" id="edu">
      <h2>
        Education <SchoolIcon fontSize="large" />
      </h2>

      <div className="main-card">
        {[
          { title: "MCA", subtitle: "Master Of Computer Application", grade: "8.11", school: "Mulana Abul Kalam Azad University of Technology" },
          { title: "BCA", subtitle: "Bachelor Of Computer Application", grade: "9.46", school: "Techno College Hooghly" },
          { title: "Higher Secondary", subtitle: "I.S.C (Council For The Indian School Certificate Examinations)", grade: "67%", school: "St. Luke's Day School" },
          { title: "Secondary", subtitle: "I.C.S.E (Council For The Indian School Certificate Examinations)", grade: "75%", school: "St. Luke's Day School" }
        ].map((education, index) => (
          <Card
            key={index}
            className={`cards ${inView ? "visible animate-left" : ""}`}
            ref={ref} // Apply ref directly to the card
          >
            <Card.Body variant="primary">
              <Card.Title>{education.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{education.subtitle}</Card.Subtitle>
              <Card.Text>
                {education.school}
                <br />
                Grade: {education.grade}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
