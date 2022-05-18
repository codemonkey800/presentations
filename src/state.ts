import { atom } from 'jotai'
import { SlideChangedEvent } from 'reveal.js'

type SlideState = Pick<SlideChangedEvent, 'indexh' | 'indexv'>

export const slideState = atom<SlideState>({
  indexh: 0,
  indexv: 0,
})
