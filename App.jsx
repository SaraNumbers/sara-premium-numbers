import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Star, Crown, Phone, MessageCircle, Sparkles, Search, Filter } from 'lucide-react';
import './App.css';

// Import assets
import logoImage from './assets/logo.png';
import vipIcon from './assets/vip_icon.png';
import { additionalNumbers } from './data/numbers.js';

// Function to determine network based on number prefix
const getNetworkFromNumber = (number) => {
  if (number.startsWith('091') || number.startsWith('096') || number.startsWith('0900')) {
    return 'زين';
  } else if (number.startsWith('01')) {
    return 'سوداني';
  } else if (number.startsWith('099') || number.startsWith('092') || number.startsWith('093')) {
    return 'MTN';
  }
  return 'غير محدد';
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const premiumNumbers = [
    // VIP Numbers - Auto-detect network
    { number: '0912300570', category: 'VIP' },
    { number: '0912307779', category: 'VIP' },
    { number: '0912308854', category: 'VIP' },
    { number: '0912399936', category: 'VIP' },
    { number: '0912372105', category: 'VIP' },
    { number: '0912310835', category: 'VIP' },
    { number: '0912310857', category: 'VIP' },
    { number: '0912311105', category: 'VIP' },
    { number: '0912314978', category: 'VIP' },
    { number: '0912316729', category: 'VIP' },
    { number: '0123001629', category: 'VIP' },
    { number: '0912324138', category: 'VIP' },
    { number: '0912335961', category: 'VIP' },
    { number: '0912336087', category: 'VIP' },
    { number: '0912331905', category: 'VIP' },
    { number: '0912348698', category: 'VIP' },
    { number: '0912343581', category: 'VIP' },
    { number: '0912350298', category: 'VIP' },
    { number: '0912351434', category: 'VIP' },
    { number: '0912354082', category: 'VIP' },
    { number: '0912356149', category: 'VIP' },
    { number: '0912356911', category: 'VIP' },
    { number: '0912356938', category: 'VIP' },
    { number: '0912376048', category: 'VIP' },
    { number: '0912360849', category: 'VIP' },
    { number: '0912360574', category: 'VIP' },
    { number: '0912365484', category: 'VIP' },
    { number: '0912367947', category: 'VIP' },
    { number: '0912368717', category: 'VIP' },
    { number: '0912369072', category: 'VIP' },
    { number: '0912371946', category: 'VIP' },
    { number: '0912372108', category: 'VIP' },
    { number: '0912375826', category: 'VIP' },
    { number: '0912379087', category: 'VIP' },
    { number: '0912382708', category: 'VIP' },
    { number: '0912385446', category: 'VIP' },
    { number: '0912388598', category: 'VIP' },
    { number: '0912388769', category: 'VIP' },
    { number: '0912391037', category: 'VIP' },
    { number: '0912391058', category: 'VIP' },
    { number: '0912339724', category: 'VIP' },
    { number: '0912397305', category: 'VIP' },
    { number: '0912398617', category: 'VIP' },
    { number: '0912398858', category: 'VIP' },
    { number: '0912398753', category: 'VIP' },
    { number: '0912397742', category: 'VIP' },
    { number: '0912399306', category: 'VIP' },
    
    // Special Golden Numbers
    { number: '0900002282', category: 'ذهبي' },
    { number: '0900002284', category: 'ذهبي' },
    { number: '0900002285', category: 'ذهبي' },
    { number: '0900002286', category: 'ذهبي' },
    { number: '0900002296', category: 'ذهبي' },
    { number: '0900002297', category: 'ذهبي' },
    { number: '0995555555', category: 'ذهبي' },
    { number: '0116844444', category: 'ذهبي' },
    { number: '0919644444', category: 'ذهبي' },
    { number: '0111111194', category: 'ذهبي' },
    { number: '0111111173', category: 'ذهبي' },
    
    // Add all additional numbers
    ...additionalNumbers
  ];

  const categories = ['الكل', 'VIP', 'ذهبي', 'مميز'];

  const filteredNumbers = premiumNumbers.filter(item => {
    const matchesSearch = item.number.includes(searchTerm);
    const matchesCategory = selectedCategory === 'الكل' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleWhatsAppContact = () => {
    const phoneNumber = '0912398256';
    const message = 'السلام عليكم، أريد الاستفسار عن الأرقام المميزة المتاحة';
    const whatsappUrl = `https://wa.me/218${phoneNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNumberInquiry = (number) => {
    const phoneNumber = '0912398256';
    const message = `السلام عليكم، أريد الاستفسار عن الرقم المميز: ${number}`;
    const whatsappUrl = `https://wa.me/218${phoneNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'VIP': return 'gold-gradient text-white';
      case 'ذهبي': return 'bg-yellow-400 text-yellow-900';
      case 'مميز': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'VIP': return <Crown className="w-4 h-4 ml-1" />;
      case 'ذهبي': return <Star className="w-4 h-4 ml-1" />;
      case 'مميز': return <Sparkles className="w-4 h-4 ml-1" />;
      default: return <Star className="w-4 h-4 ml-1" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="hero-background py-8 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="floating mb-6">
            <img 
              src={logoImage} 
              alt="سارة للأرقام المميزة" 
              className="w-48 h-48 mx-auto rounded-full shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 sparkle">
            <Star className="inline-block w-8 h-8 ml-2 star-decoration" />
            سارة للأرقام المميزة
            <Star className="inline-block w-8 h-8 mr-2 star-decoration" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-semibold">
            🏆 المفتاح المميز للأرقام المميزة 09123 VIP 🏆
          </p>
          
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            مفتاح رجال وسيدات الأعمال والجلابة الكبار والشخصيات الـ VIP ومدراء الشركات
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-6 py-2 gold-gradient text-white">
              <Crown className="w-5 h-5 ml-2" />
              أرقام VIP حصرية
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 gold-gradient text-white">
              <Sparkles className="w-5 h-5 ml-2" />
              جودة مضمونة
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 gold-gradient text-white">
              <Star className="w-5 h-5 ml-2" />
              أكثر من {premiumNumbers.length} رقم مميز
            </Badge>
          </div>
          
          <Button 
            onClick={handleWhatsAppContact}
            className="whatsapp-button text-white text-xl px-8 py-4 rounded-full shadow-lg"
            size="lg"
          >
            <MessageCircle className="w-6 h-6 ml-2" />
            تواصل معنا عبر الواتساب
          </Button>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن رقم معين..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-lg"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gold-gradient text-white" : ""}
                >
                  <Filter className="w-4 h-4 ml-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              عدد الأرقام المعروضة: <span className="font-bold text-primary">{filteredNumbers.length}</span> رقم
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* VIP Numbers Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
              <img src={vipIcon} alt="VIP" className="w-12 h-12 ml-3" />
              الأرقام المميزة المتاحة
              <img src={vipIcon} alt="VIP" className="w-12 h-12 mr-3" />
            </h2>
            <p className="text-lg text-muted-foreground">
              مجموعة حصرية من أفضل الأرقام المميزة لجميع الشبكات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNumbers.map((item, index) => (
              <Card key={index} className="vip-card cursor-pointer group" onClick={() => handleNumberInquiry(item.number)}>
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center items-center mb-2">
                    {getCategoryIcon(item.category)}
                    <Badge 
                      variant="secondary"
                      className={getCategoryColor(item.category)}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="number-highlight text-2xl font-bold group-hover:scale-105 transition-transform">
                    {item.number}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">{getNetworkFromNumber(item.number)}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    استفسار
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNumbers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">لا توجد أرقام تطابق البحث</p>
              <Button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('الكل');}}
                className="mt-4"
                variant="outline"
              >
                إعادة تعيين البحث
              </Button>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="text-center py-16 hero-background rounded-3xl">
          <div className="max-w-2xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-primary mb-6">
              للطلب والاستفسار والتواصل
            </h3>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-green-600 ml-3" />
                <span className="text-2xl font-bold text-foreground">واتساب</span>
              </div>
              
              <div className="text-3xl font-bold number-highlight mb-6">
                0912398256
              </div>
              
              <Button 
                onClick={handleWhatsAppContact}
                className="whatsapp-button text-white text-xl px-8 py-4 rounded-full shadow-lg w-full md:w-auto"
                size="lg"
              >
                <MessageCircle className="w-6 h-6 ml-2" />
                تواصل الآن عبر الواتساب
              </Button>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <p>🎖️ خدمة عملاء متاحة 24/7</p>
                <p>🎖️ ضمان جودة الأرقام</p>
                <p>🎖️ أسعار تنافسية</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center mb-4">
            <Star className="w-6 h-6 ml-2 star-decoration" />
            <h4 className="text-2xl font-bold">سارة للأرقام المميزة</h4>
            <Star className="w-6 h-6 mr-2 star-decoration" />
          </div>
          <p className="text-lg mb-4">
            🎖️ أفضل الأرقام المميزة لجميع الشبكات 🎖️
          </p>
          <p className="text-sm opacity-90 mb-2">
            للطلب والاستفسار: 0912398256
          </p>
          <p className="text-sm opacity-90">
            جميع الحقوق محفوظة © 2024 سارة للأرقام المميزة
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

