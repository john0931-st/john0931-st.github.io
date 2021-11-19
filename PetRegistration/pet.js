var rowIndex1, tbl1 = document.getElementById("tblData");
//Add data to row
var list11 = [];
var list12 = [];
var list13 = [];
var list14 = [];
var n1 = 1;
var x1 = 0;
function AddRow1(){
		var AddRown = document.getElementById('tblData'),
			NewRow = AddRown.insertRow(n1);

		list11[x1] = document.getElementById("pname").value;
		list12[x1] = document.getElementById("gen").value;
		list13[x1] = document.getElementById("br").value;
		list14[x1] = document.getElementById("bday").value;

		cel11 = NewRow.insertCell(0);
		cel12 = NewRow.insertCell(1);
		cel13 = NewRow.insertCell(2);
		cel14 = NewRow.insertCell(3);

		cel11.innerHTML = list11[x1];
		cel12.innerHTML = list12[x1];
		cel13.innerHTML = list13[x1];
		cel14.innerHTML = list14[x1];

		n1++;
		x1++;

		// call the function to set the event to the new row
		selectedRowToInput1();
	}

// display selected row data into input text
function selectedRowToInput1()
{
	for(var i = 1; i < tbl1.rows.length; i++)
	{
		tbl1.rows[i].onclick = function()
		{
		  // get the seected row index
		  rowIndex1 = this.rowIndex1;
		  document.getElementById("pname").value = this.cells[0].innerHTML;
		  document.getElementById("gen").value = this.cells[1].innerHTML;
		  document.getElementById("br").value = this.cells[2].innerHTML;
		  document.getElementById("bday").value = this.cells[3].innerHTML;
		};
	}
}
selectedRowToInput1();

//edit row
function EditRow1(){
		var pname = document.getElementById("pname").value,
			gen = document.getElementById("gen").value,
			br = document.getElementById("br").value,
			bday = document.getElementById("bday").value;

					tbl1.rows[rowIndex1].cells[0].innerHTML = pname;
					tbl1.rows[rowIndex1].cells[1].innerHTML = gen;
					tbl1.rows[rowIndex1].cells[2].innerHTML = br;
					tbl1.rows[rowIndex1].cells[3].innerHTML = bday;
			}

//delete row
function DelRow1(){
	tbl1.deleteRow(rowIndex1);
	pname = document.getElementById("pname").value="",
	gen = document.getElementById("gen").value="",
	br = document.getElementById("br").value="";
	bday = document.getElementById("bday").value="";
}