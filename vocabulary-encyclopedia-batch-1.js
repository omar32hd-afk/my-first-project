// Diplomatic Path — general encyclopedia expansion, batch 1
(function(){
const rows=`Kitchen|كِتشن|Cuisine|كويزين|Cocina|كوثينا|المطبخ|home
Living room|لِفِنغ روم|Salon|سالون|Sala de estar|سالا دي إستار|غرفة المعيشة|home
Bathroom|باثروم|Salle de bains|سال دو بان|Baño|بانيو|الحمام|home
Bedroom|بِدروم|Chambre|شامبر|Dormitorio|دورميتوريو|غرفة النوم|home
Sofa|سوفا|Canapé|كانابيه|Sofá|سوفا|أريكة|home
Refrigerator|رِفريجِريتَر|Réfrigérateur|ريفريجيراتور|Refrigerador|ريفريخيرادور|ثلاجة|home
Washing machine|واشِنغ ماشين|Machine à laver|ماشين آ لافيه|Lavadora|لابادورا|غسالة|home
Air conditioner|إير كَندِشَنَر|Climatiseur|كليماتيزور|Aire acondicionado|آيري أكونديثيونادو|مكيف هواء|home
Key|كي|Clé|كليه|Llave|يابي|مفتاح|home
Balcony|بالكَني|Balcon|بالكون|Balcón|بالكون|شرفة|home
Restaurant|رِستورَنت|Restaurant|ريستوران|Restaurante|ريستورانتي|مطعم|restaurant-kitchen
Menu|مِنيو|Menu|مينو|Menú|مينو|قائمة الطعام|restaurant-kitchen
Waiter|ويتَر|Serveur|سيرفور|Camarero|كاماريرو|نادل|restaurant-kitchen
Order|أوردَر|Commande|كوماند|Pedido|بيديدو|طلب|restaurant-kitchen
Breakfast|بريكفاست|Petit-déjeuner|بُتي ديجونيه|Desayuno|ديسايونو|فطور|restaurant-kitchen
Lunch|لَنتش|Déjeuner|ديجونيه|Almuerzo|ألمويرثو|غداء|restaurant-kitchen
Dinner|دِنَر|Dîner|دينيه|Cena|ثينا|عشاء|restaurant-kitchen
Spoon|سبون|Cuillère|كويير|Cuchara|كوتشارا|ملعقة|restaurant-kitchen
Fork|فورك|Fourchette|فورشيت|Tenedor|تينيدور|شوكة|restaurant-kitchen
Knife|نايف|Couteau|كوتو|Cuchillo|كوتشييو|سكين|restaurant-kitchen
Hotel|هوتيل|Hôtel|أوتيل|Hotel|أوتيل|فندق|travel-hotel
Reservation|رِزرفيشن|Réservation|ريزيرفاسيون|Reserva|ريسيربا|حجز|travel-hotel
Reception|رِسِبشَن|Réception|ريسيبسيون|Recepción|ريثيبثيون|الاستقبال|travel-hotel
Room key|روم كي|Clé de chambre|كليه دو شامبر|Llave de la habitación|يابي دي لا أبيتاثيون|مفتاح الغرفة|travel-hotel
Suitcase|سوتكيس|Valise|فاليز|Maleta|ماليتا|حقيبة سفر|travel-hotel
Flight|فلايت|Vol|فول|Vuelo|بوييلو|رحلة جوية|travel-hotel
Boarding pass|بوردِنغ باس|Carte d'embarquement|كارت دامباركمون|Tarjeta de embarque|تارخيتا دي إمباركي|بطاقة صعود|travel-hotel
Departure|دِبارتشَر|Départ|ديبار|Salida|ساليدا|مغادرة|travel-hotel
Arrival|أرايفَل|Arrivée|أريفيه|Llegada|ييغادا|وصول|travel-hotel
Tourist|تورِست|Touriste|توريست|Turista|توريستا|سائح|travel-hotel
Hospital|هوسبِتَل|Hôpital|أوبيتال|Hospital|أوسبيتال|مستشفى|health
Doctor|دوكتَر|Médecin|ميدسان|Médico|ميديكو|طبيب|health
Nurse|نِرس|Infirmier|آنفيرمييه|Enfermero|إنفيرميرو|ممرض|health
Pharmacy|فارمَسي|Pharmacie|فارماسي|Farmacia|فارماثيا|صيدلية|health
Medicine|مِدِسِن|Médicament|ميديكامون|Medicamento|ميديكامينتو|دواء|health
Headache|هِديك|Mal de tête|مال دو تيت|Dolor de cabeza|دولور دي كابيثا|صداع|health
Fever|فيفَر|Fièvre|فييفر|Fiebre|فييبري|حمى|health
Pain|بين|Douleur|دولور|Dolor|دولور|ألم|health
Appointment|أبوينتمِنت|Rendez-vous|رانديفو|Cita|ثيتا|موعد|health
Emergency|إمِرجِنسي|Urgence|أورجونس|Emergencia|إميرخينثيا|حالة طارئة|health
Company|كَمبَني|Entreprise|أونتروپريز|Empresa|إمبريسا|شركة|work
Office|أوفِس|Bureau|بورو|Oficina|أوفيثينا|مكتب|work
Manager|مانِجَر|Directeur|ديريكتور|Gerente|خيرينتي|مدير|work
Employee|إمبلويي|Employé|أونبلواييه|Empleado|إمبليادو|موظف|work
Colleague|كوليغ|Collègue|كوليغ|Colega|كوليغا|زميل|work
Job interview|جوب إنتَرفيو|Entretien d'embauche|أونتروتيان دومبوش|Entrevista de trabajo|إنتريبيستا دي تراباخو|مقابلة وظيفية|work
Employment contract|إمبلويمِنت كونتراكت|Contrat de travail|كونترا دو ترافاي|Contrato de trabajo|كونتراتو دي تراباخو|عقد عمل|work
Email|إيميل|Courriel|كورييل|Correo electrónico|كوريو إليكترونيكو|بريد إلكتروني|work
Deadline|دِدلاين|Date limite|دات ليميت|Fecha límite|فيتشا ليميتي|موعد نهائي|work
Meeting room|ميتِنغ روم|Salle de réunion|سال دو ريونيون|Sala de reuniones|سالا دي ريونيونيس|غرفة اجتماعات|work
Shirt|شيرت|Chemise|شميز|Camisa|كاميسا|قميص|clothing
Trousers|تراوزَرز|Pantalon|بانتالون|Pantalones|بانتالونيس|بنطال|clothing
Dress|دريس|Robe|روب|Vestido|بيستيدو|فستان|clothing
Shoes|شوز|Chaussures|شوسور|Zapatos|ثاباتوس|أحذية|clothing
Jacket|جاكِت|Veste|فيست|Chaqueta|تشاكيتا|سترة|clothing
Size|سايز|Taille|تاي|Talla|تايا|مقاس|clothing
Color|كَلَر|Couleur|كولور|Color|كولور|لون|clothing
Fitting room|فِتِنغ روم|Cabine d'essayage|كابين ديسياياج|Probador|بروباذور|غرفة قياس|clothing
Socks|سوكس|Chaussettes|شوسيت|Calcetines|كالثيتينيس|جوارب|clothing
Hat|هات|Chapeau|شابو|Sombrero|سومبريرو|قبعة|clothing
Car|كار|Voiture|فواتور|Coche|كوتشي|سيارة|transport
Bus|بَس|Bus|بوس|Autobús|أوتوبوس|حافلة|transport
Train|ترين|Train|تران|Tren|ترين|قطار|transport
Taxi|تاكسي|Taxi|تاكسي|Taxi|تاكسي|سيارة أجرة|transport
Station|ستيشن|Gare|غار|Estación|إستاثيون|محطة|transport
Traffic|ترافِك|Circulation|سيركولاسيون|Tráfico|ترافيكو|ازدحام مروري|transport
Road|رود|Route|روت|Carretera|كاريتيرا|طريق|transport
Driver|درايفَر|Conducteur|كوندوكتور|Conductor|كوندوكتور|سائق|transport
Parking|باركِنغ|Parking|باركينغ|Aparcamiento|أباركامينتو|موقف سيارات|transport
Fuel|فيول|Carburant|كاربوران|Combustible|كومبوستيبلِ|وقود|transport`.split('\n');
const indexes={english:[0,1],french:[2,3],spanish:[4,5]};
for(const [language,[wordIndex,pronIndex]] of Object.entries(indexes)){
 const existing=new Set(DIPLOMATIC_VOCABULARY[language].map(item=>item.word.trim().toLocaleLowerCase()));
 for(const row of rows){
  const p=row.split('|'),word=p[wordIndex],pronunciation=p[pronIndex],arabic=p[6],category=p[7],key=word.trim().toLocaleLowerCase();
  if(!existing.has(key)){DIPLOMATIC_VOCABULARY[language].push({word,arabic,pronunciation,level:'A1',category});existing.add(key);}
 }
}
})();