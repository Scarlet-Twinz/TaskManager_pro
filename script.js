function addCourseRow() {
    const container = document.getElementById('course-container');
    const div = document.createElement('div');
    div.className = 'course-row';
    div.innerHTML = `
        <input type="text" class="course-code" placeholder="Course">
        <input type="number" class="units" placeholder="Units">
        <select class="grade">
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="2">D</option>
            <option value="1">E</option>
            <option value="0">F</option>
        </select>
    `;
    container.appendChild(div);
}

function calculateGPA() {
    const units = document.querySelectorAll('.units');
    const grades = document.querySelectorAll('.grade');
    let totalQP = 0;
    let totalUnits = 0;

    for (let i = 0; i < units.length; i++) {
        let u = parseFloat(units[i].value);
        let g = parseFloat(grades[i].value);
        if (!isNaN(u)) {
            totalQP += (u * g);
            totalUnits += u;
        }
    }
    const gpa = totalUnits > 0 ? (totalQP / totalUnits) : 0;
    document.getElementById('final-gpa').innerText = gpa.toFixed(2);
}