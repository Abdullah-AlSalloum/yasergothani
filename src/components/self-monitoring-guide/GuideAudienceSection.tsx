"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ClearIcon from '@mui/icons-material/Clear';

const GuideAudienceSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
    window.open("/downloads/monitoring-guide.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="mt-6 bg-white/5 border border-white/15 rounded-2xl p-8 text-right shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">لمن هذا الدليل</h2>
        <ul className="list-disc pr-6 space-y-3 text-lg md:text-xl text-[#f1f5fb]/90">
          <li>المؤلفين الذين تتعرض كتبهم للقرصنة.</li>
          <li>دور النشر التي تسعى لحماية كتبها من القرصنة.</li>
          <li>المدربين أو صناع المحتوى التعليمي.</li>
          <li>من يرغبون باتخاذ إجراءات احترازية قبل التعرض للقرصنة.</li>
        </ul>
        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-[#f7d54b] text-[#0f3b33] px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-[#f1c72e] transition-all duration-200 cursor-pointer"
          >
            أرسل لي الدليل
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <motion.div
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 text-right"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeInOut" }}
            >
            <div className="relative mb-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none cursor-pointer"
                aria-label="إغلاق"
              >
                <ClearIcon />
              </button>
              <h3 className="text-xl font-bold text-[#0f3b33] text-center">أدخل بياناتك للحصول على الدليل</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="الاسم"
                dir="rtl"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#0f3b33] text-right placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#1a604f]"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="اسم العائلة"
                dir="rtl"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#0f3b33] text-right placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#1a604f]"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="البريد الإلكتروني"
                dir="rtl"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#0f3b33] text-right placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#1a604f]"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                required
                placeholder="رقم الجوال"
                dir="rtl"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#0f3b33] text-right placeholder:text-right focus:outline-none focus:ring-2 focus:ring-[#1a604f]"
              />

              <button
                type="submit"
                className="w-full bg-[#1a604f] text-white py-3 rounded-lg font-bold hover:bg-[#154d40] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <DownloadForOfflineIcon fontSize="small" />
                تحميل الدليل
              </button>
            </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GuideAudienceSection;
