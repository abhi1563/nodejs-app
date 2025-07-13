pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('git clone') {
            steps {
                git branch: 'main', url: 'https://github.com/abhi1563/nodejs-app.git'
            }
        }
        stage('Verify workspace') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }
        stage('install dependency') {
            steps {
                sh 'npm install'
            }
        }
        stage('start pm2') {
            steps {
                sh 'pm2 start index.js --name my-app'
                sh 'pm2 save'
            }
        }
    }
}
