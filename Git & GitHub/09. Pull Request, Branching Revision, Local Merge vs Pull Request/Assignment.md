### Assignment 1: Branching Commands & Naming

**Objective:** Revise branching commands and naming conventions.

**Tasks:**
1. Write the modern and older command for the following:

| Action                         | Modern Command | Older Command |
|--------------------------------|----------------|---------------|
| Switch to a branch             |                |               |
| Create + Switch to new branch  |                |               |
| Merge a feature branch         |                |               |
| Delete a merged branch         |                |               |

2. Write 4 **good** branch names and 4 **bad** branch names.
3. What is the recommended naming convention for feature branches?

**Submission:** Written answers

**Answers**

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/f45da080-9f49-47b1-8e26-0f060b365561" />

<img width="1280" height="498" alt="image" src="https://github.com/user-attachments/assets/02e8027a-e369-4d28-a621-f75a844ddf29" />

---

### Assignment 2: Local Merge vs Pull Request

**Objective:** Understand the difference between the two methods.

**Tasks:**
1. Create a comparison table between **Local Merge** and **GitHub Pull Request** (at least 5 points).
2. When should you use Local Merge?
3. When should you use a Pull Request?
4. Why is Pull Request preferred in team/professional projects?

**Submission:** Written answers

**Answers**

<img width="1280" height="1203" alt="image" src="https://github.com/user-attachments/assets/8845e23d-502f-41a8-b402-27b8e469abce" />

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/0f491379-ef98-45cb-8a75-4c9cbf0e26da" />

---

### Assignment 3: Practical Local Merge

**Objective:** Practice the complete local merge workflow.

**Tasks:**
1. Make sure you are on `main`.
2. Create a branch named `feature/about-page`.
3. Create a file `about.txt` and add some content.
4. Stage and commit with a meaningful message.
5. Switch to `main` and merge the branch.
6. Delete the feature branch.
7. Verify with `git branch` and `git log --oneline`.

**Submission:**  
- Screenshot of `git branch` (final)  
- Screenshot of `git log --oneline`  
- Screenshot showing `about.txt` is present on main


**Answers**

<img width="988" height="693" alt="image" src="https://github.com/user-attachments/assets/c0245e6f-9748-442a-9eb8-b4e07c513f79" />

---

### Assignment 4:  Create & Merge Pull Request

**Objective:** Perform the professional Pull Request workflow.

**Tasks:**
1. Create a new branch `feature/services-page`.
2. Add a file `services.txt` with any content.
3. Commit the changes.
4. Push the branch using:
   ```bash
   git push -u origin feature/services-page
   ```
5. Go to GitHub and create a Pull Request.
6. Merge the Pull Request.
7. Delete the branch on GitHub.
8. Update your local main:
   ```bash
   git switch main
   git pull origin main
   git branch -d feature/services-page
   ```

**Submission:**  
- Screenshot of the created Pull Request  
- Screenshot after merging the PR  
- Screenshot of final `git log --oneline` on main


**Answers**

<img width="1892" height="926" alt="image" src="https://github.com/user-attachments/assets/936d986b-fce8-46d6-bb5e-35ae3ba091b9" />

<img width="1885" height="976" alt="image" src="https://github.com/user-attachments/assets/5c1e5e40-bddc-48e5-94ee-c4197e653aa2" />

<img width="1333" height="885" alt="image" src="https://github.com/user-attachments/assets/d9bef656-c248-4e9d-894a-f4d834b44981" />

<img width="862" height="703" alt="image" src="https://github.com/user-attachments/assets/3799e2cf-affb-436e-94f6-4911f6a8b7a0" />

---

### Assignment 5: Complete Understanding + Reflection

**Objective:** Test deep understanding of Day 9 concepts.

**Tasks:**
1. Write the complete **Local Merge** workflow (step-by-step commands).
2. Write the complete **Pull Request** workflow (step-by-step).
3. Answer the following:
   - Why should we always run `git pull` on main before creating a new feature branch?
   - What happens if you merge a PR on GitHub but forget to run `git pull` locally?
   - Why should feature branches be deleted after merging?
4. Write 4 key takeaways from Day 9.

**Submission:** Written answers


**Answers**

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/4c77a6e1-9044-4a94-b1ae-77c3630eaabe" />

<img width="1280" height="923" alt="image" src="https://github.com/user-attachments/assets/52c78b4f-1626-4dbd-8ff9-2ed0c1a52bc6" />

---
