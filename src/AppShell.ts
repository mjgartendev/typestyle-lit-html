import {html, render} from 'lit-html'
import {UI} from './components'

export interface AppState {
  layouts: UI.LayoutConfig[]
  currentLayout: UI.LayoutConfig
  leftPanel: UI.Panel
  rightPanel: UI.Panel
  topBar: UI.Bar
  bottomBar: UI.Bar
  modal: UI.Modal
}


export const App = (router, state: AppState) => html`
  <div class="app-wrapper" 
    style="grid-template-rows: ${state.currentLayout.rows}; grid-template-columns: ${state.currentLayout.cols}; grid-template-areas: ${state.currentLayout.gridAreas};"
    ${UI.Header(router)}
    ${UI.Bar(state.topBar)}
    ${UI.Panel(state.leftPanel)}
    ${UI.Main(router)}
    ${UI.Panel(state.rightPanel)}
    ${UI.Bar(state.bottomBar)}
    ${UI.Footer()}
    ${UI.Modal(state.modal)}
  </div>
`;