import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import "./index.css";
import { Link } from "react-router-dom";
const type = "DragableBodyRow";

const DragableBodyRow = ({
    index,
    moveRow,
    className,
    style,
    ...restProps
}) => {
    const ref = React.useRef();
    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: monitor => {
            const { index: dragIndex } = monitor.getItem() || {};
            if (dragIndex === index) {
                return {};
            }
            return {
                isOver: monitor.isOver(),
                dropClassName:
                dragIndex < index ? " drop-over-downward" : " drop-over-upward"
            };
        },
        drop: item => {
            moveRow(item.index, index);
        }
    });
    const [, drag] = useDrag({
        item: { type, index },

        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    drop(drag(ref));

    return (
        <tr
            ref={ref}
            className={`${className}${isOver ? dropClassName : ""}`}
            style={{ cursor: "move", ...style }}
            {...restProps}
        />
    );
};

const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
];
  

const Home = props => {
    const [data, setDatas] = useState([
        {
            key: "1", 
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park"
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park"
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park"
        }
    ]);
    
    const components = {
        body: {
          row: DragableBodyRow
        }
    };
    
    const moveRow = (dragIndex, hoverIndex) => {
        // console.log(dragIndex);
        const temp = [...data];
    
        const dragRow = data[dragIndex];
        
        temp.splice(dragIndex, 1);
        temp.splice(hoverIndex, 0, dragRow)
        
        setDatas(temp)
        
    };
    
    return (
        <div>
            <Link to="/Input">
                인풋
            </Link>
        <DndProvider backend={HTML5Backend}>
            <Table
                columns={columns}
                dataSource={data}
                components={components}
                onRow={(record, index) => ({
                    index,
                    moveRow: moveRow
                })}
            />
        </DndProvider>
        
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        </div>
    );
};

export default Home