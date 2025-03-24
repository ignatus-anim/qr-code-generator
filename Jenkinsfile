pipeline {
    agent any
    workspace("${WORKSPACE}/frontend") { 
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/godcandidate/qr-code-generator.git'
            }
        }

        stage('Check current directory') {
            steps {
                sh 'pwd'
            }
        }
        //stage('Install and Run Unit Tests') {
        //    steps {
        //        sh 'npm install'
        //        sh 'npm run lint'  // Optional static code analysis
        //        sh 'npm run test'  // Run tests before building the image
        //    }
        }
    }
    }
}
