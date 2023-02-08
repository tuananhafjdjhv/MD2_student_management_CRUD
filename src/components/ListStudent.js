import React from 'react';
import Student from './Student';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useContext, createContext } from 'react';

export default function ListStudent(props) {
   
    
    let { listStudent } = props;
 
    

    const handleDelete = (stt) =>{
        props.deleteProps(stt);
        
    }
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>

                        {listStudent.map((st,index)=>{
                            return <Student key={st.studentId} student = {st} stt={index+1} 
                            updateProps={props.updateProp}
                            deleteProps={handleDelete}
                            />  
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
