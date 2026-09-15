import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokenMetadata from '../../styles/tokens-metadata.json';
import './tokens.css';

const ColorPaletteComponent: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1800);
  };

  const colorFamilies = Object.entries(tokenMetadata.colors);

  return (
    <div className="token-page-container">
      <div className="token-header">
        <h1 className="token-title">Color Palette Tokens</h1>
        <p className="token-description">
          Base color palette families synchronized directly from <code>base-palette-tokens.json</code>.
          Click any swatch to copy its CSS variable name.
        </p>
        {copied && (
          <div style={{ marginTop: '10px', color: '#16a34a', fontWeight: 600, fontSize: '13px' }}>
            ✓ Copied <code>{copied}</code> to clipboard!
          </div>
        )}
      </div>

      {colorFamilies.map(([family, swatches]) => (
        <div key={family} className="token-grid-section">
          <h2 className="token-section-title">
            {family}
            <span className="token-count-badge">{(swatches as any[]).length} shades</span>
          </h2>
          <div className="swatch-grid">
            {(swatches as any[]).map((swatch) => (
              <div
                key={swatch.name}
                className="swatch-card"
                onClick={() => copyToClipboard(`var(${swatch.name})`)}
                title={`Click to copy: var(${swatch.name})`}
              >
                <div
                  className="swatch-preview"
                  style={{ backgroundColor: `var(${swatch.name})` }}
                />
                <div className="swatch-info">
                  <div className="swatch-shade">{swatch.shade}</div>
                  <div className="swatch-hex">{swatch.hex}</div>
                  <div className="swatch-var">{swatch.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPaletteComponent> = {
  title: 'Tokens/Color Palette',
  component: ColorPaletteComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Comprehensive base color palette token registry exported from the Figma Design System. Mapped 1:1 to CSS variables.',
      },
    },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPaletteComponent>;

export const Default: Story = {};
