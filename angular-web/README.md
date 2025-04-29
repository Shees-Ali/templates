# BlueprintFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Theme Variables

The project uses a theming system that supports both light and dark modes. Theme variables are defined in the following files:

### Common Variables (`_common.scss`)

These variables are shared across both light and dark themes:

```scss
--primary-color              # Main brand color
--primary-contrast-color     # Text color to use on primary color backgrounds
--text-color                 # Primary text color
--text-color-secondary       # Secondary/muted text color
--surface-border             # Border color for UI elements
--surface-card               # Background color for cards
--surface-hover              # Background color for hover states
--surface-overlay            # Background for overlays (modals, popovers)
--transition-duration        # Standard transition timing
--maskbg                     # Background for modal backdrops
--content-border-radius      # Standard border radius for content elements
```

### Light Theme Variables (`_light.scss`)

These variables are specific to light mode:

```scss
--surface-ground             # Page background color
--code-background            # Background color for code blocks
--code-color                 # Text color for code blocks
```

### Dark Theme Variables (`_dark.scss`)

These variables are specific to dark mode, applied when the `.dark-mode` class is present:

```scss
--surface-ground             # Darker page background
--code-background            # Background color for code blocks in dark mode
--code-color                 # Text color for code blocks in dark mode
```

## Using Theme Variables

To use theme variables in your components:

1. Reference them directly in your SCSS files:

```scss
.my-element {
    background-color: var(--surface-card);
    color: var(--text-color);
    border: 1px solid var(--surface-border);
    border-radius: var(--content-border-radius);
    transition: background-color var(--transition-duration);
}

.my-element:hover {
    background-color: var(--surface-hover);
}
```

2. To switch between light and dark themes, use the `ThemeService`:

```typescript
// Inject the service
constructor(private themeService: ThemeService) {}

// Toggle theme
toggleTheme() {
    this.themeService.toggleDarkMode();
}

// Get current theme
isDarkMode = this.themeService.isDarkModeEnabled();
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
