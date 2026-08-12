// Diplomatic Path — sea, supermarket and food vocabulary
(function(){
const rows=`Sea|سي|Mer|مير|Mar|مار|البحر|sea-beach
Beach|بيتش|Plage|بلاج|Playa|بلايا|الشاطئ|sea-beach
Coast|كوست|Côte|كوت|Costa|كوستا|الساحل|sea-beach
Sand|ساند|Sable|سابل|Arena|أرينا|الرمل|sea-beach
Wave|ويف|Vague|فاغ|Ola|أولا|موجة|sea-beach
Tide|تايد|Marée|ماريه|Marea|ماريا|المد والجزر|sea-beach
Shell|شِل|Coquillage|كوكياج|Concha|كونتشا|صدفة بحرية|sea-beach
Boat|بوت|Bateau|باتو|Barco|باركو|قارب|sea-beach
Ship|شِب|Navire|نافير|Buque|بوكي|سفينة|sea-beach
Harbor|هاربَر|Port|بور|Puerto|بويرتو|ميناء|sea-beach
Lighthouse|لايتهاوس|Phare|فار|Faro|فارو|منارة بحرية|sea-beach
Towel|تاوِل|Serviette|سيرفييت|Toalla|توايا|منشفة|sea-beach
Sunscreen|سَن سكرين|Crème solaire|كريم سولير|Protector solar|بروتيكتور سولار|واقي شمس|sea-beach
Swimming|سْوِمِنغ|Natation|ناتاسيون|Natación|ناتاثيون|سباحة|sea-beach
Lifeguard|لايف غارد|Sauveteur|سوفيتور|Socorrista|سوكوريستا|منقذ سباحة|sea-beach
Supermarket|سوبرماركت|Supermarché|سوبيرمارشيه|Supermercado|سوبرميركادو|سوبر ماركت|supermarket
Shopping cart|شوبِنغ كارت|Chariot|شاريو|Carrito|كاريتو|عربة تسوق|supermarket
Basket|باسكِت|Panier|بانييه|Cesta|سيستا|سلة|supermarket
Aisle|آيل|Allée|أليه|Pasillo|باسييو|ممر|supermarket
Shelf|شِلف|Étagère|إيتاجير|Estante|إستانتي|رف|supermarket
Cashier|كاشير|Caissier|كيسييه|Cajero|كاخيرو|أمين صندوق|supermarket
Checkout|تشيك آوت|Caisse|كيس|Caja|كاخا|صندوق المحاسبة|supermarket
Receipt|رِسيت|Ticket de caisse|تيكيه دو كيس|Recibo|ريثيبو|فاتورة شراء|supermarket
Price|برايس|Prix|بري|Precio|بريثيو|السعر|supermarket
Discount|دِسكاونت|Réduction|ريدوكسيون|Descuento|ديسكوينتو|خصم|supermarket
Special offer|سبيشَل أوفَر|Promotion|بروموسيون|Oferta especial|أوفيرتا إسبيثيال|عرض خاص|supermarket
Cash|كاش|Espèces|إسبيس|Efectivo|إفيكتيفو|نقدًا|supermarket
Bottle|بوتِل|Bouteille|بوتاي|Botella|بوتييا|زجاجة|supermarket
Can|كان|Boîte de conserve|بوات دو كونسيرف|Lata|لاتا|علبة معدنية|supermarket
Kilogram|كيلوغرام|Kilogramme|كيلوغرام|Kilogramo|كيلوغرامو|كيلوغرام|supermarket
Vegetables|فِجتَبُلز|Légumes|ليغوم|Verduras|بيردوراس|خضروات|produce
Fruit|فروت|Fruit|فروي|Fruta|فروتا|فاكهة|produce
Tomato|توميتو|Tomate|تومات|Tomate|توماتي|طماطم|produce
Potato|بوتيتو|Pomme de terre|بوم دو تير|Patata|باتاتا|بطاطس|produce
Onion|أنيَن|Oignon|أونيون|Cebolla|ثيبويا|بصل|produce
Garlic|غارلِك|Ail|آي|Ajo|آخو|ثوم|produce
Carrot|كارَت|Carotte|كاروت|Zanahoria|ثاناهوريا|جزر|produce
Cucumber|كيوكَمبَر|Concombre|كونكومبر|Pepino|بيبينو|خيار|produce
Lettuce|لِتِس|Laitue|ليتو|Lechuga|ليتشوغا|خس|produce
Bell pepper|بِل بِبَر|Poivron|بوافرون|Pimiento|بيميينتو|فلفل حلو|produce
Eggplant|إيغ بلانت|Aubergine|أوبيرجين|Berenjena|بيرينخينا|باذنجان|produce
Zucchini|زوكيني|Courgette|كورجيت|Calabacín|كالاباثين|كوسة|produce
Cabbage|كابِج|Chou|شو|Col|كول|ملفوف|produce
Spinach|سبِنِتش|Épinards|إيبينار|Espinaca|إسبيناكا|سبانخ|produce
Broccoli|بروكُلي|Brocoli|بروكولي|Brócoli|بروكولي|بروكلي|produce
Apple|آبُل|Pomme|بوم|Manzana|مانثانا|تفاح|produce
Banana|بَنانا|Banane|بانان|Plátano|بلاتانو|موز|produce
Orange|أورِنج|Orange|أورانج|Naranja|نارانخا|برتقال|produce
Lemon|لِمَن|Citron|سيترون|Limón|ليمون|ليمون|produce
Grapes|غريبس|Raisins|ريزان|Uvas|أوباس|عنب|produce
Watermelon|ووترمِلَن|Pastèque|باستيك|Sandía|سانديا|بطيخ|produce
Strawberry|سترُوبيري|Fraise|فريز|Fresa|فريسا|فراولة|produce
Mango|مانغو|Mangue|مانغ|Mango|مانغو|مانجو|produce
Dates|ديتس|Dattes|دات|Dátiles|داتيليس|تمر|produce
Meat|ميت|Viande|فياند|Carne|كارني|لحم|meat-poultry
Chicken|تشيكِن|Poulet|بوليه|Pollo|بويو|دجاج|meat-poultry
Beef|بيف|Bœuf|بوف|Carne de res|كارني دي ريس|لحم بقري|meat-poultry
Lamb|لام|Agneau|أنيو|Cordero|كورديرو|لحم ضأن|meat-poultry
Minced meat|مِنست ميت|Viande hachée|فياند آشيه|Carne picada|كارني بيكادا|لحم مفروم|meat-poultry
Steak|ستيك|Steak|ستيك|Bistec|بيستيك|شريحة لحم|meat-poultry
Chicken breast|تشيكِن برِست|Blanc de poulet|بلان دو بوليه|Pechuga de pollo|بيتشوغا دي بويو|صدر دجاج|meat-poultry
Chicken thigh|تشيكِن ثاي|Cuisse de poulet|كويس دو بوليه|Muslo de pollo|موسلو دي بويو|فخذ دجاج|meat-poultry
Chicken wing|تشيكِن وِنغ|Aile de poulet|إيل دو بوليه|Ala de pollo|ألا دي بويو|جناح دجاج|meat-poultry
Whole chicken|هول تشيكِن|Poulet entier|بوليه أونتييه|Pollo entero|بويو إنتيرو|دجاجة كاملة|meat-poultry
Butcher|بوتشَر|Boucher|بوشيه|Carnicero|كارنيثيرو|جزار|meat-poultry
Fresh|فريش|Frais|فري|Fresco|فريسكو|طازج|meat-poultry
Frozen|فروزِن|Surgelé|سورجليه|Congelado|كونخيلادو|مجمّد|meat-poultry`.split('\n');
const indexes={english:[0,1],french:[2,3],spanish:[4,5]};
for(const [language,[wordIndex,pronIndex]] of Object.entries(indexes)){
 const existing=new Set(DIPLOMATIC_VOCABULARY[language].map(item=>item.word.trim().toLocaleLowerCase()));
 for(const row of rows){
  const parts=row.split('|'),word=parts[wordIndex],pronunciation=parts[pronIndex],arabic=parts[6],category=parts[7];
  const key=word.trim().toLocaleLowerCase();
  if(!existing.has(key)){
   DIPLOMATIC_VOCABULARY[language].push({word,arabic,pronunciation,level:'A1',category});
   existing.add(key);
  }
 }
}
})();