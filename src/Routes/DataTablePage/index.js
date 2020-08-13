import React,{useCallback, useMemo} from "react"
import DataTable from 'react-data-table-component';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DataTablePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    // const [deleted, setDeleted] = useState([]);

    const removeItem = (array, item) => {
        const newArray = array.slice();
        newArray.splice(newArray.findIndex(a => a === item), 1);
      
        return newArray;
    };
    const fetchUsers = async (page, size = perPage) => {
        setLoading(true);
        const pageData = page * size
        const weteenData = pageData - size
        // page * size (ex) 1 * 10 , 1 * 20)
        // 
        const response = await axios.get(`http://localhost:9008/api/dataInfo/?page=`+ pageData+ '&size='+weteenData)
        setData(response.data[0])
        setTotalRows(response.data[1][0].count)
        setLoading(false)
    };

    useEffect(() => {
        fetchUsers(1);
    }, []);

    const columns = useMemo(
        () => [
        {
            name: "First Name",
            selector: "seq",
            sortable: true
        },
        {
            name: "Last Name",
            selector: "name",
            sortable: true
        },
        {
            name: "Email",
            selector: "title",
            sortable: true
        },
        {
            // eslint-disable-next-line react/button-has-type
            cell: row => <button onClick={handleDelete(row)}>Delete</button>
        }
        ],
        []
    );

    const handlePageChange = page => {
        fetchUsers(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        fetchUsers(page, newPerPage);
        setPerPage(newPerPage);
    };


    return(
        <>
            <DataTable
                title="Users"
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                paginationDefaultPage={currentPage}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                selectableRows // 체크 박스
                onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
            />
        </>
    )
}

export default DataTablePage
