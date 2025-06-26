import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Card } from "react-bootstrap";

const Github = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your LeetCode username
  const leetcodeUsername = "Aniket_Jawarkar86";

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // Using a public API to fetch LeetCode data
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode data');
        }
        
        const data = await response.json();
        setLeetcodeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [leetcodeUsername]);

  const LeetCodeStats = () => {
    if (loading) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div style={{ color: "#6102ce", fontSize: "16px" }}>Loading LeetCode stats...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div style={{ color: "#ff6b6b", fontSize: "16px" }}>Unable to load LeetCode stats</div>
        </div>
      );
    }

    if (!leetcodeData) return null;

    return (
      <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
        <Col md={8} lg={6}>
          <Card 
            style={{ 
              backgroundColor: "transparent", 
              border: "1px solid #6102ce",
              borderRadius: "10px",
              padding: "20px"
            }}
          >
            <Card.Body>
              <Row>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <div style={{ color: "#6102ce", fontSize: "24px", fontWeight: "bold" }}>
                    {leetcodeData.totalSolved || 0}
                  </div>
                  <div style={{ color: "#c9d1d9", fontSize: "14px" }}>Total Solved</div>
                </Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <div style={{ color: "#6102ce", fontSize: "24px", fontWeight: "bold" }}>
                    {leetcodeData.ranking || "N/A"}
                  </div>
                  <div style={{ color: "#c9d1d9", fontSize: "14px" }}>Ranking</div>
                </Col>
              </Row>
              
              <Row style={{ marginTop: "20px" }}>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <div style={{ color: "#00b300", fontSize: "20px", fontWeight: "bold" }}>
                    {leetcodeData.easySolved || 0}
                  </div>
                  <div style={{ color: "#c9d1d9", fontSize: "12px" }}>Easy</div>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <div style={{ color: "#ffb800", fontSize: "20px", fontWeight: "bold" }}>
                    {leetcodeData.mediumSolved || 0}
                  </div>
                  <div style={{ color: "#c9d1d9", fontSize: "12px" }}>Medium</div>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <div style={{ color: "#ff2d55", fontSize: "20px", fontWeight: "bold" }}>
                    {leetcodeData.hardSolved || 0}
                  </div>
                  <div style={{ color: "#c9d1d9", fontSize: "12px" }}>Hard</div>
                </Col>
              </Row>

              <Row style={{ marginTop: "15px" }}>
                <Col xs={12} style={{ textAlign: "center" }}>
                  <div style={{ color: "#c9d1d9", fontSize: "13px" }}>
                    Acceptance Rate: <span style={{ color: "#6102ce", fontWeight: "bold" }}>
                      {leetcodeData.acceptanceRate || "N/A"}%
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="yellow">Code</strong>
        </h1>
        <GitHubCalendar
          username="Aniket-Jawarkar"
          blockSize={15}
          blockMargin={5}
          color="#6102ce"
          fontSize={16}
        />
      </Row>

      <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="yellow">LeetCode</strong> Journey
        </h1>
        <LeetCodeStats />
      </Row>
    </>
  );
}

export default Github;