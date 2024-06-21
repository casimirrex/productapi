pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/casimirrex/productapi.git'
            }
        }
        stage('Build') {
            steps {
                // Example build step
                sh 'echo "Building the project..."'
            }
        }
        stage('Test') {
            steps {
                // Example test step
                sh 'echo "Running tests..."'
            }
        }
        stage('Deploy') {
            steps {
                // Example deploy step
                sh 'echo "Deploying the application..."'
            }
        }
    }
}
