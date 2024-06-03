export interface Comment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: PerformedViaGithubApp | null;
}

export interface PerformedViaGithubApp {
  id: number;
  slug: string;
  node_id: string;
  owner: User;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  permissions: Permissions;
  events: string[];
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Permissions {
  administration: string;
  checks: string;
  contents: string;
  deployments: string;
  emails: string;
  issues: string;
  members: string;
  metadata: string;
  pull_requests: string;
  repository_hooks: string;
  statuses: string;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
