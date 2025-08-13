export type OrderData = {
    orderNumber: string;
    receiptNumber: string;
    receiptDate: string;
    companyName: string;
    jobName: string;
    jobType: "Dergi" | "Karton Poşet" | "Broşür";
    paperType: string;
    paperWeight: string;
    width: string;
    height: string;
    depth: string;
    quantity: number; // 🆕 Sipariş Adeti
    deliveryDate: string;
    orderAmount: string; // Sipariş Tutarı
    currency: "₺" | "$" | "€"; // Para Birimi
    enteredBy: string; // Siparişi giren kişi
    status: "Sipariş Alındı" | "Üretimde" | "Hazır" | "Kargoya Verildi" | "Teslim Edildi"; // Sipariş Durumu
};
