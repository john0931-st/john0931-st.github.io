function exportToExcel(tableID, filename){
    var downloadLink;
    var dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    var tableSel = document.getElementById(tableID);
    var tableHTML = tableSel.outerHTML.replace(/ /g, '%20');

    //specify filename
    filename = filename?filename+'.xls':'excel_data.xls';

    //create download link element
    downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob (['\ufeff', tableHTML], {type: dataType});
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        //create link to file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        //setting the filename
        downloadLink.download = filename;

        //trigger the function
        downloadLink.click();
    }
}