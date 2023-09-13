import { Loading } from 'vant'
import { render } from 'vue'
import type { Directive, DirectiveBinding } from 'vue'

export type LoadingBinding = boolean
export interface ElementLoading extends HTMLElement {
  instance: HTMLElement
}

const cssText = `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`

function createInstance(el: ElementLoading, binding: DirectiveBinding<LoadingBinding>) {
  if (!el.instance) {
    const wrap = document.createElement('div')
    wrap.style.cssText = cssText

    const vm = h(Loading, {
      type: 'spinner',
    })

    render(vm, wrap)

    if (!['relative', 'absolute'].includes(el.style.position)) {
      el.style.position = 'relative'
    }

    el.appendChild(wrap)
    el.instance = wrap
  }

  el.instance.style.display = binding.value ? 'flex' : 'none'
}

const loadingDirective: Directive = {
  mounted(el, binding) {
    createInstance(el, binding)
  },
  updated(el, binding) {
    createInstance(el, binding)
  },
}

export default loadingDirective
