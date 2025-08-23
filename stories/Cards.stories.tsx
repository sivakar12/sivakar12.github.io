import type { Meta, StoryObj } from '@storybook/react';
import DetailedCard from '../components/cards/DetailedCard';
import CenteredCard from '../components/cards/CenteredCard';
import SimpleCard from '../components/cards/SimpleCard';

const meta: Meta = {
  title: 'Cards',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Card components that use custom Tailwind colors and CSS classes. These should display with proper background colors, hover effects, and animations.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for cards
const sampleProject = {
  title: 'Sample Project',
  description: 'This is a sample project description that demonstrates the card layout and styling.',
  url: 'https://example.com/project',
  href: '/projects/sample',
  emoji: '🚀'
};


export const DetailedCardExample: Story = {
  render: () => (
    <div className="max-w-md">
      <DetailedCard {...sampleProject} />
    </div>
  )
};

export const CenteredCardExample: Story = {
  render: () => (
    <div className="max-w-md">
      <CenteredCard 
        title="Centered Card"
        emoji="🎯"
        href="/centered"
      />
    </div>
  )
};

export const SimpleCardExample: Story = {
  render: () => (
    <div className="max-w-md">
      <SimpleCard 
        title="Simple Card"
        description="A simple card with minimal content"
        href="/simple"
      />
    </div>
  )
};