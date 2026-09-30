import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const IMG={
 bed:'https://img.diytrade.com/smimg/339181/51253022-14700165-0/Anti_Mite_Warm_Luxury_Bedding_High_Standard_Bedroom_Quilt_Fluffy_Bedding_Set/2e6e.jpg',
 bed2:'https://static.wixstatic.com/media/90e987_35f9b87ff63e469794802dc32e3423c9~mv2.jpg',
 sofa:'https://qualityrugsandfurniture.com.au/cdn/shop/files/romance-velvet-modern-luxury-sofa-set-grey-goldquality-rugs-and-furniture-2849172_800x.jpg?v=1771286710',
 sofa2:'https://iprorwxhlkkqlr5q-static.micyjz.com/cloud/lkBpkKpqliSRjlopmjqjip/Opus-modular-sofa.jpg',
 fashion:'https://static.wixstatic.com/media/ac7977_174232c97c6e4f6c9af739d4646208b8~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ac7977_174232c97c6e4f6c9af739d4646208b8~mv2.jpg',
 red:'https://img.diytrade.com/smimg/339181/51253022-14700165-0/Anti_Mite_Warm_Luxury_Bedding_High_Standard_Bedroom_Quilt_Fluffy_Bedding_Set/2e6e.jpg'
};
const products=[
 {id:1,cat:'bed',title:{en:'Royal Satin Double Bed Set',ur:'رائل سیٹن ڈبل بیڈ سیٹ'},desc:{en:'Elegant bedding with a premium hotel-inspired finish.',ur:'خوبصورت اور اعلیٰ معیار کا بیڈ سیٹ، نفیس فنشنگ کے ساتھ۔'},img:IMG.bed,tag:{en:'Best Seller',ur:'بیسٹ سیلر'}},
 {id:2,cat:'bed',title:{en:'Pearl Luxury Bedding',ur:'پرل لگژری بیڈنگ'},desc:{en:'Soft neutral tones for a refined bedroom.',ur:'بیڈ روم کے لیے نرم اور نفیس رنگوں کی خوبصورت بیڈنگ۔'},img:IMG.bed2,tag:{en:'Premium',ur:'پریمیم'}},
 {id:3,cat:'bridal',title:{en:'Bridal Signature Set',ur:'برائیڈل سگنیچر سیٹ'},desc:{en:'A statement collection for your special day.',ur:'آپ کے خاص دن کے لیے خوبصورت اور شاہانہ کلیکشن۔'},img:IMG.red,tag:{en:'Bridal',ur:'برائیڈل'}},
 {id:4,cat:'sofa',title:{en:'Velvet Sofa Cover Collection',ur:'ویلویٹ صوفہ کور کلیکشن'},desc:{en:'Rich texture and an elevated living-room look.',ur:'خوبصورت ٹیکسچر اور آپ کے ڈرائنگ روم کے لیے پریمیم لک۔'},img:IMG.sofa,tag:{en:'New',ur:'نیا'}},
 {id:5,cat:'blanket',title:{en:'Winter Comfort Blanket',ur:'ونٹر کمفرٹ بلینکٹ'},desc:{en:'Warm, plush and designed for cozy evenings.',ur:'گرم، نرم اور سردیوں کی آرام دہ شاموں کے لیے بہترین۔'},img:IMG.bed2,tag:{en:'Winter',ur:'ونٹر'}},
 {id:6,cat:'fashion',title:{en:'Ladies Fashion Edit',ur:'لیڈیز فیشن کلیکشن'},desc:{en:'Curated everyday styles and seasonal pieces.',ur:'خوبصورت روزمرہ اور سیزنل فیشن کلیکشن۔'},img:IMG.fashion,tag:{en:'Fashion',ur:'فیشن'}},
 {id:7,cat:'garments',title:{en:'Premium Garments',ur:'پریمیم گارمنٹس'},desc:{en:'Quality fabrics with clean finishing.',ur:'اعلیٰ معیار کے کپڑے اور بہترین فنشنگ۔'},img:IMG.fashion,tag:{en:'Collection',ur:'کلیکشن'}},
 {id:8,cat:'shoes',title:{en:'Ladies Footwear Edit',ur:'لیڈیز شوز کلیکشن'},desc:{en:'A polished finishing touch for every look.',ur:'ہر لک کے لیے خوبصورت اور اسٹائلش فٹ ویئر۔'},img:IMG.fashion,tag:{en:'Style',ur:'اسٹائل'}}
];
const cats=[['all','All Collection','تمام کلیکشن'],['bed','Bed Sets','بیڈ سیٹس'],['bridal','Bridal','برائیڈل'],['sofa','Sofa Covers','صوفہ کور'],['blanket','Blankets','بلینکٹس'],['shoes','Shoes','شوز'],['fashion','Ladies Clothes','لیڈیز کپڑے'],['garments','Garments','گارمنٹس']];
const T={en:{eyebrow:'LIGHT HOUSE • KARACHI',hero:'Luxury for every corner of your home.',sub:'Premium home textiles, bridal sets and fashion essentials — curated with beautiful design, quality fabric and refined finishing.',shop:'Explore Collection',whatsapp:'Order on WhatsApp',delivery:'All Pakistan Delivery',retail:'Retail + Wholesale',advance:'Advance Payment',quality:'Premium Quality',why:'Made to feel beautiful. Made to last.',whyText:'From everyday comfort to bridal elegance, Royal Home Collection brings together refined textures, thoughtful designs and quality-focused finishing.',collection:'Featured Collection',view:'View Details',close:'Close',contact:'Contact & Order',location:'Light House, Karachi'},ur:{eyebrow:'لائٹ ہاؤس • کراچی',hero:'آپ کے گھر کے ہر کونے کے لیے شاہانہ خوبصورتی',sub:'اعلیٰ معیار کی ہوم ٹیکسٹائل، برائیڈل سیٹس اور فیشن کلیکشن — خوبصورت ڈیزائن، معیاری کپڑے اور بہترین فنشنگ کے ساتھ۔',shop:'کلیکشن دیکھیں',whatsapp:'واٹس ایپ پر آرڈر کریں',delivery:'پورے پاکستان میں ڈیلیوری',retail:'ریٹیل + ہول سیل',advance:'ایڈوانس پیمنٹ',quality:'اعلیٰ معیار',why:'خوبصورت بھی، پائیدار بھی۔',whyText:'روزمرہ آرام سے برائیڈل ایلیگنس تک، رائل ہوم کلیکشن نفیس ٹیکسچر، خوبصورت ڈیزائن اور معیاری فنشنگ پیش کرتا ہے۔',collection:'منتخب کلیکشن',view:'تفصیل دیکھیں',close:'بند کریں',contact:'رابطہ اور آرڈر',location:'لائٹ ہاؤس، کراچی'}};
const fonts={sans:"Inter, system-ui, sans-serif",serif:"Georgia, 'Times New Roman', serif",nastaliq:"'Noto Nastaliq Urdu', serif",clean:"'Noto Sans Arabic', 'Segoe UI', sans-serif"};
function App(){
 const [lang,setLang]=useState(()=>localStorage.getItem('rhc-lang')||'ur');
 const [font,setFont]=useState(()=>localStorage.getItem('rhc-font')||'clean');
 const [filter,setFilter]=useState('all'); const [selected,setSelected]=useState(null); const [menu,setMenu]=useState(false);
 const t=T[lang]; const rtl=lang==='ur';
 useEffect(()=>{localStorage.setItem('rhc-lang',lang);document.documentElement.dir=rtl?'rtl':'ltr';document.documentElement.lang=lang;},[lang,rtl]);
 useEffect(()=>localStorage.setItem('rhc-font',font),[font]);
 const shown=useMemo(()=>filter==='all'?products:products.filter(p=>p.cat===filter),[filter]);
 const wa=n=>'https://wa.me/'+n;
 return <div className="app" style={{'--site-font':fonts[font]}}>
  <div className="topbar"><span>✦ {t.delivery}</span><span>✦ {t.retail}</span><span>✦ {t.advance}</span></div>
  <header className="nav glass"><a className="brand" href="#top"><span className="crest">RH</span><span><b>ROYAL HOME</b><small>COLLECTION</small></span></a>
   <nav className={menu?'open':''}><a href="#collection" onClick={()=>setMenu(false)}>{lang==='ur'?'کلیکشن':'Collection'}</a><a href="#about" onClick={()=>setMenu(false)}>{lang==='ur'?'ہمارے بارے میں':'About'}</a><a href="#contact" onClick={()=>setMenu(false)}>{lang==='ur'?'رابطہ':'Contact'}</a></nav>
   <div className="controls"><select value={lang} onChange={e=>setLang(e.target.value)} aria-label="Language"><option value="ur">اردو</option><option value="en">English</option></select><select value={font} onChange={e=>setFont(e.target.value)} aria-label="Font"><option value="clean">Clean</option><option value="nastaliq">Nastaliq</option><option value="sans">Modern</option><option value="serif">Elegant</option></select><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></div>
  </header>
  <main id="top">
   <section className="hero"><div className="hero-copy"><div className="eyebrow">✦ {t.eyebrow}</div><h1>{t.hero}</h1><p>{t.sub}</p><div className="actions"><a className="btn gold" href="#collection">{t.shop}<span>↗</span></a><a className="btn ghost" href={wa('923218072237')} target="_blank" rel="noreferrer">{t.whatsapp}<span>◉</span></a></div><div className="trust"><span>✓ {t.quality}</span><span>✓ {t.delivery}</span><span>✓ {t.retail}</span></div></div>
    <div className="hero-art"><div className="orb"></div><div className="floating-card card-back"><img src={IMG.sofa2}/></div><div className="floating-card card-front"><img src={IMG.bed}/><div><b>{rtl?'رائل ہوم کلیکشن':'Royal Home Collection'}</b><small>{rtl?'اعلیٰ معیار • بہترین ڈیزائن':'Premium quality • refined design'}</small></div></div><div className="seal">RH<br/><small>EST.</small><br/>2026</div></div></section>
   <section className="marquee"><span>ROYAL HOME COLLECTION</span><i>✦</i><span>PREMIUM QUALITY</span><i>✦</i><span>LIGHT HOUSE KARACHI</span><i>✦</i><span>ALL PAKISTAN DELIVERY</span></section>
   <section id="collection" className="section"><div className="section-head"><div><span className="eyebrow">{rtl?'منتخب کلیکشن':'CURATED EDIT'}</span><h2>{t.collection}</h2></div><p>{rtl?'اپنے گھر اور اسٹائل کے لیے اپنی پسند منتخب کریں۔':'Choose a category and discover the collection.'}</p></div>
    <div className="chips">{cats.map(c=><button className={filter===c[0]?'active':''} onClick={()=>setFilter(c[0])} key={c[0]}>{rtl?c[2]:c[1]}</button>)}</div>
    <div className="grid">{shown.map((p,i)=><article className="product glass" key={p.id} style={{'--delay':`${i*70}ms`}} onClick={()=>setSelected(p)}><div className="pic"><img src={p.img} alt={rtl?p.title.ur:p.title.en}/><span>{rtl?p.tag.ur:p.tag.en}</span><button className="quick">↗</button></div><div className="product-info"><small>{rtl?cats.find(c=>c[0]===p.cat)?.[2]:cats.find(c=>c[0]===p.cat)?.[1]}</small><h3>{rtl?p.title.ur:p.title.en}</h3><p>{rtl?p.desc.ur:p.desc.en}</p></div></article>)}</div>
   </section>
   <section id="about" className="story"><div className="story-image"><img src={IMG.sofa}/><div className="image-note">✦ {rtl?'بہترین فنشنگ':'REFINED FINISHING'}</div></div><div className="story-copy"><span className="eyebrow">{rtl?'رائل ہوم کا وعدہ':'THE ROYAL PROMISE'}</span><h2>{t.why}</h2><p>{t.whyText}</p><div className="stats"><div><b>01</b><span>{rtl?'اعلیٰ کپڑا':'Quality Fabric'}</span></div><div><b>02</b><span>{rtl?'خوبصورت ڈیزائن':'Beautiful Design'}</span></div><div><b>03</b><span>{rtl?'بہترین قیمت':'Fair Pricing'}</span></div></div></div></section>
   <section id="contact" className="contact glass"><div><span className="eyebrow">{t.contact}</span><h2>{rtl?'اپنا آرڈر ابھی بک کریں':'Book your order today.'}</h2><p>{t.location} · {t.delivery}</p></div><div className="phones"><a href={wa('923218072237')} target="_blank" rel="noreferrer">WhatsApp · 0321 8072237</a><a href={wa('923333165113')} target="_blank" rel="noreferrer">WhatsApp · 0333 3165113</a></div></section>
  </main>
  <footer><span>© 2026 Royal Home Collection</span><span>{t.location}</span></footer>
  {selected&&<div className="modal-bg" onClick={()=>setSelected(null)}><div className="modal glass" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}>×</button><img src={selected.img}/><div><span className="eyebrow">{rtl?selected.tag.ur:selected.tag.en}</span><h2>{rtl?selected.title.ur:selected.title.en}</h2><p>{rtl?selected.desc.ur:selected.desc.en}</p><a className="btn gold" href={wa('923218072237')} target="_blank" rel="noreferrer">{t.whatsapp} ↗</a></div></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
