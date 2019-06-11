export default {
  user: {name: '', isLoggedIn: false},
  routes: [
    {path: '/', component: 'HomePage', data: {user: 'Michael'}},
    {path: 'settings', component: 'UserPage', data: {user: 'Michael'}},
    {path: 'projects', component: 'ProjectsPage', data: {user: 'Michael'}}
  ],
  currentRoute: {path: '/', component: 'HomePage', data: {user: 'Michael'}},
  layouts: [
    {rows: '50px 1fr 50px', cols: '1fr 6fr 1fr', gridAreas: `'top top top' 'left main right' 'btm btm btm'`},
    {rows: '50px 1fr 50px', cols: '1fr 6fr 1fr', gridAreas: `'left top top' 'left main right' 'left btm btm'`},
    {rows: '30px auto 1fr auto 30px', cols: 'auto 1fr auto', gridAreas: `'header header header' 'left top right' 'left main right' 'left btm right' 'footer footer footer'`}
  ],
  currentLayout: {
    rows: '40px auto 1fr auto 30px', 
    cols: 'var(--left-size, auto) 1fr var(--right-size, auto)', 
    gridAreas: `'header header header' 'left top right' 'left main right' 'left btm right' 'footer footer footer'`
  },
  leftPanel: {
    gridArea: 'left', 
    hidden: false, 
    minified: false,
    tabs: [
      {id: 'tab1',  label: 'Tab 1',  content: 'Tab 1 content',  active: true},
      {id: 'tab2',  label: 'Tab 2',  content: 'Tab 2 content',  active: false}
    ], 
    activeTab: {id: 'tab1',  label: 'Tab 1',  content: 'Tab 1 content',  active: true}
  },
  rightPanel: {
    gridArea: 'right', 
    hidden: false, 
    minified: false,
     tabs: [
      {id: 'tab1',  label: 'Tab 1',  content: 'Tab 1 content',  active: true},
      {id: 'tab2',  label: 'Tab 2',  content: 'Tab 2 content',  active: false}
    ], 
    activeTab: {id: 'tab1',  label: 'Tab 1',  content: 'Tab 1 content',  active: true}
  },
  topBar: {
    gridArea: 'top', 
    leftItems: ['left'],
    centerItems: ['center'],
    rightItems: ['right']
  },
  bottomBar: {
    gridArea: 'btm',
    leftItems: ['left'],
    centerItems: ['center'],
    rightItems: ['right']
  },
  modal: {
    active: false,
    title: 'Example Modal',
    content: 'Some example content',
    actions: ['Submit', 'Cancel']
  },
}