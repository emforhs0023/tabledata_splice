import React from "react"

const Excel = () => {


    function fnExcelReport(id, title) {
		const table = document.getElementsByTagName('table')[0];
    
    let tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
        tab_text += '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
        tab_text += '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
        tab_text += '<x:Name>Test Sheet</x:Name>';
        tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
        tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
        tab_text += "<table border='1px'>";

    let exportTable = table.cloneNode(true);

    tab_text += exportTable.outerHTML;
    tab_text += '</table></body></html>';
    let data_type = 'data:application/vnd.ms-excel';
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf("MSIE ");
    let fileName = this.period + '_Table' + '.xls';

    // browser 처리
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        //ie 용
        if (window.navigator.msSaveBlob) {
            let blob = new Blob([tab_text], {
                type: "application/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, fileName);
        }
    } else { //그외
        let blob2 = new Blob([tab_text], {
            type: "application/csv;charset=utf-8;"
        });
        let filename = fileName;
        let elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob2);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
	}
    return(
        <>
            <div class="main-content">
		<div class="main-content-inner">
			<div class="page-content">
				<table id="table">
					<caption>Excel Download</caption>
					<thead>
						<tr>
							<th></th>
							<th>sample</th>
							<th>sample</th>
							<th>sample</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>sample</th>
							<td>Text</td>
							<td>Text</td>
							<td rowspan="2">Text</td>
						</tr>
						<tr>
							<th>sample</th>
							<td>Text</td>
							<td>Text</td>
						</tr>
						<tr>
							<th>sample</th>
							<td>Text</td>
							<td>Text</td>
							<td>Text</td>
						</tr>
					</tbody>
				</table>
			</div>
			<button type="button" onclick={fnExcelReport('table','title')}>Excel
				Download</button>
		</div>
	</div>
        </>
    )
}

export default Excel