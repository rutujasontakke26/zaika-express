function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let y = 20;
  let total = 0;

  doc.setFontSize(18);
  doc.text("Zaika Express - Bill Receipt", 20, y);
  y += 10;

  doc.setFontSize(12);
  doc.text("Date: " + new Date().toLocaleString(), 20, y);
  y += 10;

  cart.forEach((item, i) => {
    doc.text(`${i + 1}. ${item.name} - ₹${item.price}`, 20, y);
    y += 8;
    total += item.price;
  });

  y += 10;
  doc.setFontSize(14);
  doc.text("Total: ₹" + total, 20, y);

  doc.save("Zaika_Bill.pdf");
}
