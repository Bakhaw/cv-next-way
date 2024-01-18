"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function GeneratePdf() {
  async function generate() {
    const capture = document.querySelector("body") as HTMLElement;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("cv.pdf");
    });
  }

  return (
    <div>
      <button onClick={generate}>generate pdf</button>
    </div>
  );
}
export default GeneratePdf;
