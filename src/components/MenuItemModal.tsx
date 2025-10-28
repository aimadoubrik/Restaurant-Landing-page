import { X, ShoppingBag } from 'lucide-react';

interface MenuItem {
      name: string;
      description: string;
      price: string;
      image: string;
      details?: string;
      ingredients?: string[];
      calories?: string;
}

interface MenuItemModalProps {
      item: MenuItem | null;
      isOpen: boolean;
      onClose: () => void;
}

export default function MenuItemModal({ item, isOpen, onClose }: MenuItemModalProps) {
      if (!isOpen || !item) return null;

      const defaultIngredients = [
            'خبز التورتيلا الطازج',
            'خضار موسمية طازجة',
            'صلصة خاصة بالمطعم',
            'توابل مغربية أصيلة'
      ];

      return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                  <div
                        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        dir="rtl"
                  >
                        <div className="relative">
                              <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-72 object-cover rounded-t-3xl"
                              />
                              <button
                                    onClick={onClose}
                                    className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg transition-all hover:bg-gray-100"
                              >
                                    <X className="w-6 h-6 text-gray-800" />
                              </button>
                              <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                                    <span className="text-2xl font-black">{item.price}</span>
                              </div>
                        </div>

                        <div className="p-8">
                              <h2 className="text-4xl font-black text-gray-900 mb-4">{item.name}</h2>

                              <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">الوصف</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                              </div>

                              {item.details && (
                                    <div className="mb-6">
                                          <h3 className="text-xl font-bold text-gray-800 mb-2">تفاصيل إضافية</h3>
                                          <p className="text-gray-600 leading-relaxed">{item.details}</p>
                                    </div>
                              )}

                              <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">المكونات</h3>
                                    <ul className="grid grid-cols-2 gap-3">
                                          {(item.ingredients || defaultIngredients).map((ingredient, index) => (
                                                <li key={index} className="flex items-center gap-2 text-gray-600">
                                                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                      {ingredient}
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {item.calories && (
                                    <div className="mb-6 bg-orange-50 p-4 rounded-xl">
                                          <p className="text-gray-700">
                                                <span className="font-bold">السعرات الحرارية:</span> {item.calories}
                                          </p>
                                    </div>
                              )}

                              <button className="w-full bg-orange-500 text-white py-4 rounded-full font-bold text-xl shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl flex items-center justify-center gap-3">
                                    <ShoppingBag className="w-6 h-6" />
                                    أضف إلى الطلب
                              </button>
                        </div>
                  </div>
            </div>
      );
}
