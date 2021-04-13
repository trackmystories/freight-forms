import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Square(props) {
  const [title] = useState(props.title);
  const [subTitle] = useState(props.subTitle);
  const [image] = useState(props.image);
  const [path] = useState(props.path);

  return (
    <Square_Wrapper to={props.path}>
      <Square_Content>
        <Square_Image src={props.image} />
        <Square_Title>{props.title}</Square_Title>
        <Square_Paragraph>{props.subTitle}</Square_Paragraph>
      </Square_Content>
    </Square_Wrapper>
  );
}

const Square_Wrapper = styled(Link)`
  margin: 5%;
`;

const Square_Content = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid transfrom;
  border-width: 2px;
  border-radius: 10%;
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Square_Image = styled.img`
  height: 20%;
  width: 20%;
  resize-mode: contain;
`;

const Square_Title = styled.p`
  text-align: center;
  font-size: 0.5em;
  color: black;
  text-decoration: none;
`;

const Square_Paragraph = styled.p`
  text-align: center;
  font-size: 0.3em;
  color: black;
  text-decoration: none;
`;
