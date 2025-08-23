import type { SimplifiedGroup } from "../types";

interface CardProps {
  group: SimplifiedGroup;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ group, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mini-card p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
    >
      <h3 className="text-xl font-bold text-destaque-amarelo">{group.groupName}</h3>
      <p className="mt-2 text-gray-400">
        Projeto: <span className="text-white">{group.projectName}</span>
      </p>
    </div>
  );
};
