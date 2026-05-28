/**
 * Badge — DS 2.0
 *
 * Componente puramente visual (sem estado interno). Reflete status, contador
 * ou notificação. Espelha 1:1 o badge.css (mesmas classes BEM).
 *
 * Eixos:
 *   variation: 'complete' (default, com conteúdo) | 'basic' (dot 8px)
 *   theme:     'filled' (default) | 'ghost'
 *   size:      'medium' (default) | 'small'   — só em 'complete'
 *   color:     'info' (default) | 'success' | 'warning' | 'danger' | 'neutral'
 *
 * Requer que badge.css (ou o bundle do DS) esteja carregado.
 */

import type { ReactNode } from 'react';

export type BadgeTheme = 'filled' | 'ghost';
export type BadgeSize = 'medium' | 'small';
export type BadgeColor = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

interface BadgeBaseProps {
  theme?: BadgeTheme;
  /** Cor semântica. 'info' (azul) é o default. */
  color?: BadgeColor;
  className?: string;
}

export interface BadgeCompleteProps extends BadgeBaseProps {
  variation?: 'complete';
  size?: BadgeSize;
  /**
   * Nome do glifo Material Icons. O badge SEMPRE renderiza o ícone na variante
   * FILLED (`material-icons`) — nunca outlined. Ex.: icon="info".
   */
  icon?: string;
  /** Texto curto, 1–2 palavras. Renderizado em UPPERCASE + bold pelo CSS. */
  label?: ReactNode;
  /** Contador numérico (ex.: 99). */
  counter?: ReactNode;
}

export interface BadgeBasicProps extends BadgeBaseProps {
  variation: 'basic';
  /** Obrigatório no dot — não há texto visível. */
  ariaLabel: string;
}

export type BadgeProps = BadgeCompleteProps | BadgeBasicProps;

const COLOR_CLASS: Record<BadgeColor, string> = {
  info: '',                  // default, sem modificador
  success: 'badge--success',
  warning: 'badge--warning',
  danger: 'badge--danger',
  neutral: 'badge--neutral',
};

export function Badge(props: BadgeProps) {
  const { theme = 'filled', color = 'info', className } = props;

  const classes = [
    'badge',
    props.variation === 'basic' && 'badge--basic',
    theme === 'ghost' && 'badge--ghost',
    props.variation !== 'basic' && props.size === 'small' && 'badge--small',
    COLOR_CLASS[color],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Variação basic — dot sem conteúdo, exige aria-label
  if (props.variation === 'basic') {
    return <span className={classes} role="status" aria-label={props.ariaLabel} />;
  }

  // Variação complete — ícone/texto/contador combináveis.
  // Ícone é SEMPRE filled (className "material-icons").
  const { icon, label, counter } = props;
  return (
    <span className={classes}>
      {icon != null && (
        <span className="badge__icon"><span className="material-icons">{icon}</span></span>
      )}
      {label != null && <span className="badge__label">{label}</span>}
      {counter != null && <span className="badge__counter">{counter}</span>}
    </span>
  );
}
