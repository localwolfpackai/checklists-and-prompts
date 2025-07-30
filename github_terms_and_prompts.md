# Quick GitHub Library: Essential Terms, Commands, and Pro Prompts

---

## Essential GitHub Terms

| Term           | Meaning                                                                 |
|----------------|------------------------------------------------------------------------|
| Repository (repo) | A project folder that contains all of your project’s files and revision history. |
| Commit         | A snapshot of changes made to files in a repository.                   |
| Branch         | A parallel version of the repository, used for developing features or fixes. |
| Pull Request (PR) | A request to merge changes from one branch to another (often feature branch → main). |
| Fork           | A personal copy of someone else’s repository on your GitHub account.   |
| Merge          | To combine changes from different branches.                            |
| Clone          | To make a local copy of a repository on your machine.                  |
| Issue          | A way to track tasks, enhancements, bugs, or questions.                |
| README         | A markdown file that explains the project (shows on repo homepage).     |
| TODO           | A comment or section noting a task to be completed in the future.      |
| .gitignore     | A file specifying files/folders Git should ignore.                     |
| Upstream       | The original repository you forked from.                               |
| Origin         | The main remote repository you cloned from or push to.                 |

---

## Basic Git/GitHub Commands

```bash
# Set up
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Clone a repo
git clone https://github.com/username/repo.git

# Make changes and commit
git add .
git commit -m "Describe your changes"

# Push to remote
git push origin branch-name

# Create a new branch
git checkout -b new-feature

# Pull latest changes
git pull origin main

# Merge a branch
git checkout main
git merge branch-name

# View status
git status

# View commit log
git log
```

---

## Basic Prompt Examples for GitHub Copilot/AI

- Generate a README file for this project.
- Write a unit test for the following function.
- Refactor this code for better readability.
- Suggest improvements for this function.
- Explain what this section of code does.
- Create a .gitignore file suitable for a Python project.
- List all dependencies in this repository.
- Summarize the open issues in this project.
- Show me the last 5 commits and their messages.
- Draft a pull request description for this feature.

---

## 10 Elite/Pro-Level GitHub Prompts

1. **"Analyze the codebase for potential security vulnerabilities and suggest remediations."**

2. **"Generate a changelog summarizing all major changes since the last release, grouped by feature, bugfix, and breaking changes."**

3. **"Review this pull request for code quality, performance, and adherence to best practices. List actionable feedback points."**

4. **"Propose a branching strategy for a large team working on concurrent features and hotfixes."**

5. **"Identify areas in the project that lack automated tests and recommend high-priority test cases to add."**

6. **"Suggest improvements to the CI/CD pipeline to reduce build time and increase reliability."**

7. **"Generate a comprehensive CONTRIBUTING.md guide tailored to this project's language and workflow."**

8. **"Assess the project for accessibility best practices and recommend enhancements."**

9. **"Summarize technical debt in the codebase and recommend a prioritized roadmap for refactoring."**

10. **"Draft a project roadmap outlining major features, milestones, and dependencies for the next two quarters."**

---

> **Tip:** Copy and adapt these prompts for Copilot Chat, PR reviews, or as GitHub Copilot CLI commands to streamline and elevate your workflows!