import './style.css';
import {render} from 'lit-html'
import {normalize, setupPage} from 'csstips';
import {Context} from './src/api'
import {Router} from './src/components'
import {App} from './src/AppShell'

normalize();
setupPage("root");

const uiState = Context.default.ui;
const router = Router.default;
router.routes = uiState.routes;

router.goTo(uiState.activeRoute);

render(
  App(router, uiState), 
  document.getElementById('root')
);
