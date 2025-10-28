import { Phone, MapPin, Clock, Mail, MessageCircle, Flame } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
      onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: ''
      });

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            alert('شكراً لتواصلك معنا! سنرد عليك قريباً');
            setFormData({ name: '', email: '', phone: '', message: '' });
      };

      return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50" dir="rtl">
                  <nav className="bg-white shadow-md">
                        <div className="container mx-auto px-4 py-4">
                              <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                          <Flame className="w-8 h-8 text-orange-500" />
                                          <h1 className="text-2xl font-bold text-gray-800">علمي تاكوس</h1>
                                    </div>
                                    <button
                                          onClick={onBack}
                                          className="text-gray-700 font-semibold transition-colors hover:text-orange-500"
                                    >
                                          العودة للرئيسية
                                    </button>
                              </div>
                        </div>
                  </nav>

                  <div className="container mx-auto px-4 py-16">
                        <div className="text-center mb-12">
                              <h1 className="text-5xl font-black text-gray-900 mb-4">تواصل معنا</h1>
                              <p className="text-xl text-gray-600">نحن هنا للإجابة على استفساراتك</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                              <div>
                                    <h2 className="text-3xl font-black text-gray-900 mb-6">معلومات التواصل</h2>

                                    <div className="space-y-6">
                                          <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <div className="flex items-center gap-4">
                                                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center">
                                                            <Phone className="w-7 h-7 text-white" />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-lg font-bold text-gray-800">الهاتف</h3>
                                                            <p className="text-gray-600" dir="ltr">+212 600 123 456</p>
                                                            <p className="text-gray-600" dir="ltr">+212 600 789 012</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <div className="flex items-center gap-4">
                                                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center">
                                                            <Mail className="w-7 h-7 text-white" />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-lg font-bold text-gray-800">البريد الإلكتروني</h3>
                                                            <p className="text-gray-600" dir="ltr">info@alamytacos.ma</p>
                                                            <p className="text-gray-600" dir="ltr">orders@alamytacos.ma</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <div className="flex items-center gap-4">
                                                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center">
                                                            <MapPin className="w-7 h-7 text-white" />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-lg font-bold text-gray-800">العنوان</h3>
                                                            <p className="text-gray-600">شارع محمد الخامس، الدار البيضاء</p>
                                                            <p className="text-gray-600">الطابق الأرضي، رقم 45</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <div className="flex items-center gap-4">
                                                      <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center">
                                                            <Clock className="w-7 h-7 text-white" />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-lg font-bold text-gray-800">ساعات العمل</h3>
                                                            <p className="text-gray-600">السبت - الخميس: 11:00 ص - 11:00 م</p>
                                                            <p className="text-gray-600">الجمعة: 2:00 م - 11:00 م</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                          <MessageCircle className="w-8 h-8 text-orange-500" />
                                          أرسل لنا رسالة
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                          <div>
                                                <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                                                <input
                                                      type="text"
                                                      required
                                                      value={formData.name}
                                                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                                                      placeholder="أدخل اسمك الكامل"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                                                <input
                                                      type="email"
                                                      required
                                                      value={formData.email}
                                                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                                                      placeholder="example@email.com"
                                                      dir="ltr"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                                                <input
                                                      type="tel"
                                                      required
                                                      value={formData.phone}
                                                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                                                      placeholder="+212 600 000 000"
                                                      dir="ltr"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-gray-700 font-bold mb-2">رسالتك</label>
                                                <textarea
                                                      required
                                                      value={formData.message}
                                                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                      rows={5}
                                                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                                                      placeholder="اكتب رسالتك هنا..."
                                                />
                                          </div>

                                          <button
                                                type="submit"
                                                className="w-full bg-orange-500 text-white py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
                                          >
                                                إرسال الرسالة
                                          </button>
                                    </form>
                              </div>
                        </div>

                        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
                              <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">موقعنا على الخريطة</h2>
                              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                                    <p className="text-gray-500 text-lg">خريطة الموقع</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
