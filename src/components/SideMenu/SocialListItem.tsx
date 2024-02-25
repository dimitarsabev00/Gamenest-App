import React from "react";

type SocialListItemProps = {
  item: {
    icon: string;
  };

  className: string;
};

const SocialListItem: React.FC<SocialListItemProps> = ({ item, className }) => {
  return (
    <li>
      <a href="#" className={className}>
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
};

export default SocialListItem;
