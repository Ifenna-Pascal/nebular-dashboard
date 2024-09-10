import { ComponentProps } from 'react';

type ButtonType = ComponentProps<'button'> & ComponentProps<'a'>;

export interface IButton extends ButtonType {
  styles: string;
}
