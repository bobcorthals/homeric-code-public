import styled from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const goToTopAuto = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  });
};

export const ScrollBtn = styled.div`
  position: fixed;
  right: 3.5rem;
  bottom: 7rem;
  cursor: pointer;
  outline: none;
  color: #fff;
`

export const ArrowUp = styled(BsArrowUpCircleFill)`
  width: 3.5rem;
  height: 3.5rem;
  fill: #3E3A44;
`