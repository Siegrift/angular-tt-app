import { Component } from '@angular/core';

@Component({
  template: `
    <div i18n-title title="Hello {{name}}!" i18n>
      {{count}} is rendered as:
      <b *ngIf="exp">
        { count, plural,
            =0 {no <b title="none">emails</b>!}
            =1 {one <i>email</i>}
            other {{{count}} <span title="{{count}}">emails</span>}
        }
      </b>.
    </div>
  `
})
export class I18nComponent {
  name = 'xxx';
  count = 45;
  exp = true;
}
