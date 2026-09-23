## Git Boxoffice Sync Assignment Submission

**Name:** Samuel Salado
**Course/Program:** BSIT 

### Task 1: Initial Feature Implementation
![Task 1 Screenshot](<Screenshot 172520.png 2026-09-23>)
**Explanation:** This demonstrates the successful push of the `feature/group-pricing` branch from the first local environment (Clone A). The commit introduces the initial logic for a 10% group discount on orders of 5 or more tickets.

### Task 2: Simulating Divergent Work
![Task 2 Screenshot](<Screenshot 172640.png 2026-09-23>)
**Explanation:** This illustrates a `[rejected]` push attempt from Clone B. The rejection occurs because Clone B lacks the upstream changes pushed by Clone A, successfully triggering Git's protection against overwriting remote work.

### Task 3: Resolving a Two-Way Merge Conflict
![Task 3 Screenshot](<Screenshot 172831.png 2026-09-23>)
**Explanation:** This shows the successful resolution of a merge conflict between Clone A's discount logic and Clone B's rounding implementation. The divergent histories were reconciled using `git fetch` and `git merge` before pushing the integrated code.

### Task 4: Introducing a Third Contributor
![Task 4 Screenshot](<Screenshot 173028.png 2026-09-23>)
**Explanation:** Similar to Task 2, this is a `[rejected]` push from Clone C, which attempted to add a 50% VIP surcharge. Because the remote branch advanced twice (Clone A's push and Clone B's merge), Clone C is out of sync and requires fetching.

### Task 5: Reconciling a Three-Way Merge
![Task 5 Screenshot](<Screenshot 173230.png 2026-09-23>)
**Explanation:** This confirms the successful resolution of a complex three-way merge. The code was manually integrated to ensure Clone C's VIP surcharge functions alongside the previously merged discount and rounding features.

### Task 6: Forcing a Rebase Conflict
![Task 6 Screenshot](<Screenshot 173347.png 2026-09-23>)
**Explanation:** This shows a push rejection from Clone A after adding a flat $10 discount. Because Clone A never pulled the changes from Clones B and C, its local history is completely divergent from the remote branch.

### Task 7: Rebasing, Main Merge, and Tagging
![Task 7 Screenshot](<Screenshot 174203.png 2026-09-23>)
**Explanation:** This final screenshot demonstrates the completion of the workflow. The conflict from Task 6 was resolved using `git rebase` for a cleaner, linear project history. Finally, the completed `feature/group-pricing` branch was fast-forward merged into `main` and tagged as release `v1.0-synced`.

---

### Workflow Questions

**1. Walk through the final calculateTicketPrice function and name which contributor's change is responsible for each part.**
*   `let total = quantity * basePrice;` - Original base code.
*   `total = total * 1.50;` - Clone C (added the 50% VIP surcharge).
*   `total = total - 10;` - Clone A (added the flat $10 discount in Task 6).
*   `if (quantity >= 5) { total = total * 0.90; }` - Clone A (added the 10% group discount in Task 1).
*   `return Math.round(total);` - Clone B (changed truncation to rounding in Task 2).

**2. Compare Task 3's two-way conflict to Task 5's three-way conflict — what got harder with a third line of work?**
Task 3 only required combining two separate logical changes (a discount and a rounding method). Task 5 required integrating a third new feature (VIP surcharge) against a codebase that had *already* been merged and modified by two other people. The mental overhead increases because you have to ensure the mathematical order of operations (surcharge vs. discount vs. rounding) still works logically when three overlapping changes are mashed together in a single block of code.

**3. Task 6's flat $10 discount changed the expected result of tests unrelated to your change (the group-discount and VIP tests). Why, and what does that tell you about "isolated" changes in shared code?**
Applying a flat $10 discount changes the baseline total that the subsequent 10% group discount modifies, which ultimately alters the final rounded output for all scenarios. This demonstrates that in shared code, changes are rarely truly "isolated." Even if Git automatically merges lines without a text conflict, introducing new mathematical logic or variables will cause semantic conflicts that ripple through and break existing tests. 

**4. If this were a real team of three, what one process change would have prevented all three rejected pushes?**
The team should adopt a strict rule to always run `git pull` (or `git fetch` and `rebase`) immediately before starting any new work, and again right before committing and pushing. Frequent synchronization ensures local branches are never out of date with the remote branch.