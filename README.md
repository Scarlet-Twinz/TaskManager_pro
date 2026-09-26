# Academix Pro — GPA Calculator

A lightweight browser-based university GPA calculator built around a 5.0 grading scale.

> **Repository note:** the GitHub repository is named `TaskManager_pro`, but the application itself is **Academix Pro** and is focused on GPA calculation.

## Overview

Academix Pro lets students enter course codes, credit units, and grades, add multiple courses, and calculate the resulting GPA/CGPA through a simple browser-based interface.

## Features

- Add multiple courses dynamically
- Enter course codes and credit units
- Select grades from A (5) through F (0)
- Calculate weighted GPA/CGPA
- Responsive browser-based interface
- No backend or package installation required

## Grading Model

| Grade | Point |
| --- | ---: |
| A | 5 |
| B | 4 |
| C | 3 |
| D | 2 |
| E | 1 |
| F | 0 |

The calculation uses the standard weighted-GPA approach implemented by the application: each course's credit units are multiplied by its grade point, then the total quality points are divided by total registered units.

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
TaskManager_pro/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

```bash
git clone https://github.com/Scarlet-Twinz/TaskManager_pro.git
cd TaskManager_pro
```

Open `index.html` in a modern browser. A local static server can also be used for development.

## Scope

This is a client-side educational application. It does not require a backend, database, authentication service, or external API.

## Author

**Anthony Emmanuella Mmasinachi**  
GitHub: https://github.com/Scarlet-Twinz

## Project Links

- **Repository:** https://github.com/Scarlet-Twinz/TaskManager_pro
- **Author:** Anthony Emmanuella Mmasinachi
- **GitHub:** https://github.com/Scarlet-Twinz
