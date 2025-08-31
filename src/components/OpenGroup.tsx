import { useEffect, useState } from "react";
import type { Group } from "../types";
import { getGroupDetails } from "../service/api";

interface openGroupProps {
  groupId: string;
  closeGroup: () => void;
}
export const OpenGroup = ({ groupId, closeGroup }: openGroupProps) => {
  const [groupInfo, setGroupInfo] = useState<false | Group>(false)

  useEffect(() => {
    const fetchGroups = async () => {
      const data = await getGroupDetails(groupId);
      if (data) {
        setGroupInfo(data);
      }
    };

    fetchGroups();
  }, []);


  return (
    <div className="extended-card mt-8 p-6 rounded-lg shadow-inner">
      {!groupInfo && <p>carregando...</p>}
      {groupInfo && <>
        <span className="w-full flex flex-row justify-end">
          <button
            onClick={closeGroup}
            className="text-gray-400 hover:text-white transition-colors justify-self-end"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>

        <h3 className="text-2xl font-bold mb-2 text-destaque-amarelo">{groupInfo.project.name}</h3>
        <p className="text-gray-300 mb-4">{groupInfo.project.summary}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-white">Integrantes:</h4>
          <ul className="list-disc list-inside text-gray-400">
            {groupInfo.members.map((member) => (
              <li key={member.name}>
                {member.name}
                {member.linkedin && (<>
                  - <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-yellow hover:underline">LinkedIn</a>
                </>)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <a href={groupInfo.project.repositoryLink} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 btn-yellow btn-primary font-semibold rounded-full">
            Ver Repositório
          </a>
          {groupInfo.project.pitchLink &&
            <a href={groupInfo.project.pitchLink} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 btn-secondary rounded-full transition-colors">
              Ver Pitch
            </a>
          }
        </div>
      </>}
    </div>
  );
}
