#!/bin/bash

# Author        : ESHAN ROY
# Author URI    : https://eshanized.github.io

# NOTE : Run at your own Risk!

# Function to print GitHub credential configuration options
print_options() {
  echo "🔒 Configure GitHub Credentials:"
  echo "1. 📝 Enter GitHub username and password"
  echo "2. 🔑 Enter GitHub personal access token"
  echo "3. 📁 Use existing GitHub credentials from ~/.gitconfig"
  echo "4. Github user and email config"
}

# Print options and prompt user to select
print_options
echo "Enter the number of your chosen option:"
read -r OPTION

# Handle user selection
case $OPTION in
  1) 
    echo "Enter your GitHub username:"
    read -r USERNAME
    echo "Enter your GitHub password:"
    read -s PASSWORD
    git config --global credential.helper store
    git config --global credential.username $USERNAME
    git config --global credential.password $PASSWORD
    ;;
  2) 
    echo "Enter your GitHub personal access token:"
    read -r TOKEN
    git config --global credential.helper store
    git config --global credential.username "your-github-username"
    git config --global credential.password $TOKEN
    ;;
  3) 
    echo "Using existing GitHub credentials from ~/.gitconfig"
    ;;
  4)
    echo "Enter github email address: "
    read -r USEREMAIL
    echo "Enter GitHub username: "
    read -r USERNAME
    git config --global user.email "$USEREMAIL"
    git config --global user.name "$USERNAME"
    ;;
  *) 
    echo "Invalid option. Exiting."
    exit 1;;
esac

echo "GitHub credentials configured successfully! 👍"