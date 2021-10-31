---
layout: project
title: "Conway's Game of Life"
platforms: ["Web"]
languages: ["HTML", "Javascript/Typescript"]
tools: ["Canvas API"]
team: 1
role: "Developer"
skills:
    [
        {
            name: "Canvas API",
            desc: "Creating simple, interactive, script-controlled graphics in a browser.",
        },
    ]
date: "2021-06-29"
summary: "A simple, limited, implementation of Conway's Game of Life, using the Canvas API to render the current state."
---

Conways' Game of Life is a set of rules that govern how a set of cells in an infinite grid will change from one tick of the clock to the next. The rules are as follows:

-   If a cell is "alive" and has less than 2 neighbouring cells that are also alive, then on the next tick of the clock, it will be "dead".
-   If a cell is alive and has more than 3 neighbouring cells that are also alive, then on the next tick of the clock it will be dead.
-   Otherwise, i.e. if a live cell has either 2 or 3 neighbours that are alive, then it shall remain alive on the next tick of the clock.
-   If a cell is dead, but has exactly 3 neighbours that are alive, then it too shall become alive on the next tick of the clock.
-   Otherwise, a dead cell shall remain dead.

For the sake of practicality, the board in which I built this simulation is not infinite, but is limited to just 90 by 90 cells. I wanted to make it so that the starting state of cells could be set by clicking on them, while the simulation could be set running, paused, or stepped-through by means of key inputs. As such, the size of my board was limited not just by technical limitations, but by the size of my screen, and also by how small I could make the cells before they were impractical to click on.

Conway's Game of Life is not a complex problem, in fact it's scarcely a problem at all. During the last semester of university, however, one of my Algorithms & Data Structures assignments was to create a program that could, given a starting state, report the number of live cells after a given number of ticks. As this program had to run in a HackerRank environment, it therefore worked solely through terminal input and output, with no graphical representation, making it difficult to appreciate what was happening. Even though my solution worked, it was unsatisfying, so I decided to make this version in order to watch the simulations play out in real time.

This was my first time using the browser's Canvas API, and I found it a very satisfying experience. Graphics make for very engaging development, as you get very immediate, very obvious feedback with each change.
