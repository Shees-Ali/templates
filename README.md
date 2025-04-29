# Development Templates Repository

A collection of modern web and mobile application templates built with Angular, providing well-structured project architectures, theming systems, and essential services.

## Templates Overview

This repository contains the following templates:

- **angular-web**: A comprehensive Angular 19+ web application template with theming, core services, and UI components
- **angular-three.js**: An Angular template integrated with Three.js for 3D graphics applications
- **mobile-app-ionic**: An Ionic/Angular mobile application template for cross-platform development

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 19+
- (For mobile) Ionic CLI 7+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/development-templates.git

# Navigate to desired template directory
cd development-templates/angular-web
# OR
cd development-templates/mobile-app-ionic
# OR
cd development-templates/angular-three.js

# Install dependencies
npm install
```

## Development

Each template includes its own development workflow. Common commands:

```bash
# Start development server
ng serve

# Build for production
ng build

# Run tests
ng test
```

## Features

### Angular Web Template

- Complete light/dark theme system built on PrimeNG
- Core services for API communication, authentication, and utilities
- Responsive layouts with PrimeFlex
- Base page class for component inheritance

### Mobile App (Ionic)

- Cross-platform mobile UI components
- Optimized for mobile devices
- Native functionality access through Capacitor

### Angular Three.js

- Integration with Three.js for 3D graphics
- Page generation utilities
- Modern Angular architecture

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [PrimeNG Documentation](https://primeng.org)
- [Ionic Documentation](https://ionicframework.com/docs)
- [Three.js Documentation](https://threejs.org/docs/)