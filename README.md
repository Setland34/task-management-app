# Task Management Application

This is a web-based task management application where users can create, update, and delete tasks. The application includes user authentication and authorization to ensure that only authorized users can access and modify tasks. Additional features include task prioritization, due dates, and notifications to enhance the user experience.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Running Tests

To run tests, use the following command:
```
npm test
```

## Building for Production

To create a production build, use the following command:
```
npm run build
```

This will create a `build` directory with the production-ready files.

## Deployment

To deploy the application, follow the instructions provided by your hosting provider. Ensure that you have set up the necessary environment variables for the application to function correctly.

## User Authentication and Authorization

The application includes user authentication and authorization to ensure that only authorized users can access and modify tasks. Follow these steps to set up user authentication and authorization:

1. Register a new user:
   - Navigate to the registration page.
   - Fill in the required information (username and password).
   - Submit the registration form.

2. Log in with an existing user:
   - Navigate to the login page.
   - Enter your username and password.
   - Submit the login form.

3. Log out:
   - Click the logout button to log out of the application.

4. User permissions:
   - Only authenticated users can create, update, and delete tasks.
   - Ensure that you are logged in to access and modify tasks.

## Interactive Rebase with `git rebase -i HEAD~<number_of_commits>`

The `git rebase -i HEAD~<number_of_commits>` command is used to interactively rebase the last `<number_of_commits>` commits. This allows you to edit, reorder, squash, or drop commits in your repository. Here are the steps to use this command:

1. Open your terminal and navigate to the root directory of your repository.
2. Run the command `git rebase -i HEAD~<number_of_commits>`, replacing `<number_of_commits>` with the number of commits you want to rebase.
3. An interactive editor will open, displaying the list of commits to be rebased. Each commit will be prefixed with a command (e.g., pick, squash, edit).
4. Modify the commands as needed. For example, you can change `pick` to `squash` to combine commits, or to `edit` to modify a commit message.
5. Save and close the editor to start the rebase process.
6. If you chose to edit a commit, make the necessary changes and run `git rebase --continue` to proceed with the rebase.
7. If you encounter conflicts, resolve them and run `git rebase --continue` to proceed.

This process allows you to clean up your commit history and make it more readable. Be cautious when rebasing, especially if you are working on a shared branch, as it can rewrite commit history.
