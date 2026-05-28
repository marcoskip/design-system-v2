/**
 * Primary Button — DS 2.0
 *
 * Botão principal: ações/decisões importantes. Espelha 1:1 o primary-button.css.
 *
 * Eixos:
 *   theme: 'filled' (default) | 'ghost'
 *   size:  'medium' (default/recomendado) | 'large' | 'small' | 'xsmall'
 *   ícone: opcional, à esquerda ou à direita — SEMPRE com texto (nunca só ícone)
 *
 * Estados default/hover/active/disabled vêm do CSS (pseudo-classes) + atributo
 * `disabled`. Requer primary-button.css (ou o bundle do DS) carregado.
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type PrimaryButtonTheme = 'filled' | 'ghost';
export type PrimaryButtonSize = 'medium' | 'large' | 'small' | 'xsmall';

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto do botão (UPPERCASE pelo CSS). Obrigatório — botão nunca é só ícone. */
  children: ReactNode;
  theme?: PrimaryButtonTheme;
  size?: PrimaryButtonSize;
  /** Nome do glifo Material Icons à esquerda do texto. */
  iconLeft?: string;
  /** Nome do glifo Material Icons à direita do texto. */
  iconRight?: string;
  className?: string;
}

const SIZE_CLASS: Record<PrimaryButtonSize, string> = {
  medium: '',                    // default, sem modificador
  large: 'btn-primary--large',
  small: 'btn-primary--small',
  xsmall: 'btn-primary--xsmall',
};

export function PrimaryButton({
  children,
  theme = 'filled',
  size = 'medium',
  iconLeft,
  iconRight,
  className,
  ...rest
}: PrimaryButtonProps) {
  const classes = [
    'btn-primary',
    theme === 'ghost' && 'btn-primary--ghost',
    SIZE_CLASS[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} {...rest}>
      {iconLeft && (
        <span className="btn-primary__icon"><span className="material-icons">{iconLeft}</span></span>
      )}
      <span className="btn-primary__label">{children}</span>
      {iconRight && (
        <span className="btn-primary__icon"><span className="material-icons">{iconRight}</span></span>
      )}
    </button>
  );
}
