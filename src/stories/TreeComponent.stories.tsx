import { Meta, Story } from '@storybook/react';
import { TreeComponent } from '../components/TreeComponent';
import data from '../mockData.json';

export default {
  title: 'TreeComponent/TreeComponent',
  component: TreeComponent,
} as Meta;

export const TreeComponentRender: Story = () => <TreeComponent data={data} />;
