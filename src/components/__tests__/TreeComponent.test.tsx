import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { testData } from '../../testMockData';
import { TreeComponent } from '../TreeComponent';
import '@testing-library/jest-dom';

it('First render correctly', () => {
  const tree = renderer.create(<TreeComponent data={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('In first render only the three first levels should appear.', () => {
  const { queryByText } = render(<TreeComponent data={testData} />);

  expect(queryByText('Parent 1')).toBeDefined();
  expect(queryByText('Children 2-2')).toBeNull();
  expect(queryByText('Parent 3')).toBeDefined();
});

test('When clicked in Parent 1, should return Children 1-1 and Children 2-2, and if clicked again should remove it, and menu arrow should change from right to down.', () => {
  const { getByText, queryByText, container } = render(
    <TreeComponent data={testData} />
  );
  let arrowMenu = container.getElementsByTagName('svg').item(0);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-right fa-w-10 rightArrow'
  );
  getByText('Parent 1').click();

  arrowMenu = container.getElementsByTagName('svg').item(0);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-down fa-w-14 downArrow'
  );

  expect(getByText('Children 1-1')).toBeDefined();
  expect(getByText('Children 1-2')).toBeDefined();

  getByText('Parent 1').click();

  expect(queryByText('Children 1-1')).toBeNull();
  expect(queryByText('Children 1-2')).toBeNull();
  arrowMenu = container.getElementsByTagName('svg').item(0);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-right fa-w-10 rightArrow'
  );
});

test('When clicked the Parent 2, should return Children 2-1 and Children 2-2, finally clicking Children 2-2 will return Children 2-2-1, and menu arrow should change from right to down.', () => {
  const { getByText, queryByText, container } = render(
    <TreeComponent data={testData} />
  );

  let arrowMenu = container.getElementsByTagName('svg').item(1);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-right fa-w-10 rightArrow'
  );

  getByText('Parent 2').click();

  arrowMenu = container.getElementsByTagName('svg').item(1);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-down fa-w-14 downArrow'
  );

  expect(getByText('Children 2-1')).toBeDefined();
  expect(getByText('Children 2-2')).toBeDefined();
  arrowMenu = container.getElementsByTagName('svg').item(2);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-right fa-w-10 rightArrow'
  );
  expect(queryByText('Children 2-2-1')).toBeNull();

  getByText('Children 2-2').click();
  expect(getByText('Children 2-2-1')).toBeDefined();
  arrowMenu = container.getElementsByTagName('svg').item(1);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-down fa-w-14 downArrow'
  );
});

test('In Children 3-1 should display a span that is passed as rightContent, and menu arrow should change from right to down', () => {
  const { getByText, queryByText, container } = render(
    <TreeComponent data={testData} />
  );

  expect(getByText('Parent 3')).toBeDefined();
  expect(queryByText('Children 3-1')).toBeNull();
  let arrowMenu = container.getElementsByTagName('svg').item(2);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-right fa-w-10 rightArrow'
  );

  getByText('Parent 3').click();
  arrowMenu = container.getElementsByTagName('svg').item(2);
  expect(arrowMenu).toHaveClass(
    'svg-inline--fa fa-chevron-down fa-w-14 downArrow'
  );

  expect(getByText('Children 3-1')).toBeDefined();
  const rightContent = container.getElementsByTagName('span').item(0);
  expect(rightContent).toHaveTextContent("I'm the children of Children 3-1");
});
