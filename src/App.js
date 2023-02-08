import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form';
import ListStudent from './components/ListStudent';
import Controll from './components/Controll';

function App() {

  const [listStudent, setListStudent] = useState(
    [
      { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2003-04-15", birthPlace: "HN", address: "Số 1 Phạm Hùng" },
      {  studentId: "SV002", studentName: "Nguyễn Thị B", age: 22, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "Số 1 Trần Duy Hưng" },
      {  studentId: "SV003", studentName: "Nguyễn Văn C", age: 18, sex: true, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" },
      {  studentId: "SV004", studentName: "Nguyễn Thị D", age: 29, sex: false, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" },
      {  studentId: "SV005", studentName: "Nguyễn Văn E", age: 17, sex: true, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" }
    ]
  );
  const [toggle, setToggle] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");


  // Nhận dữ liệu student
  const handleUpdateStudent = (selectedStudent, togle, acctionName) => {
    setSelectedStudent(selectedStudent)
    setToggle(togle)
    setAcctionName(acctionName)

  };
  const updateData = (updateStd) => {

    let arrUpdate = []
    for (let i = 0; i < listStudent.length; i++) {
      if (updateStd.studentId === listStudent[i].studentId) {
        arrUpdate.push(updateStd);
      } else {
        arrUpdate.push(listStudent[i]);
      }
    } 
    setToggle(false)
    setListStudent(arrUpdate)
  }

  const handleDeleteStudent = (id)=>{
    // let arrDelete = []
    // for (let i = 0; i < listStudent.length; i++) {
    //   if (id !== listStudent[i].studentId)  
    //     arrDelete.push(listStudent[i]);
    //   }
    // } 
    let arrDeleteFilter= listStudent.filter((stu)=>stu.studentId!==id)
    setListStudent(arrDeleteFilter)
  }
  // Thêm
  const handleAddData = (data) => {
    setListStudent([...listStudent,data])
    setToggle(false)
  };
  const [acctionName, setAcctionName] = useState('');
  const handleToggle = (toggle, acctionName) => {
    setToggle(toggle);
    setAcctionName(acctionName);
  }



  //Ẩn hiện FOrm
  let elementForm = '';
  if (toggle) {
    elementForm = <Form
      action={acctionName}
      selectedStudent={selectedStudent}
      handleAddData={handleAddData}
      updateStudentProps={updateData}
    />
  }


  // Tìm kiếm
  const handleSearch = (searchData) => {

    let students = [];
    if (searchData == '') {
      students = [...listStudent];
    } else {
      //Có dữ liệu search

      listStudent.forEach(st => {
        if (st.studentName.toLowerCase().includes(searchData.toLowerCase())) {
          students.push(st);
        }
      })
    }
    setListStudent(students)
  };



  // Sắp sếp dữ liệu
  const [sortDir, setSortDir] = useState('');
  const [sortBy, setSortBy] = useState('');
  const handleSort = (sortDir, sortBy) => {
    setSortDir(sortDir);
    setSortBy(sortBy);
  }
  if (sortDir != '') {
    if (sortDir == "studentName") {
      //Sắp xếp theo tên sinh viên
      if (sortBy == "ASC") {

        // Sắp xếp theo tên sinh viên tăng dần
        listStudent.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
      } else {
        //Sắp xếp theo tên sinh viên giảm dần
        listStudent.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
      }
    } else {
      // Sắp xếp theo tuổi sinh viên
      if (sortBy == "ASC") {
        // Sắp xếp theo tuổi sinh viên tăng dần
        listStudent.sort((a, b) => a.age - b.age);
      } else {
        //Sắp xếp theo tuổi sinh viên giảm dần
        listStudent.sort((a, b) => b.age - a.age);
      }
    }
  }


  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Controll handleToggle={handleToggle}
              handleSort={handleSort}
              handleSearchProps={handleSearch} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              listStudent={listStudent}
              updateProp={handleUpdateStudent}
              deleteProps={handleDeleteStudent}
            />
            {/* END LIST STUDENT */}
          </div>



        </div>

        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}

      </div>

    </div>
  );
}

export default App;
