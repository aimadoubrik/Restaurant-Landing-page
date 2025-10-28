import { Flame, Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
      name: string;
      description: string;
      price: string;
      image: string;
      category: string;
}

interface MenuListPageProps {
      onBack: () => void;
      onViewDetails: (item: MenuItem) => void;
}

export default function MenuListPage({ onBack, onViewDetails }: MenuListPageProps) {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('الكل');

      const allMenuItems: MenuItem[] = [
            {
                  name: 'تاكوس اللحم المشوي',
                  description: 'لحم بقري مشوي مع الخضار الطازجة والصلصة الحارة',
                  price: '35 درهم',
                  image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'تاكوس'
            },
            {
                  name: 'تاكوس الدجاج المتبل',
                  description: 'دجاج متبل بالتوابل المغربية مع الجواكامولي',
                  price: '30 درهم',
                  image: 'https://images.pexels.com/photos/4958643/pexels-photo-4958643.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'تاكوس'
            },
            {
                  name: 'تاكوس الخضار',
                  description: 'مزيج من الخضار المشوية مع الحمص والطحينة',
                  price: '25 درهم',
                  image: 'https://images.pexels.com/photos/5740834/pexels-photo-5740834.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'تاكوس'
            },
            {
                  name: 'بوريتو الكفتة',
                  description: 'كفتة مغربية ملفوفة مع الأرز والفاصوليا',
                  price: '40 درهم',
                  image: 'https://images.pexels.com/photos/7469408/pexels-photo-7469408.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'بوريتو'
            },
            {
                  name: 'تاكوس السمك المقلي',
                  description: 'سمك طازج مقلي مع صلصة الليمون والكزبرة',
                  price: '38 درهم',
                  image: 'https://images.pexels.com/photos/6546025/pexels-photo-6546025.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'تاكوس'
            },
            {
                  name: 'ناتشوز الجبن',
                  description: 'رقائق التورتيلا مع جبن الشيدر المذاب والهالبينو',
                  price: '28 درهم',
                  image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'مقبلات'
            },
            {
                  name: 'بوريتو الدجاج',
                  description: 'دجاج مشوي مع الأرز والفاصوليا السوداء والجبن',
                  price: '38 درهم',
                  image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'بوريتو'
            },
            {
                  name: 'كساديا الجبن',
                  description: 'تورتيلا مقرمشة محشوة بثلاث أنواع من الجبن',
                  price: '32 درهم',
                  image: 'https://images.pexels.com/photos/5949901/pexels-photo-5949901.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'مقبلات'
            },
            {
                  name: 'سلطة التاكو',
                  description: 'سلطة طازجة مع اللحم المتبل والخضار والصلصة',
                  price: '30 درهم',
                  image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'سلطات'
            },
            {
                  name: 'تشوريزو تاكوس',
                  description: 'نقانق حارة مع البصل المكرمل والكزبرة',
                  price: '36 درهم',
                  image: 'https://images.pexels.com/photos/5903015/pexels-photo-5903015.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'تاكوس'
            },
            {
                  name: 'جواكامولي وناتشوز',
                  description: 'جواكامولي طازج مع رقائق التورتيلا المقرمشة',
                  price: '25 درهم',
                  image: 'https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'مقبلات'
            },
            {
                  name: 'بوريتو الخضار',
                  description: 'خضار مشوية مع الأرز والفاصوليا والصلصة',
                  price: '33 درهم',
                  image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800',
                  category: 'بوريتو'
            }
      ];

      const categories = ['الكل', 'تاكوس', 'بوريتو', 'مقبلات', 'سلطات'];

      const filteredItems = allMenuItems.filter(item => {
            const matchesSearch = item.name.includes(searchTerm) || item.description.includes(searchTerm);
            const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
      });

      return (
            <div className="min-h-screen bg-gray-50" dir="rtl">
                  <nav className="bg-white shadow-md sticky top-0 z-40">
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

                  <div className="container mx-auto px-4 py-12">
                        <div className="text-center mb-12">
                              <h1 className="text-5xl font-black text-gray-900 mb-4">القائمة الكاملة</h1>
                              <p className="text-xl text-gray-600">استكشف جميع الأطباق اللذيذة</p>
                        </div>

                        <div className="mb-8 space-y-6">
                              <div className="relative max-w-2xl mx-auto">
                                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                          type="text"
                                          placeholder="ابحث عن طبقك المفضل..."
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                          className="w-full pr-12 pl-4 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-lg"
                                    />
                              </div>

                              <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <Filter className="w-5 h-5 text-gray-600" />
                                    {categories.map((category) => (
                                          <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-6 py-2 rounded-full font-bold transition-all ${selectedCategory === category
                                                            ? 'bg-orange-500 text-white shadow-lg'
                                                            : 'bg-white text-gray-700 shadow hover:shadow-md'
                                                      }`}
                                          >
                                                {category}
                                          </button>
                                    ))}
                              </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                              {filteredItems.map((item, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                          <div className="relative h-48">
                                                <img
                                                      src={item.image}
                                                      alt={item.name}
                                                      className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                      {item.category}
                                                </div>
                                          </div>
                                          <div className="p-5">
                                                <h3 className="text-xl font-black text-gray-800 mb-2">{item.name}</h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                                <div className="flex justify-between items-center">
                                                      <span className="text-2xl font-black text-orange-500">{item.price}</span>
                                                      <button
                                                            onClick={() => onViewDetails(item)}
                                                            className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm transition-all hover:bg-orange-600 hover:shadow-lg"
                                                      >
                                                            عرض التفاصيل
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {filteredItems.length === 0 && (
                              <div className="text-center py-20">
                                    <p className="text-2xl text-gray-500">لا توجد نتائج مطابقة للبحث</p>
                              </div>
                        )}
                  </div>
            </div>
      );
}
