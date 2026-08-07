# 🎨 GameGear Design System

## Overview

This document defines the official visual identity and design language for **GameGear**.

Every page, component, and interaction must follow these standards to ensure the website maintains a premium, modern, and consistent gaming experience.

This document acts as the single source of truth for all UI decisions throughout the project.

---

# Brand Personality

GameGear should feel:

* Premium
* Modern
* Bold
* Powerful
* Luxury
* Gaming Focused
* Clean
* Minimal
* High Performance

Avoid flashy RGB effects or overly futuristic designs. The goal is a timeless premium gaming brand.

---

# Color Palette

## Primary Colors

| Purpose    | Color       | Name           |
| ---------- | ----------- | -------------- |
| Background | **#0A0A0A** | Obsidian Black |
| Surface    | **#171717** | Charcoal       |
| Primary    | **#D72638** | Crimson Red    |
| Accent     | **#F59E0B** | Royal Gold     |
| Border     | **#2A2A2A** | Dark Graphite  |

---

## Text Colors

| Purpose        | Color   |
| -------------- | ------- |
| Primary Text   | #FFFFFF |
| Secondary Text | #D1D5DB |
| Muted Text     | #9CA3AF |

---

## Status Colors

| State       | Color   |
| ----------- | ------- |
| Success     | #22C55E |
| Warning     | #FACC15 |
| Error       | #EF4444 |
| Information | #3B82F6 |

---

# Brand Gradients

Primary Gradient

Crimson → Gold

```text
#D72638 → #F59E0B
```

Secondary Gradient

Charcoal → Obsidian

```text
#171717 → #0A0A0A
```

Use gradients sparingly on:

* Hero Buttons
* Section Highlights
* Call-to-Action Components

Avoid applying gradients to body text.

---

# Typography

## Font Family

Primary

Inter

Fallback

sans-serif

---

## Font Scale

| Element         | Size |
| --------------- | ---- |
| Hero Heading    | 56px |
| Page Heading    | 44px |
| Section Heading | 36px |
| Card Title      | 22px |
| Body Text       | 16px |
| Small Text      | 14px |
| Caption         | 12px |

---

## Font Weight

| Weight    | Value |
| --------- | ----- |
| Regular   | 400   |
| Medium    | 500   |
| SemiBold  | 600   |
| Bold      | 700   |
| ExtraBold | 800   |

---

# Border Radius

| Component | Radius |
| --------- | ------ |
| Buttons   | 12px   |
| Inputs    | 12px   |
| Cards     | 18px   |
| Images    | 18px   |
| Sections  | 24px   |

Rounded corners should feel modern without becoming overly soft.

---

# Shadows & Elevation

## Default Shadow

Soft dark shadow for depth.

## Hover Shadow

Subtle crimson glow.

## Primary Button Shadow

Crimson glow with low opacity.

Avoid heavy black shadows.

---

# Glassmorphism

Glass cards should use:

* Semi-transparent dark background
* Backdrop blur
* Thin border
* Soft shadow
* Rounded corners

Opacity should remain subtle for readability.

---

# Buttons

## Primary Button

Background

Crimson

Hover

Crimson → Gold gradient

Text

White

Radius

12px

Effects

* Slight scale on hover
* Soft glow
* Smooth transition

---

## Secondary Button

Transparent

Border

Crimson

Text

White

Hover

Dark glass background

---

## Ghost Button

Transparent

Text

White

Hover

Dark surface with smooth transition

---

# Product Cards

Each product card should include:

* Product Image
* Category
* Product Name
* Rating
* Price
* Action Button

Hover Interaction

* Lift slightly
* Image zoom
* Soft crimson glow
* Smooth animation

Cards should never appear flat.

---

# Navigation

Navbar should be:

* Sticky
* Transparent on top
* Glass background while scrolling
* Responsive
* Minimal
* Smooth animated mobile menu

---

# Footer

Include:

* Logo
* Navigation Links
* Social Links
* Newsletter
* Copyright

Use the same dark surface colors as the rest of the website.

---

# Forms

Inputs should have:

* Dark background
* Rounded corners
* Crimson focus border
* White text
* Smooth transitions

Buttons should maintain consistent height and spacing.

---

# Icons

Library

Lucide React

Style

Outline

Icons should remain consistent across all pages.

---

# Images

Product images should:

* High quality
* Consistent aspect ratio
* Optimized for performance
* Maintain visual consistency

Avoid low-resolution or stretched images.

---

# Layout

Maximum Width

1280px

Container Padding

| Device  | Padding |
| ------- | ------- |
| Desktop | 32px    |
| Tablet  | 24px    |
| Mobile  | 16px    |

---

# Grid System

| Device  | Columns |
| ------- | ------- |
| Desktop | 4       |
| Tablet  | 2       |
| Mobile  | 1       |

---

# Spacing System

Use an 8px spacing scale.

Common spacing values:

8px

16px

24px

32px

48px

64px

96px

Maintain consistent spacing throughout the project.

---

# Animations

Library

Framer Motion

Animation Duration

200ms–400ms

Preferred Effects

* Fade In
* Slide Up
* Hover Lift
* Scale
* Image Zoom
* Button Glow
* Page Transition

Animations should enhance the experience without distracting the user.

---

# Responsive Breakpoints

| Device  | Width        |
| ------- | ------------ |
| Mobile  | <640px       |
| Tablet  | 640px–1023px |
| Desktop | ≥1024px      |

Every page must be fully responsive.

---

# Accessibility

* Maintain WCAG-compliant color contrast.
* Use semantic HTML.
* Support keyboard navigation.
* Provide descriptive image alt text.
* Ensure visible focus indicators.

---

# Performance Guidelines

* Lazy load images where appropriate.
* Optimize assets.
* Minimize unnecessary re-renders.
* Keep animations lightweight.

---

# UI Consistency Rules

* Never introduce new colors without updating this document.
* Always reuse existing components before creating new ones.
* Follow the defined spacing system.
* Maintain consistent typography hierarchy.
* Keep all interactions smooth and predictable.
* Every new page and component must follow this design system.

---

# Visual Inspiration

The GameGear UI should resemble a premium technology brand rather than a traditional gaming website.

The overall experience should communicate quality, confidence, and craftsmanship through restrained use of color, clean layouts, subtle motion, and thoughtful visual hierarchy.
