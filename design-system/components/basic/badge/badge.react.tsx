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

import type { AriaRole } from 'react';

export type BadgeTheme = 'filled' | 'ghost';
export type BadgeSize = 'medium' | 'small';
export type BadgeColor = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

interface BadgeBaseProps {
  theme?: BadgeTheme;
  /** Cor semântica. 'info' (azul) é o default. */
  color?: BadgeColor;
  className?: string;
}

/**
 * União que força a regra documentada "complete exige pelo menos um conteúdo
 * (ícone, texto ou contador)" — pelo menos um dos três precisa estar presente
 * no nível do tipo. Tentar `<Badge />` sem nenhum gera erro de compilação.
 */
type CompleteContent =
  | { icon: string;  label?: string; counter?: string | number }
  | { icon?: string; label: string;  counter?: string | number }
  | { icon?: string; label?: string; counter: string | number };

/**
 * Props do `complete`. Conteúdo (icon/label/counter) tipado restritivo
 * (string / string | number) — ReactNode aceitaria JSX arbitrário, que vai
 * contra a intenção do componente (texto curto + número).
 *
 * `role` e `ariaLabel` opcionais — necessários quando o badge reflete estado
 * dinâmico (contador que atualiza, etc.). Ver badge.md › Acessibilidade.
 */
export type BadgeCompleteProps = BadgeBaseProps & {
  variation?: 'complete';
  size?: BadgeSize;
  /** Use `'status'` quando o badge representa estado dinâmico. */
  role?: AriaRole;
  /** Descrição acessível quando o badge é dinâmico (contador, notificação). */
  ariaLabel?: string;
} & CompleteContent;

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

  // Variação complete — ícone/texto/contador combináveis. O type-system já
  // garante que pelo menos um dos três está presente. Ícone é SEMPRE filled
  // (className "material-icons").
  const { icon, label, counter, role, ariaLabel } = props as BadgeCompleteProps;
  return (
    <span className={classes} role={role} aria-label={ariaLabel}>
      {icon != null && (
        <span className="badge__icon"><span className="material-icons">{icon}</span></span>
      )}
      {label != null && <span className="badge__label">{label}</span>}
      {counter != null && <span className="badge__counter">{counter}</span>}
    </span>
  );
}
