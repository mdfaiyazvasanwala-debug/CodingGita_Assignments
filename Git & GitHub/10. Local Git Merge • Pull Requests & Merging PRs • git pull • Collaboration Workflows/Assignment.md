# Assignments - Local Merge • Pull Requests • git pull | Hands-on Practice

---

### Instructions
Complete all mandatory assignments in order. Use your existing practice repo (recommended name: CodingGita_Assignments) for submission.  
Take clear screenshots where asked. Submit the **GitHub repository link** or required screenshots or both as per the submission guidelines of each assignment.

**Before you start:** Make sure your local `main` is clean and up to date (`git status` and `git pull`).

---

### Assignment 1 – Local Merge (Mandatory)

**Goal:** Practice merging a feature branch into `main` locally.

1. Create a new branch:  
   `git checkout -b feature-local-merge`
2. Create a file named `local-merge.txt` and write 3–4 lines about what you learned today about local merge.
3. Stage and commit:  
   `git add .`  
   `git commit -m "Add local-merge notes"`
4. Switch back to main:  
   `git checkout main`
5. Merge the feature branch:  
   `git merge feature-local-merge`
6. Push main:  
   `git push origin main`
7. Run `git log --oneline -5` and take a screenshot of the history.

**Submit:** Screenshot of `git log --oneline` after the merge + confirmation that the file is on GitHub `main`.

**Answers**

<img width="1031" height="535" alt="image" src="https://github.com/user-attachments/assets/794cd23a-7c00-40fb-9998-da05ab11024b" />

<img width="1098" height="387" alt="image" src="https://github.com/user-attachments/assets/34d78053-b98b-44fa-a7fd-2c0e7ea6ccdf" />

<img width="1886" height="987" alt="image" src="https://github.com/user-attachments/assets/88ef5ef4-f66e-4fd6-b0fa-836493202dfa" />

---

### Assignment 2 – Pull Request Workflow (Mandatory)

**Goal:** Create a Pull Request, merge it on GitHub, then update local main with `git pull`.

1. Create a new branch:  
   `git checkout -b feature-pr-practice`
2. Create a file named `pr-practice.txt`. Write what a Pull Request is and why teams use it (4–5 lines).
3. Commit:  
   `git add .`  
   `git commit -m "Add PR practice notes"`
4. Push the branch:  
   `git push -u origin feature-pr-practice`
5. On GitHub: Open a Pull Request from `feature-pr-practice` into `main`. Write a clear PR title and description.
6. Merge the Pull Request on GitHub (use **“Create a merge commit”** option).
7. Delete the feature branch on GitHub (optional but recommended).
8. Locally:  
   `git checkout main`  
   `git pull origin main`
9. Confirm `pr-practice.txt` is now present on local main. Take a screenshot of the terminal after pull and of the merged PR on GitHub.

**Submit:** Link to the merged PR + screenshot of successful `git pull` + screenshot of GitHub PR (merged state).

**Answers**

[Github Repo](https://github.com/mdfaiyazvasanwala-debug/CG-Assignment.git)

<img width="1887" height="985" alt="image" src="https://github.com/user-attachments/assets/1f32cf29-91e1-4c74-89bf-78cbfaa8ce8d" />

<img width="1880" height="892" alt="image" src="https://github.com/user-attachments/assets/e69b6481-641d-44ef-b57e-cdbdbd5785a1" />

<img width="1868" height="1017" alt="image" src="https://github.com/user-attachments/assets/9b337834-4e7f-496f-97d8-3e6cbb216327" />

<img width="865" height="728" alt="image" src="https://github.com/user-attachments/assets/0ea1518f-27db-4780-a746-3829bf75a87d" />

---

### Assignment 3 – Compare Both Workflows (Mandatory)

**Goal:** Experience both methods side-by-side and write a short comparison.

1. You already did one local merge (Assignment 1) and one PR merge (Assignment 2).
2. Create a short file named `comparison.txt` (on a new branch or directly on main).
3. In that file answer these questions **in your own words**:
   - What is the main difference between local merge and PR merge?
   - When would you prefer a local merge?
   - When is a Pull Request better?
   - After merging a PR on GitHub, which command brings the changes to your computer?
   - What does `git pull` actually do (two steps)?
4. Commit and push `comparison.txt` (either via local merge or via a new PR).

**Submit:** Content of `comparison.txt` (or screenshot) + link to the commit/PR.

**Answers**

[Github Repo](https://github.com/mdfaiyazvasanwala-debug/CG-Assignment.git)

<img width="747" height="638" alt="image" src="https://github.com/user-attachments/assets/9d8ca096-394e-4e08-822c-bbced8d438be" />

<img width="792" height="407" alt="image" src="https://github.com/user-attachments/assets/57983535-67c7-4d05-bbd8-afa8f9fe54b9" />


<img width="1886" height="958" alt="image" src="https://github.com/user-attachments/assets/09cf3cc9-988f-417b-9bdf-a4a7da9bc435" />

---

### Assignment 4 – git pull Practice (Mandatory)

**Goal:** Practice updating local branches safely with `git pull`.

1. Make sure you are on `main`:  
   `git checkout main`
2. Run `git pull origin main` and observe the output.
3. Create a small change on GitHub itself (edit any file using the GitHub web editor on `main` and commit).
4. Back in your terminal, run `git pull origin main` again.
5. Confirm the web change is now in your local files.
6. Take a screenshot of the terminal showing the pull that brought the web change.

**Submit:** Screenshot of the successful `git pull` that received the GitHub web edit.

**Answers**

<img width="1187" height="797" alt="image" src="https://github.com/user-attachments/assets/37491ad1-cc2a-4043-af2e-3dacae4c51ae" />

---

### Bonus Assignment – Mini Collaboration Simulation (Optional)

**Goal:** Simulate a small team workflow (can be done alone with two clones or with a classmate).

1. Person A (or Clone A): Create branch `feature-A`, add a file, push, open PR.
2. Person B (or Clone B): Create branch `feature-B`, add a different file, push, open another PR.
3. Merge both PRs on GitHub (one after another).
4. Both persons run `git checkout main && git pull` and confirm both files are present.
5. Write 2–3 lines about what you observed when pulling after multiple merges.

**Submit (optional):** Short note + screenshots of both merged PRs and final `git log --oneline`.

**Answers**

<img width="1280" height="766" alt="image" src="https://github.com/user-attachments/assets/d62793b8-f291-47fd-a2d6-ba27f7862753" />


---
