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
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('800ms ease', style({ transform: 'scale(0.8)', opacity: '0' }))
        ], {optional: true}),
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
        style({ transform: 'scale(0.8)', opacity: 0 })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('800ms ease', style({ left: '100%', opacity: '0' }))
        ]
        , {optional: true}),
        query(':enter', [
          animate('800ms ease', style({ transform: 'scale(1)', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
