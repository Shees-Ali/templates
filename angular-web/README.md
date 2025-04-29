# Angular Web Template

A modern Angular 19+ application template with a well-structured project architecture, built-in theming system, and essential services.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 19+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd angular-web

# Install dependencies
npm install
```

## Development

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change any source files.

### Creating New Components

```bash
ng generate component components/my-component
```

### Building for Production

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/                     # Application code
│   ├── authentication/      # Authentication components
│   ├── base/                # Base classes (BasePage)
│   ├── components/          # Shared components
│   ├── imports/             # Module imports
│   ├── interface/           # TypeScript interfaces
│   ├── layout/              # Layout components
│   └── services/            # Application services
├── environments/            # Environment configuration
├── theme/                   # Theme configuration
│   ├── variables/           # Theme variables
│   └── CustomPreset.ts      # PrimeNG theme customization
└── styles.scss              # Global styles
```

## Features

### Theming System

The application includes a complete light/dark theme system built on PrimeNG theming:

- Toggle between light and dark modes with `ThemeService`
- CSS variables for consistent styling
- Custom PrimeNG theme with color palette customization

### Core Services

- **ApiService**: HTTP client wrapper for API communication
- **InterceptorService**: Handles authentication headers
- **ThemeService**: Manages theme switching
- **UtilityService**: Common utility functions
- **StorageService**: Local storage wrapper
- **NetworkService**: Base service for API communication

## Theme Customization

### Theme Variables

Variables are defined in three files:

- `_common.scss`: Shared variables
- `_light.scss`: Light theme variables
- `_dark.scss`: Dark theme variables

### Using Theme Variables

```scss
.my-element {
    background-color: var(--surface-card);
    color: var(--text-color);
    border: 1px solid var(--surface-border);
}
```

### Customizing Colors

Modify `CustomPreset.ts` to change the color palettes:

```typescript
// Primary color palette
const primaryPalette = palette("#0163FF");

// Secondary color palette
const secondaryPalette = palette("#8B173A");
```

## UI Components

The template uses PrimeNG components for a consistent and responsive UI:

- Buttons, cards, and form controls
- Data tables and pagination
- Modals and drawers
- Navigation components

## Base Page Class

Components can extend the `BasePage` class to gain access to common services:

```typescript
export class MyComponent extends BasePage {
    constructor(injector: Injector) {
        super(injector);
        // Access services like: this.themeService, this.utility, etc.
    }
}
```

## Testing

```bash
# Run unit tests
ng test

# Run e2e tests (requires setting up an e2e framework)
ng e2e
```

## Additional Documentation

- [Angular Documentation](https://angular.dev)
- [PrimeNG Documentation](https://primeng.org)
- [PrimeFlex Documentation](https://primeflex.org)
