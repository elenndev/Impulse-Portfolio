import type { Group, SimplifiedGroup } from "../types";
import { groups } from '../constants/dummy_groups.ts';

// ao implementar um banco de dados e um backend, aqui serão as requisições para buscar as informações
export const getGroupsList = async (): Promise<SimplifiedGroup[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const simplifiedData = groups.map(group => ({
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
      const groupDetails = groups.find(group => group.id === id);
      resolve(groupDetails);
    }, 500);
  });
};
