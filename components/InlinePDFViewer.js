export default function InlinePDFViewer({ pdf_file_path }) {
  return (
    <object
      data={pdf_file_path}
      type="application/pdf"
      width="100%"
      height="1080px">
      This browser does not support PDFs. Please download the PDF to view it:{" "}
      <a href={pdf_file_path} target="_blank">
        Download Patient Information Sheet.
      </a>
    </object>
  );
}
