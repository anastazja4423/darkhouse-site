
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({ name: "", phone: "", car: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "<YOUR_CHAT_ID>",
        text: `🛠️ Nowa rezerwacja:\n👤 ${form.name}\n📞 ${form.phone}\n🚗 ${form.car}\n📝 ${form.message}`
      })
    });
    alert("Dziękujemy! Skontaktujemy się wkrótce.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center">Dark House by Hassman Corporation</h1>
      <p className="text-center text-lg mt-2">Specjalistyczny serwis hybryd w Gdańsku</p>
      <div className="flex justify-center mt-4">
        <Button size="lg">Umów się na wizytę</Button>
      </div>

      <h2 className="text-2xl font-semibold">Nasze usługi</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>✅ Wymiana oleju</li>
        <li>✅ Naprawa hamulców</li>
        <li>✅ Wymiana baterii Prius</li>
        <li>✅ Diagnostyka hybryd</li>
      </ul>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Formularz rejestracyjny</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Imię i nazwisko" onChange={handleChange} />
            <Input name="phone" placeholder="Numer telefonu" onChange={handleChange} />
            <Input name="car" placeholder="Marka i model auta" onChange={handleChange} />
            <Textarea name="message" placeholder="Co trzeba zrobić?" onChange={handleChange} />
            <Button className="w-full" type="submit">Zapisz się</Button>
          </form>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold">Opinie klientów</h2>
      <p className="mt-2">⭐⭐⭐⭐⭐ "Szybko, profesjonalnie i uczciwie. Prius znów jak nowy!"</p>

      <h2 className="text-2xl font-semibold mt-6">Kontakt i lokalizacja</h2>
      <p>📍 Gdańsk, ul. [Twój Adres]</p>
      <p>📞 +48 123 456 789</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="300"
        className="rounded-xl mt-4"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
