import PropTypes from 'prop-types';
import { Title, Container, Dotted } from './Section.styled';

const Section = ({ text, children }) => {
  return (
    <Container>
      <Dotted>
        <Title>{text}</Title>
        {children}
      </Dotted>
    </Container>
  );
};

export default Section;

Section.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
