/**
 * Checkbox — DS 2.0
 *
 * Espelha 1:1 o checkbox.css. Suporta os 3 valores (off / on / half) e os
 * estados nativos (hover/disabled/focus). Use `indeterminate` para o estado
 * half — a prop é aplicada ao input via ref (não existe atributo HTML).
 *
 * Eixos:
 *   value:    derivado de `checked` + `indeterminate`
 *   estado:   default | hover | disabled (atributo nativo)
 *   variação: só caixa | caixa + label | caixa + label + help
 */

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Rótulo principal do checkbox. Omita para usar só a caixa. */
  label?: ReactNode;
  /** Texto complementar (linha menor abaixo do label). */
  helpText?: ReactNode;
  /** Estado indeterminado (half). Aplicado via propriedade do elemento. */
  indeterminate?: boolean;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { label, helpText, indeterminate = false, className, ...inputProps },
    ref
  ) {
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, []);

    useEffect(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const classes = ['checkbox', className].filter(Boolean).join(' ');

    return (
      <label className={classes}>
        <input
          ref={innerRef}
          type="checkbox"
          className="checkbox__input"
          {...inputProps}
        />
        <span className="checkbox__box" aria-hidden="true">
          <span className="checkbox__icon" />
        </span>
        {(label || helpText) && (
          <span className="checkbox__content">
            {label && <span className="checkbox__label">{label}</span>}
            {helpText && <span className="checkbox__help">{helpText}</span>}
          </span>
        )}
      </label>
    );
  }
);
