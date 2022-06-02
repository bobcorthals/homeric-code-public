import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.5rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const TextCardElem = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  max-width: 570px;
`

export const AnnotationCardElem = styled.div`
  /* align-self: flex-start;
  margin-top: 100px;
  padding: 1.5rem;
  width: 500px;
  background-color: rgb(255, 215, 164);
  margin-left: 0.5rem;
  align-items: flex-start;
  display: flex;
  box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.125rem; */

  position: sticky;
  top: 120px;
  width: 570px;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: .5rem;
`

export const Header = styled.div`
  background-color: #3E3A44;
  height: 4rem;
  color:#FFFFFF;
  text-align: center;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.0625rem solid #3E3A44;
  border-radius: 0.125rem 0.125rem 0 0;

  & > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0 86px;
  }
`

export const Text = styled.div`
  text-align: center;
  min-height: 75vh;
  padding: 1rem 0;
  border-left: 0.0625rem solid #3E3A44;
  border-right: 0.0625rem solid #3E3A44;
  border-bottom: 0.0625rem solid #3E3A44;
  border-radius: 0 0 0.125rem 0.125rem;
`

export const HeaderAnn = styled.div`
  /* background-color: #B397AE; */
  background-color: #FFBD68;
  height: 4rem;
  /* color:#FFFFFF; */
  color: #3E3A44;
  text-align: center;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #3E3A44;
  border-radius: 0.125rem 0.125rem 0 0;

  & > h3 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
`

export const TextAnn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-height: 10rem;
  padding: 1rem;
  position: relative;
  top: 2rem;
  border: 0.0625rem solid #3E3A44;
  background-color: rgb(255 247 237);
  /* === background-color: rgba(255,216,167,0.2); */

  &:before {
    width: 0;
    height: 0;
    position: absolute;
    left: -25px;
    top: 40px;
    content: "";
    border-style: solid;
    border-width: 25px 25px 25px 0;
    border-color: transparent #3E3A44 transparent transparent;
    color: red;
  }
`

export const TextBlockGreek = styled.div`
  display: flex;
  text-align: right;
`

export const Line = styled.span`
  width: 70px;
  line-height: 2;
`

export const Greek = styled.span`
  padding-left: 1rem;
  text-align: left;
  width: 498px; 
  line-height: 2;
`

export const Translation = styled.div`
  padding-left: 84px;
  text-align: left;
  font-size: 80%;
  font-style: italic;
  display: none;

  &.show {
    display: block;
  }
`

export const SpanSpace = styled.span`
`

export const SpanPunct = styled.span`

`

export const SpanWord = styled.span`

  &:hover {
    color: brown;
    font-weight: 700;
  }
`

export const Btn = styled.button`
  background-color: #B397AE;
  color: #FFF;
  padding: 0.5rem;
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  border: none;
  font-size: 75%;

  &:hover {
    background: #FFF;
    color: #3E3A44;
  }
`