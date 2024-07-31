# SonarQube Configuration and Analysis Documentation

## Overview

This document outlines the steps taken to configure SonarQube in a Docker container, clone a repository, and run the SonarQube Scanner for analysis.

## 1. Configure SonarQube in Docker

### 1.1. Pull the SonarQube Docker Image

To pull the latest SonarQube Docker image, run:

```sh
docker pull sonarqube
```

### 1.2. Run SonarQube Container

Run the SonarQube Docker container with the following command:

```sh
docker run -d --name sonarqube -p 9000:9000 sonarqube
```

- `-d`: Runs the container in detached mode.
- `--name sonarqube`: Names the container "sonarqube".
- `-p 9000:9000`: Maps port 9000 on the host to port 9000 on the container.

## 2. Clone the Repository

### 2.1. Clone the Repository

Clone your repository into the server directory where SonarQube will analyze the code. Replace `REPO_URL` with your repository URL:

```sh
git clone REPO_URL
```

Navigate to the cloned repository directory:

```sh
cd your-repo-directory
```

## 3. Configure SonarQube Scanner

### 3.1. Pull the SonarQube Scanner Docker Image

To pull the latest SonarQube Scanner Docker image, run:

```sh
docker pull sonarsource/sonar-scanner-cli
```

### 3.2. Create `sonar-project.properties`

Create a `sonar-project.properties` file in the root of your project directory with the following content:

```properties
sonar.projectKey=NetflixClone
sonar.projectName=NetflixClone
sonar.projectVersion=1.0
sonar.sources=src
sonar.host.url=http://65.1.106.208:9000
sonar.login=sqp_fc51db2f607d7f317fb551064c928a2c8ce758ad
```

Replace `65.1.106.208:9000` with your SonarQube server URL and `sqp_fc51db2f607d7f317fb551064c928a2c8ce758ad` with your SonarQube authentication token.

## 4. Run SonarQube Scanner

### 4.1. Execute the SonarQube Scanner Command

Run the SonarQube Scanner using Docker with the following command:

```sh
docker run --rm \
  -v "$(pwd)":/usr/src \
  -w /usr/src \
  sonarsource/sonar-scanner-cli \
  -Dsonar.projectKey=NetflixClone \
  -Dsonar.projectName=NetflixClone \
  -Dsonar.projectVersion=1.0 \
  -Dsonar.sources=src \
  -Dsonar.host.url=http://65.1.106.208:9000 \
  -Dsonar.login=sqp_fc51db2f607d7f317fb551064c928a2c8ce758ad
```

- `-v "$(pwd)":/usr/src`: Mounts the current directory to `/usr/src` in the Docker container.
- `-w /usr/src`: Sets the working directory in the Docker container.

### 4.2. Troubleshooting

- If you encounter errors related to authorization, verify the token and user permissions.
- Ensure SonarQube server is running and accessible from the Docker container.
