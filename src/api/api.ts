import * as db from './db'

export const getUser = () => db.db.user;
export const getTheme = () => db.db.theme;
export const getWorkspaces = () => db.db.workspaces;
export const getProjects = () => db.db.projects;
export const getPlugins = () => db.db.plugins;
export const getUi = () => db.getAll('ui');
export const getCollection = (collection) => db.getAll[collection]
export const getItem = (collection, id) => db.getAll[collection].filter(i => i.id == id)