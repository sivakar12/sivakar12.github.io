import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'FontTest',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Test component to verify that the Signika font is loading properly in Storybook.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontTest: Story = {
  render: () => (
    <div className="space-y-6 p-8 text-center">
      <h1 className="text-6xl font-light text-gray-800">Signika Light</h1>
      <h2 className="text-5xl font-normal text-gray-700">Signika Regular</h2>
      <h3 className="text-4xl font-medium text-gray-600">Signika Medium</h3>
      <h4 className="text-3xl font-semibold text-gray-500">Signika Semibold</h4>
      <h5 className="text-2xl font-bold text-gray-400">Signika Bold</h5>
      
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <p className="text-lg text-gray-600">
          This text should be using the Signika font family, just like on your website.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          If you see a different font, the font import isn't working properly.
        </p>
      </div>
      
      <div className="mt-6 p-4 bg-primary-100 rounded-lg">
        <p className="text-primary-800 font-medium">
          This should also use Signika and show your custom primary color.
        </p>
      </div>
    </div>
  )
};
