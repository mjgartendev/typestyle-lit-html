import * as db from './db';
export default {
  db: db,
  auth: db.getUser,
  ui: db.db.ui,
  plugins: db.getAll('plugins'),
  theme: db.getAll('theme'),
  workspaces: db.getAll('workspaces'),
  projects: db.getAll('projects')
}