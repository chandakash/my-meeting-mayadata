import React, { useEffect, useState } from 'react';
import deleteimg from '../assets/delete.png';

const Home = () => {

    /*initial values of each table cell*/
    const initialFieldValues = {
        name:'',
        people:'',
        date:'',
        stime:'',
        etime:'',
    }

    const handleChange = (e) =>{
        var {name,value} = e.target
        setValues({...values,[name]:value})
    }
    const resetFormData = (e) =>{
        document.getElementById("name").value="";
        document.getElementById("people").value="";
        document.getElementById("date").value="";
        document.getElementById("stime").value="";
        document.getElementById("etime").value="";
    }
    const handleSearch = (e) =>{
        setSearch(e.target.value);
    }
    const handleFormSubmit = e =>{
        console.log(data);
        setData([...data,values]);
        resetFormData();
    }
    const handleDeleteRow = item => () => {
        if(window.confirm('Delete the item?')){      
            let items = data.filter(row => row.name != item.name);
            setData(items);
        };
      };

    /*hooks*/
    const [values,setValues] = useState(initialFieldValues)
    const [data, setData] = useState([])
    const [search,setSearch] = useState("")

    const items = data.filter((row)=>{
        if(search == null)
            return row
        else if(row.name.toLowerCase().includes(search.toLowerCase()))
        {
            return row
        }
      }).map((row,index)=>{
          return(
              <tr className="table-row">
                  <td style={{paddingLeft:'25px'}}>{index+1}</td>
                  <td style={{paddingLeft:'25px'}}>{row.name}</td>
                  <td style={{paddingLeft:'25px'}}>{row.people}</td>
                  <td style={{paddingLeft:'25px'}}>{row.date}</td>
                  <td style={{paddingLeft:'25px'}}>{row.stime}</td>
                  <td style={{paddingLeft:'25px'}}>{row.etime}</td>
                  <td style={{paddingLeft:'40px'}}>
                      <button className="delete-btn" onClick={handleDeleteRow(row)}>
                          <img src={deleteimg} alt="delete" width="11px" height="14px"/>
                      </button>
                  </td>
              </tr>
          )
      })
    return (
        <div className="container">
            <h1 className="title">My Meetings</h1>
            <div className="content search-box">
                <input type="text" id="searchInput"  placeholder="Search" className="search searchname" onChange={handleSearch}/>        
                <span style={{paddingLeft:'80px'}}>From: <input type="text" id="fromDateInput" onkeyup="fromDateFunc()" placeholder="dd/ mm/ yyyy" className="search searchfromdate"/></span>
                <span style={{paddingLeft:'80px'}}>To: <input type="text" id="toDateInput" onkeyup="toDateFunc()" placeholder="dd/ mm/ yyyy" className="search searchtodate"/></span>
            </div>
            <br/><br/>
            <div className="meeting-table">
                <table className="list" id="tablelist">
                    <thead>
                        <tr>
                            <th>SI.no</th>
                            <th>Meeting Name</th>
                            <th>Number Of People Attending</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    <tfoot>
                        {/* <form>  */}
                            <tr>
                                <td></td>
                                <td><input type="text" values={values.name} onChange={handleChange} id ="name" name="name" className=" inputform name-input"/></td>
                                <td><input type="text" values={values.people} onChange={handleChange} id="people" name="people" className=" inputform people-input"/></td>
                                <td><input type="text" values={values.date} onChange={handleChange} id="date" name="date" placeholder="dd/mm/yyyy" className=" inputform date-input"/></td>
                                <td><input type="text" values={values.sdate} onChange={handleChange} id="stime" name="stime" className=" inputform stime-input"/></td>
                                <td><input type="text" values={values.edate} onChange={handleChange} id="etime" name="etime" className=" inputform etime-input"/></td>
                                <td><input type="Submit" value=" Add " className="submit-form" onClick={handleFormSubmit}></input></td>
                            </tr>
                        {/* </form> */}
                    </tfoot>
                    
                    
                    
                </table>
            </div>
        </div>
    )
}

export default Home
