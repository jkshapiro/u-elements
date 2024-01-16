import { DISPLAY_BLOCK, attr, customElements, style } from '../utils'
declare global {
  interface HTMLElementTagNameMap {
    'u-option': UHTMLOptionElement
  }
}

// Constants for better compression
const DISABLED = 'disabled'
const SELECTED = 'selected'

export class UHTMLOptionElement extends HTMLElement {
  static get observedAttributes() {
    return [DISABLED, SELECTED]
  }
  connectedCallback() {
    style(this, `${DISPLAY_BLOCK}:host { cursor: pointer }`)
    attr(this, { role: 'option', tabindex: -1 })
  }
  attributeChangedCallback(name: string, _prev: string, next: string) {
    attr(this, `aria-${name}`, next !== null || next) // Reflect aria-selected|disabled
  }
  /** Sets or retrieves whether the option in the list box is the default item. */
  get defaultSelected(): boolean {
    return this[SELECTED]
  }
  set defaultSelected(value: boolean) {
    this[SELECTED] = value
  }
  get disabled(): boolean {
    return attr(this, DISABLED) !== null
  }
  set disabled(value: boolean) {
    attr(this, DISABLED, value ? '' : null)
  }
  /** Retrieves a reference to the form that the object is embedded in. */
  get form(): HTMLFormElement | null {
    return this.closest('form')
  }
  /** Sets or retrieves the ordinal position of an option in a list box. */
  get index(): number {
    const container = getContainer(this)
    if (!container) return 0
    return [...container.getElementsByTagName(this.nodeName)].indexOf(this)
  }
  /** Sets or retrieves a value that you can use to implement your own label functionality for the object. */
  get label(): string {
    return attr(this, 'label') || this.text
  }
  set label(value: string) {
    attr(this, 'label', value)
  }
  get selected(): boolean {
    return attr(this, SELECTED) !== null
  }
  set selected(value: boolean) {
    attr(this, SELECTED, value ? '' : null)
  }
  /** Sets or retrieves the text string specified by the option tag. */
  get text(): string {
    return (this.textContent || '').trim()
  }
  set text(text: string) {
    this.textContent = text
  }
  /** Sets or retrieves the value which is returned to the server when the form control is submitted. */
  get value(): string {
    return attr(this, 'value') || this.text
  }
  set value(value: string) {
    attr(this, 'value', value)
  }
}

const getContainer = (self: UHTMLOptionElement) =>
  self.closest('u-datalist,u-selectlist')

  customElements.define('u-option', UHTMLOptionElement)