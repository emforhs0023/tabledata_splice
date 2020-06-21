import React, { useState, useEffect, useCallback } from "react"
import debounce from 'lodash.debounce'


const TestPage = ({ list, setList }) => {
    
    const [filter, setFilter] = useState("");
    const [filter2, setFilter2] = useState("");
    
    const [filter3, setFilter3] = useState("");
    const [filter4, setFilter4] = useState("");

    const debounceLoadData = useCallback(debounce(fetchData, 1000), [list]);

    const handleFilterChange = useCallback((v) => (event) => {
        const { value } = event.target;
        if(v == "one"){
            setFilter(value);
            debounceLoadData(value, v);
        }
        
        if(v == "two"){
            setFilter2(value);
            debounceLoadData(value, v);
        }
    }, [list])
    
    function  fetchData(filter, v) {
        const ads = localStorage.getItem("session")    
        
        if(ads == null){
            var a = []
            a= JSON.parse(localStorage.getItem("session")) || []
            a.push({ value:v, data: filter })
            localStorage.setItem("session", JSON.stringify(a))
            setList(prevArray => [...prevArray, {value:v, data: filter}])
        } else {
            const idx = list.findIndex((av)=> av.value === v)    
            // console.log(idx)
            if(idx == -1){
                var a = []
                a= JSON.parse(localStorage.getItem("session")) || []
                a.push({ value:v, data: filter })
                localStorage.setItem("session", JSON.stringify(a))
                setList(prevArray => [...prevArray, {value:v, data: filter}])
            } else {
                const listJSON = localStorage.getItem("session")
                var json = JSON.parse(listJSON)
                for(let i=0; i<json.length; i++){
                    console.log(v)
                    if(json[i].value == v) {
                        json.splice(i,1)
                    }
                }
                localStorage.setItem("session",JSON.stringify(json))

                var a = []
                a= JSON.parse(localStorage.getItem("session")) || []
                a.push({ value:v, data: filter })
                localStorage.setItem("session", JSON.stringify(a))

                const post = list[idx].value; 
                const Likers = list.filter(vs => vs.value !== post);
                const mainPosts = [...list];
                mainPosts[idx] = { value:v, data: filter }
                setList(mainPosts)
                

                
                // console.log(mainPosts)
                // console.log("text ==>", mainPosts)
                
                // setList([idx] = { ...post, Likers })
                
                // mainPosts[postIndex] = { ...post, Likers };
            }
            
        }
        
    }
   
    useEffect(() => {
        if(list != undefined){
            const one = list.findIndex(v => v.value === "one")
            const two = list.findIndex(v => v.value === "two")
            if(one != -1){
                setFilter(list[one].data)
            } 
            if(two != -1){
                setFilter2(list[two].data)
            }
        }
        
    }, [])
        
    // }, [filterLength])

    // useEffect(() => {
    //     const listJSON = localStorage.getItem("session")
    //     setfilterLength(listJSON)
    // }, [list])

    return (
        <>

            <input type="text" value={filter} onChange={handleFilterChange("one")} />
            <input type="text" value={filter2} onChange={handleFilterChange("two")} />
        </>
    )
}

export default TestPage