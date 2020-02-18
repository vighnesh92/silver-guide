pipeline {
    agent {
        docker {
            image 'node:lts' 
            args '-p 3000:3000' 
        }
    }
    environment {
	NPM_TOKEN    = credentials('jenkins-npm-token')
        GITHUB_TOKEN = credentials('jenkins-github-token')
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Publish') {
            steps {
                sh 'npm run semantic-release'
            }
        }
    }
}
