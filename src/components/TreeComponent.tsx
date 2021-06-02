import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../mockData.json';
import './TreeComponent.css';

export interface DataItem {
  name: string;
  children?: DataItem[];
}

export const TreeComponent = () => {
  const renderChildren = (data: DataItem[]) => {
    return data.map((item: DataItem) => {
      return (
        <li className='item'>
          {item.children && <FontAwesomeIcon icon={faArrowDown} />}

          {item.name}
          {item.children && renderChildren(item.children)}
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
