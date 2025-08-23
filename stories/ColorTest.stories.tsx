import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'ColorTest',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Test component to verify custom Tailwind colors and CSS classes are working in Storybook.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorTest: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-primary-600">Primary Colors</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary-50 p-4 rounded-lg">
          <div className="text-primary-900">Primary 50</div>
        </div>
        <div className="bg-primary-100 p-4 rounded-lg">
          <div className="text-primary-800">Primary 100</div>
        </div>
        <div className="bg-primary-200 p-4 rounded-lg">
          <div className="text-primary-700">Primary 200</div>
        </div>
        <div className="bg-primary-300 p-4 rounded-lg">
          <div className="text-primary-600">Primary 300</div>
        </div>
        <div className="bg-primary-400 p-4 rounded-lg">
          <div className="text-primary-500">Primary 400</div>
        </div>
        <div className="bg-primary-500 p-4 rounded-lg">
          <div className="text-primary-400">Primary 500</div>
        </div>
        <div className="bg-primary-600 p-4 rounded-lg">
          <div className="text-primary-300">Primary 600</div>
        </div>
        <div className="bg-primary-700 p-4 rounded-lg">
          <div className="text-primary-200">Primary 700</div>
        </div>
        <div className="bg-primary-800 p-4 rounded-lg">
          <div className="text-primary-100">Primary 800</div>
        </div>
        <div className="bg-primary-900 p-4 rounded-lg">
          <div className="text-primary-50">Primary 900</div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-surface-500 mt-8">Surface Colors</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-50 p-4 rounded-lg">
          <div className="text-surface-900">Surface 50</div>
        </div>
        <div className="bg-surface-100 p-4 rounded-lg">
          <div className="text-surface-800">Surface 100</div>
        </div>
        <div className="bg-surface-200 p-4 rounded-lg">
          <div className="text-surface-700">Surface 200</div>
        </div>
        <div className="bg-surface-300 p-4 rounded-lg">
          <div className="text-surface-600">Surface 300</div>
        </div>
        <div className="bg-surface-400 p-4 rounded-lg">
          <div className="text-surface-500">Surface 400</div>
        </div>
        <div className="bg-surface-500 p-4 rounded-lg">
          <div className="text-surface-400">Surface 500</div>
        </div>
        <div className="bg-surface-card p-4 rounded-lg">
          <div className="text-surface-900">Surface Card</div>
        </div>
        <div className="bg-surface-background p-4 rounded-lg border">
          <div className="text-surface-900">Surface Background</div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Custom CSS Classes</h2>
      
      <div className="space-y-4">
        <div className="text-gradient text-3xl font-bold">Text Gradient Class</div>
        <div className="card">Card Component Class</div>
        <div className="animate-card-entrance bg-primary-200 p-4 rounded-lg">
          Card Entrance Animation
        </div>
      </div>
    </div>
  )
};
