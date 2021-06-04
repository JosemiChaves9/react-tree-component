import { Meta, Story } from '@storybook/react';
import { TreeComponent } from '../components/TreeComponent';
import { carList } from '../carList';

export default {
  title: 'TreeComponent/TreeComponent',
  component: TreeComponent,
} as Meta;

export const TreeComponentRender: Story = () => (
  <TreeComponent data={carList} />
);
