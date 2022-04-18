import styled from "styled-components";

// xs14, sm16, p18, h3-20, h2-22, h1-24 

type TitlePropsType = {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
};

const H1 = styled.h1`
  font-size: 1.7em;
  font-family: "Helvetica";
  font-weight: bold;
  margin-top: ${(props: TitlePropsType) => props.mt ? props.mt + "px" : 0}
`

const H2 = styled.h2`
  font-size: 1.5em;
  font-family: "Helvetica";
  font-weight: bold;
  margin-top: ${(props: TitlePropsType) => props.mt ? props.mt + "px" : 0}
`

const H3 = styled.h3`
  font-size: 1.3em;
  font-family: "Helvetica";
  font-weight: bold;
  margin-top: ${(props: TitlePropsType) => props.mt ? props.mt + "px" : 0}
`

export const Title = { H1, H2, H3 }