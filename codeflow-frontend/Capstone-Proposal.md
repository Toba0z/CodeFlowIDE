# CodeFlowIDE

## Overview

**CodeFlowIDE** is an interactive development environment (IDE) tailored for JavaScript, designed to enhance understanding and debugging of code through a visual and intuitive approach. It allows users to navigate through JavaScript code execution visually, highlighting each step to facilitate learning and troubleshooting.

### Problem

Traditional IDEs and debuggers, while powerful, often present a steep learning curve and may not adequately address the need for an intuitive understanding of complex code flows. **CodeFlowIDE** seeks to fill this gap by offering a streamlined, visual method for exploring and understanding JavaScript code, making it accessible for developers at all levels.

### User Profile

**CodeFlowIDE** is aimed at JavaScript developers ranging from beginners to experienced professionals. It serves as a learning tool for newcomers and a debugging aid for veterans, with a focus on simplicity, usability, and accessibility. Ensuring a secure execution environment is also paramount, catering to users who require both ease of use and safety in code execution.

### Features

- **Code Input and Display**: A user-friendly interface for entering and viewing JavaScript code.
- **Execution Highlighting**: Visual highlights of code as it is conceptually executed, illustrating the flow of execution.
- **Navigation Controls**: "Next" and "Prev" buttons for step-by-step code navigation.
- **Syntax Highlighting**: Enhances code readability through syntax coloring.
- **Safe Execution Environment**: Ensures JavaScript code runs in a secure, sandboxed environment.
- **Responsive Design**: A design that adapts to different devices, ensuring accessibility across platforms.

## Implementation

### Tech Stack

- **Frontend**: Utilizes React for the interface and SASS for styling.
- **Backend**: Employs Express.js to handle server-side logic, with MySQL for data storage, and Knex.js for query management.
- **Libraries**: Incorporates Prism.js or highlight.js for syntax highlighting, and react-ace or react-codemirror for the code editor.

### APIs

- **NodeVM**: Used for sandboxed JavaScript code execution. 
- Currently, no external APIs are planned for the initial phase.

### Sitemap

- **Home Page**: Introduction and overview of **CodeFlowIDE**.
- **Editor Page**: The main interface for code input, execution, and navigation.
- **About Page**: Provides information about the project and its developers.

### Mockups

Design mockups will be created using draw.io to visually outline the interface, including the homepage, editor, and navigation.

### Data

- **User Data**: Considered for future versions to support account management.
- **Code Snippets**: Storage for user codes for execution and later access.
- **Execution States**: Keeps track of the current point in code execution for navigation purposes.

### Endpoints

- `POST /api/execute`: For sandboxed execution of JavaScript code.
- `GET /api/code/:id`: Retrieves stored code snippets.
- Future endpoints may include user management and specific data retrieval functions.

### Auth

The initial rollout will likely not feature user authentication, focusing instead on core functionalities. Future versions may introduce OAuth for enhanced user experience and security.

## Roadmap

Given the one-week completion goal, the project will be structured as follows:

1. **Day 1**: Project setup, including initializing front and back ends.
2. **Day 2-3**: Development of UI components and API endpoints.
3. **Day 4-5**: Implementation of code execution and highlighting features.
4. **Day 6**: Comprehensive testing and debugging.
5. **Day 7**: Final revisions, deployment, and preparation of project documentation.

## Nice-to-haves

- **User Accounts**: For personalized code management and storage.
- **Collaborative Editing**: Enabling real-time, multi-user code editing.
- **Extended Language Support**: Broadening the IDE's applicability to other programming languages.
