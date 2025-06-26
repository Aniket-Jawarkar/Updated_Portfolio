import React from "react";
import ReactMarkdown from "react-markdown";
import { Row } from "react-bootstrap";

const Leetcode = () => {
  const username = "Aniket_Jawarkar86";
  const imageUrl = `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Syne%20Mono&ext=heatmap`;
  const markdown = `![LeetCode Stats](${imageUrl})`;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Row>
  );
};

export default Leetcode;
