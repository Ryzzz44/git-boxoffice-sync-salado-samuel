## Git Boxoffice Sync Assignment Submission

**Name:** Samuel Salado
**Course/Program:** BSIT-3

### Task 1: Initial Feature Implementation
![Task 1 Screenshot](<Screenshot 2026-09-23 172520.png>)
**Explanation:** This demonstrates the successful push of the `feature/group-pricing` branch from the first local environment (Clone A). The commit introduces the initial logic for a 10% group discount on orders of 5 or more tickets.

### Task 2: Simulating Divergent Work
![Task 2 Screenshot](<Screenshot 2026-09-23 172640.png>)
**Explanation:** This illustrates a `[rejected]` push attempt from Clone B. The rejection occurs because Clone B lacks the upstream changes pushed by Clone A, successfully triggering Git's protection against overwriting remote work.

### Task 3: Resolving a Two-Way Merge Conflict
![Task 3 Screenshot](<Screenshot 2026-09-23 172831.png>)
**Explanation:** This shows the successful resolution of a merge conflict between Clone A's discount logic and Clone B's rounding implementation. The divergent histories were reconciled using `git fetch` and `git merge` before pushing the integrated code.

### Task 4: Introducing a Third Contributor
![Task 4 Screenshot](<Screenshot 2026-09-23 173028.png>)
**Explanation:** Similar to Task 2, this is a `[rejected]` push from Clone C, which attempted to add a 50% VIP surcharge. Because the remote branch advanced twice (Clone A's push and Clone B's merge), Clone C is out of sync and requires fetching.

### Task 5: Reconciling a Three-Way Merge
![Task 5 Screenshot](<Screenshot 2026-09-23 173230.png>)
**Explanation:** This confirms the successful resolution of a complex three-way merge. The code was manually integrated to ensure Clone C's VIP surcharge functions alongside the previously merged discount and rounding features.

### Task 6: Forcing a Rebase Conflict
![Task 6 Screenshot](<Screenshot 2026-09-23 173347.png>)
**Explanation:** This shows a push rejection from Clone A after adding a flat $10 discount. Because Clone A never pulled the changes from Clones B and C, its local history is completely divergent from the remote branch.

### Task 7: Rebasing, Main Merge, and Tagging
![Task 7 Screenshot](<Screenshot 2026-09-23 174203.png>)
**Explanation:** This final screenshot demonstrates the completion of the workflow. The conflict from Task 6 was resolved using `git rebase` for a cleaner, linear project history. Finally, the completed `feature/group-pricing` branch was fast-forward merged into `main` and tagged as release `v1.0`.