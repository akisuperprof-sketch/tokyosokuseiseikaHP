---
name: Heritage-Forward Logistics
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424938'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#727a67'
  outline-variant: '#c2c9b3'
  surface-tint: '#3c6a00'
  primary: '#3c6a00'
  on-primary: '#ffffff'
  primary-container: '#76b531'
  on-primary-container: '#234200'
  inverse-primary: '#97d951'
  secondary: '#455f88'
  on-secondary: '#ffffff'
  secondary-container: '#b6d0ff'
  on-secondary-container: '#3f5882'
  tertiary: '#595f66'
  on-tertiary: '#ffffff'
  tertiary-container: '#9fa5ac'
  on-tertiary-container: '#343b41'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2f66a'
  primary-fixed-dim: '#97d951'
  on-primary-fixed: '#0e2000'
  on-primary-fixed-variant: '#2c5000'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#adc7f7'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#2d476f'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
  tokyo-market-blue: '#0A2463'
  innovation-silver: '#F8FAFC'
  integrity-green: '#76B531'
  surface-glass: rgba(255, 255, 255, 0.7)
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  caption:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system translates the legacy of Tokyo Sokusei Seika into a futuristic, high-end digital experience. Moving away from the industrial weight typically associated with logistics and manufacturing, the aesthetic shifts toward a "Future of Food Distribution" narrative.

The brand personality is **Trustworthy, Visionary, and Pure**. It draws inspiration from:
- **Minimalism (MUJI/Apple):** Extreme use of negative space to convey clarity and premium quality.
- **Modern Professionalism (Tesla/Airbnb):** Precision-engineered layouts that feel both technological and human-centric.
- **Glassmorphism (Subtle):** Used to represent transparency in the supply chain and modern technological integration.

The target audience includes global partners, modern restaurateurs, and institutional stakeholders who value both 1948-era reliability and next-generation innovation. The UI should evoke a sense of calm authority and surgical precision.

## Colors

The palette centers on **Integrity Green** (derived from the heritage logo) and a deep, sophisticated **Tokyo Market Blue**. The primary canvas is dominated by "Innovation Silver" and pure White to create a laboratory-clean environment that highlights the vibrant colors of fresh produce in photography.

- **Primary (Integrity Green):** Used for key action points and symbols of growth/freshness.
- **Secondary (Tokyo Market Blue):** Used for navigation and headlines to establish trust and historical depth.
- **Accent (Silver/Light Blue):** Applied to technical UI elements, dividers, and subtle backgrounds to suggest a tech-driven infrastructure.
- **Neutral:** A refined dark gray (#333333) is used for body text to maintain high readability without the harshness of pure black.

## Typography

The typographic strategy creates a dialogue between the past and the future.

- **Headlines:** Use **Source Serif 4** for high-level display text. This reflects the "History and Trust" aspect, providing a literary, editorial feel reminiscent of high-end brands like Aesop or Patagonia.
- **Body:** **Noto Sans** (pairing seamlessly with Noto Sans JP) provides a modern, neutral, and highly legible foundation for information-heavy sections.
- **Labels/Technical:** **Hanken Grotesk** is used for UI labels, buttons, and data points to emphasize the "Technology and Innovation" aspect.

For Japanese typesetting, maintain generous line height (1.8x for body) and utilize weight contrast (Light vs. Bold) rather than color to define hierarchy.

## Layout & Spacing

The layout philosophy is defined by **Luxury of Space**. We utilize a 12-column fixed grid for desktop, but the visual priority is "Negative Space as a Feature."

- **Section Gaps:** Use large vertical spacing (160px+) between major content blocks to force a slower, more intentional scrolling experience.
- **Grid:** On desktop, use wide 32px gutters to prevent content density.
- **Mobile:** Reflow to a single column with 24px side margins. Typography should scale down, but whitespace should remain proportionally large to maintain the premium feel.
- **Alignment:** Strictly linear. Elements should align to a precise horizontal axis to evoke the feeling of an architectural blueprint.

## Elevation & Depth

Depth is conveyed through **Transparency and Tonal Layering** rather than traditional shadows.

- **The "Glass" Layer:** Use a subtle backdrop blur (12px to 20px) with a semi-transparent white fill (70-80% opacity) for navigation bars and floating modals. This suggests a "clean room" or high-tech glass-fronted facility.
- **Surface Tiers:** Use "Innovation Silver" as a secondary background color to separate content zones without needing borders.
- **Shadows:** Avoid shadows on standard cards. If elevation is required for a floating action, use an "Ambient Glow"—a very large, very soft blur (40px+) with extremely low opacity (3-5%).

## Shapes

The shape language is **Soft yet Structured**. 

We use a "Soft" setting (0.25rem / 4px) for most UI components like input fields and small buttons. This retains a "Straight-edged and Modern" look while removing the harshness of industrial sharp corners.

- **Interactive Elements:** Use the base `rounded` (4px).
- **Images/Large Cards:** Can use `rounded-lg` (8px) to feel more approachable.
- **Container Dividers:** Strictly horizontal or vertical lines (0.5px thickness) in a light grey/silver.

## Components

### Buttons
- **Primary:** Solid "Tokyo Market Blue" with white "Hanken Grotesk" text. No roundedness beyond 4px.
- **Secondary:** Transparent with a fine 1px border in "Integrity Green".
- **Ghost:** Text-only with a small arrow icon, emphasizing the "Storytelling" aspect.

### Cards
- **Style:** Borderless on "Innovation Silver" backgrounds, or defined by a 0.5px "Tertiary" border on white backgrounds.
- **Padding:** Extremely generous (40px+ internal padding).
- **Content:** Always lead with high-resolution photography of produce or facilities.

### Input Fields
- **Style:** Minimalist. Only a bottom border (1px) that highlights in "Integrity Green" on focus. Labels should be "Label-caps" typography.

### Lists & Data
- Use monospaced-style numeric alignments (from Hanken Grotesk) for logistics data or historical dates to emphasize precision.

### Navigation
- **Header:** A Glassmorphic bar that remains sticky. The logo is the center of gravity; use "Label-caps" for menu items to maintain a sophisticated, non-cluttered look.