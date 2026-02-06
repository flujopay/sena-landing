"use client";

import { Button } from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import { Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contacto" className="bg-[#F9F9F9] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-4">
            Solicita tu{" "}
            <span className="text-brand-primary">evaluación gratuita</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Respuesta en 24 horas. Sin compromiso.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nombre completo"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Juan Pérez"
              />
              <Input
                label="Empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
                placeholder="Mi Empresa S.A."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email corporativo"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="juan@empresa.com"
              />
              <Input
                label="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Cuéntanos sobre tu cartera vencida
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                placeholder="Monto aproximado, antigüedad, industria..."
              />
            </div>

            <Button
              text="Enviar Solicitud"
              variant="primaryFilled"
              size="lg"
              type="submit"
              fullWidth
              rightIcon={<Send className="h-5 w-5" />}
            />

            <p className="text-xs text-slate-500 text-center">
              Al enviar, aceptas que Recupera by Sena te contacte para evaluar
              tu caso.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
