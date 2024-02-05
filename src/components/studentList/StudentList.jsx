import React from 'react'
const studentList = [

    {
        id: 1,
        name: "Mg Mg",
        grade: "A",
    },
    {
        id: 2,
        name: "Aye Mg",
        grade: "B",
    },
    {
        id: 3,
        name: "Chan Mg",
        grade: "C",
    },

];

export const StudentList = () => {
    return (
        <div><h2>StudentLists</h2>
            <div className="students">
                {
                    studentList.map((student) =>
                    (
                        <div key={student.id}>
                            <h2>Student Name: {student.name}</h2>
                            <h3>Grade: {student.grade}</h3>

                        </div>

                    ))
                }
            </div>

        </div>
    )
}
