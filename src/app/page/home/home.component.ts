import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  languageValue = true;
  newsEvent: any;
  ourProject: any;
  aboutUs: any;
  aboutUSPoints : any;
  constructor() {
  }

  ngOnInit() {
    this.getPagedata();
  }
  language(lang) {
    if (lang == 'english') {
      this.languageValue = true;
    }
    else {
      this.languageValue = false;
    }
  }
  getPagedata() {
    this.newsEvent = [
      {
        'tamil': 'இப்போது விண்ணப்பிக்கவும் - "இளம் சமூக மாற்ற மேக்கர் விருது 2018"',
        'english': 'Apply Now - "Young Social Change Maker Award 2018"'
      },
      {
        'tamil': '"சர்வதேச இளைஞர் தின கொண்டாட்டம் 2018" - இளைஞர்களுக்கான பாதுகாப்பான இடங்கள்',
        'english': '"International Youth Day Celebration 2018" - Safe spaces for youth'
      }
    ];
    this.ourProject = [
      {
        'image': '../../../assets/image/home/our-project/nkana.png',
        'image_alt': 'Nkana',
        'cardTitleEnglish': 'NKaNa',
        'cardTitleTamil': 'அக்கா ',
        'cardDescriptionEnglish': 'NKaNa (My Sister and Brother) aims to connect professionals with children in need and risk. This program secures the future and education of struggling children by connecting them with mentors.',
        'cardDescriptionTamil': 'NKaNa (என் சகோதரி மற்றும் சகோதரர்) தேவை மற்றும் அபாயத்தில் குழந்தைகளுடன் தொழில் நுட்பத்தை இணைக்க விரும்புகிறார். இந்த திட்டம், எதிர்கால மற்றும் கல்வி பயிற்றுவிக்கும் குழந்தைகளை வழிகாட்டிகளுடன் இணைப்பதன் மூலம் பாதுகாக்கிறது.'

      },
      {
        'image': '../../../assets/image/home/our-project/Layer-16.png',
        'image_alt': 'Yout Helpline',
        'cardTitleEnglish': 'Youth Helpline',
        'cardTitleTamil': 'இளைஞர் ஹெல்ப்லைன்',
        'cardDescriptionEnglish': 'Puducherry Youth Helpline is a confidential and anonymous connection that troubled or concerned youth and young adults in Pondicherry can call to share their problems, needs and priorities',
        'cardDescriptionTamil': 'புதுச்சேரி இளைஞர் ஹெல்ப்லைன் என்பது ஒரு இரகசிய மற்றும் அநாமதேய தொடர்பு ஆகும், இது இளைஞர்களையும் இளைஞர்களையும் பாண்டிச்சேரியில் இளைஞர்கள் மற்றும் இளைஞர்கள் சம்பந்தப்பட்ட பிரச்சினைகள்,'

      },
      {
        'image': '../../../assets/image/home/our-project/home-inagi.png',
        'image_alt': 'INAGI',
        'cardTitleEnglish': 'INAGI - A visual SWOT',
        'cardTitleTamil': 'INAGI - ஒரு காட்சி SWOT',
        'cardDescriptionEnglish': 'NAGI is an initiative to bring into light the problems faced by the youth and the people living in rural areas. The idea is to visually capture their problems and opportunities they have to overcome them and present it infront of them.',
        'cardDescriptionTamil': 'இளைஞர்கள் மற்றும் கிராமப்புறங்களில் வசிக்கும் மக்கள் எதிர்கொள்ளும் பிரச்சினைகளை வெளிச்சத்துக்கு கொண்டு வருவதற்கான ஒரு முன்முயற்சியாக NAGI உள்ளது. யோசனை பார்வை தங்கள் பிரச்சினைகளை மற்றும் அவர்கள் அவர்களை சமாளிக்க மற்றும் அவற்றை infront முன்வைக்க வேண்டும் வாய்ப்புகளை கைப்பற்ற உள்ளது.'

      },
    ];
    this.aboutUs =
      {
        'aboutUsDescEnglish': 'Trust for Youth and Child Leadership (TYCL) is a youth-led non-profit organization started and run by college students from Puducherry and Tamil Nadu. Its aim is to bring positive change in youth, children and their community through safe, inclusive, participative and innovative leadership models. TYCL creates safe and engaging spaces for young people and their allies to develop their whole selves (emotional, mental, spiritual, social, physical, etc.), focusing on four aspects of development',
        'aboutUsDescTamil': 'புதுச்சேரி மற்றும் தமிழ்நாட்டில் இருந்து கல்லூரி மாணவர்களின் இளைஞர் தலைமையிலான இளைஞர் தலைமையிலான இலாப நோக்கற்ற அமைப்பு இளைஞர் மற்றும் குழந்தைத் தலைமையின் அறக்கட்டளையாகும். இளைஞர்கள், குழந்தைகள் மற்றும் அவர்களது சமூகத்தில் பாதுகாப்பான, உள்ளடங்கிய, பங்குபெறும் மற்றும் புதுமையான தலைமை மாதிரிகள் மூலம் நேர்மறையான மாற்றத்தை கொண்டு வருவதே அதன் நோக்கம். இளைஞர்களுக்கும் அவர்களது நட்பு நாடுகளுடனான பாதுகாப்பான மற்றும் ஊக்குவிக்கும் இடைவெளிகளை உருவாக்குவதன் மூலம், நான்கு அம்சங்களில் கவனம் செலுத்துவதன் மூலம், தங்களது முழு உணர்வுகளையும் (உணர்ச்சி, மனநிலை, ஆன்மீகம், சமூகம்',
      }
      this.aboutUSPoints=[
        {
          'valueEnglish':'Addressing local and global community issues',
          'valueTamil':'உள்ளூர் மற்றும் உலகளாவிய சமூக பிரச்சினைகள் குறித்து',
        },
        {
          'valueEnglish':'Recognizing and cultivating personal and collective power',
          'valueTamil':'தனிப்பட்ட மற்றும் கூட்டு அதிகாரத்தை அங்கீகரித்து வளர்ப்பது',
        },
        {
          'valueEnglish':'Building relationship and mentorship without borders',
          'valueTamil':'எல்லைகளை இல்லாமல் உறவு மற்றும் அறிவுரையை கட்டி',
        },
        {
          'valueEnglish':'Accessing the tools necessary to transform their own lives in the community and in collaboration with others',
          'valueTamil':'சமூகத்தில் தங்கள் சொந்த வாழ்க்கையை மாற்றும் மற்றும் மற்றவர்களுடன் ஒத்துழைக்க தேவையான கருவிகள் அணுகும்',
        },
      ]

  }
}
