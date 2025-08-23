export interface Member {
  name: string;
  linkedin: string;
}

export interface Project {
  name: string;
  summary: string;
  repositoryLink: string;
  pitchLink?: string;
}

export interface Group {
  id: string;
  name: string;
  members: Member[];
  project: Project;
}

export interface SimplifiedGroup {
  id: string;
  groupName: string;
  projectName: string;
}

