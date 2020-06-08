import React, { useState, useEffect, useCallback } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import { dataTestLength } from "./dataTime"
import moment from 'moment'
const ChartPage = () => {

	const [data, setData] = useState([
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 24, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// }, // 2019/5/16/17:24:30:00
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 25, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 27, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 27, 20, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 27, 15, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 28, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 31, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 33, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 37, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 40, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
		// {
		// 	city : "black",
		// 	month : new Date(2019, 4, 16, 17, 21, 30, 0),
		// 	temperature : Math.floor(Math.random() * 9),
		// },
	])

	


	// setData(oldArray => [...oldArray, newElement]);
	

	const on = useCallback(() => {
		const bb= []
		const cc = []
		for(let i =0; i < dataTestLength.length; i++){
			let regdate = moment(dataTestLength[i].month);
			let newRegDate = regdate.format('HH:mm:ss')
			// console.log(newRegDate)
			cc.push(newRegDate)
			cc.sort()
			
			// const sortdata = newRegDate.sort()
			// console.log(sortdata)
			const aa = { city : "black", month : cc[i], temperature : Math.floor(Math.random() * 9)}
			
			bb.push (aa)
			
		}
		setData([...bb])
		// 
	// 	let regdate = moment(freeBoardInfo.regdate);
    // let newRegDate = regdate.format('YYYY.MM.DD HH:mm:ss')
	}, [data])
		
	

	const cols = {
		month: {
		  range: [0, 1]
		}
	};
	useEffect(() => {
		console.log(data)
	}, [])

	return (
		<>
			<div>
				<button onClick={on}>
				asdfjkldsafjlkdsjflsadfjkl
				</button>
			</div>
			
				{/* <Chart height={400} data={data} scale={cols} forceFit>
				<Legend/>
				<Axis name="month"/>
				<Axis
				name="temperature"
				label={{
					formatter: val => `${val}°C`
				}}
				/>
				<Tooltip
				crosshairs={{
					type: "y"
				}}
				custom={true}
				containerTpl={`
				<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>
				<table>
					<thead>
					<tr>
						<th>&nbsp;</th>
						<th>名称</td>
						<th>值</td>
					</tr>
					<thead>
					<tbody
					class="g2-tooltip-list"
					>
					</tbody>
				<table>
				`}
	
				itemTpl={`
					<tr data-index={index}>'
					<td><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span></td>
					<td>{name}</td>
					<td>{value}</td>
					</tr>
				`}
	
				/>
				<Geom
				type="line"
				position="month*temperature"
				size={2}
				color={"city"}
				shape={"smooth"}
				/>
				<Geom
				type="point"
				position="month*temperature"
				size={4}
				shape={"circle"}
				color={"city"}
				style={{
					stroke: "#fff",
					lineWidth: 1
				}}
				/>
			</Chart> */}
			{data.length > 0  
			? 
			<div>
				<Chart height={400} data={data} scale={cols} forceFit>
				<Legend/>
				<Axis name="month"/>
				<Axis
				name="temperature"
				label={{
					formatter: val => `${val}°C`
				}}
				/>
				<Tooltip
				crosshairs={{
					type: "y"
				}}
				custom={true}
				containerTpl={`
				<div class="g2-tooltip"><div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>
				<table>
					<thead>
					<tr>
						<th>&nbsp;</th>
						<th>名称</td>
						<th>值</td>
					</tr>
					<thead>
					<tbody
					class="g2-tooltip-list"
					>
					</tbody>
				<table>
				`}
	
				itemTpl={`
					<tr data-index={index}>'
					<td><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span></td>
					<td>{name}</td>
					<td>{value}</td>
					</tr>
				`}
	
				/>
				<Geom
				type="line"
				position="month*temperature"
				size={2}
				color={"city"}
				shape={"smooth"}
				/>
				<Geom
				type="point"
				position="month*temperature"
				size={4}
				shape={"circle"}
				color={"city"}
				style={{
					stroke: "#fff",
					lineWidth: 1
				}}
				/>
			</Chart>

			</div>
			 : <div>2</div>
			 }
		</>
	)
}


export default ChartPage
