import type { Meta, StoryObj } from '@storybook/react';
import tokenMetadata from '../../styles/tokens-metadata.json';
import './tokens.css';

const FoundationalTokensComponent: React.FC = () => {
  const radii = Object.entries(tokenMetadata.radii);
  const gaps = Object.entries(tokenMetadata.gap);
  const paddings = Object.entries(tokenMetadata.padding);
  const opacities = Object.entries(tokenMetadata.opacity);
  const maxWidths = Object.entries(tokenMetadata.maxWidth);

  return (
    <div className="token-page-container">
      <div className="token-header">
        <h1 className="token-title">Foundational Tokens</h1>
        <p className="token-description">
          Geometric, layout, spacing, and opacity scale tokens extracted from <code>foundational-tokens.json</code>.
        </p>
      </div>

      {/* Border Radii */}
      <div className="token-grid-section">
        <h2 className="token-section-title">
          Border Radius Scales
          <span className="token-count-badge">{radii.length} tokens</span>
        </h2>
        <div className="foundational-grid">
          {radii.map(([key, item]: [string, any]) => (
            <div key={key} className="foundational-card">
              <div className="foundational-visual-box">
                <div
                  className="radius-demo"
                  style={{ borderRadius: `var(${item.name})` }}
                />
              </div>
              <div className="foundational-meta">
                <div className="foundational-name">{key}</div>
                <div className="foundational-value">{item.value}</div>
                <div className="foundational-token-var">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gap / Spacing Scales */}
      <div className="token-grid-section">
        <h2 className="token-section-title">
          Gap & Spacing Scales
          <span className="token-count-badge">{gaps.length} tokens</span>
        </h2>
        <div className="foundational-grid">
          {gaps.slice(0, 14).map(([key, item]: [string, any]) => (
            <div key={key} className="foundational-card">
              <div className="foundational-visual-box">
                <div className="gap-demo" style={{ gap: `var(${item.name})` }}>
                  <div className="gap-box" />
                  <div className="gap-box" />
                  <div className="gap-box" />
                </div>
              </div>
              <div className="foundational-meta">
                <div className="foundational-name">{key}</div>
                <div className="foundational-value">{item.value}</div>
                <div className="foundational-token-var">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Padding Scales */}
      <div className="token-grid-section">
        <h2 className="token-section-title">
          Padding Scales
          <span className="token-count-badge">{paddings.length} tokens</span>
        </h2>
        <div className="foundational-grid">
          {paddings.slice(0, 14).map(([key, item]: [string, any]) => (
            <div key={key} className="foundational-card">
              <div className="foundational-visual-box">
                <div className="padding-demo-outer" style={{ padding: `var(${item.name})` }}>
                  <div className="padding-demo-inner">content</div>
                </div>
              </div>
              <div className="foundational-meta">
                <div className="foundational-name">{key}</div>
                <div className="foundational-value">{item.value}</div>
                <div className="foundational-token-var">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opacity Scales */}
      <div className="token-grid-section">
        <h2 className="token-section-title">
          Opacity Scales
          <span className="token-count-badge">{opacities.length} tokens</span>
        </h2>
        <div className="foundational-grid">
          {opacities.map(([key, item]: [string, any]) => (
            <div key={key} className="foundational-card">
              <div className="foundational-visual-box" style={{ background: '#0f172a' }}>
                <div
                  className="opacity-demo-box"
                  style={{ opacity: `var(${item.name})` }}
                />
              </div>
              <div className="foundational-meta">
                <div className="foundational-name">{key}</div>
                <div className="foundational-value">{item.value}</div>
                <div className="foundational-token-var">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Max Width Scales */}
      <div className="token-grid-section">
        <h2 className="token-section-title">
          Max Width Scale Tokens
          <span className="token-count-badge">{maxWidths.length} tokens</span>
        </h2>
        <div className="foundational-grid">
          {maxWidths.map(([key, item]: [string, any]) => (
            <div key={key} className="foundational-card">
              <div className="foundational-meta">
                <div className="foundational-name">{key}</div>
                <div className="foundational-value">{item.value}</div>
                <div className="foundational-token-var">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensComponent> = {
  title: 'Tokens/Foundational Tokens',
  component: FoundationalTokensComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Foundational layout, border radius, spacing, gap, padding, and opacity tokens extracted directly from Figma.',
      },
    },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof FoundationalTokensComponent>;

export const Default: Story = {};
