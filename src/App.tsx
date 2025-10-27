import { Menu, Phone, MapPin, Clock, Star, ShoppingBag, Flame, Award, ChefHat, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      name: 'تاكوس اللحم المشوي',
      description: 'لحم بقري مشوي مع الخضار الطازجة والصلصة الحارة',
      price: '35 درهم',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'تاكوس الدجاج المتبل',
      description: 'دجاج متبل بالتوابل المغربية مع الجواكامولي',
      price: '30 درهم',
      image: 'https://images.pexels.com/photos/4958643/pexels-photo-4958643.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'تاكوس الخضار',
      description: 'مزيج من الخضار المشوية مع الحمص والطحينة',
      price: '25 درهم',
      image: 'https://images.pexels.com/photos/5740834/pexels-photo-5740834.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'بوريتو الكفتة',
      description: 'كفتة مغربية ملفوفة مع الأرز والفاصوليا',
      price: '40 درهم',
      image: 'https://images.pexels.com/photos/7469408/pexels-photo-7469408.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'تاكوس السمك المقلي',
      description: 'سمك طازج مقلي مع صلصة الليمون والكزبرة',
      price: '38 درهم',
      image: 'https://images.pexels.com/photos/6546025/pexels-photo-6546025.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'ناتشوز الجبن',
      description: 'رقائق التورتيلا مع جبن الشيدر المذاب والهالبينو',
      price: '28 درهم',
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const reviews = [
    {
      name: 'أحمد بنعلي',
      rating: 5,
      comment: 'أفضل تاكوس جربته في المغرب! النكهات رائعة والخدمة ممتازة'
    },
    {
      name: 'فاطمة الزهراء',
      rating: 5,
      comment: 'مكان مميز وأكل لذيذ جداً، التوابل المغربية تضيف نكهة خاصة'
    },
    {
      name: 'يوسف العمراني',
      rating: 5,
      comment: 'تجربة رائعة! الأسعار معقولة والجودة عالية'
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 shadow-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 transition-all duration-300">
              <Flame className={`text-orange-500 transition-all duration-300 ${
                isScrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`} />
              <h1 className={`font-bold text-gray-800 transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>عالمي </h1>
            </div>

            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 font-semibold transition-colors hover:text-orange-500">الرئيسية</a>
              <a href="#menu" className="text-gray-700 font-semibold transition-colors hover:text-orange-500">القائمة</a>
              <a href="#about" className="text-gray-700 font-semibold transition-colors hover:text-orange-500">من نحن</a>
              <a href="#contact" className="text-gray-700 font-semibold transition-colors hover:text-orange-500">اتصل بنا</a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#home" className="text-gray-700 font-semibold">الرئيسية</a>
              <a href="#menu" className="text-gray-700 font-semibold">القائمة</a>
              <a href="#about" className="text-gray-700 font-semibold">من نحن</a>
              <a href="#contact" className="text-gray-700 font-semibold">اتصل بنا</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-lg">الطعم الأصيل في قلب المدينة</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                علمي
                <span className="block text-yellow-300">تاكوس</span>
              </h1>

              <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-orange-50">
                تذوق مزيج فريد من النكهات المكسيكية والتوابل المغربية الأصيلة
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <button
                  onClick={scrollToMenu}
                  className="bg-white text-orange-600 px-10 py-5 rounded-full font-black text-xl shadow-2xl flex items-center gap-3 transition-all hover:shadow-3xl hover:scale-105"
                >
                  <ChevronDown className="w-6 h-6 animate-bounce" />
                  شاهد القائمة
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-4xl font-black text-yellow-300">1000+</div>
                  <div className="text-white font-bold mt-2">عميل سعيد</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-4xl font-black text-yellow-300">4.9</div>
                  <div className="text-white font-bold mt-2">تقييم العملاء</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-4xl font-black text-yellow-300">50+</div>
                  <div className="text-white font-bold mt-2">طبق مميز</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/4958642/pexels-photo-4958642.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tacos"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px] border-8 border-white/20"
              />
              <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-2xl">
                <ChefHat className="w-10 h-10 mb-2" />
                <div className="text-3xl font-black">طازج يومياً</div>
                <div className="text-sm font-semibold">100% مكونات طبيعية</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">مكونات طازجة</h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم فقط أجود المكونات الطازجة المحلية لضمان أعلى جودة ومذاق رائع
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-100">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">وصفات أصيلة</h3>
              <p className="text-gray-600 leading-relaxed">
                وصفات عائلية تقليدية ممزوجة بلمسة عصرية لتقديم تجربة فريدة من نوعها
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-100">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">خدمة سريعة</h3>
              <p className="text-gray-600 leading-relaxed">
                نضمن لك الحصول على طلبك طازجاً وساخناً في أقصر وقت ممكن
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-bold mb-4">
              <ChefHat className="w-4 h-4 inline ml-2" />
              قائمة الطعام
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">أطباقنا المميزة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">تذوق أشهى الأطباق المحضرة بحب وعناية من مكونات طازجة يومياً</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    جديد
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-800 mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t-2 border-gray-100">
                    <span className="text-2xl font-black text-orange-500">{item.price}</span>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-md transition-all hover:bg-orange-600 hover:shadow-lg">
                      أضف للطلب
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gray-800 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:bg-gray-900 hover:shadow-2xl hover:scale-105">
              شاهد القائمة الكاملة
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-600">آراء حقيقية من عملاء راضين</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border-2 border-orange-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{review.comment}"</p>
                <p className="font-bold text-gray-800 text-lg">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-black mb-4">قصتنا</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                بدأت رحلتنا من شغف عميق بالطعام والثقافة المغربية. أردنا أن نقدم تجربة فريدة تجمع بين أصالة المطبخ المكسيكي وثراء التوابل المغربية.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                اليوم، نفخر بتقديم أطباق استثنائية تعكس التزامنا بالجودة والأصالة. كل طبق نقدمه هو قصة من الحب والشغف بالطعام الجيد.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="bg-orange-500 p-4 rounded-xl flex-1">
                  <div className="text-3xl font-black">5+</div>
                  <div className="text-sm">سنوات من الخبرة</div>
                </div>
                <div className="bg-orange-500 p-4 rounded-xl flex-1">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-sm">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-600">نحن هنا لخدمتك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">اتصل بنا</h3>
              <p className="text-gray-600 text-lg" dir="ltr">+212 600 123 456</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">موقعنا</h3>
              <p className="text-gray-600">شارع محمد الخامس، الدار البيضاء</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ساعات العمل</h3>
              <p className="text-gray-600">يومياً من 11:00 صباحاً إلى 11:00 مساءً</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-10 h-10 text-orange-500" />
              <h3 className="text-3xl font-black">علمي تاكوس</h3>
            </div>
            <p className="text-gray-400 mb-6 text-lg">طعم الشارع المغربي الأصيل</p>
            <div className="flex justify-center gap-8 mb-6">
              <a href="#home" className="text-gray-400">الرئيسية</a>
              <a href="#menu" className="text-gray-400">القائمة</a>
              <a href="#about" className="text-gray-400">من نحن</a>
              <a href="#contact" className="text-gray-400">اتصل بنا</a>
            </div>
            <p className="text-gray-500">© 2024 علمي تاكوس. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
