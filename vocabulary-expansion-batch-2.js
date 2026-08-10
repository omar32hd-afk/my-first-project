// Diplomatic Path — multilingual vocabulary expansion batch 2
(function(){
const E=`airport terminal|صالة المطار|إيربورت تِرمِنَل
ticket|تذكرة|تِكِت
passport|جواز سفر|باسْبورت
visa|تأشيرة|فيزا
luggage|أمتعة|لَغِج
journey|رحلة|جِرني
map|خريطة|ماب
north|شمال|نورث
south|جنوب|ساوث
east|شرق|إيست
west|غرب|وِست
river|نهر|رِفَر
island|جزيرة|آيلَند
desert|صحراء|دِزِرت
region|منطقة|ريجِن
population|سكان|بوبْيوليشن
citizen|مواطن|سِتِزِن
community|مجتمع|كَمْيونيتي
society|مجتمع|سَسايَتي
education|تعليم|إديوكيشن
university|جامعة|يونيفِرْسِتي
course|دورة / مقرر|كورس
exam|اختبار|إكزام
skill|مهارة|سْكِل
experience|خبرة|إكسبيرينس
career|مسار مهني|كَرِير
salary|راتب|سالَري
project|مشروع|بروجِكت
team|فريق|تيم
meeting room|غرفة اجتماعات|ميتِنغ روم
schedule|جدول|سْكِجول
decision|قرار|دِسِجِن
result|نتيجة|رِزَلت
success|نجاح|سَكسِس
failure|فشل|فِيلْيَر
future|مستقبل|فيوتشر
past|ماضٍ|باست
present|حاضر|بريزِنت
health|صحة|هيلث
exercise|تمرين|إكسرسايز
energy|طاقة|إنَرجي
environment|بيئة|إنفايرَنمَنت
climate|مناخ|كلايمِت
technology|تقنية|تِكنولَجي
internet|إنترنت|إنترنت
message|رسالة|مِسِج
email|بريد إلكتروني|إيميل
website|موقع إلكتروني|وِبسايت
media|إعلام|ميديا
article|مقال|آرتِكَل
headline|عنوان رئيسي|هِدلاين
source|مصدر|سورس
fact|حقيقة|فاكت
opinion|رأي|أوبينيَن
policy|سياسة / نهج|بولِسي
state|دولة / ولاية|ستيت
constitution|دستور|كونستِتيوشن
rights|حقوق|رايتس
freedom|حرية|فريدَم
justice|عدالة|جَستِس
court|محكمة|كورت`.split('\n');
const F=`Terminal d'aéroport|صالة المطار|تيرمينال ديروبور
Billet|تذكرة|بيييه
Passeport|جواز سفر|باسبورت
Visa|تأشيرة|فيزا
Bagages|أمتعة|باغاج
Voyage|رحلة|فواياج
Carte|خريطة|كارت
Nord|شمال|نور
Sud|جنوب|سود
Est|شرق|إيست
Ouest|غرب|ويست
Rivière|نهر|ريفيير
Île|جزيرة|إيل
Désert|صحراء|ديزير
Région|منطقة|ريجيون
Population|سكان|بوبولاسيون
Citoyen|مواطن|سيتوايان
Communauté|مجتمع|كومينوتيه
Société|مجتمع|سوسيتيه
Éducation|تعليم|إيدوكاسيون
Université|جامعة|يونيفيرسيتيه
Cours|دورة / مقرر|كور
Examen|اختبار|إكزامان
Compétence|مهارة|كومبيتونس
Expérience|خبرة|إكسبيريونس
Carrière|مسار مهني|كاريير
Salaire|راتب|سالير
Projet|مشروع|بروجيه
Équipe|فريق|إكيب
Salle de réunion|غرفة اجتماعات|سال دو غيونيون
Emploi du temps|جدول|أونبلوا دو تان
Décision|قرار|ديسيزْيون
Résultat|نتيجة|غيزولتا
Succès|نجاح|سوكسيه
Échec|فشل|إيشِك
Avenir|مستقبل|أفونير
Passé|ماضٍ|باسيه
Présent|حاضر|بغيزان
Santé|صحة|سونتيه
Exercice|تمرين|إكزيرسيس
Énergie|طاقة|إينيرجي
Environnement|بيئة|أونفيرونمون
Climat|مناخ|كليما
Technologie|تقنية|تيكنولوجي
Internet|إنترنت|أنتيرنيت
Message|رسالة|ميساج
Courriel|بريد إلكتروني|كورييل
Site web|موقع إلكتروني|سيت ويب
Médias|إعلام|ميديا
Article|مقال|آرتيكل
Titre|عنوان رئيسي|تيتر
Source|مصدر|سورس
Fait|حقيقة|فيه
Opinion|رأي|أوبينيون
Politique|سياسة / نهج|بوليتيك
État|دولة|إيتا
Constitution|دستور|كونستيتوسيون
Droits|حقوق|دروا
Liberté|حرية|ليبيرتيه
Justice|عدالة|جوستيس
Tribunal|محكمة|تغيبونال`.split('\n');
const S=`Terminal del aeropuerto|صالة المطار|تيرمينال ديل أيروبويرتو
Billete|تذكرة|بيييتي
Pasaporte|جواز سفر|باسابورتي
Visa|تأشيرة|بيسا
Equipaje|أمتعة|إكيباخي
Viaje|رحلة|بياخي
Mapa|خريطة|مابا
Norte|شمال|نورتي
Sur|جنوب|سور
Este|شرق|إستي
Oeste|غرب|أويستي
Río|نهر|ريو
Isla|جزيرة|إيسلا
Desierto|صحراء|ديسييرتو
Región|منطقة|ريخيون
Población|سكان|بوبلاثيون
Ciudadano|مواطن|ثيودادانو
Comunidad|مجتمع|كومونيداد
Sociedad|مجتمع|سوثييداد
Educación|تعليم|إيدوكاثيون
Universidad|جامعة|أونيبيرسيداد
Curso|دورة / مقرر|كورسو
Examen|اختبار|إكسامين
Habilidad|مهارة|أبيليداد
Experiencia|خبرة|إكسبيرينثيا
Carrera|مسار مهني|كاريرا
Salario|راتب|سالاريو
Proyecto|مشروع|برويكتو
Equipo|فريق|إكيبو
Sala de reuniones|غرفة اجتماعات|سالا دي ريونيونيس
Horario|جدول|أوراريو
Decisión|قرار|ديسيثيون
Resultado|نتيجة|ريثولتادو
Éxito|نجاح|إكسيتو
Fracaso|فشل|فراكاسو
Futuro|مستقبل|فوتورو
Pasado|ماضٍ|باسادو
Presente|حاضر|بريسينتي
Salud|صحة|سالود
Ejercicio|تمرين|إخيرثيثيو
Energía|طاقة|إنيرخيا
Medio ambiente|بيئة|ميديو أمبيينتي
Clima|مناخ|كليما
Tecnología|تقنية|تيكنولوجيا
Internet|إنترنت|إنترنيت
Mensaje|رسالة|مينساخي
Correo electrónico|بريد إلكتروني|كوريو إليكترونيكو
Sitio web|موقع إلكتروني|سيتيو ويب
Medios|إعلام|ميديوس
Artículo|مقال|آرتيكولو
Titular|عنوان رئيسي|تيتولار
Fuente|مصدر|فوينتي
Hecho|حقيقة|إيتشو
Opinión|رأي|أوبينيون
Política|سياسة / نهج|بوليتيكا
Estado|دولة|إستادو
Constitución|دستور|كونستيتوثيون
Derechos|حقوق|ديريتشوس
Libertad|حرية|ليبيرتاد
Justicia|عدالة|خوستيثيا
Tribunal|محكمة|تريبونال`.split('\n');
function add(lang,rows){DIPLOMATIC_VOCABULARY[lang].push(...rows.map(r=>{const [word,arabic,pronunciation]=r.split('|');return {word,arabic,pronunciation,level:'A2',category:/policy|state|constitution|rights|freedom|justice|court|Politique|État|Constitution|Droits|Liberté|Justice|Tribunal|Política|Estado|Constitución|Derechos|Libertad|Justicia|Tribunal/i.test(word)?'politics':'daily'};}));}
add('english',E);add('french',F);add('spanish',S);
})();