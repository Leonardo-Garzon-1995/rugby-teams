const rugbyTeams = [
    {
        teamName: "England",
        headCoach: "Stuart Hogg",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Ireland",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Scotland",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Wales",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "France",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Italy",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Spain",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Australia",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "New Zealand",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
    {
        teamName: "Argentina",
        headCoach: "John Anderson",
        year: 2023,
        victories: 6,
        players: [
            {
                name: "Tom Lawrence",
                number: 1,
                position: "Fly Half",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
        ]
    },
]


// Team Selection functionality
const selectTeam = document.getElementById("select-team");
const teamNameEl = document.getElementById("team-name");
const headCoachEl = document.getElementById("team-headCoach");
const teamVictoriesEl = document.getElementById("team-victories");
const teamYearEl = document.getElementById("team-year");

function updateTeamInfo() {
    const value = selectTeam.value; 
    const team = rugbyTeams.find(t => t.teamName.toLowerCase().replace(/\s+/g, "-") === value);

    if (team) {
        teamNameEl.textContent = team.teamName;
        headCoachEl.textContent = team.headCoach;
        teamYearEl.textContent = team.year;
        teamVictoriesEl.textContent = team.victories;
    }
}

selectTeam.addEventListener("change", updateTeamInfo);

// run once at start
updateTeamInfo();

// Player selection functionality


