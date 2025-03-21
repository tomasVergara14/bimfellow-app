# Civil Engineering Studio App

## Overview

This application is designed for a **civil engineering studio**, providing an optimized and modern web experience. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0, ensuring high performance and maintainability.

## Architecture

The app follows a **moduless architecture**, leveraging the newest updates in Angular 19. This approach allows for improved organization, better scalability, and a cleaner project structure.

## Modern Angular Syntax

The application utilizes the latest Angular 19 syntax improvements, including:

- **`input()` and `output()` functions** for component communication.
- **Signals** for reactive state management.
- **Computed properties** to derive reactive values efficiently.

These features enhance code readability, maintainability, and performance by ensuring a more declarative and reactive approach to managing application state and component interactions.

## Reactive Forms and Validation

The application leverages **Reactive Forms** for the contact page, ensuring a structured and scalable approach to handling form inputs. Angular's `FormGroup` and `FormControl` classes are utilized to manage form state reactively. Additionally, built-in **Validators** such as `Validators.required` and `Validators.email` are applied to enforce input validation, promoting a robust and user-friendly experience.

This approach enhances form management by providing:

- **Synchronous validation** to ensure data integrity before submission.
- **Reactive updates** that immediately reflect form state changes.
- **Better scalability** by separating UI logic from form handling.

## Contact Page & Email Integration

The contact page is integrated with the **EmailJS** library to handle email communication. This functionality ensures:

- **Automatic reply to the user** confirming that the message has been received, stating that the **BIM Fellow** team will respond as soon as possible.
- **Email notification to the BIM Fellow team** containing the user's message, allowing for prompt follow-up and communication.
- **SweetAlert notification** that appears after successfully sending the email and clearing the form, informing the user that their message has been sent successfully.

This implementation enhances user experience by providing immediate feedback while ensuring the team is promptly notified of incoming messages.

## Image Optimization

All images in the application are optimized using Angular's **`NgOptimizedImage`** directive. This ensures:

- Faster image loading with **automatic size adjustments**.
- Reduced bandwidth usage.
- Enhanced user experience through responsive and efficient image delivery.

### How `NgOptimizedImage` Works

- Uses **lazy loading** by default, only loading images when needed.
- Provides **automatic srcset generation** for different screen sizes.
- Prevents layout shifts by enforcing explicit width and height attributes.

## View Transitions

The application implements **View Transitions**, a new feature in **Angular 19**, to provide smooth navigation between pages. This ensures:

- **Seamless page transitions** with animations.
- **Better user experience** by reducing flickering.
- Optimized rendering using the latest browser capabilities.

## Testing

The project uses **Karma-Jasmine** for unit testing, ensuring code reliability and correctness. This setup allows:

- Automated testing for Angular components and services.
- Debugging and validation of application logic.
- Continuous integration with testing frameworks.

## Work in Progress

This document will be continuously updated as development progresses. More details on implementation, performance improvements, and additional features will be documented accordingly.

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
