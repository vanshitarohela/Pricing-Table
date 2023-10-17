import { Component } from '@angular/core';

export interface cardTemplate {
  name: string;
  price: number;
  user: string;
  storage: string;
  projects: string;
  community: string;
  private: string;
  privateIcon: string;
  phone: string;
  phoneIcon: string;
  subdomain: string;
  subdomainIcon: string;
  monthly: string;
  monthlyIcon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pricing-table';

  cards = [
    {
      name: 'FREE',
      price: 0,
      user: 'Single User',
      storage: '5GB storage',
      projects: 'Unlimited Public Projects',
      community: 'Community Access',
      private: 'Unlimited Private Projects',
      privateIcon: 'fa-solid fa-xmark',
      phone: 'Dedicated Phone Support',
      phoneIcon: 'fa-solid fa-xmark',
      subdomain: 'Free Subdomain',
      subdomainIcon: 'fa-solid fa-xmark',
      monthly: 'Monthly Status Reports',
      monthlyIcon: 'fa-solid fa-xmark',
    },
    {
      name: 'PLUS',
      price: 9,
      user: '5 Users',
      storage: '50GB storage',
      projects: 'Unlimited Public Projects',
      community: 'Community Access',
      private: 'Unlimited Private Projects',
      privateIcon: 'fa-solid fa-check',
      phone: 'Dedicated Phone Support',
      phoneIcon: 'fa-solid fa-check',
      subdomain: 'Free Subdomain',
      subdomainIcon: 'fa-solid fa-check',
      monthly: 'Monthly Status Reports',
      monthlyIcon: 'fa-solid fa-xmark',
    },
    {
      name: 'PRO',
      price: 49,
      user: 'Unlimited Users',
      storage: '150GB storage',
      projects: 'Unlimited Public Projects',
      community: 'Community Access',
      private: 'Unlimited Private Projects',
      privateIcon: 'fa-solid fa-check',
      phone: 'Dedicated Phone Support',
      phoneIcon: 'fa-solid fa-check',
      subdomain: 'Unlimited Free Subdomains',
      subdomainIcon: 'fa-solid fa-check',
      monthly: 'Monthly Status Reports',
      monthlyIcon: 'fa-solid fa-check',
    },
  ];
}