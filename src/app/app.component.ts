import {
  Component,
  OnDestroy,
  OnInit,
  HostListener,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  animateChild,
  group,
} from '@angular/animations';

import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        query(':enter', [style({ right: '-100%', opacity: 0 })], {
          optional: true,
        }),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('.3s ease-out', style({ right: '100%', opacity: 0 })),
          ]),
          query(':enter', [
            animate('.3s ease-out', style({ right: '0%', opacity: 1 })),
          ]),
        ]),
        query(':enter', animateChild()),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts, private messageService: MessageService, private primengConfig: PrimeNGConfig) {}
}
