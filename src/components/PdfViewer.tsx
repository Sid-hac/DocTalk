

type Props = {
    pdf_url: string;
}

const PdfViewer = ({ pdf_url }: Props) => {
    console.log(pdf_url);
    
    return (
        <iframe
        src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`}
        className="w-full h-full"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="PDF Viewer"
    >
        This browser does not support PDFs. Please download the PDF to view it: <a href={pdf_url}>Download PDF</a>.
    </iframe>
        // <embed src={pdf_url} type="application/pdf" className="w-full h-full" />
    )
}

export default PdfViewer