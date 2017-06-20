import React from 'react';
import {AgGridReact} from 'ag-grid-react';

class Test extends React.Component{

	constructor(props) {
    super(props);
    console.log("grid cons", this.props.columnDefs);
    this.state = {
        showGrid: true,
    };
  }

	propTypes:{
		rowData : React.propTypes.array.isRequired,
		columnDefs : React.propTypes.array
	}

	onGridReady(){
            //setup first yourColumnDefs and yourGridData
            console.log("grid ready", this.props.columnDefs);
            //now use the api to set the columnDefs and rowData
            this.gridOptions.api.setColumnDefs(this.props.columnDefs);
            this.gridOptions.api.setRowData(this.props.rowData);
        }

	render(){
		console.log("render function");
		return(
				<html>
				<head>
				<title>Its working </title>
				</head>
				<body> 
					<h1> The saved data is : </h1>
					<div style={{height: '500px'}}>
					<AgGridReact
					    columnDefs={this.props.columnDefs}
					    rowData={this.props.rowData}
					    onGridReady={this.onGridReady.bind(this)}
					    showGrid={this.state.showGrid}
					    enableFilter
					    enableSorting
					/>
					</div>
				</body>
				</html>
		)
	}
}

export default Test