# Budget Tracker App

The **Budget Tracker App** helps users manage their finances by tracking income, expenses, savings goals, and setting annual budget plans. It includes a user-friendly dashboard for seamless financial planning.

## Features

- **User Authentication**: Register and login to access personalized budgeting tools.
- **Monthly Income & Expenses**: Input and monitor income and expenses on a monthly basis.
- **Annual Budget Plan**: Set and track annual financial goals and spending limits.
- **Savings Tracker**: Create savings goals and track progress over time.
- **Transaction Categorization**: Categorize transactions for better financial insight.
- **Bank Integration**: Optionally link bank accounts via Plaid/Yodlee APIs for real-time expense tracking.
- **Dashboard**: Visualize financial data, including income, expenses, and goals, in a clean, professional interface.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/agunbiadepaul/budget-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd budget-tracker
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up MongoDB and environment variables:
    - Create a `.env` file from the `.env.example` template.
    - Add your MongoDB connection string and other environment variables.

5. Start the server:
    ```bash
    npm start
    ```

6. Open the app in your browser:
    ```bash
    http://localhost:3000
    ```

## Technologies Used

- **Frontend**: HTML, CSS (Responsive Design), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JSON Web Tokens (JWT) for secure user login
- **API Integration**: Bank linking via Plaid/Yodlee APIs (optional)

## File Structure

- **index.html**: Main landing page with registration and login options.
- **about-us.html**: Page describing the mission and purpose of the Budget Tracker.
- **login.html**: User login page.
- **register.html**: User registration form.
- **dashboard.html**: Main user dashboard displaying budgeting features.
- **logout.html**: Logout page that redirects users back to login.

## Usage

1. **Register**: Create a new account to begin tracking your finances.
2. **Login**: Access your personalized dashboard by logging in.
3. **Dashboard**: Input income, expenses, and savings goals, and monitor financial performance.
4. **About Us**: Learn more about the purpose of the Budget Tracker on the "About Us" page.
5. **Logout**: Log out of your account securely.

## Future Enhancements

- **Expense Analysis**: Visualize expense trends over time.
- **Notifications**: Set reminders for bill payments and financial goals.
- **Mobile Optimization**: Improve UI for mobile devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
