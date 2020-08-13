import React from "react"
import { Table } from 'antd';

const antdTableRowClick = () => {

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
        render: num => <a>num</a>,
        },
      ];
      
      const data = [
        {
          key: 1,
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
          key: 2,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
          key: 3,
          name: 'Not Expandable',
          age: 29,
          address: 'Jiangsu No. 1 Lake Park',
          description: 'This not expandable',
        },
        {
          key: 4,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
      ];
      const rowData = (record, index) => {
        console.log("record ==>", record)
        console.log("index ==>", index)
        
    };
    return(
        <>
             <Table
                columns={columns}
                onRow={(record, index) => ({
                    onClick: () => { rowData(record, index); }
                })}
                dataSource={data}
            />,
        </>
    )
}

export default antdTableRowClick