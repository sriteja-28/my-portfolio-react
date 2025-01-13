import React, { useState } from 'react';

// Sample internships data
const internshipsData = [
  {
    id: 1,
    title: "Full Stack Web Development Intern",
    company: "Innovate",
    duration: "Feb 2024 - Apr 2024",
    responsibilities: [
      "Developed a web application for efficient student attendance management.",
      "Integrated SMS alert functionality.",
      "Utilized React.js and Node.js for development.",
    ],
  },
  {
    id: 2,
    title: "Backend Development Intern",
    company: "TechWave",
    duration: "Jun 2023 - Aug 2023",
    responsibilities: [
      "Implemented RESTful APIs for user management.",
      "Optimized database queries, reducing response time by 20%.",
      "Collaborated with frontend teams to integrate APIs.",
    ],
  },
];


const companies = [...new Set(internshipsData.map((internship) => internship.company))];

const Internships = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

 
  const filteredInternships = selectedCompany
    ? internshipsData.filter((internship) => internship.company === selectedCompany)
    : internshipsData;

  
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Internships</h2>

     
      <div style={{ marginBottom: "20px" }}>
        <span
          onClick={() => setSelectedCompany("")}
          style={{
            cursor: "pointer",
            marginRight: "10px",
            color: selectedCompany === "" ? "blue" : "black",
          }}
        >
          All
        </span>
        {companies.map((company, index) => (
          <span
            key={index}
            onClick={() => setSelectedCompany(company)}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              color: selectedCompany === company ? "blue" : "black",
            }}
          >
            {company}
          </span>
        ))}
      </div>

     
      {filteredInternships.map((internship) => (
        <div
          key={internship.id}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            background: "#f9f9f9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleAccordion(internship.id)}
          >
            <div>
              <h3 style={{ margin: "0" }}>{internship.title}</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>{internship.company}</strong> | {internship.duration}
              </p>
            </div>
            <span style={{ fontSize: "20px" }}>
              {activeAccordion === internship.id ? "−" : "+"}
            </span>
          </div>

         
          {activeAccordion === internship.id && (
            <div style={{ marginTop: "10px" }}>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul>
                {internship.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {filteredInternships.length === 0 && (
        <p style={{ color: "gray", fontStyle: "italic" }}>
          No internships available for the selected company.
        </p>
      )}
    </div>
  );
};

export default Internships;
