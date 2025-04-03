import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

const App = () => {
    const [parsedData, setParsedData] = useState([]);
    const [fileName, setFileName] = useState("");

    const convertExcelDate = (serial) => {
      const excelEpoch = new Date(1900, 0, serial - 1);
      return excelEpoch.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
    };

    const onDrop = useCallback((acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFileName(file.name);

        const reader = new FileReader();

        reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = "2017-2018";

          if (workbook.SheetNames.includes(sheetName)) {
            const worksheet = workbook.Sheets[sheetName];
            let sheetData = XLSX.utils.sheet_to_json(worksheet);

            sheetData = sheetData.map(row => ({
              ...row,
              DOI: typeof row.DOI === "number" ? convertExcelDate(row.DOI) : row.DOI
            }));

            setParsedData(sheetData); // Send parsed data to parent component
          } else {
            alert("Sheet does not exists");
          }
        };

        reader.readAsArrayBuffer(file);
      }
    }, [setParsedData]);

    const { getRootProps, getInputProps } = useDropzone({
      accept: {
          "text/csv": [".csv"],
          "application/vnd.ms-excel": [".xls"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
          "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
      },
      onDrop,
      multiple: false
    });

    return (
      <>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
        </div>
        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
      </>
    );
}

export default App;