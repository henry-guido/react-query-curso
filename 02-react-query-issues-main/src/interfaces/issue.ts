export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: Date;
  closed_at: null;
  author_association: AuthorAssociation;
  active_lock_reason: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
}

export enum AuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  None = "NONE",
}

export interface Label {
  id: number;
  node_id: NodeID;
  url: string;
  name: Name;
  color: string;
  default: boolean;
  description: string | null;
}

export enum Name {
  CLASigned = "CLA Signed",
  Dependencies = "dependencies",
  React19 = "React 19",
  ReactCoreTeam = "React Core Team",
  StatusUnconfirmed = "Status: Unconfirmed",
}

export enum NodeID {
  LAKwDOAJy2Ks8AAAABjqcDsg = "LA_kwDOAJy2Ks8AAAABjqcDsg",
  MDU6TGFiZWwxNTU5ODQxNjA = "MDU6TGFiZWwxNTU5ODQxNjA=",
  MDU6TGFiZWwxNzU3ODE2OTcz = "MDU6TGFiZWwxNzU3ODE2OTcz",
  MDU6TGFiZWwxNzc1OTU4Mjg1 = "MDU6TGFiZWwxNzc1OTU4Mjg1",
  MDU6TGFiZWwxOTY4NTgzNzQ = "MDU6TGFiZWwxOTY4NTgzNzQ=",
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
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

export enum State {
  Open = "open",
  Closed = "closed",
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
  type: Type;
  site_admin: boolean;
}

export enum Type {
  Bot = "Bot",
  User = "User",
}
