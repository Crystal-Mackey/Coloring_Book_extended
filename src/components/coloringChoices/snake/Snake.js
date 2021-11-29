import React from "react";

export default class Snake extends React.Component {
	render() {
		return (
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 543.8 774"
				width="auto"
				height="70vh"
			>
				<g>
					<path
						id="svg_0"
						onClick={() => this.props.onFillColor(44)}
						fill={this.props.fillColors[44]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M515.9,608.2c-10.1-15.5-22.5-29.1-35.9-42c-28.4-27.6-61.7-46.8-100.2-56.6c-2.6-0.7-3.1-1.7-2.6-4.4
		c2.6-14.4,10.1-26.2,20.8-36.1c5.2-5,11.4-9.2,17.3-13.6c2-1.5,4.4-2.8,6.1-4.6c4.2-3.9,4.2-9.2-0.7-12.5c-2.4-1.7-5.5-3.1-8.5-3.7
		c-7.9-2-15.7-1.1-23.6,0.7c-25.2,5.5-45.7,18.4-63,36.7c-8.3,8.7-15.3,18.2-19.2,29.5c-0.7,2-1.7,2.6-3.7,2.8
		c-13.3,1.5-26.5,3.1-39.8,4.6c-5,0.4-9.8,1.3-15.1,2.2c0.2-1.1,0.4-2,0.7-2.8c5.2-17.1,10.7-34.1,15.7-51.4
		c7.7-26.2,13.8-52.7,17.7-79.8c3.1-21.4,4.4-43.3,5.5-65c0.7-16.4,1.5-32.6,2-49c0.7-18.8,3.5-37.4,7-55.8
		c2.4-12,6.8-22.5,16.8-30.2c8.7-6.8,16.2-14.9,22.3-24.1c10.7-16,13.6-33,6.6-51c-4.2-10.3-9-20.3-14-30.2
		c-12.9-26-33.7-42.9-61.2-51.2c-16.4-5-32.8-8.5-50.1-9.2c-23.4-0.9-46.8-0.9-70,3.9c-21.7,4.6-41.8,12.7-58.8,26.9
		c-15.3,12.9-26.5,29.1-35,47c-3.1,6.3-5.5,13.1-6.6,20.1c-1.3,9.2-2,18.6,2.6,26.9c4.8,9,10.3,17.7,16.2,25.8
		c4.6,6.3,10.7,11.6,15.5,17.7c9.6,12.5,16.6,26.5,22.7,40.7c9.8,23,12.5,47.5,13.1,72.2c0.4,17.7,0.4,35.6-1.5,53.4
		c-1.5,12.7-3.5,25.4-7.7,37.6c-8.3,23.4-18.8,45.9-31.9,67.1c-19,30.8-33.9,63.4-47.5,96.7c-8.7,21.4-13.6,43.5-12.2,66.3
		c0.2,6.3,0.7,12.7,1.1,19c0.4,5,0.9,10.1,2,14.9c1.7,7.2,5.7,13.6,10.3,19.5c15.3,19.5,32.1,37.4,50.5,54
		c26,23.6,56.9,36.3,91.4,40.5c18.8,2.2,37.8,2.8,56.6,3.1c31.5,0.2,62.8-0.7,94.3-3.1c20.6-1.5,40.9-3.3,61.2-4.8
		c18.6-1.3,37.2-2.4,55.8-3.7c9.6-0.7,19.2-0.9,28.4-3.9c19.9-6.6,36.3-18.4,49.6-34.6c6.6-8.1,11.6-17.3,13.3-27.8
		c1.3-7.7,2-15.3,2-23C532.5,644.1,526.8,625.3,515.9,608.2z"
					/>
					<path
						id="svg_1"
						onClick={() => this.props.onFillColor(45)}
						fill={this.props.fillColors[45]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M413.3,446.6c-22.3,14.7-40.9,31.9-44.8,60.1
		c-6.3-0.9-12.5-1.7-18.6-2.6C355.2,482.7,392.8,449.4,413.3,446.6z"
					/>
					<path
						id="svg_2"
						onClick={() => this.props.onFillColor(46)}
						fill={this.props.fillColors[46]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M377.2,446.8c6.6-1.5,13.1-3.1,19.5-4.8
		c0.2,0.2,0.2,0.4,0.2,0.7c-4.6,3.1-9,5.9-13.6,8.7c-0.2,0.2-1.1,0.2-1.5,0c-1.5-1.1-3.1-2.4-4.6-3.7
		C377.2,447.2,377.2,447,377.2,446.8z "
					/>
					<path
						id="svg_3"
						onClick={() => this.props.onFillColor(47)}
						fill={this.props.fillColors[47]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M346.6,464.1c7.2-4.6,14.7-9,22.1-13.6c1.7-0.9,3.1-0.7,4.4,0.4c1.7,1.5,3.3,2.6,5,3.9
		c-5,4.8-9.8,9.2-14.7,13.6c-0.2,0.4-1.1,0.4-1.7,0.4c-5.2-0.9-10.5-2-15.5-2.8c-0.2,0-0.4-0.2-1.1-0.4
		C345.8,465,346,464.5,346.6,464.1z "
					/>
					<path
						id="svg_4"
						onClick={() => this.props.onFillColor(48)}
						fill={this.props.fillColors[48]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M337.7,471.3c0.7-0.4,1.3-0.7,2-0.7c6.3,0.7,12.5,1.3,19.2,2.2c-0.9,1.3-1.3,2-1.7,2.4
		c-5,5.7-9.2,11.6-12.5,18.4c-0.2,0.7-1.5,1.3-2.2,1.3c-7-1.1-14.2-2.4-21.4-3.7C325.9,484,331.5,477.4,337.7,471.3z "
					/>
					<path
						id="svg_5"
						onClick={() => this.props.onFillColor(49)}
						fill={this.props.fillColors[49]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M321.3,497.3
		c7-0.2,13.8,1.1,20.6,2.8c-0.2,2.6-1.1,3.5-3.7,3.5c-7.7-0.2-15.3,0-23,0C315.4,499.3,317.1,497.3,321.3,497.3z "
					/>
					<path
						id="svg_6"
						onClick={() => this.props.onFillColor(50)}
						fill={this.props.fillColors[50]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M248.4,519.6
		c18.4-2.2,37-5,55.5-7c26-2.6,52.1-1.1,77.4,5.9c32.8,9.2,61.7,25.2,86.6,48.1c12.7,11.8,24.7,24.1,35.2,37.8
		c3.9,5.2,4.4,10.3,3.1,16.2c-1.3,5.5-3.9,10.1-7.9,14c-7.7,7.7-16.8,13.1-26.9,16.8c-26.9,10.1-53.8,18.8-82.2,23
		c-18.2,2.6-36.3,2.8-54.5,1.3c-23.4-2-45.7-7.9-67.4-16.6c-27.1-10.9-42.9-31.3-48.1-60.4c-3.9-21.2,0.9-40.9,8.7-60.4
		c2-5,4.4-9.8,6.6-14.7c0.4-0.7,0.9-1.3,1.3-2.2c-1.5,7.9-3.1,15.3-4.6,23c-3.3,19-0.4,37.4,8.5,54.7c4.4,8.3,11.6,14.2,18.8,20.3
		c1.7-3.5-1.3-5.5-2-7.9c6.6,0.9,13.1,2.2,19.7,2.8c21,2,42.2,3.7,63-0.9c14-3.1,26.9-8.7,39.1-16.2c0.2-0.2,0.7-0.4,0.7-1.1
		c-0.9,0.2-1.7,0.7-2.6,0.9c-14,4.8-28.4,8.7-43.1,10.3c-10.5,1.1-21.4,0.9-32.1,0.4c-14-0.4-27.8-1.3-41.6-4.6
		c-2.6-0.7-5.5-1.1-8.3-2c-0.7-0.2-1.3-1.1-1.7-1.7c-9.4-17.1-13.3-35.2-9.8-54.7c1.3-7.2,3.1-14.4,4.4-21.7
		C244.7,520.9,246,519.8,248.4,519.6z"
					/>
					<path
						id="svg_7"
						onClick={() => this.props.onFillColor(51)}
						fill={this.props.fillColors[51]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M111.1,218.3c-6.6-14.9-13.8-29.5-23.8-42.6c-4.8-6.3-11.2-11.6-15.7-17.9
		c-5.7-7.4-10.7-15.5-15.1-23.8c-4.6-9-3.7-19-0.7-28.2c6.6-19.9,17.5-37,32.6-51.6c17.3-16.8,38.5-25.2,61.5-30
		c17.1-3.7,34.3-4.2,51.8-3.9c7.2,0,14.4-0.2,21.7,0.7c23,2.6,45.3,7.7,65.4,19.5c9.6,5.7,17.5,13.3,23.6,22.5
		c9.2,13.3,16.4,27.8,22.1,43.1c5.5,14.7,3.5,28.4-4.8,41.3c-4.6,7.2-10.3,13.8-16.6,19.5c-3.3,3.1-6.6,6.3-10.3,9.2
		c-3.9,2.8-6.3,6.8-8.3,10.9c-4.4,9-5.9,18.8-7.9,28.4c-3.7,19.2-5,38.9-5.9,58.6c0,0.9,0,1.7-0.2,2.6c0,0.2-0.2,0.4-0.4,0.7
		c-2.4-13.3-4.4-26.9-8.1-39.8c-3.3-14.4-7.7-28.6-11.4-42.9c-1.1-4.4-1.1-4.4,2.8-6.8c1.7-1.1,3.7-2.2,5.5-3.5
		c0.4-0.2,0.7-0.7,1.1-0.9c-1.1-2-2.6-1.1-3.9-0.7c-10.1,2.8-19.9,6.1-30.2,8.3c-19,4.2-38.5,4.4-58,3.9
		c-13.8-0.4-27.1-3.1-40.5-6.8c-0.2-0.2-0.7-0.2-1.1-0.2c0,0.2-0.2,0.4-0.2,0.7c4.2,2.2,8.3,4.6,12.5,6.6c2.4,1.1,3.1,2.4,2.2,4.8
		c-3.9,11.6-8.3,23-11.6,34.6c-4.8,17.1-9,34.3-13.6,51.4c-0.2,0.9-0.4,1.7-1.1,2.6c0-1.3-0.2-2.4-0.2-3.5
		C123.1,262.2,120.3,239.5,111.1,218.3z "
					/>
					<path
						id="svg_8"
						onClick={() => this.props.onFillColor(52)}
						fill={this.props.fillColors[52]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M204.9,251.3c21.2-1.1,42.6-2.2,63.2-10.3c0.9,4.6,1.7,9.2,2.6,13.8c2,10.9,3.9,21.9,5.5,33
		c0.7,5,0.9,10.1,0.9,15.1c0,0.7-1.1,2.2-2,2.4c-9.6,3.1-19,6.6-28.9,8.7c-21,4.8-42.4,5.9-63.9,4.8c-15.7-0.7-31.5-2.4-47.2-3.7
		c-2.6-0.2-5.2-0.9-7.7-1.5c-0.7-0.2-1.7-1.5-1.5-2.2c3.9-22.1,8.3-43.7,14.9-65.2c0.2-0.4,0.4-0.7,0.7-1.3
		C162.5,250.2,183.7,251.9,204.9,251.3z "
					/>
					<path
						id="svg_9"
						onClick={() => this.props.onFillColor(53)}
						fill={this.props.fillColors[53]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M143,239.9c4.6-13.8,9.2-27.6,14-41.6c4.4,0.9,8.7,2,13.3,2.6c16,2.6,31.9,2.6,48.1,1.1
		c12.5-1.3,24.5-3.7,35.9-9.6c0.2-0.2,0.4-0.2,0.9-0.2c3.9,13.6,7.4,27.1,11.6,41.1c0.4,1.7-0.4,2.6-2,3.3
		c-6.6,3.1-13.6,4.6-20.6,5.7c-19.9,3.1-40,4.4-60.1,3.7c-13.6-0.7-26.9-2.4-40-5.5C143.9,240.4,143.7,240.4,143,239.9z"
					/>

					<path
						id="svg_10"
						onClick={() => this.props.onFillColor(54)}
						fill={this.props.fillColors[54]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M124.7,318.9c7.4,1.1,14.7,2.4,21.9,3.1c20.8,2.2,41.6,2.8,62.3,2c17.5-0.9,34.8-3.3,51.8-8.1c4.8-1.5,9.4-3.3,14.2-4.8
		c0.7-0.2,1.1-0.2,1.7-0.4c2,10.7,1.7,21.2,0.7,31.7c-1.5,15.5-3.5,31.1-5,46.6c-0.2,2.6-1.1,4.2-3.9,4.6c-11.4,2-22.5,4.6-33.9,5.5
		c-16.2,1.3-32.6,1.7-48.8,1.7c-16.4,0-32.1-3.5-47.9-8.1c-7-2-13.8-4.4-20.6-6.6c-0.4-0.2-0.9-0.4-1.5-0.9
		C122.7,363.3,124.2,341,124.7,318.9z 
"
					/>
					<path
						id="svg_11"
						onClick={() => this.props.onFillColor(55)}
						fill={this.props.fillColors[55]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M113.7,390.8c10.7,2.8,21,5.9,31.5,8.7c21.2,5.9,43.1,7,65.2,5.9c15.5-0.7,30.8-1.7,46.1-4.4
		c4.6-0.7,9.2-1.7,14.2-2.8c-1.7,7.4-3.3,14.7-5,21.4c-3.9,14.7-8.1,29.3-12,44c-0.7,2.4-1.7,3.7-4.2,3.9c-7.7,0.9-15.3,2.4-23,2.4
		c-15.3,0.2-30.6-0.2-45.7-0.9c-18.6-0.7-37-2.8-55.1-6.8c-11.8-2.6-23.4-5.5-35-8.3c-2-0.4-3.7-1.1-6.1-2
		C96.4,432.2,106.3,411.8,113.7,390.8z 
"
					/>
					<path
						id="svg_12"
						onClick={() => this.props.onFillColor(56)}
						fill={this.props.fillColors[56]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M61.4,494.5c6.3-12,13.1-23.8,19.7-35.6c0.7-1.1,1.1-2,2.8-1.5c13.1,3.5,26.5,7,39.8,10.1
		c17.1,3.9,34.3,5.7,51.8,7c19.2,1.3,38.5,2,57.7,0.9c5.2-0.4,10.3-1.3,15.5-2c0.4,0,0.9,0,1.7,0c-0.7,1.7-1.3,3.3-2,4.8
		c-9,18.4-17.9,36.7-27.1,55.1c-0.9,1.5-2.2,2.8-3.7,3.7c-7.4,3.7-15.5,5.2-23.6,6.6c-16,2.4-31.9,3.5-47.9,3.1
		c-14.9-0.2-29.7-2.2-44.4-4.4c-17.5-2.8-34.3-7.2-50.7-13.8c-1.5-0.7-3.1-1.5-5-2.4C51.2,515,56,504.3,61.4,494.5z 
"
					/>
					<path
						id="svg_13"
						onClick={() => this.props.onFillColor(57)}
						fill={this.props.fillColors[57]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M24.3,595.1
		c1.1-13.3,4.6-26,9.4-38.5c3.1-8.1,6.3-15.7,9.6-23.6c0.4-0.7,0.7-1.3,1.1-2c16.6,7.2,34.1,12,51.8,15.1c23.6,4.2,47.5,6.3,71.3,5
		c14.4-0.7,28.6-2.2,42.6-6.1c2.2-0.7,4.4-1.3,7-2.2c-1.1,3.3-2,6.1-2.8,9.2c-5.2,15.7-6.3,31.9-3.3,48.3c0.4,1.7-0.2,2.2-1.5,3.1
		c-10.5,6.1-22.1,8.7-33.7,11.2c-21,4.4-42.4,4.6-63.9,3.3c-20.8-1.3-41.1-3.5-61.2-8.5c-5.9-1.5-11.6-3.3-17.3-5.2
		c-2.2-0.7-4.4-2-6.3-3.1C24.7,599.9,24.1,598.1,24.3,595.1z 
"
					/>
					<path
						id="svg_14"
						onClick={() => this.props.onFillColor(58)}
						fill={this.props.fillColors[58]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M44.8,674.3c-6.1-7.2-12.2-14.4-16.4-23.2c-2.6-5-2.8-10.7-3.3-16.2
		c-0.4-9.2-0.9-18.4-1.3-27.6c0-0.7,0.2-1.1,0.2-1.7c16.6,7.9,34.1,11.2,51.6,13.6c21.4,3.3,43.1,4.8,64.7,4.4
		c19.2-0.4,38.1-3.3,56.4-9c5.2-1.7,10.3-4.2,15.7-6.6c4.8,19.2,14.7,35.4,31.7,47.7c-5.7,3.1-10.7,5.9-16,8.5
		c-21.2,10.3-43.5,16.8-66.9,20.3c-18.4,2.8-36.7,4.4-55.3,3.7c-14.7-0.7-28.9-2.8-42.9-7.2c-5.7-1.7-11.2-3.7-16.6-5.7
		C45.9,675.1,45.3,674.7,44.8,674.3z 
"
					/>
					<path
						id="svg_15"
						onClick={() => this.props.onFillColor(59)}
						fill={this.props.fillColors[59]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M148.3,749.7c-26-6.1-47.7-19.7-66.9-37.4c-9.2-8.5-17.7-17.7-26.5-26.7
		c-0.2-0.4-0.7-0.9-1.3-2c2.2,0.7,3.7,0.9,4.8,2c23.4,7.4,47.2,9.4,71.5,7.9c24.9-1.5,49.4-5.2,73-13.1c15.3-5,30.2-11.4,44-20.1
		c0.4-0.4,1.7-0.7,2.2-0.2c10.1,6.3,21.2,9.8,32.4,13.6c0.2,0,0.4,0.2,1.1,0.4c-0.4,0.7-1.1,1.5-1.5,2.2
		c-11.4,15.5-26,27.1-41.8,37.8c-20.8,13.8-42.4,26-66,34.6C164.9,751.7,157,751.7,148.3,749.7z 
		"
					/>
					<path
						id="svg_16"
						onClick={() => this.props.onFillColor(60)}
						fill={this.props.fillColors[60]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M281.5,756.3
		c-27.3,0.2-54.5,0.2-81.8,0c-8.1,0-16.4-1.3-24.5-2c-0.4,0-0.9-0.2-2-0.4c1.5-0.4,2.2-0.9,3.1-1.1c34.3-13.1,65.8-31.5,93.2-56.4
		c6.6-5.7,11.6-12.9,17.5-19.5c0.7-0.7,2-1.5,2.6-1.3c12,2.8,23.8,5.7,36.3,8.5c0,0.7-0.2,2-0.4,3.3c-3.3,18.6-9.6,36.1-20.3,51.6
		c-4.4,6.1-9.4,11.8-16.2,15.5C286.7,755.6,283.9,756.3,281.5,756.3z 
"
					/>
					<path
						id="svg_17"
						onClick={() => this.props.onFillColor(61)}
						fill={this.props.fillColors[61]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M358.4,751c-16.8,1.5-33.9,2.6-50.7,3.9
		c-3.3,0.2-6.8,0.4-10.7,0.7c21-19.7,29.5-44.6,34.3-71.7c19,1.7,37.8,1.5,56.9-0.9c-0.9,4.4-1.5,8.5-2.4,12.7
		c-3.3,15.1-7.4,29.7-15.7,42.9c-2.4,3.7-5.5,7.2-8.3,10.7C361.1,750.1,359.5,751,358.4,751z 
		"
					/>
					<path
						id="svg_18"
						onClick={() => this.props.onFillColor(62)}
						fill={this.props.fillColors[62]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M428,746c-10.7,0.7-21.2,1.3-31.7,2
		c-8.1,0.7-16.2,1.3-24.3,2c-1.1,0.2-2.2,0.2-3.7,0.2c2.2-3.1,4.2-5.9,5.9-8.7c9.2-14.9,13.8-31.5,17.3-48.6
		c0.7-2.8,1.1-5.9,1.7-8.7c0.2-0.7,1.1-1.7,2-2c17.7-2.8,34.8-8.1,51.8-13.3c0.9-0.4,1.7-0.7,2.8-0.9c0.2,0.9,0.4,1.3,0.4,1.5
		c1.1,26.2-4.4,51-17.7,73.7C431.5,745.1,430.2,746,428,746z 
"
					/>
					<path
						id="svg_19"
						onClick={() => this.props.onFillColor(63)}
						fill={this.props.fillColors[63]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M477.2,736.6c-9.6,5-19.7,7.2-30.2,8.1c-3.1,0.2-6.1,0.4-9.8,0.7
		c0.7-1.1,1.1-2,1.5-2.8c10.7-19.7,16.2-40.7,16.6-63c0.2-3.7,0-7.4-0.2-11.2c0-1.7,0.7-2.4,2.2-2.8c10.3-3.3,20.6-6.8,30-12.2
		c3.5-2.2,6.8-4.6,11.2-7.2c1.1,6.1,2.6,11.6,3.1,17.1c1.5,21.2-1.5,41.6-11.4,60.6C487.3,729.4,482.9,733.5,477.2,736.6z
"
					/>
					<path
						id="svg_20"
						onClick={() => this.props.onFillColor(64)}
						fill={this.props.fillColors[64]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M521.2,689.6c-4.4,13.8-12.5,24.9-23.8,33.7c-0.4,0.2-0.7,0.2-1.3,0.7c1.3-3.5,2.8-6.6,3.7-9.8c7-20.1,9.2-40.9,5-61.9
		c-0.4-2.8-1.5-5.5-2.2-8.1c-0.2-0.7,0-2,0.4-2.4c5.2-5,9.4-10.9,11.2-18.8c0.7,1.1,1.1,1.5,1.3,2.2c4.8,11.8,8.1,23.8,8.3,36.7
		C524,671.2,524.2,680.6,521.2,689.6z"
					/>
					<path
						id="svg_21"
						onClick={() => this.props.onFillColor(65)}
						fill={this.props.fillColors[65]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M95.3,95.6c-0.4,3.9,0.4,5.7,4.2,6.1c4.6,0.4,9.2,0.7,13.8,0.2c5.2-0.4,10.1-2,15.5-3.1
		c-1.1,0.7-1.7,1.3-2.6,1.7c-6.1,3.1-12.2,5.9-18.4,8.7c-2.2,1.1-4.2,2-3.9,5.5c4.6-1.5,8.7-2.6,12.9-4.2
		c16.8-5.2,31.7-13.1,41.8-28.4c2.6-4.2,2.6-5.9-1.3-8.7c0.2-0.9,0.2-2,0.4-2.8c2.4-14.7-6.1-27.6-20.6-30.8
		c-10.5-2.4-19.9-0.9-29.1,5C91.8,55.1,85.9,79.6,94.9,93.6C95.3,94.3,95.3,94.9,95.3,95.6z M135.1,51.4c2.6-0.9,5.9-1.5,8.7-1.5
		c3.7,0.2,6.1,3.5,6.3,7.2c0,3.9-3.1,7.7-7.4,9c-3.9,1.1-9.2-0.9-10.9-4.2c-0.7-1.3-0.9-2.6-1.1-3.3C131,55.1,132.1,52.3,135.1,51.4
		z M125.5,47.9c1.1,0.2,2.2,1.5,2.8,2c0,3.1-2.2,5-4.2,5c-1.7-0.2-2.8-1.1-2.8-2.8C121.2,49.9,123.6,47.5,125.5,47.9z"
					/>
					<path
						id="svg_22"
						onClick={() => this.props.onFillColor(66)}
						fill={this.props.fillColors[66]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M231.2,82.5c12.7,13.3,28,22.3,45.9,26.5c3.1,0.7,6.3,1.1,10.1,1.5c-0.7-1.7-0.7-2.8-1.3-3.5
		c-0.9-0.9-2.2-1.5-3.5-2c-3.7-1.1-7.7-2-11.4-2.8c0-0.2,0.2-0.4,0.2-0.7c2,0.4,3.7,0.9,5.7,0.9c4.6,0,9.2,0,13.8-0.4
		c3.5-0.4,4.6-2.4,4.2-5.9c0-0.9,0.2-1.7,0.7-2.4c3.9-7,5-14.2,3.3-22.1c-2.2-9.4-8.1-16.4-14.2-23.2c-9.4-10.3-27.3-12.7-39.1-5
		c-10.5,6.6-14.4,16.2-12.5,28.4c-4.6,1.7-5.5,4.6-3.3,8.5C230.1,81.1,230.5,81.8,231.2,82.5z M277.5,55.6c0.9-0.2,2-0.4,3.1-0.4
		c4.4-0.2,7.4,2.2,10.1,5.5c1.5,2.2,1.7,4.8,0.4,7.2c-1.3,2.6-3.5,3.9-6.3,3.9c-5-0.2-9-2.2-11.6-6.6
		C270.5,60.6,272.3,56.6,277.5,55.6z M265.3,49.6c1.7,0.2,3.1,0.7,3.1,2.6c0,1.7-2.2,3.1-4.8,3.1c-1.5-0.2-2.8-0.9-2.8-2.8
		C260.7,50.7,262.7,49.4,265.3,49.6z"
					/>
					<path
						id="svg_23"
						onClick={() => this.props.onFillColor(67)}
						fill={this.props.fillColors[67]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M175,152c6.3-2.6,13.3-4.6,20.3-4.2c7.9,0.7,15.1,3.1,22.3,6.3c9,4.2,17.9,8.3,27.1,11.4
		c15.7,5.2,31.3,4.2,45.9-4.2c8.1-4.6,14.7-10.5,20.3-17.5c2.8-3.5,5.7-6.8,8.5-10.3c1.3,0.7,2.2,1.1,2.4,1.5
		c2.2,1.1,4.4,0.4,5.5-1.5c1.1-2,0.7-4.2-1.3-5.2c-2.4-1.5-5-2.8-7.9-3.9c-1.7-0.7-3.5,0.2-4.8,1.7c-4.4,5.5-8.5,10.9-13.1,16.2
		c-8.1,9-17.9,15.1-30,17.1c-10.3,1.7-19.9,0.2-29.3-3.7c-9-3.7-17.9-8.1-26.9-11.8c-12.2-5-24.7-6.3-37.2-1.7
		c-5.7,2.2-11.6,4.4-17.1,7.2c-12.9,6.8-26.2,10.7-41.1,10.3c-8.3-0.4-15.5-2.8-21.7-8.5c-6.3-5.9-12-12.2-16.6-19.7
		c-2.2-3.5-4.6-4.2-8.5-2.8c-0.9,0.2-2,0.7-2.8,1.1c-2.8,1.3-4.2,3.5-3.1,5.9c1.1,2.2,3.3,3.1,6.3,1.7c1.5-0.7,2.2-0.2,3.1,0.9
		c4.8,5.9,9.4,11.6,14.4,17.1c5.5,5.9,12.2,10.3,20.3,11.6c15.3,2.6,30.2,0.4,44.4-5.7C161.6,158.3,168.2,154.8,175,152z"
					/>
					<path
						id="svg_24"
						onClick={() => this.props.onFillColor(68)}
						fill={this.props.fillColors[68]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M216.3,130.3c2.2-1.5,4.6-2.6,6.8-4.2c1.3-0.9,2.4-2.2,3.1-2.8c0.2-3.3-1.5-5.2-3.7-4.8c-5,0.4-9.2,2.4-12,6.6
		c-1.3,1.7-1.1,3.7,0.7,5.2C212.8,131.7,214.5,131.4,216.3,130.3z"
					/>
					<path
						id="svg_25"
						onClick={() => this.props.onFillColor(69)}
						fill={this.props.fillColors[69]}
						fillRule="evenodd"
						stroke="#000000"
						strokeWidth="2"
						d="M164.7,127.5c2.2,0.9,4.2,1.7,6.3,2.8c2.2,1.1,3.9,1.1,5.5-0.9c1.5-2,1.1-3.9-0.4-5.5
		c-2.6-2.8-5.9-4.2-9.2-4.6c-2.6-0.2-4.6,1.3-5,3.5C161.4,124.9,162.5,126.6,164.7,127.5z"
					/>
				</g>
			</svg>
		);
	}
}