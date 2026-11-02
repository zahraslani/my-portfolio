export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          درباره من
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* بخش متن */}
          <div className="flex-1 text-gray-600 leading-relaxed space-y-4">
            <p>
              من دانش‌آموخته‌ی کارشناسی ارشد مهندسی نرم‌افزار از دانشگاه اصفهان هستم و مسیر حرفه‌ای خودم رو در حوزه‌ی توسعه‌ی وب و فرانت‌اند ادامه دادم. 
              علاقه‌ی من به تبدیل دیزاین به رابط‌های کاربری تمیز و کاربرپسند باعث شد که به سمت Vue.js و React.js حرکت کنم.
            </p>
            <p>
              در طول مسیر، تجربه‌ی کار با TypeScript، مدیریت State با Pinia و Context API، و کار با APIهای مختلف رو به دست آوردم. 
              همچنین گذراندن دوره‌ی امنیت اپلیکیشن در شرکت خدمات انفورماتیک به من دیدگاه عمیق‌تری نسبت به امنیت در وب داده است.
            </p>
            <p>
              من آدمی هستم که از یادگیری مداوم لذت می‌برم و همیشه تلاش می‌کنم کدی بنویسم که سایر توسعه‌دهنده‌ها بتونن راحت بخونن و نگهداری کنن.
            </p>
          </div>
          
          {/* بخش کارت‌های کوچک */}
          <div className="flex-1 w-full grid grid-cols-1 gap-4">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-gray-900 mb-1">تحصیلات</h3>
              <p className="text-sm text-gray-600">کارشناسی ارشد مهندسی نرم‌افزار - دانشگاه اصفهان</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-gray-900 mb-1">تجربه کلیدی</h3>
              <p className="text-sm text-gray-600">دوره امنیت اپلیکیشن - شرکت خدمات انفورماتیک</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-gray-900 mb-1">علاقه‌مندی‌ها</h3>
              <p className="text-sm text-gray-600">یادگیری تکنولوژی‌های جدید، طراحی رابط کاربری و حل مسائل پیچیده</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}