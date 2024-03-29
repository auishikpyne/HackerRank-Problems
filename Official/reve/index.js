
    var txt1 =  document.getElementById("txt1");
    var btn1 = document.getElementById('btn1');
    var out1 = document.getElementById('output1'); 


var NumToWords = { 
    '০': 'শুন্য',
    '১': 'এক',
    '২': 'দুই',
    '৩': 'তিন',
    '৪': 'চার',
    '৫': 'পাঁচ',
    '৬': 'ছয়',
    '৭': 'সাত',
    '৮': 'আট',
    '৯': 'নয়',
    '০১': 'এক',
    '০২': 'দুই',
    '০৩': 'তিন',
    '০৪': 'চার',
    '০৫': 'পাঁচ',
    '০৬': 'ছয়',
    '০৭': 'সাত',
    '০৮': 'আট',
    '০৯': 'নয়',
    '১০': 'দশ',
    '১১': 'এগারো',
    '১২': 'বারো',
    '১৩': 'তেরো',
    '১৪': 'চৌদ্দ',
    '১৫': 'পনেরো',
    '১৬': 'ষোল',
    '১৭': 'সতেরো',
    '১৮': 'আঠারো',
    '১৯': 'ঊনিশ',
    '২০': 'বিশ',
    '২১': 'একুশ',
    '২২': 'বাইশ',
    '২৩': 'তেইশ',
    '২৪': 'চব্বিশ',
    '২৫': 'পঁচিশ',
    '২৬': 'ছাব্বিশ',
    '২৭': 'সাতাশ',
    '২৮': 'আঠাশ',
    '২৯': 'ঊনত্রিশ',
    '৩০': 'ত্রিশ',
    '৩১': 'একত্রিশ',
    '৩২': 'বত্রিশ',
    '৩৩': 'তেত্রিশ', 
    '৩৪': 'চৌত্রিশ',
    '৩৫': 'পঁয়ত্রিশ',
    '৩৬': 'ছত্রিশ',
    '৩৭': 'সাইত্রিশ',
    '৩৮': 'আটত্রিশ',
    '৩৯': 'ঊনচল্লিশ',
    '৪০': 'চল্লিশ',
    '৪১': 'একচল্লিশ',
    '৪২': 'বিয়াল্লিশ',
    '৪৩': 'তেতাল্লিশ',
    '৪৪': 'চুয়াল্লিশ',
    '৪৫': 'পঁয়তাল্লিশ',
    '৪৬': 'ছেচল্লিশ',
    '৪৭': 'সাতচল্লিশ',
    '৪৮': 'আটচল্লিশ',
    '৪৯': 'ঊনপঞ্চাশ',
    '৫০': 'পঞ্চাশ',
    '৫১': 'একান্ন',
    '৫২': 'বায়ান্ন',
    '৫৩': 'তিপ্পান্ন',
    '৫৪': 'চুয়ান্ন',
    '৫৫': 'পঞ্চান্ন',
    '৫৬': 'ছাপ্পান্ন',
    '৫৭': 'সাতান্ন',
    '৫৮': 'আটান্ন',
    '৫৯': 'ঊনষাট',
    '৬০': 'ষাট',
    '৬১': 'একষট্টি',
    '৬২': 'বাষট্টি',
    '৬৩': 'তেষট্টি',
    '৬৪': 'চৌষট্টি',
    '৬৫': 'পঁয়ষট্টি',
    '৬৬': 'ছেষট্টি',
    '৬৭': 'সাতষট্টি',
    '৬৮': 'আটষট্টি',
    '৬৯': 'ঊনসত্তর',
    '৭০': 'সত্তর',
    '৭১': 'একাত্তর',
    '৭২': 'বাহাত্তর',
    '৭৩': 'তিয়াত্তর',
    '৭৪': 'চুয়াত্তর',
    '৭৫': 'পঁচাত্তর',
    '৭৬': 'ছিয়াত্তর',
    '৭৭': 'সাতাত্তর',
    '৭৮': 'আটাত্তর',
    '৭৯': 'ঊনআশি',
    '৮০': 'আশি',
    '৮১': 'একাশি',
    '৮২': 'বিরাশি',
    '৮৩': 'তিরাশি',
    '৮৪': 'চুরাশি',
    '৮৫': 'পঁচাশি',
    '৮৬': 'ছিয়াশি',
    '৮৭': 'সাতাশি',
    '৮৮': 'আটাশি',
    '৮৯': 'ঊননব্বই',
    '৯০': 'নব্বই',
    '৯১': 'একানব্বই',
    '৯২': 'বিরানব্বই',
    '৯৩': 'তিরানব্বই',
    '৯৪': 'চুরানব্বই',
    '৯৫': 'পঁচানব্বই',
    '৯৬': 'ছিয়ানব্বই',
    '৯৭': 'সাতানব্বই',
    '৯৮': 'আটানব্বই',
    '৯৯': 'নিরানব্বই',
    '১০০': 'একশো',
    '২০০': 'দুইশো',
    '৩০০': 'তিনশো',
    '৪০০': 'চারশো',
    '৫০০': 'পাঁচশো',
    '৬০০': 'ছয়শো',
    '৭০০': 'সাতশো',
    '৮০০': 'আটশো',
    '৯০০': 'নয়শো',
    '১০০০': 'এক হাজার'  
}


var OrdinalToWords = {
  '১ম' : 'প্রথম / পহেলা',
  '২য়' : 'দ্বিতীয়',
  '৩য়' : 'তৃতীয়', 
  '৪র্থ' : 'চতুর্থ',
  '৫ম' : 'পঞ্চম',
  '৬ষ্ঠ': 'ষষ্ঠ',
  '৭ম': 'সপ্তম',
  '৮ম': 'অষ্টম',
  '৯ম':'নবম',
  '১০ম':'দশম',
  '১১তম':'একাদশ',
  '১২তম':'দ্বাদশ',
  '১৩তম':'ত্রয়োদশ',
  '১৪তম':'চতুর্দশ',
  '১৫তম':'পঞ্চদশ',
  '১৬তম':'ষোড়শ',
  '১৭তম':'সপ্তদশ',
  '১৮তম':'অষ্টাদশ',
  '১৯তম':'ঊনবিংশ',
  '২০তম':'বিংশ',
  '২১তম':'একবিংশ',
  '২২তম':'দ্বাবিংশ',
  '২৩তম':'ত্রয়োবিংশ',
  '২৪তম':'চতুর্বিংশ',
  '২৫তম':'পঞ্চবিংশ',
  '২৬তম':'ষট্‌বিংশ',
  '২৭তম':'সপ্তবিংশ',
  '২৮তম':'অষ্টাবিংশ',
  '২৯তম':'ঊনত্রিংশ',
  '৩০তম':'ত্রিংশ',
  '৩১তম':'একত্রিংশ',
  '৩২তম':'দ্বাত্রিংশ',
  '৩৩তম':'ত্রয়োত্রিংশ',
  '৩৪তম':'চতুর্ত্রিংশ',
  '৩৫তম':'পঞ্চত্রিংশ',
  '৩৬তম':'ষট্‌ত্রিংশ',
  '৩৭তম':'সপ্তত্রিংশ',
  '৩৮তম':'অষ্টাত্রিংশ',
  '৩৯তম':'ঊনচত্বারিংশ',
  '৪০তম':'চত্বারিংশ',
  '৪১তম':'একচত্বারিংশ',
  '৪২তম':'দ্বিচত্বারিংশ',
  '৪৩তম':'ত্রয়শ্চত্বারিংশ',
  '৪৪তম':'চতুঃচত্বারিংশ',
  '৪৫তম':'পঞ্চচত্বারিংশ',
  '৪৬তম':'ষট্‌চত্বারিংশ',
  '৪৭তম':'সপ্তচত্বারিংশ',
  '৪৮তম':'অষ্টচত্বারিংশ',
  '৪৯তম':'ঊনপঞ্চাশৎ',
  '৫০তম':'পঞ্চাশৎ',
  '৫১তম':'একপঞ্চাশৎ',
  '৫২তম':'দ্বিপঞ্চাশৎ',
  '৫৩তম':'ত্রিপঞ্চাশৎ',
  '৫৪তম':'চতুঃপঞ্চাশৎ',
  '৫৫তম':'পঞ্চপঞ্চাশৎ',
  '৫৬তম':'ষট্‌পঞ্চাশৎ',
  '৫৭তম':'সপ্তপঞ্চাশৎ',
  '৫৮তম':'অষ্টপঞ্চাশৎ',
  '৫৯তম':'ঊনষষ্টি',
  '৬০তম':'ষষ্টি',
  '৬১তম':'একষষ্টি',
  '৬২তম':'দ্বিষ্টি',
  '৬৩তম':'ত্রিষষ্টি',
  '৬৪তম':'চতুঃষষ্টি',
  '৬৫তম':'পঞ্চষষ্টি',
  '৬৬তম':'ষট্‌ষষ্টি',
  '৬৭তম':'সপ্তষষ্টি',
  '৬৮তম':'অষ্টষষ্টি',
  '৬৯তম':'ঊনসপ্ততি',
  '৭০তম':'সপ্ততি',
  '৭১তম':'একসপ্ততি',
  '৭২তম':'দ্বিসপ্ততি',
  '৭৩তম':'ত্রিসপ্ততি',
  '৭৪তম':'চতুঃসপ্ততি',
  '৭৫তম':'পঞ্চসপ্ততি',
  '৭৬তম':'ষট্‌সপ্ততি',
  '৭৭তম':'সপ্তসপ্ততি',
  '৭৮তম':'অষ্টসপ্ততি',
  '৭৯তম':'ঊনাশীতি',
  '৮০তম':'অশীতি',
  '৮১তম':'একাশীতি',
  '৮২তম':'দ্ব্যশীতি',
  '৮৩তম':'ত্র্যশীতি',
  '৮৪তম':'চতুরশীতি',
  '৮৫তম':'পঞ্চাশীতি',
  '৮৬তম':'ষড়শীতি',
  '৮৭তম':'সপ্তাশীতি',
  '৮৮তম':'অষ্টাশীতি',
  '৮৯তম':'ঊননবতি',
  '৯০তম':'নবতি',
  '৯১তম':'একনবতি',
  '৯২তম':'দ্বিনবতি',
  '৯৩তম':'ত্রিনবতি',
  '৯৪তম':'চতুর্নবতি',
  '৯৫তম':'পঞ্চনবতি',
  '৯৬তম':'ষন্নবতি',
  '৯৭তম':'সপ্তনবতি',
  '৯৮তম':'অষ্টনবতি',
  '৯৯তম':'নবনবতি',
  '১০০তম': 'একশত'
}

var DateToWords = {
'১লা':'পহেলা',
'২রা':'দোসরা',
'৩রা':'তেসরা',
'৪ঠা':'চৌঠা',
'৫ই':'পাঁচই',
'৬ই':'ছয়ই',
'৭ই':'সাতই',
'৮ই':'আটই',
'৯ই':'নউই',
'১০ই':'দশই',
'১১ই':'এগারই',
'১২ই':'বারই',
'১৩ই':'তেরই',
'১৪ই':'চৌদ্দই',
'১৫ই':'পনেরই',
'১৬ই':'ষোলই',
'১৭ই':'সতেরই',
'১৮ই':'আঠারই',
'১৯শে':'উনিশই',
'২০শে':'বিশে',
'২১শে':'একুশে',
'২২শে':'বাইশে',
'২৩শে':'তেইশে',
'২৪শে':'চব্বিশে',
'২৫শে':'পঁচিশে',
'২৬শে':'ছাব্বিশে',
'২৭শে':'সাতাশে',
'২৮শে':'আটাশে',
'২৯শে':'ঊনত্রিশে',
'৩০শে':'ত্রিশে',
'৩১শে':'একত্রিশে'
}

var SpecialUnitsToNum = {
  '২' : 'এক জোড়া',
  '৪' : 'এক হালি',
  '১২' : 'এক ডজন',
  '২০' : 'কুড়ি',
  '২০' : 'গণ্ডা',
  '১/৪' : 'চৌথা/সিকি/পোয়া',
  '১/৩' : 'তেহাই',
  '১/২' : 'অর্ধ / আধা',
  '১.২৫' : 'সোয়া/সওয়া',
  '১.৫' : 'দেড়',
  '২.৫' : 'আড়াই' 
}

var AbbreToWords = {

  'UN' : 'ইউ এন-জাতিসংঘ',
  'ইঞ্জিঃ' : 'ইঞ্জিনিয়ার',
  'আইসিডিডিআরবি' : 'আইসিডিডিআরবি',
  'UNICEF' : 'ইউনিসেফ',
  'বাসস' : 'বাসস-বাংলাদেশ সংবাদ সংস্থা',
  'মোঃ' : 'মুহাম্মাদ',
  'মো.' : 'মুহাম্মাদ',
  'মো:' : 'মুহাম্মাদ',
  'মুঃ' : 'মুহাম্মাদ',
  'মু.' : 'মুহাম্মাদ',
  'মু:' : 'মুহাম্মাদ',
  'সাঃ' : 'সালাল্লাহু আলাইহি ওয়া সাল্লাম',
  'সা.' : 'সালাল্লাহু আলাইহি ওয়া সাল্লাম',
  'সা:' : 'সালাল্লাহু আলাইহি ওয়া সাল্লাম',
  'আঃ' : 'আব্দুল',
  'রাঃ' : 'রাদিয়াল্লাহু তায়ালা আনহু',
  'রাযিঃ' : 'রাদিয়াল্লাহু তায়ালা আনহু',
  'রা:' : 'রাদিয়াল্লাহু তায়ালা আনহু',
  'রহঃ' : 'রহমাতুল্লাহি আলাইহি',
  'রহ.' : 'রহমাতুল্লাহি আলাইহি',
  'ডঃ' : 'ডক্টর',
  'ড:' : 'ডক্টর',
  'ড.' : 'ডক্টর',
  'ডাঃ' : 'ডাক্তার',
  'ডা:' : 'ডাক্তার',
  'ডা.' : 'ডাক্তার',
  'ঢাবি' : 'ঢাকা বিশ্ববিদ্যালয়',
  'বাউবি' : 'বাংলাদেশ উন্মক্ত বিশ্ববিদ্যালয়',
  'রাবি' : 'রাজশাহী বিশ্ববিদ্যালয়',
  'অবঃ' : 'অবসরপ্রাপ্ত',
  'অব.' : 'অবসরপ্রাপ্ত',
  'পিং' : 'পিতা',
  'জং' : 'স্বামী',
  'নিং' : 'নিরক্ষর',
  'বং' : 'বকলম',
  'দং' : 'দখল'

}

var UnitsToWords = {

  'কিমি' : 'কিলোমিটার',
  'সেঃমিঃ' : 'সেন্টিমিটার',
  'লি' : 'লিটার',
  'ডেসি' : 'ডেসিমিটার',
  'সেঃ' : 'সেকেন্ড',
  'মিমি' : 'মিলিমিটার',
  'মি' : 'মিটার',
  'সেমি' : 'সেন্টিমিটার',
  'মিঃমিঃ' : 'মিলিমিটার',
  'ডেঃমিঃ' : 'ডেসিমিটার',
  'কিঃমিঃ' : 'কিলোমিটার',
  'কি.মি.' : 'কিলোমিটার',
  '৷৶' : 'সাত আনা',
  '৷৵' : 'ছয় আনা',
  '৷৴' : 'পাঁচ আনা',
  '৷' : 'চার আনা',
  '৶' : 'তিন আনা',
  '৵' : 'দুই আনা',
  '৴' : 'এক আনা',
  '৷৷' : 'আট আনা',
  '৷৷৴' : 'নয় আনা',
  '৷৷৵' : 'দশ আনা',
  '৳' : 'টাকা'
  
}


//console.log(DateToWords[0]);

  function word_conversion(z){

    if (z.length == 1){
      return NumToWords[z];
    }
    else if (z.length == 2){
      return NumToWords[z];
    }
    else if(z.length == 3){
      if(z[1] == '০' && z[2] == '০'){
        return (NumToWords[z[0]] + "শো");
      }else{
      return (NumToWords[z[0]] + "শো " + NumToWords[z.slice(1,)]);
      }
    }

    
    else if(z.length == 5){
      if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " হাজার");
      }
      else if(z[2] == '০' && z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " হাজার");
      }
      else if(z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " হাজার " + NumToWords[z[2]] + "শো");
      }
      else if(z[2] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " হাজার " + NumToWords[z.slice(3,)]);
      }
      else{
        return (NumToWords[z.slice(0,2)] + " হাজার " + NumToWords[z[2]] + "শো " + NumToWords[z.slice(3,)]);
      }
    }

    else if(z.length == 6){
      if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০' && z[5] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ");
      }
      else if(z[1] == '০' && z[2] == '০' && z[4] == '০' && z[5] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ" +  NumToWords[z[3]] + " শো " ) ;
      }
      else if(z[1] == '০' && z[2] == '০' && z[3] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ " +  NumToWords[z.slice(4,)]) ;
      }
      else if(z[1] == '০' && z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ " + (NumToWords[z.slice(1,3)])  + " হাজার " + NumToWords[z.slice(4,)]) ;
      }
      else if(z[1] == '০' && z[2] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ " + NumToWords[z[3]] + " শো " + NumToWords[z.slice(4,)]) ;
      }
      else if(z[2] == '০' && z[3] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ " + (NumToWords[z.slice(1,3)])  + " হাজার " + NumToWords[z.slice(4,)]) ;
      }
      else if(z[1] == '০' && z[2] == '০'){
        return ((NumToWords[z[0]])  + " লক্ষ " + NumToWords[z.slice(4,)]) ;
      }
      else{
      return (NumToWords[z[0]] + " লক্ষ " + (NumToWords[z.slice(1,3)])  + " হাজার " + NumToWords[z[3]] + "শো " + NumToWords[z.slice(4,)]); 
      }
    }

    else if(z.length == 7){

      if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০' && z[5] == '০' && z[6] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ");
      }
      else if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০' && z[5] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + NumToWords[z.slice(5,)]);
      }
      else if (z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০'){
        return (NumToWords[z.slice(0,2)] + " লক্ষ " + NumToWords[z.slice(5,)]); 
      }
      else if(z[1] == '০' && z[2] == '০' && z[3] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + NumToWords[z[4]] + "শো "  + NumToWords[z.slice(5,)]) ;
      }
      else if(z[2] == '০' && z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + NumToWords[z.slice(5,)]) ;      
      }
      else if(z[2] == '০' && z[4] == '০' && z[5] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + (NumToWords[z.slice(2,4)])  + " হাজার " + NumToWords[z.slice(5,)]) ;  
      }
      else if(z[2] == '০' && z[3] == '০' && z[5] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + NumToWords[z[4]] + "শো " + NumToWords[z.slice(5,)]) ;  
      }
      else if(z[2] == '০' && z[4] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + (NumToWords[z.slice(2,4)])  + " হাজার " + NumToWords[z.slice(5,)]) ;
      }
      else if(z[2] == '০' && z[3] == '০'){
        return ((NumToWords[z.slice(0,2)])  + " লক্ষ " + NumToWords[z[4]] + "শো " + NumToWords[z.slice(5,)]) ;
      }
      else if(z[4] == '০'){
        return (NumToWords[z.slice(0,2)] + " লক্ষ " + (NumToWords[z.slice(2,4)])  + " হাজার " + NumToWords[z.slice(5,)]); 
      }  

      else{
        return (NumToWords[z.slice(0,2)] + " লক্ষ " + (NumToWords[z.slice(2,4)])  + " হাজার " + NumToWords[z[4]] + "শো " + NumToWords[z.slice(5,)]); 
      }
    }


    else if(z.length == 8){

      if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০' && z[5] == '০' && z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি");
      }
      else if(z[2] == '০' && z[3] == '০' && z[4] == '০' && z[5] == '০' && z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " );
      }
      else if(z[3] == '০' && z[4] == '০' && z[5] == '০' && z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " );
      }
      else if(z[4] == '০' && z[5] == '০' && z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z.slice(3,5)] + " হাজার " );
      }
      else if(z[5] == '০' && z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z.slice(3,5)] + " হাজার " );
      }
      else if(z[6] == '০' && z[7] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z.slice(3,5)] + " হাজার " + NumToWords[z[5]] + " শো " );
      }
      else if(z[1] == '০' && z[2] == '০' && z[3] == '০' &&  z[4] == '০' && z[5] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(6,)]);
      }
      else if(z[1] == '০' && z[2] == '০' && z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z[5]] + " শো " + NumToWords[z.slice(6,)]);
      }
      else if(z[1] == '০' && z[2] == '০' && z[4] == '০' && z[5] == '০' && z[6] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(3,5)] + " হাজার " + NumToWords[z.slice(6,)]);
      }
      else if(z[1] == '০' && z[2] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(3,5)] + " হাজার " + NumToWords[z[5]] + " শো " + NumToWords[z.slice(6,)]);
      }
      else if(z[3] == '০' && z[4] == '০'){
        return ((NumToWords[z[0]])  + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z[5]] + " শো " + NumToWords[z.slice(6,)]);
      }
      else if(z[5] == '০'){
        return (NumToWords[z[0]] + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z.slice(3,5)] + " হাজার " + NumToWords[z.slice(6,)]);
      }
      
      else{
      return (NumToWords[z[0]] + " কোটি " + NumToWords[z.slice(1,3)] + " লক্ষ " + NumToWords[z.slice(3,5)] + " হাজার " + NumToWords[z[5]] + " শো " + NumToWords[z.slice(6,)]);
      }
    }
  }

  function Num2Words(){
    a = txt1.value;

    y = (a.match(/[০-৯]+/g));
    

    for (var i=0; i<y.length; i++){
      z = y[i];
      //console.log(z);
      a = a.replace(z, word_conversion(z));
      //console.log(typeof(y));
    /* if(y[i].length == 3){
        b = String(y[i]);
      console.log(b);
      } */     
    }
   //console.log(num[i]);   
  out1.innerHTML = a;      
  } 

  function Ord2Words(){
    a = txt1.value;

    y = (a.match(/([০-৯]+(ম|য়|র্থ|ষ্ঠ|তম))+/g));
    console.log(y);

    for (var i=0; i<y.length; i++){
      z = y[i]; 
      a = a.replace(z, OrdinalToWords[z]);
      //console.log(a);
    /* if(y[i].length == 3){
        b = String(y[i]);
      console.log(b);
      } */     
    }
   //console.log(a);   
  out1.innerHTML = a;      
  }

  function Date2Words(){
    a = txt1.value;
    
    y = a.match(/([০-৯]+(লা|রা|ঠা|ই|শে))+/g);
     //console.log(y); 

    for (var i=0; i<y.length; i++){
      z = y[i];
      a = a.replace(z, DateToWords[z]);
    }
    out1.innerHTML = a;
  }

  function SpecialUnit2Words(){
    a = txt1.value;

    y = a.match(/(২০|৪|২|১২|১\/২|১\/৩|১\/৪|১.৫|২.৫|১.২৫)+/g);

    for(var i=0; i<y.length; i++){
      z = y[i];
      a = a.replace(z, SpecialUnitsToNum[z]);
      //console.log(a);
    }
    out1.innerHTML = a;  

  }

  /*function Abbre2Words(){
    a = txt1.value;

    //a = a.split();
    //console.log(a);

    y = a.match(/(ইঞ্জিঃ|UNICEF|UN|আইসিডিডিআরবি|বাসস|মোঃ|মো.|মো:|মু.|মু:|সাঃ|সা.|সা:|আঃ|রাঃ|রাযিঃ|রা:|রহঃ|রহ\.|ডঃ|ড.|ড|ডা:|ডা.|ডাঃ|ঢাবি|বাউবি|অব.|জং|নিং|পিং|অবঃ|রাবি|রাযিঃ|সাঃ|মুঃ|বং|দং)/g);
    //y = a.split(" ");
    console.log(y);
    for(var i=0; i<y.length; i++){
      var z = y[i];
      //console.log(z);
      a = a.replace(z, AbbreToWords[z]);

      //console.log(a);
      }
      
      // console.log(z);

  out1.innerHTML = a; 

} */

function Abbre2Words(){
    a = "ইঞ্জিঃ মোঃ আবুল আইসিডিডিআরবি এবং UNICEF এ কাজ করেছেন। হযরত মু: সাঃ । ডঃ রহিম বাসস এ কাজ করেন। ঢাবি এবং বাউবি দুটি ইউনিভার্সিটি। অবঃ করিমের জমি দং করেছে নিং রাবিল। কিম জং উন নর্থ কোরিয়া থাকে।";
    y = a.split(" ");

    var x = [];
   // console.log(typeof(x));

    for (var i = 0; i<y.length; i++){
      var z = y[i];    
      //console.log(typeof(z)); 

      if(z in AbbreToWords){
        //console.log(z); 
        x.push(AbbreToWords[z]);
      }else{
        x.push(z);
      }
      console.log(x);

    }
    x = x.join(" ");
    console.log(x);

    out1.innerHTML = x; 
    //console.log(a);
}

function Units2Words(){
  a = "রহিম দশ কিমি পাচ সেঃমিঃ পথ হেটেছে দুই লি পানি আনতে। এতে খরচ হয়েছে বিশ ৳ ৷৴ থেকে ৷৷৵ । সেঃমিঃ থেকে মিমি ও ডেঃমিঃ তে প্রকাশ।";
  y = a.split(" ");
  var x = [];

  for(var i = 0; i<y.length; i++){
    z = y[i];

    if (z in UnitsToWords){
      x.push(UnitsToWords[z]);
    }else{
      x.push(z);
    }
    console.log(x);
  }

  x = x.join(" ");

  out1.innerHTML = x; 

  //console.log(typeof(x)); 

}


btn1.addEventListener('click', Ord2Words);
