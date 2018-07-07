import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-page-slider',
  templateUrl: './custom-page-slider.component.html',
  styleUrls: ['./custom-page-slider.component.scss']
})
export class CustomPageSliderComponent implements OnInit {
  bannerImg: any;
  constructor() { }

  ngOnInit() {
    this.homeBannerImg();
  }

  homeBannerImg() {
    this.bannerImg = [
      {
        'img': 'assets/image/home/banner-image/crd-2017.jpg'
      },
      {
        'img': 'assets/image/home/banner-image/girls-lead-girls.jpg'
      },
      {
        'img': 'assets/image/home/banner-image/iyd-2018.png'
      },
      {
        'img': 'assets/image/home/banner-image/summer-camp-2018.jpg'
      },
      {
        'img': 'assets/image/home/banner-image/youth-helpline.jpg'
      },
    ]
  }

}
