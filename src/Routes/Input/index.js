import React, { useState, useEffect, useCallback } from "react"
import debounce from 'lodash.debounce'
import { Link } from "react-router-dom";
import TestPage from "./TestPage"
const Input = () => {
    const [list, setList] = useState([]);
    // const [filter, setFilter] = useState("");
    // const [filter2, setFilter2] = useState("");
    const [filterLength, setfilterLength] = useState("");
    // const debounceLoadData = useCallback(debounce(fetchData, 1000), []);

    // const handleFilterChange = useCallback((v) => (event) => {
    //     const { value } = event.target;
    //     if(v == "one"){
    //         setFilter(value);
    //         debounceLoadData(value, v);
    //     }
        
    //     if(v == "two"){
    //         setFilter2(value);
    //         debounceLoadData(value, v);
    //     }
    // }, [list])

    // function fetchData(filter, v) {
    //     const ads = localStorage.getItem("session")    
    //     if(ads == null){
            
    //         var a = []
    //         a= JSON.parse(localStorage.getItem("session")) || []
    //         a.push({ value:v, data: filter })
    //         localStorage.setItem("session", JSON.stringify(a))
    //         setList(prevArray => [...prevArray, {value:v, data: filter}])
    //     } else {
    //         var a = []
    //         a= JSON.parse(localStorage.getItem("session")) || []
    //         a.push({ value:v, data: filter })
    //         localStorage.setItem("session", JSON.stringify(a))
    //         setList(prevArray => [...prevArray, {value:v, data: filter}])
    //     }
        
    // }
   
    useEffect(() => {
        let temp = []
        const listJSON = localStorage.getItem("session")
        
        if(listJSON != null){
            const list = JSON.parse(listJSON)
            
            for(let i = 0; i <list.length; i++){
                // setList(list)
                temp.push(list[i])
            }
            setList(temp)
        }
        console.log(list)
    }, [filterLength])

    useEffect(() => {
        const listJSON = localStorage.getItem("session")
        setfilterLength(listJSON)
    }, [list])

    return (
        <>
            <Link to="/Home">
                홈
            </Link>
            {list.length > 0 &&
                <TestPage list={list} setList={setList}/>
            }
            {list.length == 0 &&
                <TestPage setList={setList}/>
            }
            {/* <input type="text" value={filter} onChange={handleFilterChange("one")} />
            <input type="text" value={filter2} onChange={handleFilterChange("two")} />
            <button >
                클릭
            </button> */}
        </>
    )
}

export default Input