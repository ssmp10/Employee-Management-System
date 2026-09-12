const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "e@e.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Login Page",
                taskDescription: "Create the UI design for the application's login page.",
                taskDate: "2026-09-07",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Navigation Bug",
                taskDescription: "Fix the issue where the navigation menu does not open correctly on mobile devices.",
                taskDate: "2026-09-06",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update User Profile",
                taskDescription: "Add functionality to allow users to update their profile information.",
                taskDate: "2026-09-05",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Database Backup",
                taskDescription: "Create and verify a backup of the production database.",
                taskDate: "2026-09-04",
                category: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy Version 2.1",
                taskDescription: "Deploy the latest application version to the staging server.",
                taskDate: "2026-09-03",
                category: "Deployment"
            }
        ]
    },

    {
        id: 2,
        firstName: "Vivan",
        email: "e2@e.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 0
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Create Dashboard",
                taskDescription: "Build the main dashboard interface for employees.",
                taskDate: "2026-09-07",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Write API Documentation",
                taskDescription: "Document all currently available REST API endpoints.",
                taskDate: "2026-09-06",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Test Authentication",
                taskDescription: "Test login, logout and authentication error scenarios.",
                taskDate: "2026-09-05",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Optimize Database Queries",
                taskDescription: "Identify and optimize slow database queries.",
                taskDate: "2026-09-04",
                category: "Database"
            }
        ]
    },

    {
        id: 3,
        firstName: "Aditya",
        email: "employee3@example.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 3,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Implement Search",
                taskDescription: "Add search functionality to the employee management system.",
                taskDate: "2026-09-07",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Fix Responsive Layout",
                taskDescription: "Make the dashboard responsive on tablets and mobile devices.",
                taskDate: "2026-09-06",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Employee Form",
                taskDescription: "Create a form for adding new employees to the system.",
                taskDate: "2026-09-05",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review the latest changes submitted by the development team.",
                taskDate: "2026-09-04",
                category: "Review"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Server Configuration",
                taskDescription: "Configure the staging server for the new application release.",
                taskDate: "2026-09-03",
                category: "DevOps"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Dependencies",
                taskDescription: "Update outdated npm dependencies and verify compatibility.",
                taskDate: "2026-09-02",
                category: "Maintenance"
            }
        ]
    },

    {
        id: 4,
        firstName: "Ishaan",
        email: "employee4@example.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Sales Report",
                taskDescription: "Prepare the monthly sales performance report.",
                taskDate: "2026-09-07",
                category: "Reports"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Analyze Customer Data",
                taskDescription: "Analyze customer activity data and identify important trends.",
                taskDate: "2026-09-06",
                category: "Analysis"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Product List",
                taskDescription: "Update the internal product list with the latest information.",
                taskDate: "2026-09-05",
                category: "Management"
            }
        ]
    },

    {
        id: 5,
        firstName: "Arjun",
        email: "employee5@example.com",
        password: "123",

        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 4,
            failed: 1
        },

        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Build Notification System",
                taskDescription: "Implement notifications for new tasks and task updates.",
                taskDate: "2026-09-07",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Test Task Management",
                taskDescription: "Test task creation, completion and failure functionality.",
                taskDate: "2026-09-06",
                category: "Testing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Task Component",
                taskDescription: "Create a reusable React component for displaying tasks.",
                taskDate: "2026-09-05",
                category: "React"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Login Validation",
                taskDescription: "Fix validation issues in the login form.",
                taskDate: "2026-09-04",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy Notification Feature",
                taskDescription: "Deploy the notification feature to the staging environment.",
                taskDate: "2026-09-03",
                category: "Deployment"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Clean Project Structure",
                taskDescription: "Organize project files and remove unnecessary code.",
                taskDate: "2026-09-02",
                category: "Maintenance"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Review Pull Requests",
                taskDescription: "Review and approve pending pull requests from the team.",
                taskDate: "2026-09-01",
                category: "Review"
            }
        ]
    }
];


const admin = [
    {
        id: 6,
        firstName: "Rajesh",
        email: "admin@me.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees))
    }

    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin))
    }
}

export const saveEmployees = (updatedEmployees) => {
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
}

export const getLocalStorage = () => {
    const storedEmployees = localStorage.getItem('employees')
    const storedAdmin = localStorage.getItem('admin')

    return {
        employees: storedEmployees ? JSON.parse(storedEmployees) : employees,
        admin: storedAdmin ? JSON.parse(storedAdmin) : admin,
    }
}
