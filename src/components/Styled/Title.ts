import styled from "styled-components";

type CommonStyleType = {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
};

const H1 = styled.h1`
  font-size: 1.7em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${(props: CommonStyleType) => props.mt ? props.mt + "px" : 0}
`

const H2 = styled.h2`
  font-size: 1.5em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${(props: CommonStyleType) => props.mt ? props.mt + "px" : 0}
`

const H3 = styled.h3`
  font-size: 1.3em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${(props: CommonStyleType) => props.mt ? props.mt + "px" : 0}
`

export const Title = { H1, H2, H3 }