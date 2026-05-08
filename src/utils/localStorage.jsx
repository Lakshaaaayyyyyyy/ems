const employees = [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstName": "Vivaan",
      "tasks": [
        {
          "taskTitle": "Prepare Project Report",
          "taskDescription": "Compile and finalize the project documentation for client submission.",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Update API Documentation",
          "taskDescription": "Revise API docs to reflect recent feature updates.",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Documentation",
          "priority": "Medium"
        },
        {
          "taskTitle": "Wireframe New Dashboard",
          "taskDescription": "Create wireframes for the new analytics dashboard.",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-24",
          "category": "Design",
          "priority": "Medium"
        },
        {
          "taskTitle": "Redesign Landing Page",
          "taskDescription": "Enhance UI of the landing page for better user engagement.",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-18",
          "category": "Design",
          "priority": "Low"
        },
        {
          "taskTitle": "Bug Testing on Mobile",
          "taskDescription": "Test the app on multiple mobile devices for critical bugs.",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Testing",
          "priority": "High"
        }
      ],
      "taskNumber": {
        "active": 4,
        "new": 2,
        "completed": 1,
        "failed": 2
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Diya",
      "tasks": [
        {
          "taskTitle": "Organize Meeting Notes",
          "taskDescription": "Summarize and organize the notes from last client meeting.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-27",
          "category": "Documentation",
          "priority": "Low"
        },
        {
          "taskTitle": "Test Payment Gateway",
          "taskDescription": "Run multiple test cases for the payment gateway integration.",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-25",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Debug Checkout Page",
          "taskDescription": "Identify and fix issues in the checkout page flow.",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-23",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Develop User Login Feature",
          "taskDescription": "Implement secure user authentication with OAuth.",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-09",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Proofread Knowledge Base",
          "taskDescription": "Check the company knowledge base articles for grammar and accuracy.",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-06",
          "category": "Documentation",
          "priority": "Low"
        }
      ],
      "taskNumber": {
        "active": 2,
        "new": 2,
        "completed": 2,
        "failed": 3
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Ananya",
      "tasks": [
        {
          "taskTitle": "Backend API Optimization",
          "taskDescription": "Improve API response time by optimizing database queries.",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-16",
          "category": "Development",
          "priority": "High"
        },
        {
          "taskTitle": "Implement Search Feature",
          "taskDescription": "Add a full-text search feature for the product catalog.",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-31",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Regression Testing",
          "taskDescription": "Run regression tests to ensure existing features work after updates.",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-10",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Refactor Authentication Module",
          "taskDescription": "Clean up and improve authentication module for better maintainability.",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-02",
          "category": "Development",
          "priority": "High"
        },
        {
          "taskTitle": "Prepare Deployment Scripts",
          "taskDescription": "Write scripts to automate the deployment process.",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Deployment",
          "priority": "Medium"
        },
        {
          "taskTitle": "Create Onboarding Guide",
          "taskDescription": "Draft a step-by-step guide for onboarding new developers.",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-14",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Server Configuration Update",
          "taskDescription": "Update the server configurations for security patches.",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-25",
          "category": "Deployment",
          "priority": "Medium"
        },
        {
          "taskTitle": "Deploy New Version",
          "taskDescription": "Deploy the latest version of the application to production.",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-21",
          "category": "Deployment",
          "priority": "Low"
        },
        {
          "taskTitle": "UI Component Redesign",
          "taskDescription": "Update UI components to match the latest brand guidelines.",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-22",
          "category": "Design",
          "priority": "High"
        }
      ],
      "taskNumber": {
        "active": 1,
        "new": 4,
        "completed": 5,
        "failed": 5
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Kabir",
      "tasks": [
        {
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve the issue preventing users from logging in.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-04",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Create API Reference",
          "taskDescription": "Prepare an API reference document for developers.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-01",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Migrate Database",
          "taskDescription": "Move the existing database to a new cloud provider.",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-11",
          "category": "Deployment",
          "priority": "High"
        },
        {
          "taskTitle": "Add Dark Mode",
          "taskDescription": "Implement dark mode feature for the web app.",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-23",
          "category": "Development",
          "priority": "Low"
        },
        {
          "taskTitle": "Update README",
          "taskDescription": "Revise the project README file with latest setup instructions.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-30",
          "category": "Documentation",
          "priority": "Medium"
        },
        {
          "taskTitle": "Load Testing",
          "taskDescription": "Perform load testing to check server performance under stress.",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-19",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Server Deployment",
          "taskDescription": "Deploy the application to staging servers for testing.",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Deployment",
          "priority": "Low"
        }
      ],
      "taskNumber": {
        "active": 7,
        "new": 2,
        "completed": 4,
        "failed": 6
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Rohan",
      "tasks": [
        {
          "taskTitle": "Monitor Server Logs",
          "taskDescription": "Check server logs for errors and unusual activities.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-21",
          "category": "Deployment",
          "priority": "Low"
        },
        {
          "taskTitle": "Cross-Browser Testing",
          "taskDescription": "Test the application across different browsers for compatibility.",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-14",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Update Policy Documents",
          "taskDescription": "Revise company policy documents with the latest guidelines.",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-21",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Design Newsletter",
          "taskDescription": "Create a visually appealing layout for the monthly newsletter.",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-08-03",
          "category": "Design",
          "priority": "Medium"
        }
      ],
      "taskNumber": {
        "active": 2,
        "new": 1,
        "completed": 3,
        "failed": 1
      }
    }
  ];



const admin =  [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
  }