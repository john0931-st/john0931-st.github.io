var rowIndex4, tbl4 = document.getElementById("tblData3");

//Add data to row
var list41 = [];
var list42 = [];
var n4 = 1;
var x4 = 0;
function AddRow4(){
		var AddRown3 = document.getElementById('tblData3');
		var NewRow3 = AddRown3.insertRow(n4);

		list41[x4] = document.getElementById("cname").value;
		list42[x4] = document.getElementById("cph").value;

		cel41 = NewRow3.insertCell(0);
		cel42 = NewRow3.insertCell(1);

		cel41.innerHTML = list41[x4];
		cel42.innerHTML = list42[x4];

		n4++;
		x4++;

		// call the function to set the event to the new row
		selectedRowToInput4();
	}

// display selected row data into input text
function selectedRowToInput4()
{
	for(var i = 1; i < tbl4.rows.length; i++)
	{
		tbl4.rows[i].onclick = function()
		{
		  // get the seected row index
		  rowIndex4 = this.rowIndex4;
		  document.getElementById("cname").value = this.cells[0].innerHTML;
		  document.getElementById("cph").value = this.cells[1].innerHTML;
		};
	}
}
selectedRowToInput4();

//edit row
function EditRow4(){
		var cname = document.getElementById("cname").value,
			cph = document.getElementById("cph").value;

					tbl4.rows[rowIndex4].cells[0].innerHTML = cname;
					tbl4.rows[rowIndex4].cells[1].innerHTML = cph;
			}

//delete row
function DelRow4(){
	tbl4.deleteRow(rowIndex4);
	cname = document.getElementById("cname").value="",
	cph = document.getElementById("cph").value="";
}