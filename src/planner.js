/**
 * Team Combination Planner
 * ----------------------------------------
 * Generates every possible combination of
 * a fixed team size using recursive
 * backtracking.
 */

class TeamCombinationPlanner {
    /**
     * Generate all unique combinations.
     * @param {number} totalMembers
     * @param {number} teamSize
     * @returns {number[][]}
     */
    generateCombinations(totalMembers, teamSize) {
        const allTeams = [];
        const currentTeam = [];

        const buildTeam = (nextMember) => {
            // Team completed
            if (currentTeam.length === teamSize) {
                allTeams.push([...currentTeam]);
                return;
            }

            // Try each remaining member
            for (let member = nextMember; member <= totalMembers; member++) {
                currentTeam.push(member);

                buildTeam(member + 1);

                // Backtrack
                currentTeam.pop();
            }
        };

        buildTeam(1);

        return allTeams;
    }
}

// -------------------------
// Example Usage
// -------------------------

const planner = new TeamCombinationPlanner();

const teams = planner.generateCombinations(4, 2);

console.log("Generated Teams:");
console.log(teams);
