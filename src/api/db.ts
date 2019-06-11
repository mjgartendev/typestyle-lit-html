export const db = {
  "user": {
    "name": "michael",
    "role": "admin",
    "username": "mjgarten",
    "github": "https://api.github.com/users/mjgartendev",
    "gravatar": "https://en.gravatar.com/mjgartendev.json",
  },
  "projects": [
    {"id": 1, "name": "Project 1", "status": "In Progress"},
    {"id": 2, "name": "Project 2", "status": "Pending"},
    {"id": 3, "name": "Project 3", "status": "Complete"}
  ],
  "workspaces": [
    {"id": 1, "name": "default", "projects": [1, 2], "plugins": [1, 2]},
    {"id": 2, "name": "default", "projects": [3], "plugins": [1, 2, 3]},
  ],
  "plugins": [
    {"id": 1, "name": "Plugin 1", "description": "Plugin number 1"},
    {"id": 2, "name": "Plugin 2", "description": "Plugin number 2"},
    {"id": 3, "name": "Plugin 3", "description": "Plugin number 3"}
  ],
  "theme": {
    "colors": {
      "primary": 'mediumseagreen',
      "accent": "coral",
      "light": "#f1f1f1",
      "medium":"#999",
      "dark":"#333"
    }
  },
  "ui": {
    "routes": [
      {path: "/", name:"Home", component: "Home"},
      {path: "projects", name:"Projects", component: "Projects"},
      {path: "workspaces", name: "Workspaces", component: "Workspaces"},
      {path: "plugins", name: "Plugins", component: "Plugins"}
    ],
    "activeRoute": {path: "/", name:"Home", component: "Home"},
    "layouts": [
      {rows: '50px 1fr 50px', cols: '1fr 6fr 1fr', gridAreas: `'top top top' 'left main right' 'btm btm btm'`},
      {rows: '50px 1fr 50px', cols: '1fr 6fr 1fr', gridAreas: `'left top top' 'left main right' 'left btm btm'`},
      {rows: '30px auto 1fr auto 30px', cols: 'auto 1fr auto', gridAreas: `'header header header' 'left top right' 'left main right' 'left btm right' 'footer footer footer'`}
    ],
    "currentLayout": {
      rows: '40px auto 1fr auto 30px', 
      cols: 'var(--left-size, auto) 1fr var(--right-size, auto)', 
      gridAreas: `'header header header' 'left top right' 'left main right' 'left btm right' 'footer footer footer'`
    },
    "leftPanel": {
      gridArea: 'left',
      title: "Workspace",
      hidden: false, 
      minified: false,
      tabs: [
        {id: 'projects',  label: 'Projects',  content: 'Projects..',  active: true},
        {id: 'plugins',  label: 'Plugins',  content: 'plugins content',  active: false}
      ], 
      activeTab:{id: 'projects',  label: 'Projects',  content: 'Projects..',  active: true},
    },
    "rightPanel": {
      gridArea: 'right', 
      title: "Theme",
      hidden: false, 
      minified: false,
      tabs: [
        {id: 'colors',  label: 'Colors',  content: 'Tab 1 content',  active: true},
        {id: 'typography',  label: 'Typography',  content: 'Tab 2 content',  active: false}
      ], 
      activeTab: {id: 'colors',  label: 'Colors',  content: 'Tab 1 content',  active: true},
    },
    "topBar": {
      gridArea: 'top', 
      leftItems: ['left'],
      centerItems: ['center'],
      rightItems: ['right']
    },
    "bottomBar": {
      gridArea: 'btm',
      leftItems: ['left'],
      centerItems: ['center'],
      rightItems: ['right']
    },
    "modal": {
      active: false,
      title: 'Example Modal',
      content: 'Some example content',
      actions: ['Submit', 'Cancel']
    },
  }
}

export const getUser = () => db.user;
export const getAll = (collection) => db[collection];
export const getById = (collection, id) => db[collection].filter(i => i.id == id);