import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('800ms ease', style({ transform: 'scale(0.3)', opacity: '0.3' }))
        ]),
        query(':enter', [
          animate('800ms ease', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'scale(0.3)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('800ms ease', style({ left: '100%', opacity: '0.3' }))
        ]),
        query(':enter', [
          animate('800ms ease', style({ transform: 'scale(1)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
