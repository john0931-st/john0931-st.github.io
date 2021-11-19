var rowIndex3, tbl3 = document.getElementById("tblData2");

//Add data to row
var list31 = [];
var list32 = [];
var list33 = [];
var list34 = [];
var list35 = [];
var n3 = 1;
var x3 = 0;
function AddRow3(){
		var AddRown2 = document.getElementById('tblData2'),
		    NewRow2 = AddRown2.insertRow(n3);

		list31[x3] = document.getElementById("ddue").value;
		list32[x3] = document.getElementById("rdue").value;
		list33[x3] = document.getElementById("bdue").value;
		list34[x3] = document.getElementById("vname").value;
        list35[x3] = document.getElementById("vetad").value;

		var cel31 = NewRow2.insertCell(0),
		    cel32 = NewRow2.insertCell(1),
		    cel33 = NewRow2.insertCell(2),
		    cel34 = NewRow2.insertCell(3),
            cel35 = NewRow2.insertCell(4);

		cel31.innerHTML = list31[x3];
		cel32.innerHTML = list32[x3];
		cel33.innerHTML = list33[x3];
		cel34.innerHTML = list34[x3];
        cel35.innerHTML = list35[x3];

		n3++;
		x3++;

		// call the function to set the event to the new row
		selectedRowToInput3();
	}

// display selected row data into input text
function selectedRowToInput3()
{
	for(var i = 1; i < tbl3.rows.length; i++)
	{
		tbl3.rows[i].onclick = function()
		{
		  // get the seected row index
		  rowIndex3 = this.rowIndex3;
		  document.getElementById("ddue").value = this.cells[0].innerHTML;
		  document.getElementById("rdue").value = this.cells[1].innerHTML;
		  document.getElementById("bdue").value = this.cells[2].innerHTML;
		  document.getElementById("vname").value = this.cells[3].innerHTML;
          document.getElementById("vetad").value = this.cells[4].innerHTML;
		};
	}
}
selectedRowToInput3();

//edit row
function EditRow3(){
		var ddue = document.getElbdentByClass("ddue").value,
			rdue = document.getElementById("rdue").value,
			bdue = document.getElementById("bdue").value,
			vname = document.getElementById("vname").value,
            vetad = document.getElementById("vetad").value;

					tbl3.rows[rowIndex3].cells[0].innerHTML = ddue;
					tbl3.rows[rowIndex3].cells[1].innerHTML = rdue;
					tbl3.rows[rowIndex3].cells[2].innerHTML = bdue;
					tbl3.rows[rowIndex3].cells[3].innerHTML = vname;
                    tbl3.rows[rowIndex3].cells[4].innerHTML = vetad;
			}

//delete row
function DelRow3(){
	tbl3.deleteRow(rowIndex3);
	ddue = document.getElementById("ddue").value="",
	rdue = document.getElementById("rdue").value="",
	bdue = document.getElementById("bdue").value="",
	vname = document.getElementById("vname").value="",
    vetad = document.getElementById("vetad").value ="";
}