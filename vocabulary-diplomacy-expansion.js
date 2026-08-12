// Diplomatic Path — diplomacy and international relations expansion
(function(){
const data={
english:`Embassy|سفارة|إمبَسي|A2|diplomacy
Ambassador|سفير|أمباسَدَر|A2|diplomacy
Consulate|قنصلية|كونسولِت|A2|diplomacy
Consul|قنصل|كونسُل|B1|diplomacy
Delegation|وفد|دِلِغيشن|A2|diplomacy
Delegate|مندوب|دِلِغِت|A2|diplomacy
Envoy|مبعوث|إنفوي|B1|diplomacy
Diplomatic mission|بعثة دبلوماسية|دِبلوماتِك مِشن|B1|diplomacy
Foreign ministry|وزارة الخارجية|فورِن مِنِستري|A2|politics
Foreign minister|وزير الخارجية|فورِن مِنِستَر|A2|politics
Head of state|رئيس الدولة|هِد أُف ستيت|B1|politics
Spokesperson|متحدث رسمي|سبوكس بيرسَن|A2|politics
Official statement|بيان رسمي|أفِشَل ستيتمِنت|A2|diplomacy
Joint statement|بيان مشترك|جوينت ستيتمِنت|B1|diplomacy
Press conference|مؤتمر صحفي|بريس كونفِرَنس|A2|diplomacy
Agenda|جدول أعمال|أجِندا|A2|diplomacy
Protocol|مراسم وبروتوكول|بروتوكول|B1|diplomacy
Credentials|أوراق اعتماد|كريدِنشَلز|B1|diplomacy
Host country|الدولة المضيفة|هوست كَنتري|A2|international-relations
Bilateral relations|علاقات ثنائية|بايلاتِرَل رِليشنز|B1|international-relations
Multilateral cooperation|تعاون متعدد الأطراف|مَلتيلاتِرَل كوأوبَريشن|B1|international-relations
Strategic partnership|شراكة استراتيجية|ستراتيجيك بارتنَرشِب|B1|international-relations
Diplomatic ties|علاقات دبلوماسية|دِبلوماتِك تايز|B1|diplomacy
Diplomatic immunity|حصانة دبلوماسية|دِبلوماتِك إميونِتي|B1|diplomacy
Peace talks|محادثات سلام|بيس توكس|A2|security
Mediator|وسيط|ميدييتر|B1|diplomacy
Mediation|وساطة|ميدييشَن|B1|diplomacy
Compromise|حل وسط|كومبرَمايز|B1|diplomacy
Consensus|توافق|كونسِنسَس|B1|diplomacy
Mutual interest|مصلحة مشتركة|ميوتشوَل إنترِست|B1|international-relations
National interest|المصلحة الوطنية|ناشَنَل إنترِست|B1|international-relations
Foreign policy|السياسة الخارجية|فورِن بولِسي|A2|politics
Public diplomacy|الدبلوماسية العامة|بَبلِك دِبلوماسي|B1|diplomacy
Cultural exchange|تبادل ثقافي|كَلشَرَل إكسشينج|A2|international-relations
International community|المجتمع الدولي|إنترناشَنَل كَميونِتي|A2|international-relations
Member state|دولة عضو|مِمبَر ستيت|A2|international-relations
Observer state|دولة مراقبة|أبزِرفَر ستيت|B1|international-relations
Draft resolution|مشروع قرار|درافت رِزَلوشن|B1|politics
Veto power|حق النقض|فيتو باور|B1|politics
Peacekeeping mission|بعثة حفظ سلام|بيس كيبِنغ مِشن|B1|security`,
french:`Ambassade|سفارة|أمباساد|A2|diplomacy
Ambassadeur|سفير|أمباسادور|A2|diplomacy
Consulat|قنصلية|كونسولا|A2|diplomacy
Consul|قنصل|كونسول|B1|diplomacy
Délégation|وفد|ديليغاسيون|A2|diplomacy
Délégué|مندوب|ديليغيه|A2|diplomacy
Émissaire|مبعوث|إيميسير|B1|diplomacy
Mission diplomatique|بعثة دبلوماسية|ميسيون ديبلوماتيك|B1|diplomacy
Ministère des Affaires étrangères|وزارة الخارجية|مينيستير ديز أفير إترانجير|A2|politics
Ministre des Affaires étrangères|وزير الخارجية|مينيستر ديز أفير إترانجير|A2|politics
Chef d'État|رئيس الدولة|شيف ديتا|B1|politics
Porte-parole|متحدث رسمي|بورت بارول|A2|politics
Déclaration officielle|بيان رسمي|ديكلاراسيون أوفيسييل|A2|diplomacy
Déclaration conjointe|بيان مشترك|ديكلاراسيون كوانت|B1|diplomacy
Conférence de presse|مؤتمر صحفي|كونفيرونس دو بريس|A2|diplomacy
Ordre du jour|جدول أعمال|أوردر دو جور|A2|diplomacy
Protocole|مراسم وبروتوكول|بروتوكول|B1|diplomacy
Lettres de créance|أوراق اعتماد|ليتر دو كريانس|B1|diplomacy
Pays hôte|الدولة المضيفة|بيي أوت|A2|international-relations
Relations bilatérales|علاقات ثنائية|رولاسيون بيلاتيرال|B1|international-relations
Coopération multilatérale|تعاون متعدد الأطراف|كوأوبيراسيون مولتيلاتيرال|B1|international-relations
Partenariat stratégique|شراكة استراتيجية|بارتناريا ستراتيجِك|B1|international-relations
Liens diplomatiques|علاقات دبلوماسية|ليان ديبلوماتيك|B1|diplomacy
Immunité diplomatique|حصانة دبلوماسية|إيمونيتي ديبلوماتيك|B1|diplomacy
Pourparlers de paix|محادثات سلام|بوربارليه دو بي|A2|security
Médiateur|وسيط|ميدياتور|B1|diplomacy
Médiation|وساطة|ميدياسيون|B1|diplomacy
Compromis|حل وسط|كومبرومي|B1|diplomacy
Consensus|توافق|كونسونسوس|B1|diplomacy
Intérêt mutuel|مصلحة مشتركة|أنتيريه موتويل|B1|international-relations
Intérêt national|المصلحة الوطنية|أنتيريه ناسيونال|B1|international-relations
Politique étrangère|السياسة الخارجية|بوليتيك إترانجير|A2|politics
Diplomatie publique|الدبلوماسية العامة|ديبلوماسي بوبليك|B1|diplomacy
Échange culturel|تبادل ثقافي|إشانج كولتوريل|A2|international-relations
Communauté internationale|المجتمع الدولي|كومينوتيه أنتيرناسيونال|A2|international-relations
État membre|دولة عضو|إيتا مامبر|A2|international-relations
État observateur|دولة مراقبة|إيتا أوبزيرفاتور|B1|international-relations
Projet de résolution|مشروع قرار|بروجيه دو ريزولوسيون|B1|politics
Droit de veto|حق النقض|دروا دو فيتو|B1|politics
Mission de maintien de la paix|بعثة حفظ سلام|ميسيون دو مانتيان دو لا بي|B1|security`,
spanish:`Embajada|سفارة|إمباخادا|A2|diplomacy
Embajador|سفير|إمباخادور|A2|diplomacy
Consulado|قنصلية|كونسولادو|A2|diplomacy
Cónsul|قنصل|كونسول|B1|diplomacy
Delegación|وفد|ديليغاثيون|A2|diplomacy
Delegado|مندوب|ديليغادو|A2|diplomacy
Enviado|مبعوث|إنبيادو|B1|diplomacy
Misión diplomática|بعثة دبلوماسية|ميسيون ديبلوماتيكا|B1|diplomacy
Ministerio de Asuntos Exteriores|وزارة الخارجية|مينيستيريو دي أسونتوس إكستيريوريس|A2|politics
Ministro de Asuntos Exteriores|وزير الخارجية|مينيسترو دي أسونتوس إكستيريوريس|A2|politics
Jefe de Estado|رئيس الدولة|خيفي دي إستادو|B1|politics
Portavoz|متحدث رسمي|بورتابوس|A2|politics
Declaración oficial|بيان رسمي|ديكلاراثيون أوفيثيال|A2|diplomacy
Declaración conjunta|بيان مشترك|ديكلاراثيون كونخونتا|B1|diplomacy
Conferencia de prensa|مؤتمر صحفي|كونفيرينثيا دي برينسا|A2|diplomacy
Orden del día|جدول أعمال|أوردين ديل ديا|A2|diplomacy
Protocolo|مراسم وبروتوكول|بروتوكولو|B1|diplomacy
Cartas credenciales|أوراق اعتماد|كارتاس كريدينثياليس|B1|diplomacy
País anfitrión|الدولة المضيفة|باييس أنفيتريون|A2|international-relations
Relaciones bilaterales|علاقات ثنائية|ريلاثيونيس بيلاتيراليس|B1|international-relations
Cooperación multilateral|تعاون متعدد الأطراف|كوأوبيراثيون مولتيلاتيرال|B1|international-relations
Asociación estratégica|شراكة استراتيجية|أسوثياثيون إسترانيخيكا|B1|international-relations
Lazos diplomáticos|علاقات دبلوماسية|لاثوس ديبلوماتيكوس|B1|diplomacy
Inmunidad diplomática|حصانة دبلوماسية|إنمونيداد ديبلوماتيكا|B1|diplomacy
Conversaciones de paz|محادثات سلام|كونبيرساثيونيس دي باث|A2|security
Mediador|وسيط|ميديادور|B1|diplomacy
Mediación|وساطة|ميدياثيون|B1|diplomacy
Compromiso|حل وسط|كومبروميسو|B1|diplomacy
Consenso|توافق|كونسينسو|B1|diplomacy
Interés mutuo|مصلحة مشتركة|إنتيريس موتوو|B1|international-relations
Interés nacional|المصلحة الوطنية|إنتيريس ناثيونال|B1|international-relations
Política exterior|السياسة الخارجية|بوليتيكا إكستيريور|A2|politics
Diplomacia pública|الدبلوماسية العامة|ديبلوماسيا بوبليكا|B1|diplomacy
Intercambio cultural|تبادل ثقافي|إنتيركامبيو كولتورال|A2|international-relations
Comunidad internacional|المجتمع الدولي|كومونيداد إنترناثيونال|A2|international-relations
Estado miembro|دولة عضو|إستادو مييمبرو|A2|international-relations
Estado observador|دولة مراقبة|إستادو أوبسيربادور|B1|international-relations
Proyecto de resolución|مشروع قرار|بروييكتو دي ريسولوسيون|B1|politics
Derecho de veto|حق النقض|ديريتشو دي فيتو|B1|politics
Misión de mantenimiento de la paz|بعثة حفظ سلام|ميسيون دي مانتينيميينتو دي لا باث|B1|security`
};
for(const [language,block] of Object.entries(data)){
 const existing=new Set(DIPLOMATIC_VOCABULARY[language].map(item=>item.word.trim().toLocaleLowerCase()));
 for(const line of block.split('\n')){
  const [word,arabic,pronunciation,level,category]=line.split('|');
  if(!existing.has(word.trim().toLocaleLowerCase())){
   DIPLOMATIC_VOCABULARY[language].push({word,arabic,pronunciation,level,category});
   existing.add(word.trim().toLocaleLowerCase());
  }
 }
}
})();