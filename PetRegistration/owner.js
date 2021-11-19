var rowIndex2, tbl2 = document.getElementById("tblData1");

//Add data to row
var list21 = [];
var list22 = [];
var list23 = [];
var list24 = [];
var n2 = 1;
var x2 = 0;
function AddRow2(){
		var AddRown1 = document.getElementById('tblData1');
		var NewRow1 = AddRown1.insertRow(n2);

		list21[x2] = document.getElementById("oname").value;
		list22[x2] = document.getElementById("ph").value;
		list23[x2] = document.getElementById("em").value;
		list24[x2] = document.getElementById("addr").value;

		cel21 = NewRow1.insertCell(0);
		cel22 = NewRow1.insertCell(1);
		cel23 = NewRow1.insertCell(2);
		cel24 = NewRow1.insertCell(3);

		cel21.innerHTML = list21[x2];
		cel22.innerHTML = list22[x2];
		cel23.innerHTML = list23[x2];
		cel24.innerHTML = list24[x2];

		n2++;
		x2++;

		// call the function to set the event to the new row
		selectedRowToInput2();
	}

// display selected row data into input text
function selectedRowToInput2()
{
	for(var i = 1; i < tbl2.rows.length; i++)
	{
		tbl2.rows[i].onclick = function()
		{
		  // get the seected row index
		  rowIndex2 = this.rowIndex2;
		  document.getElementById("oname").value = this.cells[0].innerHTML;
		  document.getElementById("ph").value = this.cells[1].innerHTML;
		  document.getElementById("em").value = this.cells[2].innerHTML;
		  document.getElementById("addr").value = this.cells[3].innerHTML;
		};
	}
}
selectedRowToInput2();

//edit row
function EditRow2(){
		var oname = document.getElementById("oname").value,
			ph = document.getElementById("ph").value,
			em = document.getElementById("em").value,
			addr = document.getElementById("addr").value;

					tbl2.rows[rowIndex2].cells[0].innerHTML = oname;
					tbl2.rows[rowIndex2].cells[1].innerHTML = ph;
					tbl2.rows[rowIndex2].cells[2].innerHTML = em;
					tbl2.rows[rowIndex2].cells[3].innerHTML = addr;
			}

//delete row
function DelRow2(){
	tbl2.deleteRow(rowIndex2);
	oname = document.getElementById("oname").value="",
	ph = document.getElementById("ph").value="",
	em = document.getElementById("em").value="";
	addr = document.getElementById("addr").value="";
}