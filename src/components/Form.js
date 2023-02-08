import React from 'react';
import { useState, useEffect } from 'react';



export default function Form(props) {
    const [studentNew, setStudentNew] = useState({
        studentId: "",
        studentName: "",
        age: "",
        sex: "",
        birthDate: "",
        birthPlace: "",
        address: ""

    });
   

    
    useEffect(() => {
       let {selectedStudent}= props
       if (selectedStudent!==""){
        setStudentNew(selectedStudent)
       }

    }, [props.selectedStudent]);

    const sendData = (e) => {
        e.preventDefault();
       props.updateStudentProps(studentNew)
    };

  


    const handleAdd = (e) => {

        e.preventDefault();
        
        props.handleAddData(studentNew)

    };
    // Đổi button Submit
    let { action } = props;
    let elementBtnSubmit = "";
    if (action == "ADD") {
        console.log("co vao if ben form k")
        elementBtnSubmit = <button type="submit" className="btn btn-primary me-2"
            onClick={handleAdd}
        >
            Create
        </button>

    } else if (action == "UPDATE") {
        elementBtnSubmit = <button type="submit" className="btn btn-primary me-2"
            onClick={sendData}
        >
            Update
        </button>
    }
    
    return (

        <div className="col-5 grid-margin" >
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text"
                                    className="form-control"
                                    readOnly={action == "UPDATE"?true:false}
                                    name='newList' value={studentNew.studentId}
                                    onChange={(e) =>  setStudentNew({...studentNew,studentId:e.target.value}) }
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text"
                                    className="form-control"
                                    name="studentName" value={studentNew.studentName}
                                    onChange={(e) => setStudentNew({...studentNew,studentName:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text"
                                    className="form-control"
                                    name="age" value={studentNew.age}
                                    onChange={(e) => setStudentNew({...studentNew,age:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    name='sex'
                                    value={studentNew.sex}
                                    onChange={(e) => setStudentNew({...studentNew,sex:e.target.value})}
                                >
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                    placeholder="dd/mm/yyyy" name='birthDate'
                                    value={studentNew.birthDate} onChange={(e) => setStudentNew({...studentNew,birthDate:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    name='birthPlace' value={studentNew.birthPlace}
                                    onChange={(e) => setStudentNew({...studentNew,birthPlace:e.target.value})}
                                >
                                    <option value={'HN'}>Hà Nội</option>
                                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                    <option value={'ĐN'}>Đà Nẵng</option>
                                    <option value={'QN'}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" >Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control"
                                    name='address'
                                    value={studentNew.address}
                                    onChange={(e) => setStudentNew({...studentNew,address:e.target.value})}
                                />
                            </div>
                        </div>
                        {elementBtnSubmit}
                    </form>
                </div>
            </div>
        </div>

    )
}
