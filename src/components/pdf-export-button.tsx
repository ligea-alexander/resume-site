import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface PDFExportButtonProps {
  fileName?: string;
}

export function PDFExportButton({ fileName = "resume" }: PDFExportButtonProps) {
  const handleExportPDF = async () => {
    try {
      // Import html2pdf dynamically
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Get the resume content element
      const element = document.getElementById('resume-content');
      if (!element) return;

      // Configure PDF options for optimal resume formatting
      const options = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${fileName}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        }
      };

      // Generate and save PDF
      await html2pdf().set(options).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: use browser's print dialog
      window.print();
    }
  };

  return (
    <Button 
      onClick={handleExportPDF}
      variant="outline"
      className="mb-8 print:hidden"
    >
      <Download className="mr-2 h-4 w-4" />
      Export PDF
    </Button>
  );
}