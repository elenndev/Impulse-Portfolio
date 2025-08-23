import type { Group, SimplifiedGroup } from "../types";
import { DUMMY_GROUPS } from '../constants/dummy_groups.ts';

export const getGroupsList = async (): Promise<SimplifiedGroup[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const simplifiedData = DUMMY_GROUPS.map(group => ({
        id: group.id,
        groupName: group.name,
        projectName: group.project.name,
      }));
      resolve(simplifiedData);
    }, 500);
  });
};

export const getGroupDetails = async (id: string): Promise<Group | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const groupDetails = DUMMY_GROUPS.find(group => group.id === id);
      resolve(groupDetails);
    }, 500);
  });
};
