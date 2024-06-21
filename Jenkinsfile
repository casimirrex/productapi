pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/casimirrex/productapi.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }

        stage('Kill Existing Process') {
            steps {
                script {
                    def pid = sh(script: "lsof -t -i:4200", returnStdout: true).trim()
                    if (pid) {
                        sh "kill -9 ${pid}"
                    }
                }
            }
        }

        stage('Start Application') {
            steps {
                sh 'nohup npm start > output.log 2>&1 &'
                sleep 30 // Increase wait time to ensure the server starts
            }
        }

        stage('Wait for Server') {
            steps {
                sleep 60 // Increase wait time to ensure the server starts
            }
        }

        stage('Validate Home Page') {
            steps {
                sh 'curl -v http://localhost:4200' // Print home page contents for debugging
            }
        }
    }
}
