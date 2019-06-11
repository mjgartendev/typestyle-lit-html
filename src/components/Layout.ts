import {html} from 'lit-html'
import {Router, RouterState, IRouter, Route} from './Router'
export interface LayoutConfig {
  rows: string
  cols: string
  gridAreas: string
}
export interface Bar {
  gridArea: string,
  leftItems: string[],
  centerItems: string[],
  rightItems: string[]
}
export interface Panel {
  gridArea: string,
  title: string,
  hidden: Boolean,
  minified: Boolean,
  tabs: Tab[],
  activeTab: Tab,
}
export interface Modal {
  active: Boolean,
  title: string,
  content: string,
  actions: string[],
}
export interface Tab {
  id: string
  label: string
  content: string
  active: Boolean
}

export const Header = (router: Router) => html`
  <header class="flex justify-between align-center bg-dark fg-primary" style="grid-area: header">
    <h1 class="f5 p2">App Header</h1>
    <nav class="flex justify-end px2">
      ${router.routes.map(route => html`
        <a @click=${router.goTo(route)} href="${route.path}" class="f6 btn btn-flat p2 ${router.currentRoute == route? "active": ""}">
          ${route.name}
        </a>
      `)}
    </nav>
  </header>
`;
export const Main = (router: Router) => html`
  <main class="page-container p3 bg-white fg-dark br2" style="grid-area: main">
    <h1 class="title">${router.currentRoute.name}</h1>
    <h2 class="subtitle">Path: /${router.currentRoute.path}</h2>
    ${router.currentRoute.component}
  </main>
`;
export const Panel = (state: Panel) => html`
  <div id="${state.gridArea}" class="flex col fg-primary bg-light" style="grid-area: ${state.gridArea}">
    <header class="f4 b p1">${state.title}</header>
    <nav class="panel-tabs bg-dark flex">${state.tabs.map(tab => html`
      <label class="btn btn-flat br f5" for="${tab.id}"> ${tab.label}
        <input id="${tab.id} type="radio" hidden class="panel-tab" group="${state.gridArea}-tab" value="${tab.id}">
      </label>
    `)}</nav>
    <div class="panel-body p1">${state.activeTab.content}</div>
    <footer class="panel-footer"></footer>
  </div>
`;
export const Bar = (state: Bar) => html`
  <div class="flex justify-between align-center fg-medium p1 bl br" style="grid-area: ${state.gridArea}">
    <div>${state.leftItems}</div>
    <div>${state.centerItems}</div>
    <div>${state.rightItems}</div>
  </div>
`;
export const Modal = (state: Modal) => html`
  <div id="app-modal" class="modal" hidden>
    <header class="modal-header">${state.title}</header>
    <div class="modal-body">${state.content}</div>
    <footer class="modal-footer">${state.actions.map(action => html`
      <button class="btn" data-action="${action}">${action}</button>
    `)}</footer>
  </div>
`;
export const Footer = () => html`
  <footer class="bg-dark flex justify-center align-center" style="grid-area: footer"> Footer </footer>
`;