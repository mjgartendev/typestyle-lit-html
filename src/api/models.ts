export type ProjectStatus = 'New' | 'In Progress' | 'Complete' | 'On Hold'
export type WorkspaceStatus = 'Available' | 'Active' | 'In Use' | 'Empty'
export type UserRole = 'User' | 'Manager' | 'Admin'
export type PluginStatus = 'Available' | 'Enabled' | 'Loaded' | 'Error'

export type Project = {
  id: Number,
  name: String,
  status: ProjectStatus
}

export type Plugin = {
  id: Number,
  name: String,
  description: String,
  status: PluginStatus
}

export type Workspace = {
  id: Number,
  name: String,
  projects: Project[],
  plugins: Plugin[]
}

export type User = {
  name: String,
  role: UserRole,
  username: String,
  gravatar: String
}