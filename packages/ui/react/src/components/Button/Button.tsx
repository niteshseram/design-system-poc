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
    <StyledButton buttonType={type} ref={ref} className={clsx(className)} {...rest}>
      {children}
    </StyledButton>
  )
);

Button.displayName = 'Button';

const StyledButton = styled.button<{ buttonType: string }>`
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: ${({ buttonType }) => (buttonType === 'outline' ? '1px solid' : 'none')};
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;
