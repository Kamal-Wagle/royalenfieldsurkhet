import React, { useState } from 'react';

const PdfUrl = [
  {
    name: "College Vacation",
    id: "42724r294",
    pdfUrl: "https://res.cloudinary.com/dl9zyguda/image/upload/v1748890405/Unit-1-Introduction-Part-I_vpiqmr.pdf"
  }
];

const PdfButtonOk = () => {
  const [showPdf, setShowPdf] = useState(false);

  // Using the first pdf in array
  const pdf = PdfUrl[0];

  const googleDriveViewerUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(pdf.pdfUrl)}`;

  return (
    <div>
      <button onClick={() => setShowPdf(!showPdf)}>
        {showPdf ? "Hide PDF" : `View PDF: ${pdf.name}`}
      </button>

      {showPdf && (
        <div style={{ marginTop: 20, height: '600px', width: '100%' }}>
          <iframe
            title={pdf.name}
            src={googleDriveViewerUrl}
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};

export default PdfButtonOk;
