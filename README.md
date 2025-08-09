### Polus Dynamic Form Generator with Multi-tab State Management

This project is an Angular application that dynamically renders forms from a JSON schema. It features a tabbed interface with independent state management and optimized performance, fulfilling the requirements of the machine test.

## Features

  * **Dynamic Form Generation**: A reusable `DynamicFormComponent` renders form controls and applies validation based on a provided JSON schema.
  * **Tabbed Interface**: The `FormTabsComponent` manages two separate forms, each with its own schema.
  * **Scalable State Management**: A singleton `FormStateService` uses `BehaviorSubject` to store and restore form data for each tab, ensuring data persists when switching between tabs.
  * **Optimized Change Detection**: Components use `ChangeDetectionStrategy.OnPush` to minimize re-renders and improve application performance.
  * **Local Storage Persistence (Bonus)**: Form data is automatically saved to and loaded from local storage, so data is not lost on page refresh.
  * **Notification System (Bonus)**: A simple toast notification is displayed upon successful form submission.

## Tech Stack

  * **Angular 20+**
  * **TypeScript**
  * **RxJS** (for state management with `BehaviorSubject`)
  * **Reactive Forms**

## Project Architecture

The application follows a clear component-service architecture:

  * **`FormStateService`**: The core of the state management solution. It holds the form schemas and the current state for each form in a `BehaviorSubject`, exposing them as observables.
  * **`DynamicFormComponent`**: A "dumb" component that is solely responsible for rendering a form based on the input schema. It handles validation and emits the form's value on submit.
  * **`FormTabsComponent`**: The "smart" container component. It injects the `FormStateService` to get the schemas and initial data, then passes this information to two instances of the `DynamicFormComponent`. It also listens for form submissions to update the state in the service.

## How to Run the Project

Follow these steps to get the application running locally:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/chethanmj0430/polus-forms
    cd polus-forms
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the application**:

    ```bash
    ng serve --open
    ```

The application will open in your browser, typically at `http://localhost:4200`. You can then interact with the forms and test the state management by switching between the tabs.