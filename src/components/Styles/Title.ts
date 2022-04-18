import styled from "styled-components";

// xs14, sm16, p18, h3-20, h2-22, h1-24 

type TitlePropsType = {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
}

export const H1 = styled.h1`
  font-size: 1.5em;
  font-family: "Helvetica";
  margin-top: ${(props: TitlePropsType) => props.mt ? props.mt + "px" : 0}
`

export const Title = { H1 }