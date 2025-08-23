import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from '../components/NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation bar with mobile hamburger menu and desktop horizontal layout. Now modular with configurable navigation state and back button behavior.'
      }
    }
  },
  argTypes: {
    navItems: {
      control: 'object',
      description: 'Array of navigation items with name and href properties'
    },
    currentPath: {
      control: 'text',
      description: 'Current active path for highlighting active navigation items'
    },
    showBackButton: {
      control: 'boolean',
      description: 'Whether to show the back button (useful for detail pages)'
    },
    backPath: {
      control: 'text',
      description: 'Path to navigate to when back button is clicked'
    },
    onNavigate: {
      action: 'navigated',
      description: 'Callback when navigation items are clicked'
    },
    onBackClick: {
      action: 'back-clicked',
      description: 'Custom callback for back button (overrides default navigation)'
    }
  },
  decorators: [
    (Story: any) => (
      <div className="min-h-screen bg-gray-50">
        <nav className="fixed top-0 left-0 right-0 h-16 bg-surface-card z-10">
          <Story />
        </nav>
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation data (matching your actual layout)
const defaultNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'CS Notes', href: '/cs-notes' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/articles' },
  { name: 'Links', href: '/links' }
];

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
    currentPath: '/',
    onNavigate: (href: string) => console.log('Navigate to:', href)
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};


export const Mobile: Story = {
  args: {
    navItems: defaultNavItems,
    currentPath: '/',
    onNavigate: (href: string) => console.log('Navigate to:', href)
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone5'
    },
    docs: {
      description: {
        story: 'Mobile navigation with hamburger menu. **Requires mobile viewport (320px) to display correctly.**'
      }
    }
  }
};

export const MobileWithBackButton: Story = {
  args: {
    navItems: defaultNavItems,
    currentPath: '/articles/some-article',
    showBackButton: true,
    backPath: '/articles',
    onNavigate: (href: string) => console.log('Navigate to:', href)
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone5'
    },
    docs: {
      description: {
        story: 'Mobile navigation with back button and hamburger menu. **Must be viewed in mobile viewport (320px) to see mobile behavior.**'
      }
    }
  }
};
