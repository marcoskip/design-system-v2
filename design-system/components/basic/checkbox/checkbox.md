# Checkbox

> O Checkbox é usado para permitir que o usuário selecione várias opções em uma
> lista ou então que ele selecione uma opção facultativa. Não deve ser usado em
> alternativas únicas e/ou obrigatórias.

Fonte de design: Figma › Design System (node `3052:18872`).
Doc de produto: ClickUp › Design System › Checkbox.

---

## Quando usar

- **Múltipla escolha** dentro de uma lista (várias opções podem ser marcadas).
- **Opção facultativa** isolada (ex.: "Receber e-mails de marketing").

## Quando NÃO usar

- **Alternativa única e/ou obrigatória** → use **radio** (opções mutuamente exclusivas).
- Ação imediata sem confirmação → use um botão ou um **switch** (toggle de estado contínuo).

---

## Anatomia

```
[ caixa ] [ label opcional ]
          [ texto complementar opcional ]
```

A caixa tem 16×16 px. Label e texto complementar ficam à direita, empilhados,
alinhados ao topo da caixa.

### Regras fixas do componente (não são opção de quem usa)

- **Estado indeterminado é binário** — entra via propriedade JS `input.indeterminate = true`
  (não existe atributo HTML estático para isso).
- **A caixa nunca é só ícone** — a "caixa pura" (sem label) é uma variação de uso,
  não um estado visual diferente.
- **Quando marcado/indeterminado, o label fica SemiBold** (Figma — reforço visual
  da seleção).

---

## Value

O Checkbox possui três valores: `check-off` para não selecionado, `check-on`
para selecionado, e `check-half` para indeterminado.

| Valor       | Visual                                                | Trigger                          |
|-------------|-------------------------------------------------------|----------------------------------|
| check-off   | Caixa branca + borda `gray-400`                       | (sem `:checked`, sem indeterminate) |
| check-on    | Caixa `blue-400` + check ✓ branco                     | atributo `checked` / `:checked`     |
| check-half  | Caixa `blue-400` + dash — branco                      | JS: `input.indeterminate = true`    |

## Variations

O Checkbox pode ser usado de três formas: somente a caixa de seleção, uso
conjunto de caixa de seleção e label e uso conjunto de caixa de seleção, label
e texto complementar.

A label pode ser acompanhado de ícone e badge.

| Variação                    | Markup                                                                |
|-----------------------------|------------------------------------------------------------------------|
| Caixa de Seleção            | só `.checkbox__box` (sem `.checkbox__content`)                         |
| Label                       | `.checkbox__box` + `.checkbox__content` com `.checkbox__label`         |
| Label + Texto Complementar  | acima + `.checkbox__help` dentro do `.checkbox__content`               |

---

## Default

> **Convenção do template:** declara o que é renderizado sem modificadores e se
> é recomendação de uso ou só fallback técnico.

O Checkbox tem default técnico: `check-off` · sem label. A classe `.checkbox`
isolada com `<input type="checkbox">` já entrega essa combinação. O uso mais
frequente, porém, é `check-off` + label simples.

| Eixo     | Default            |
|----------|--------------------|
| value    | check-off          |
| estado   | default            |
| variação | só caixa de seleção |

---

## States

Cada botão tem os seguintes estados: `default`, `hover` e `disable`.

| Estado   | off                                       | on / half                                     | Aplicação                        |
|----------|-------------------------------------------|-----------------------------------------------|----------------------------------|
| default  | BG branco · borda `gray-400`              | BG `blue-400` · borda `blue-400`              | repouso                          |
| hover    | BG branco · borda `blue-600`              | BG `blue-600` · borda `blue-600`              | `:hover` / `.is-hover`            |
| disable  | BG `gray-100` · borda `gray-500`          | mesmo BG/borda do off · glyph em `gray-500`   | atributo `disabled` / `.is-disabled` |

No estado **disabled**, label e texto complementar recebem `opacity 0.4`.

`:focus-visible` aplica outline 2px azul na caixa (a11y de teclado).

---

## Tokens utilizados

- `--color-blue-400` — fundo/borda do on, hover off (borda), focus outline
- `--color-blue-600` — borda/fundo no hover
- `--color-gray-400` — borda no off default
- `--color-gray-500` — borda e glyph no disabled
- `--color-gray-100` — fundo no disabled
- `--color-gray-600` — texto do help
- `--color-gray-900` — texto do label
- `--color-white` — fundo do off, glyph do on/half
- `--font-family-base` — Open Sans
- `--font-weight-regular` (label off), `--font-weight-semibold` (label on/half)
- Radius 3px (Figma — literal, ligeiramente menor que `--radius-sm`)

---

## Acessibilidade

- Tag semântica: `<label>` envolvendo `<input type="checkbox">` — clicar no
  rótulo aciona o input nativamente.
- Estado desabilitado: usar o atributo `disabled` real (não só `.is-disabled`,
  que existe apenas para documentação estática do estado).
- Indeterminado: defina via `inputElement.indeterminate = true` no JS. Não há
  atributo HTML para isso. Lembre de limpar ao mudar o valor.
- Foco visível: `:focus-visible` com outline 2px na cor — não remover.
- O input nativo permanece focável e acessível (apenas visualmente oculto via
  `opacity:0`); leitores de tela continuam anunciando estado/rótulo corretamente.

---

## Comportamento (JS)

Nenhum comportamento próprio. `:checked`, `:disabled` e `:focus-visible` são
CSS. O estado `indeterminate` precisa ser setado por JS (propriedade do
elemento, não atributo). A ação de mudança é responsabilidade de quem consome.

---

## Markup canônico

```html
<!-- caixa + label (uso mais comum) -->
<label class="checkbox">
  <input type="checkbox" class="checkbox__input" />
  <span class="checkbox__box" aria-hidden="true"><span class="checkbox__icon"></span></span>
  <span class="checkbox__content">
    <span class="checkbox__label">Insert a text to this element</span>
  </span>
</label>

<!-- caixa + label + texto complementar -->
<label class="checkbox">
  <input type="checkbox" class="checkbox__input" />
  <span class="checkbox__box" aria-hidden="true"><span class="checkbox__icon"></span></span>
  <span class="checkbox__content">
    <span class="checkbox__label">Insert a text to this element</span>
    <span class="checkbox__help">Insert a text to this complementary element</span>
  </span>
</label>

<!-- indeterminate (half) — propriedade JS -->
<label class="checkbox">
  <input type="checkbox" class="checkbox__input" id="meio" />
  <span class="checkbox__box" aria-hidden="true"><span class="checkbox__icon"></span></span>
  <span class="checkbox__content">
    <span class="checkbox__label">Insert a text to this element</span>
  </span>
</label>
<script>document.getElementById('meio').indeterminate = true;</script>

<!-- desabilitado -->
<label class="checkbox">
  <input type="checkbox" class="checkbox__input" disabled />
  <span class="checkbox__box" aria-hidden="true"><span class="checkbox__icon"></span></span>
  <span class="checkbox__content">
    <span class="checkbox__label">Insert a text to this element</span>
  </span>
</label>
```

---

## Versão

`2.0.0` — 2026-05-28
