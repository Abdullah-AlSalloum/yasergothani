import React from "react";

const GuideAudienceSection: React.FC = () => (
  <div className="mt-6 bg-white/5 border border-white/15 rounded-2xl p-8 text-right shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">لمن هذا الدليل</h2>
    <ul className="list-disc pr-6 space-y-3 text-lg md:text-xl text-[#f1f5fb]/90">
      <li>المؤلفين الذين تتعرض كتبهم للقرصنة.</li>
      <li>دور النشر التي تسعى لحماية كتبها من القرصنة.</li>
      <li>المدربين أو صناع المحتوى التعليمي.</li>
      <li>من يرغبون باتخاذ إجراءات احترازية قبل التعرض للقرصنة.</li>
    </ul>
    <div className="mt-8 flex justify-start">
      <button className="bg-[#f7d54b] text-[#0f3b33] px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-[#f1c72e] transition-all duration-200">
        أرسل لي الدليل
      </button>
    </div>
  </div>
);

export default GuideAudienceSection;
