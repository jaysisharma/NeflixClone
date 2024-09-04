pipeline {
    agent any

    environment {
        SONARQUBE_TOKEN = credentials('sonar-token2') // SonarQube Token
        DOCKER_CREDENTIALS_ID = 'dockerhub' // DockerHub credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jaysisharma/NeflixClone.git'
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    sh """
                    ${scannerHome}/bin/sonar-scanner \
                      -Dsonar.projectKey=my-react-app \
                      -Dsonar.organization=my-org \
                      -Dsonar.host.url=http://localhost:9000 \
                      -Dsonar.login=${env.SONARQUBE_TOKEN} \
                      -Dsonar.sources=src \
                      -Dsonar.tests=src \
                      -Dsonar.test.inclusions=**/*.test.js \
                      -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t jaisysharma22/netflixclone:01 .'
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                script {
                    sh 'trivy image --timeout 20m jaisysharma22/netflixclone:01 --format json --output trivy-report.json'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: env.DOCKER_CREDENTIALS_ID) {
                        sh 'docker push jaisysharma22/netflixclone:01'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'demo1', contextName: '', credentialsId: 'SECRET_TOKEN', namespace: 'default', serverUrl: 'https://192.168.49.2:8443']]) 
                    {
                        sh 'kubectl apply -f deployment.yaml'
                        sh 'kubectl apply -f service.yaml'
                    }
                }
            }
        }
    }

    post {
        always {
            // Archive build artifacts and Trivy report
            archiveArtifacts artifacts: '**/build/**, trivy-report.json'
        }
        success {
            echo 'Build, scan, push, and deploy completed successfully.'
        }
        failure {
            echo 'Build, scan, push, or deploy failed.'
        }
    }
}
