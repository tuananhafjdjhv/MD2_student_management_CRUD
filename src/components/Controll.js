import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext, createContext } from 'react';

export default function Controll(props) {
    // Ẩn hiện form
const showForm=()=>{
   props.handleToggle(true,'ADD');
};
// Search 
const [search,setSearch]=useState('');
 const handleChange = (e)=>{
    setSearch(e);
 };
 const handleSearch = ()=>{
    props.handleSearchProps(search)

 };
 // Sắp xếp dữ liệu
 const handleSort = (e)=>{
    let sortData =e.target.value;
    let arrSort = sortData.split('-');
    let sortDir = arrSort[0]
    let sortBy = arrSort[1];
    props.handleSort(sortDir , sortBy);
 }
 
  return (
    <div>
      <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button type="button"
                    className="btn btn-primary
                    btn-icon-text"
                    onClick={showForm}
                    >
                    NEW ADD
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                      onChange={(e)=>handleChange(e.target.value)}
                      

                    />
                    <button className="btn btn-primary btn-icon-text"
                    onClick={handleSearch}
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control" onChange={handleSort}>
                            <option value="">Chọn sắp xếp</option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                  </select>
                </div>
              </div>
            </div>
    </div>
  )
}
