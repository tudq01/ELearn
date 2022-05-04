import React from 'react'
import "./SearchBar.css"
import { useEffect, useState } from 'react';
import { listTests, listIELTSTests } from '../../actions/testAction';
import { useDispatch, useSelector } from 'react-redux';


function SearchBar(props) {
    const [testYear, setTestYear] = useState([]);
    const dispatch = useDispatch();
    const testList = useSelector(state => state.testList);
    const { tests, loadding, error } = testList;  // testsHave testList

    // filter test by name get only distinct for buttone
    const getToeicTest = () => {
        dispatch(listTests());
        console.log(tests);
    }

    const getIeltsTest = () => {
        dispatch(listIELTSTests());
        console.log(tests);
    }

    useEffect(() => {
        props.setTest(tests);

        let t = tests.filter((value, index, self) => self.findIndex((m) => m.tag === value.tag) === index)
        let result=t.map(a=>a.tag)
        setTestYear(result)
    }, [tests]);


    const handleTestName = (e) => {
        props.setTest(() => {
            return tests.filter(z => {
                return z.tag === e.target.value;
            })
        });
       
    }

    const handleGetAll = () => {
        setTestYear([])
    }


  

    return (
        <div className="search">
            <h1>Thu vien de thi</h1>
            <div className="btn-group">
                <button onClick={handleGetAll} >Tat ca</button>
                <button onClick={getToeicTest}>TOEIC</button>
                <button onClick={getIeltsTest}>IELTS</button>

            </div>
            <div className="btn-group">
                {testYear && testYear.map(dis => (
                    <button onClick={handleTestName} key={dis} value={dis}>{dis} </button>
                ))}
            </div>
            <div class="input-group rounded" id="search-bar">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
    )
}

export default SearchBar
