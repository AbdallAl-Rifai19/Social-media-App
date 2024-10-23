// SIDEBAR
const menuItem = document.querySelectorAll('.minu-item');

// MESSAGE

const messageNotifaction = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#messages-search');

// Themes
const theme = document.querySelector('#Theme');
const themeModel = document.querySelector('.customize-them');

fontSize = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');









// remove active class from all menu item
const changeActiveItem  = ()=>{
  menuItem.forEach((item)=>{
    item.classList.remove('active');

  });
}
menuItem.forEach((item)=>{
  item.addEventListener('click' , ()=>{
    changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications'){
      document.querySelector('.notification-poup').style.display = 'none';
    }else{
      document.querySelector('.notification-poup').style.display = 'block';
      document.querySelector('#notifications .notifacation-count').style.display = 'none';

    }

  })
});

// ========================= MESSAGE =======================

// Search Chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();  
  console.log(val);
  
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    // Perform the necessary search logic here using 'name' and 'val'
    if(name.indexOf(val)!=-1){
      chat.style.display = 'flex';
    }else{
      chat.style.display = 'none';

    }
  });
}
messageSearch.addEventListener('keyup', searchMessage);

// heightlight messages card when messages menu item is clicked
messageNotifaction.addEventListener('click',()=>{
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotifaction.querySelector('.notifacation-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000);

});


// Themes Display Customize

// open model
const openThemeModal = () =>{
  themeModel.style.display  = 'grid';
}
//close model
const closeThemeModal = (e)=>{
  // 1. التحقق مما إذا كان العنصر الذي تم النقر عليه يحتوي على الكلاس 'customize-them'
  if(e.target.classList.contains('customize-them')){
    themeModel.style.display = 'none';
  }

}
// close model
themeModel.addEventListener('click',closeThemeModal);
theme.addEventListener('click', openThemeModal)


// ================== fonts ==========================
// remove active class from spans or font size selectors
const removeSizeSelector = ()=>{
  fontSize.forEach(size => {
    size.classList.remove('active');
    
  });
}

fontSize.forEach((size)=>{

  size.addEventListener('click', ()=>{
    removeSizeSelector();
    let fontSize ;
    size.classList.toggle('active')
    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left','5.4rem');
      root.style.setProperty('------sticky-top-right','5.4rem');
    }else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left','5.4rem');
      root.style.setProperty('------sticky-top-right','-7rem');
    }else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left','-2rem');
      root.style.setProperty('------sticky-top-right','-17rem');
    }else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left','-5rem');
      root.style.setProperty('------sticky-top-right','-25rem');
    }else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left','-12rem');
      root.style.setProperty('------sticky-top-right','-35rem');
    }
  // change fontSize for the Root html
  document.querySelector('html').style.fontSize = fontSize;
  });

});

// remove active class from colors 
const changeActiveColor = ()=>{
  colorPalette.forEach(colorPicker=>{
    colorPicker.classList.remove('active');
  })
}

// change Primary Colors 
colorPalette.forEach(color => {
  color.addEventListener('click' , ()=>{
    let primary ;
    // remove active class from colors 
    changeActiveColor();
    if(color.classList.contains('color-1')){
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2')){
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3')){
      primaryHue = 352;

    }else if(color.classList.contains('color-4')){
      primaryHue = 152;

    }else if(color.classList.contains('color-5')){
      primaryHue = 202;

    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue);


  });
  
});

// Thems background color
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changBg = ()=>{
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);
  root.style.setProperty('--dark-color-lightness',darkColorLightness);

}
//change background color
Bg1.addEventListener('click',()=>{
  // add active class
  Bg1.classList.add('active');
  // remove active class from other
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  // remove custimaze changes from loaclstorage
  window.location.reload();

})

Bg2.addEventListener('click',()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  Bg2.classList.add('active'); // إضافة الكلاس 'active' لـ Bg2
// إزالة الكلاس 'active' من العناصر الأخرى
Bg1.classList.remove('active');
Bg3.classList.remove('active'); // إذا كان لديك عناصر أخرى يجب إزالة الكلاس منها
changBg(); 


});




Bg3.addEventListener('click',()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  
Bg3.classList.add('active'); // إضافة الكلاس 'active' لـ Bg2
// إزالة الكلاس 'active' من العناصر الأخرى
Bg1.classList.remove('active');
Bg2.classList.remove('active'); // إذا كان لديك عناصر أخرى يجب إزالة الكلاس منها
changBg(); 


});
