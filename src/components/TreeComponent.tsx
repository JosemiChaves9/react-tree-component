import {
  faChevronDown,
  faChevronRight,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import data from '../mockData.json';
import './TreeComponent.css';

export interface DataItem {
  name: string;
  alert?: string;
  children?: DataItem[];
}

export const TreeComponent = () => {
  const [activeMenus, setactiveMenus] = useState<DataItem[]>([]);
  const [toggleData, setToggleData] = useState<boolean>(false);

  const handleArrowClick = (data: any) => {
    console.log(data);
  };

  const renderChildren = (data: DataItem[]) => {
    return data.map((item: DataItem) => {
      return (
        <li className='item'>
          {item.children && toggleData && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className='downArrow'
              onClick={(e) => {
                handleArrowClick(e);
                setToggleData(!toggleData);
              }}
            />
          )}

          {item.children && !toggleData && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className='downArrow'
              onClick={(e) => {
                handleArrowClick(e);
                setToggleData(!toggleData);
              }}
            />
          )}
          {item.name}
          {item.alert && (
            <div className='tooltip'>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className='tooltiptext'>{item.alert}</span>
            </div>
          )}

          {toggleData && item.children && renderChildren(item.children)}
        </li>
      );
    });
  };

  return (
    <>
      <ul>{renderChildren(data)}</ul>
    </>
  );
};
