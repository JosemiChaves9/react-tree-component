import './TreeComponent.css';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DataItem } from './types';

export const TreeComponent = (props: { data: DataItem[] }) => {
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  const [toggleData, setToggleData] = useState<boolean>(false);

  const onClickOnArrow = (itemName: string) => {
    if (activeMenus) {
      if (activeMenus.includes(itemName)) {
        const index = activeMenus.indexOf(itemName);
        activeMenus.splice(index, 1);
      } else {
        setActiveMenus([...activeMenus, itemName]);
      }
    }
  };

  const renderChildren = (data: DataItem[]) => {
    return (
      <ul>
        {data.map((item: DataItem) => {
          return (
            <li
              unselectable={'off'}
              key={item.name}
              className='item'
              onClick={(e) => {
                onClickOnArrow(item.name);
                setToggleData(!toggleData);

                e.stopPropagation();
              }}>
              {item.children && activeMenus.includes(item.name) && (
                <FontAwesomeIcon icon={faChevronDown} className='downArrow' />
              )}

              {item.children && !activeMenus.includes(item.name) && (
                <FontAwesomeIcon icon={faChevronRight} className='downArrow' />
              )}
              {item.name}
              {item.rightContent && (
                <span className='rightContent'>{item.rightContent}</span>
              )}

              {activeMenus.includes(item.name) &&
                item.children &&
                renderChildren(item.children)}
            </li>
          );
        })}
      </ul>
    );
  };

  return <>{renderChildren(props.data)}</>;
};
