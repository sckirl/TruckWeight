# TruckWeight

This project is a web application built with Next.js, for managing truck weight data, administration, reporting, settings, and ticketing.

## Key Features & Benefits

Features include:

*   **Admin Panel:** A dedicated section for administrative tasks.
*   **Reporting:** Functionality to generate and view reports related to truck weights.
*   **Settings:** Customizable settings to tailor the application to specific needs.
*   **Ticketing System:** A system to manage and track support tickets, potentially related to weight discrepancies or system issues.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** (Version >= 18 recommended). Check your version with `node -v`.
*   **npm** or **yarn:** Package managers for JavaScript. npm is included with Node.js.  You can use yarn as an alternative.
*   **Text Editor/IDE:** VS Code, Sublime Text, or any editor you prefer.

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sckirl/TruckWeight.git
    cd TruckWeight
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

3.  **Configure Environment Variables:** (If any, based on the configuration section below.)  This project, as provided, does not appear to require immediate environment variables, but if your application requires them, create a `.env.local` file in the root directory and define your environment variables there.  Next.js automatically loads these variables.

    ```
    # Example (if applicable)
    NEXT_PUBLIC_API_URL=https://api.example.com
    ```

4.  **Run the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using yarn:

    ```bash
    yarn dev
    ```

    This will start the Next.js development server. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Examples & API Documentation

Currently, there are no explicit API endpoints documented. Explore the `/src/app` directory to understand the route structure and component interactions.

Examine the `src/app` directory for details regarding routing and component usage. The core structure suggests:

*   `/admin`: Administration interface.
*   `/reports`: Reporting dashboard.
*   `/settings`: Configuration options.
*   `/tickets`: Ticketing system.  `/tickets/[ticketId]` represents individual tickets.

## Configuration Options

Based on the files provided, the project is configured using:

*   **`tailwind.config.js`**:  Tailwind CSS configuration file. Customize styling and theme settings here.
*   **`.env.local` (Optional)**: For sensitive information and environment-specific settings (create if needed).

## Acknowledgments

This project uses:

*   Next.js
*   React
*   Tailwind CSS
*   MariaDB
