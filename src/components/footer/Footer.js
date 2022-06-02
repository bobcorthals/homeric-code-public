import { FooterBar, Navbar, DivBar, A } from './footerElements';

const Footer = () => {
  return (
    <FooterBar>
      <Navbar>
        <DivBar>
        <A href="mailto:bobcorthals@gmail.com">Get in touch</A>
        </DivBar>
        <DivBar>
          © Bob Corthals 2022
        </DivBar>
      </Navbar>
    </FooterBar>
  )
}

export default Footer;