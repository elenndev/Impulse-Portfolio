import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import type { SimplifiedGroup } from '../types';
import { getGroupsList } from '../service/groupsApi';
import { OpenGroup } from '../components/OpenGroup';
import { BackIcon } from '../components/ui/BackIcon';
import { Link } from 'react-router-dom';

export function Groupspage() {
  const [groups, setGroups] = useState<SimplifiedGroup[]>([]);
  const [openGroup, setOpenGroup] = useState<null | string>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      const data = await getGroupsList();
      setGroups(data);
    };

    fetchGroups();
  }, []);

  const handleCardClick = (groupId: string) => {
    setOpenGroup(openGroup === groupId ? null : groupId);
  };

  function closeGroup() {
    setOpenGroup(null);
  }

  return (
    <div className="p-8">
      <div className="header flex flex-row gap-4 items-center">
        <Link to="/" className="w-fit flex flex-row gap-2 px-4 py-2 btn-secondary rounded-full transition-colors">
          <BackIcon className="w-5 h-5" />
          Voltar
        </Link>
        <h2 className="text-4xl font-bold text-destaque-amarelo">Projetos dos Grupos</h2>
      </div>
      <p className='text-center text-md text-gray-400 mt-3 mb-8'>Clique no card para ver mais informações sobre o projeto</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!openGroup && groups.map((group, index) => (
          <div id='groupsList'
            className='animate-slide-right'
            style={{ animationDelay: `${index * 0.1}s` }}
            key={group.id}>
            <Card group={group} onClick={() => handleCardClick(group.id)} />
          </div>
        ))}
      </div>
      {openGroup && (
        <OpenGroup groupId={openGroup} closeGroup={closeGroup} />
      )}
    </div>
  );
}
