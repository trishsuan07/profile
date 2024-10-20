import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function SkillsComponent() {
  return (
    <div>
      <h1 className="text-center">My Skills</h1> 
      <ListGroup>
        <ListGroup.Item disabled>JAVA</ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
        <ListGroup.Item>DATABASE IMPLEMENTATION</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SkillsComponent;
