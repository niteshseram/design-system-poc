import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Button = forwardRef(
  ({ children, type = 'button', className, ...rest }: {children: React.ReactNode, type: string, className: string}, ref) => (
    <StyledButton {...rest} ref={ref} className={clsx(className)}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';

const StyledButton = styled.button`
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: none;
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;