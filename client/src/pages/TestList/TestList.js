import React from 'react'




import "./TestList.css"
import { useState } from 'react';
import TestTable from "../../components/TestList/TestTable"
import SearchBar from '../../components/TestList/SearchBar';
function TestList() {

  

    //serachBar

    const [test, setTest] = useState([]);   // pass the data getfrom API
    const [filterText, setFilterText] = useState("");
    

    
   
    //handle user input
    const handleFilterText = (e) => {
       
    }
    // take all Test
   
    //filter test by button
   
   
    

  


  
  
    return (
        <>
            <section>
                <div className="container">
                    <SearchBar   setTest={setTest} tests={test}  
                        filterText={filterText} onTextChange={handleFilterText}></SearchBar>
                    <div className="user" id="card">
                        <i class="fa fa-user icon-large"  ></i>
                        <p>Dang Quoc Tu</p>
                        <hr></hr>
                        <button id="button"><i class="fa fa-bar-chart" aria-hidden="true"></i>Xem thong ke ket qua</button>
                    </div>
                </div>
                <div className="search-result">
                    <div className="blog-card">
                        <div className="blog-wrap">
                            <TestTable tests={test}></TestTable>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestList



/*      
    // asisgn listTest
    useEffect(() => {
        dispatch(listTests());
        setTest(tests);
       
    },[]);
    
     

    // TableList
    
   

    

    // handleTest button click
    

    //get year distince from testLIST   */