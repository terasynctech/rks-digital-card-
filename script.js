function downloadVCard() {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Raj Kumar Singh
TITLE:Govt. Contractor & General Order Supplier
TEL:9430734977
TEL:7781918755
ADR:Opposite Paras Apartment, Anandpuri, Harmu, Ranchi
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "raj-kumar-singh.vcf";
    link.click();
}
