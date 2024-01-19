import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Button = forwardRef(
  (
    {
      children,
      type = 'outline',
      className,
      ...rest
    }: { children: React.ReactNode; type: string; className: string },
    ref
  ) => (
    <StyledButton buttontype={type} ref={ref} className={clsx(className)} {...rest}>
      {children}
    </StyledButton>
  )
);

Button.displayName = 'Button';

const StyledButton = styled.button<{ buttontype: string }>`
  background-color: ${({ buttontype }) =>
    buttontype !== 'outline' ? `var(--colorsPrimary950)` : 'none'};
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: ${({ buttontype }) => (buttontype === 'outline' ? '1px solid #000' : 'none')};
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;
