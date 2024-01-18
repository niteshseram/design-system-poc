import { clsx } from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = forwardRef(
  ({ children, type = 'button', className, ...rest }, ref) => (
    <StyledButton {...rest} ref={ref} type={type} className={clsx(className)}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

const StyledButton = styled.button`
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: none;
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  padding: 5px 10px;
  cursor: pointer;
`;
