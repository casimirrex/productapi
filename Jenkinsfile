pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Clone') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/casimirrex/productapi.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the Angular project
                sh 'npm run build --prod'
            }
        }
        stage('Start Application') {
            steps {
                // Start the Angular application in the background and redirect output to a log file
                sh 'nohup npm start > output.log 2>&1 &'
                // Ensure the nohup.out file is created
                sh 'sleep 10 && tail -n 50 output.log'
            }
        }
        stage('Wait for Server') {
            steps {
                // Increase wait time to ensure server starts
                sleep 40
            }
        }
        stage('Validate Page') {
            steps {
                script {
                    // Check if the /products page is accessible
                    sh 'curl --fail http://localhost:4200/products || exit 1'
                }
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Example deploy step (this needs to be adapted to your deployment strategy)
                sh 'echo "Deploying the application..."'
            }
        }
    }
}
