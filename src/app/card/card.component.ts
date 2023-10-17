import { Component, Input } from '@angular/core';
import {cardTemplate} from "../app.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() item!: cardTemplate;
}
