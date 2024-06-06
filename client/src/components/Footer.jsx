import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="mt-5 position-relative">
      <Container>
        <Row>
          <h1 className="pb-4 text-uppercase">Woofington Inn</h1>
          <p>
            1234 Maple Street
            <br />
            Toronto, Ontario Canada M6N1Y6
            <br /> tel: 416-555-9876{' '}
          </p>
        </Row>
        <Row className="py-3">
          <Col>
            <a href="/" className="btn inline-block text-white">
              <EmailIcon sx={{ fontSize: '30px' }} />
            </a>
            <a
              href="http://www.facebook.com"
              className="btn inline-block text-white"
            >
              <FacebookOutlinedIcon sx={{ fontSize: '30px' }} />
            </a>
            <a
              href="http://www.instgram.com"
              className="btn inline-block text-white"
            >
              <InstagramIcon sx={{ fontSize: '30px' }} />
            </a>
            <a
              href="http://www.twitter.com"
              className="btn inline-block text-white"
            >
              <XIcon sx={{ fontSize: '30px' }} />
            </a>
            <a
              href="https://github.com/iamnikkixo"
              className="btn inline-block text-white"
            >
              <GitHubIcon sx={{ fontSize: '30px' }} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/newclients">New Clients</Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <small>
            &copy;2024 Copyright. Designed by Nikki. All Rights Reserved.
          </small>
        </Row>
      </Container>
      <div className="custom-shape-divider-top-1708767424">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
