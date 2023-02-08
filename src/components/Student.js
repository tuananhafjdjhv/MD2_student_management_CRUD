import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useContext, createContext } from 'react';

export default function Student(props) {
    let {student,stt} = props;
    //truyền lên ListStudentComponent
    const handleUpdate = (stUpdate) => {
        props.updateProps(stUpdate,true,'UPDATE')
       
    };
    const handleDelete = (id) => {
        props.deleteProps(id)
    };
    return (
        <tr key={stt}>
            <td>{stt}</td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.sex ? "Nam" : "Nữ"}</td>

            <td>
                <div className="template-demo">
                    <button type="button" className="btn btn-danger btn-icon-text">
                        Xem
                    </button>
                    <button type="button" className="btn btn-warning btn-icon-text"
                    onClick={()=>handleUpdate(student)}>
                        Sửa
                    </button>
                    <button type="button" className="btn btn-success btn-icon-text"
                    onClick={()=>handleDelete(student.studentId)}
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>


    )
}
