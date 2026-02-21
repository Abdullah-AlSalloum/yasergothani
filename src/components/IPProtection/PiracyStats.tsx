import React from 'react';
import Forward30Icon from "@mui/icons-material/Forward30";
import { Public, AttachMoney } from '@mui/icons-material';

const Section5: React.FC = () => (
  <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#f1f5fb] text-center">
          إحصائيات مهمة عن قرصنة الكتب
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#1a604f]">
              <Forward30Icon style={{ fontSize: 48 }}/>
            </span>
            <div className="text-gray-700 text-center text-lg">
              ما يقارب 30% من الكتب الرقمية يتم قرصنتها في أول 6 أشهر من
              إطلاقها.
            </div>
          </div>
          <div className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#1a604f]">
              <Public style={{ fontSize: 48 }} />
            </span>
            <div className="text-gray-700 text-center text-lg">
              في الوطن العربي بشكل خاص تُعَدّ قرصنة الكتب مشكلة متفاقمة تهدد
              الكتاب بالانقراض.
            </div>
          </div>
          <div className="bg-[#f1f5fb] rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-3">
            <span className="text-[#1a604f]">
              <AttachMoney style={{ fontSize: 48 }} />
            </span>
            <div className="text-gray-700 text-center text-lg">
              تقدر خسائر الناشرين والمؤلفين بسبب القرصنة بحوالي 7.6 مليار دولار
              سنويًا على مستوى العالم.
            </div>
          </div>
        </div>
      </section>
);

export default Section5;
