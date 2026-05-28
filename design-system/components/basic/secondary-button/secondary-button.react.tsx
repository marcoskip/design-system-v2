/**
 * Secondary Button — DS 2.0
 *
 * Botão secundário: ações não-decisórias. Espelha 1:1 o secondary-button.css.
 *
 * Eixos:
 *   theme: 'filled-blue' (default) | 'filled-gray' | 'filled-red' | 'white'
 *   size:  'medium' (default/recomendado) | 'large' | 'small' | 'xsmall'
 *   variação: derivada da presença de iconLeft / children / select
 *
 * Estados default/hover/active/disabled vêm do CSS (pseudo-classes) + atributo
 * `disabled`. Requer secondary-button.css carregado.
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type SecondaryButtonTheme = 'filled-blue' | 'filled-gray' | 'filled-red' | 'white';
export type SecondaryButtonSize = 'medium' | 'large' | 'small' | 'xsmall';

export interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto do botão. Opcional — em "Icon Only" não há label. */
  children?: ReactNode;
  theme?: SecondaryButtonTheme;
  size?: SecondaryButtonSize;
  /** Nome do glifo Material Icons à esquerda. */
  iconLeft?: string;
  /** Mostra o indicador de dropdown à direita (chevron). */
  select?: boolean;
  className?: string;
}

const SIZE_CLASS: Record<SecondaryButtonSize, string> = {
  medium: '',                       // default, sem modificador
  large: 'btn-secondary--large',
  small: 'btn-secondary--small',
  xsmall: 'btn-secondary--xsmall',
};

const THEME_CLASS: Record<SecondaryButtonTheme, string> = {
  'filled-blue': '',                // default, sem modificador
  'filled-gray': 'btn-secondary--filled-gray',
  'filled-red': 'btn-secondary--filled-red',
  white: 'btn-secondary--white',
};

export function SecondaryButton({
  children,
  theme = 'filled-blue',
  size = 'medium',
  iconLeft,
  select = false,
  className,
  ...rest
}: SecondaryButtonProps) {
  const classes = [
    'btn-secondary',
    THEME_CLASS[theme],
    SIZE_CLASS[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Em "Icon Only" o consumidor deve passar `aria-label` via props.
  // Em variações com `select`, recomenda-se passar aria-haspopup="true".
  return (
    <button type="button" className={classes} {...rest}>
      {iconLeft && (
        <span className="btn-secondary__icon"><span className="material-icons">{iconLeft}</span></span>
      )}
      {children && (
        <span className="btn-secondary__label">{children}</span>
      )}
      {select && (
        <span className="btn-secondary__select"><span className="material-icons">arrow_drop_down</span></span>
      )}
    </button>
  );
}
