import React, { useState, useEffect } from "react"

const Change =() => {

    const [ testList, srtTestList ] = useState([ "test1", "test2", "test3", "test4", "test5"])

    const [ list, setList ] = useState({
        test1: "", test2: "", test3: "", test4: "", test5: "", 
    })

const test1 = (v) => (e) => {
    const aa = e.target.value

    // for(let i = 0; i < testList.length; i++){
    //     if(testList[i] == v){
    //         setList((prevState) => ({
    //             ...prevState,
    //             `${testList[i]}`: aa
    //         }));
    //     }
    // }


        if(v == "test1"){
            setList((prevState) => ({
                ...prevState,
                test1: aa
            }));
        }
        if(v == "test2"){
            setList((prevState) => ({
                ...prevState,
                test2: aa
            }));
        }
        if(v == "test3"){
            setList((prevState) => ({
                ...prevState,
                test3: aa
            }));
        }
        if(v == "test4"){
            setList((prevState) => ({
                ...prevState,
                test4: aa
            }));
        }
        if(v == "test5"){
            setList((prevState) => ({
                ...prevState,
                test5: aa
            }));
        }
    }

    const clickData = () => {
        console.log(list)
    }
    return(
        <>

            {testList.map((v, i) => 
                    <div key={v}>
                        <div >{v}</div>
                        <input type="text" onChange={test1(v)}/>
                        <div> {v}</div>
                    </div>
                
            )}        
            <button onClick={clickData}>
                클릭
            </button>
        </>
    )
}

export default Change


