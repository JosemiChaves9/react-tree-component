import { fireEvent, queryByText, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { data } from '../../testMockData';
import { TreeComponent } from '../TreeComponent';

it('First render correctly', () => {
  const tree = renderer.create(<TreeComponent data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('In first render only the three first levels should appear.', () => {
  const { queryByText } = render(<TreeComponent data={data} />);

  expect(queryByText('Parent 1')).toBeDefined();
  expect(queryByText('Children 2-2')).toBeNull();
  expect(queryByText('Parent 3')).toBeDefined();
});

test('When clicked in Parent 1, should return Children 1-1 and Children 2-2, and if clicked again should remove it.', () => {
  const { getByText, queryByText } = render(<TreeComponent data={data} />);

  getByText('Parent 1').click();

  expect(getByText('Children 1-1')).toBeDefined();
  expect(getByText('Children 1-2')).toBeDefined();

  getByText('Parent 1').click();
  expect(queryByText('Children 1-1')).toBeNull();
  expect(queryByText('Children 1-2')).toBeNull();
});

test('When clicked the Parent 2, should return Children 2-1 and Children 2-2, finally clicking Children 2-2 will return Children 2-2-1.', () => {
  const { getByText, queryByText } = render(<TreeComponent data={data} />);

  getByText('Parent 2').click();
  expect(getByText('Children 2-1')).toBeDefined();
  expect(getByText('Children 2-2')).toBeDefined();
  expect(queryByText('Children 2-2-1')).toBeNull();

  getByText('Children 2-2').click();
  expect(getByText('Children 2-2-1')).toBeDefined();
});

test('In Children 3-1 should display a span that is passed as rightContent', () => {
  const { getByText, queryByText } = render(<TreeComponent data={data} />);

  expect(getByText('Parent 3')).toBeDefined();
  expect(queryByText('Children 3-1')).toBeNull();

  getByText('Parent 3').click();
  expect(getByText('Children 3-1')).toBeDefined();
  expect(getByText("I'm the children of Children 3-1")).toBeDefined();
});
