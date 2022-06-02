import styled from "styled-components";

export const FooterBar = styled.footer`
  background-color: #3E3A44;
  color: #fff;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  margin-top: 3.5rem;
  justify-content: center;
  align-items: center;
`

export const A = styled.a`
  top: 50%;
  text-decoration: none;
  background-color: #B397AE;
  color: #FFF;
  padding: 1rem;
  height: 2rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    background: #FFF;
    color: #3E3A44;
  }
`

export const DivBar = styled.div`
  margin-right: 0.75rem;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 40vw;
`