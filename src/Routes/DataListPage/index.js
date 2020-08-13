import React, { useState }  from "react"
import TestPage from "./TestPage"

const DataListPage = () => {
    const [ data, setData ] = useState("")

    return(
        <>
            <TestPage setData={setData} />
        </>
    )
}

export default DataListPage