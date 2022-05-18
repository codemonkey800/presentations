/* eslint-disable import/no-default-export */
/* eslint-disable max-classes-per-file */

declare module 'reveal.js' {
  export interface RevealOptions {
    history?: boolean
    plugins?: unknown[]
    navigationMode?: 'default' | 'linear' | 'grid'
  }

  export interface SlideChangedEvent {
    previousSlide: number
    currentSlide: number
    indexh: number
    indexv: number
  }

  export interface FragmentEvent {
    fragment: HTMLElement
  }

  export type SlideEventHandler<E> = (event: E) => void

  type EventHandlerMap = {
    slidechanged: SlideChangedEvent
    slidetransitionend: SlideChangedEvent
    fragmentshown: FragmentEvent
    fragmenthidden: FragmentEvent
  }

  type RevealEvents = keyof EventHandlerMap

  export default class Reveal {
    constructor(options?: RevealOptions)

    initialize(): void

    on<E extends RevealEvents>(
      event: E,
      handler: SlideEventHandler<EventHandlerMap[E]>,
    ): void
  }
}

declare module 'reveal.js/plugin/highlight/highlight.esm.js' {
  export default class MarkdownPlugin {
    constructor()
  }
}
