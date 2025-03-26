import { useDropzone } from "react-dropzone";

const App = () => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "text/csv": [".csv"],
            "application/vnd.ms-excel": [".xls"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
        },
        onDrop: acceptedFiles => {
            console.log(acceptedFiles);
        },
        multiple: false
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
        </div>
    );
}

export default App;