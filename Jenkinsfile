pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    environment {
        REPO_URL = 'https://github.com/ignatus-anim/qr-code-generator.git'
        IMAGE_NAME = 'ignatusa3/qr-code-generator'
        IMAGE_TAG = 'latest'
        DOCKER_CREDENTIALS = 'docker-hub-credentials'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: env.REPO_URL, branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Lint Code') {
            steps {
                dir('frontend') {
                    sh 'npm run lint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    sh 'npm run test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    dir('frontend') {
                        sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME:$IMAGE_TAG
                        '''
                    }
                }
            }
        }
        
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
