# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application template using the Chan Zuckerberg Initiative's Science Design System (SDS). It provides a starter template with pre-configured theming, component library integration, and development setup.

## Commands

```bash
# Development
yarn dev          # Start development server on http://localhost:3000
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
```

## Architecture

### Technology Stack
- **Next.js 15** with App Router (app directory structure)
- **@czi-sds/components** (v22.11.0) - Science Design System component library
- **Material-UI v5** - Base UI framework that SDS extends
- **Emotion** - CSS-in-JS styling solution
- **TypeScript** - Type safety with strict mode enabled

### Theme System

The application uses a layered theming approach:

1. **Base Theme**: SDS provides `SDSLightAppTheme` and `SDSDarkAppTheme`
2. **Custom Theme**: Extended in `app/common/theme.ts` with custom colors, typography, spacing, shadows, and corners
3. **Theme Provider**: `app/common/CustomThemeProvider.tsx` merges base and custom themes using `deepmerge` and applies based on system preference

The theme system automatically switches between light and dark modes based on `prefers-color-scheme` media query.

### Key Files

- `app/layout.tsx` - Root layout with theme providers and MUI cache configuration
- `app/common/CustomThemeProvider.tsx` - Theme context that merges SDS base themes with custom overrides
- `app/common/theme.ts` - Custom theme tokens including colors, typography, spacing, shadows, and exported helper functions
- `app/style.ts` - Emotion-styled components using theme tokens

## MCP Integration

The project has SDS MCP (Model Context Protocol) configured for enhanced development assistance with SDS components.